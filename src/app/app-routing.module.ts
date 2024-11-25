import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';
import { ApartementComponent } from './apartement/apartement.component';

const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path : 'residence', component : ResidencesComponentComponent},
    {path : 'product', component : ProductComponent},
    {path : 'details/:id', component : DetailProdComponent},
    {path : 'detailR/:id', component : DetailResidenceComponent},
    {path : 'showAppart/:id', component : ApartementComponent},
    {path : '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
