import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { TestComponent } from './products/test.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { DetailsApartementComponent } from './details-apartement/details-apartement.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorsComponentComponent } from './shared/errors-component/errors-component.component';
import { ListApartmentComponentComponent } from './ListApartmentComponent/ListApartmentComponent.component';
import { UpdateApartmentComponent } from './update-apartment/update-apartment.component';
import { AddProductComponent } from './add-product/add-product.component';




@NgModule({
  declarations: [			
    AppComponent,
    ResidencesComponent,
    TestComponent,
    HomeComponent,
    NotFoundComponent,
    DetailsProductComponent,
    DetailsApartementComponent,
    ReactiveFormComponent,
    NavbarComponent,
    ErrorsComponentComponent,
      ListApartmentComponentComponent,
      UpdateApartmentComponent,
      AddProductComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
 



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
