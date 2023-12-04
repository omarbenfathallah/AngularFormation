import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {
  id!: number;
  product!:Product
  constructor(private route: ActivatedRoute , private sP:ProductService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(){
   // this.product=this.sP.listProduct.filter(p=>p.id==this.id);
   this.product=this.sP.listProduct;
  }

}
