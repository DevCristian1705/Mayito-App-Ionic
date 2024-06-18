import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-buy',
  templateUrl: './view-buy.component.html',
  styleUrls: ['./view-buy.component.scss'],
})
export class ViewBuyComponent implements OnInit {

  constructor(
    private router : Router,
    private apiService : ProductService
  ) { 

  }

  ngOnInit() {
    this.apiService.nullPedido();
    setTimeout(() => {
        this.router.navigate(['modulos/list-product'])
    }, 3500);
  }

}
