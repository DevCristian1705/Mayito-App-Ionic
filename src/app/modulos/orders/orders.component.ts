import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  @ViewChild('modal') modal;

  list : any;
  montoPagar : number = 0;
  idDelete : number = 0; 
  constructor(
    private apiService : ProductService,
    public router : Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.onListProduct();
  }

  onListProduct(){
    this.list =  this.apiService.getPedidos(); 
    this.montoPagar = this.list.reduce((sum, value)=> (sum + value.totalPagar ?? 0 ), 0);
  }

  onModalDeletePedido(event){ 
    this.idDelete = event.idProducto;
    this.modal.present(event);
   
  }
  
  onDelete(){
    this.modal.dismiss()
    this.presentToast('middle');
    this.apiService.deletePedido(this.idDelete);
    this.onListProduct();
  } 

  onCerrarModal(){
    this.modal.dismiss();
  }

  BuyList(){
    this.router.navigate(['modulos/compra-exitosa']); 
  }

  onBack(){
    this.router.navigate(['modulos/list-product']); 
  }


  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'El pedido ha sido retirado de la lista.',
      duration: 2000,
      position: position
    });

    await toast.present();
  }




}
