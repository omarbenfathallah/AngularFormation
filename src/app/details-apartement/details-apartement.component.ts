import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-apartement',
  templateUrl: './details-apartement.component.html',
  styleUrls: ['./details-apartement.component.css']
})
export class DetailsApartementComponent {
  id!: number;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

  }
}
