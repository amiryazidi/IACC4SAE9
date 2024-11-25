import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


    products = [
      {id:1 , title :' iphone 15 ', price : 1500 , quantity : 1 , like:0, image:"../../assets/images/iphone1.jpg"},
      {id:2 , title :' iphone 16 ', price : 2000 , quantity : 10 , like:0, image :"../../assets/images/iphone2.jpg"},
      {id:3 , title :' iphone 17 ', price : 2500 , quantity : 0 , like:0, image : "../../assets/images/iphone3.jpg"},
    ]

    increment(p:any){
      p.like++;

    }
}