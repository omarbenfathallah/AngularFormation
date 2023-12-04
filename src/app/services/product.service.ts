import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listProduct: Product[] = [{ id: 1, title: "prince", price: 20, quantity: 45, like: 45 },
  { id: 2, title: "king", price: 30, quantity: 0, like: 0 },
  { id: 3, title: "queen", price: 40, quantity: 34, like: 78 }
  ];

  constructor() { }
}
