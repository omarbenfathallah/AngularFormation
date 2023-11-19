import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { TestComponent } from './test/test.component';
import { Product } from './models/product';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { DetailsApartementComponent } from './details-apartement/details-apartement.component';


@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    TestComponent,
    HomeComponent,
    NotFoundComponent,
    DetailsProductComponent,
    DetailsApartementComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
