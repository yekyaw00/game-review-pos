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


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'review/game-review-form', component: ReviewFormComponent },
  { path: 'review/game-review-detail/:id', component: ReviewDetailComponent},
  { path: 'graphic-card-form', component: GraphicCardFormComponent},
  { path: 'graphic-card', component: GraphicCardListComponent},
  { path: 'graphic-card/detail/:id', component: GraphicCardDetailComponent},
  { path: 'cart', component: PurchaseComponent},
  { path: 'invoices/:id', component: InvoiceComponent},
  { path: 'invoices', component:InvoiceListComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
