import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { FooterComponent } from './footer/footer.component';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';
import { ApartementComponent } from './apartement/apartement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidencesComponentComponent,
    NavbarComponent,
    NotFoundComponent,
    ProductComponent,
    DetailProdComponent,
    FooterComponent,
    DetailResidenceComponent,
    ApartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
