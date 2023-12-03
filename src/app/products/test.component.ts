import { Component } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title: string = "E-Commerce";
    price!:number;
  listProduct: Product[] = [{ id: 1, title: "prince", price: 20, quantity: 45, like: 45 },
  { id: 2, title: "king", price: 30, quantity: 0, like: 0 },
  { id: 3, title: "queen", price: 40, quantity: 34, like: 78 }
  ];

  searchPrice: number = 120;
  filteredProducts: Product[] = [];

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