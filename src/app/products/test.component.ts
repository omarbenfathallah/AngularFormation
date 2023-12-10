import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title: string = "E-Commerce";
    price!:number;
    listProduct!:Product[];

  searchPrice: number = 120;
  filteredProducts: Product[] = [];
  
  constructor(private sP:ProductService){}
  ngOnInit(){
    this.listProduct=this.sP.listProduct;
  }

  buyProduct(product: Product): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }


  // Function to add a like to a product
  addLike(p: Product): void {  
    p.like++;
  }

  filterProducts(): void {
    if (this.searchPrice !== null) {
      this.filteredProducts = this.listProduct.filter(product => product.price < this.searchPrice);
    } else {
      this.filteredProducts = [];
    }
  }

  isProductMatch(product: any): boolean {
    if (this.searchPrice === null) {
      return true;
    }
    return product.price <= this.searchPrice;
  }

}