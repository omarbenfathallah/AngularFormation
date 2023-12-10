import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-apartement',
  templateUrl: './details-apartement.component.html',
  styleUrls: ['./details-apartement.component.css']
})
export class DetailsApartementComponent {
  id!: number;
  appartNum!: number;
  floorNum!: number;
   surface!: number;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.appartNum= this.route.snapshot.params['appNum'];
    this.floorNum = this.route.snapshot.params['floorNum'];
    this.surface = this.route.snapshot.params['surface'];
    


  }
}
