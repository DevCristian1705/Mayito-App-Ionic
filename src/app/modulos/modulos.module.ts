import { NgModule } from '@angular/core'; 
import { ModulosPageRoutingModule } from './modulos-routing.module';
import { HomeComponent } from './home/home.component'; 
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling'; 
import { ViewBuyComponent } from './view-buy/view-buy.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ListProductComponent, 
    OrdersComponent,
    ViewBuyComponent
  ],
  imports: [  
    CommonModule, 
    HttpClientModule,
    ModulosPageRoutingModule,
    IonicModule,
    ScrollingModule, 
  ],
  exports: [HomeComponent]
})
export class ModulosPageModule {}
