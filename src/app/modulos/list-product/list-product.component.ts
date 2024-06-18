import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {

  list : any;
  countPedidos : any = 0;
  constructor(
    private router : Router, 
    private httpClient: HttpClient, 
    private apiService : ProductService
  ) { 
    
  }

  ngOnInit() {
    this.onListProduct();
    this.onCountPedido();
  }

  onListProduct(){
    this.httpClient.get("assets/frutas.json").subscribe((resp :any) =>{
      this.list = resp.data;     
    })
  }

  onCountPedido(){
    this.countPedidos = this.apiService.getPedidos().length;
  }

  onviewProduct(id){
    console.log(id);
    this.router.navigate(['modulos/product', id]);
  }
 
  onReturnHome(){
    this.router.navigate(['modulos/home'])
  }
  
  onviewShoppingCart(){
    this.router.navigate(['modulos/orders'])
  }
  
}
