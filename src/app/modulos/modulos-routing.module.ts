import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component'; 
import { ViewBuyComponent } from './view-buy/view-buy.component';
 

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,   
  },
  {
    path: 'list-product',
    component: ListProductComponent,   
  },
  {
    path: 'product/:id',
    component: ProductComponent,   
  }, 
  {
    path: 'orders',
    component: OrdersComponent,   
  },
  {
    path: 'compra-exitosa',
    component: ViewBuyComponent,   
  },
  {
    path: '', 
    redirectTo: 'home',  
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulosPageRoutingModule {}
