import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit { 
 
  list : any;

  slideOpts = {  
    autoplay:true,
    loop : true,
    centerSlides : true,
    pager:true,
    paginationType: 'arrows',
    slidesPerView: 1,
    spaceBetween: -150,
    zoom : true
  };

 
  constructor(
    private httpClient: HttpClient,
    public router : Router
  ) { }

  ngOnInit() {
    this.onListProduct();
  }
 
  onviewProduct(id){
    this.router.navigate(['modulos/product', id])
  }

  onListProduct(){
    this.httpClient.get("assets/frutas.json").subscribe((resp :any) =>{
      this.list = resp.data;     
    })
  }

}
