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
import { ReviewDetailComponent } from './views/forms/game-review-detail/review-detail.component';
import { GraphicCardFormComponent } from './views/forms/graphic-card-form/graphic-card-form.component';
import { GraphicCardListComponent } from './views/forms/graphic-card-list/graphic-card-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GraphicCardDetailComponent } from './views/forms/graphic-card-detail/graphic-card-detail.component';
import { PurchaseComponent } from './views/forms/cart/cart.component';
import { InvoiceComponent } from './views/forms/invoice/invoice.component';
import { InvoiceListComponent } from './views/forms/invoice-list/invoice-list.component';
import { SignupComponent } from './views/forms/signup/signup.component';
import { SigninComponent } from './views/forms/signin/signin.component';
import { CommonPipe } from './common/common.pipe';
import { AuthInterceptor } from './views/service/auth-interceptor.service';
import { AboutComponent } from './views/forms/about/about.component';
import { FaqComponent } from './views/forms/faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ReviewFormComponent,
    ReviewDetailComponent,
    GraphicCardFormComponent,
    GraphicCardListComponent,
    GraphicCardDetailComponent,
    PurchaseComponent,
    InvoiceComponent,
    InvoiceListComponent,
    SignupComponent,
    SigninComponent,
    CommonPipe,
    AboutComponent,
    FaqComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
