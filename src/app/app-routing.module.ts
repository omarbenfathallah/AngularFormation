import { ApplicationRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { DetailsApartementComponent } from './details-apartement/details-apartement.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  { path: 'product', component: TestComponent },
  { path: 'product/:id', component: DetailsProductComponent },
  { path: 'residence', component: ResidencesComponent },
  { path: 'apartement/:id', component: DetailsApartementComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'form', component: ReactiveFormComponent },
  { path: '**', component: NotFoundComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
