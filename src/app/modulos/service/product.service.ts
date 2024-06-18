import { Injectable } from "@angular/core";
import { AddCart } from "../interface/product.interface";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private cart = [];

    getPedidos(){
        return this.cart;
    }

    addPedido(event : AddCart){
        this.cart.push(event)
    }

    deletePedido(event){
        const idDelete = this.cart.find(x => x.idProducto === event)
        this.cart.splice(idDelete, 1)
    }
    nullPedido(){
        this.cart = [];
    }
}