import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/forms/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { ReviewFormComponent } from './views/forms/game-review-form/review-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './views/forms/pagination/pagination.component';
import { ReviewDetailComponent } from './views/forms/game-review-detail/review-detail.component';
import { GraphicCardFormComponent } from './views/forms/graphic-card-form/graphic-card-form.component';
import { GraphicCardListComponent } from './views/forms/graphic-card-list/graphic-card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphicCardDetailComponent } from './views/forms/graphic-card-detail/graphic-card-detail.component';
import { PurchaseComponent } from './views/forms/cart/cart.component';
import { InvoiceComponent } from './views/forms/invoice/invoice.component';
import { InvoiceListComponent } from './views/forms/invoice-list/invoice-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ReviewFormComponent,
    PaginationComponent,
    ReviewDetailComponent,
    GraphicCardFormComponent,
    GraphicCardListComponent,
    GraphicCardDetailComponent,
    PurchaseComponent,
    InvoiceComponent,
    InvoiceListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
