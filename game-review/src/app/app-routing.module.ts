import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewFormComponent } from './views/forms/game-review-form/review-form.component';
import { HomeComponent } from './views/forms/home/home.component';
import { ReviewDetailComponent } from './views/forms/game-review-detail/review-detail.component';
import { GraphicCardFormComponent } from './views/forms/graphic-card-form/graphic-card-form.component';
import { GraphicCardListComponent } from './views/forms/graphic-card-list/graphic-card-list.component';
import { GraphicCardDetailComponent } from './views/forms/graphic-card-detail/graphic-card-detail.component';
import { PurchaseComponent } from './views/forms/cart/cart.component';
import { InvoiceComponent } from './views/forms/invoice/invoice.component';
import { InvoiceListComponent } from './views/forms/invoice-list/invoice-list.component';
import { SignupComponent } from './views/forms/signup/signup.component';
import { SigninComponent } from './views/forms/signin/signin.component';
import { AuthGuard } from './views/service/auth-guard.service';
import { AboutComponent } from './views/forms/about/about.component';
import { FaqComponent } from './views/forms/faq/faq.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'review/game-review-form', component: ReviewFormComponent, canActivate:[AuthGuard]},
  { path: 'review/game-review-detail/:id', component: ReviewDetailComponent},
  { path: 'graphic-card-form', component: GraphicCardFormComponent, canActivate:[AuthGuard]},
  { path: 'graphic-card', component: GraphicCardListComponent},
  { path: 'graphic-card/detail/:id', component: GraphicCardDetailComponent},
  { path: 'cart', component: PurchaseComponent},
  { path: 'invoices/:id', component: InvoiceComponent},
  { path: 'invoices', component:InvoiceListComponent, canActivate:[AuthGuard]},
  { path: 'sign-up', component:SignupComponent},
  { path: 'sign-in', component:SigninComponent},
  { path: 'about', component: AboutComponent},
  { path: 'faq', component: FaqComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
