import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {
  id!: number;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

  }
}
