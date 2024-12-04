import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  constructor(private ps:ProductService) { }
  products:any= []

  ngOnInit(){
    this.products=this.ps.products
  }

    increment(p:any){
      p.like++;

    }
}
