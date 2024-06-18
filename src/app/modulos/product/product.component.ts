import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { ToastController } from '@ionic/angular';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {


  @ViewChild('modal') modal;

  producto : any;
  precios: any; 
  datosProducto : any;
  datosPrecio : any;
  totalaPagar : any = 0; 

  constructor(
    public router : Router,
    private httpClient: HttpClient,
    private apiService : ProductService,
    private toastController: ToastController, 
  ) {  
  }

  ngOnInit() {  
    this.onLoadPrecios();
    this.onViewProduct();
  }

  onViewProduct(){
    this.httpClient.get("assets/frutas.json").subscribe((resp :any) =>{
      let idProductoUrl = this.router.url.split("/");   
      this.producto = resp.data.find(x => x.id === +idProductoUrl[idProductoUrl.length-1]) 
      this.datosProducto = this.producto 
    })
  }

  onLoadPrecios(){
    this.httpClient.get("assets/preciosVenta.json").subscribe((resp:any) => {
      this.precios = resp.data
    }) 
  }
 

  onSelectCantidad(event){
    this.datosPrecio = event;
    this.totalaPagar =  this.datosProducto.precio * event.precio
  }

  addToCart(){
    if(!this.totalaPagar){
      this.presentToast('middle'); 
      return;
    }

    this.modal.present();
    const newPedido = {
      idProducto : this.datosProducto.id,
      nameProdcuto : this.datosProducto.nombre,
      precioProdcuto : this.datosProducto.precio,
      imgProdcuto : this.datosProducto.img,
      idPrecio :  this.datosPrecio.id,
      nombrePrecio :  this.datosPrecio.descripcion,
      totalPagar : this.totalaPagar
    }
    this.apiService.addPedido(newPedido); 
  }
 
  onBack(){
    this.router.navigate(['modulos/list-product']);
    this.modal.dismiss()
  }
  
  onGoBuy(){
    if(!this.totalaPagar){
      this.presentToast('middle');
      return;
    }
    this.router.navigate(['modulos/orders']);
    this.modal.dismiss()
  }
  

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'No has seleccionado una cantidad para poder pagar.!' + '<br>' + 'Selecciona un cantidad para continuar con el pago del producto.',
      duration: 2000,
      position: position
    });

    await toast.present();
  }

}
