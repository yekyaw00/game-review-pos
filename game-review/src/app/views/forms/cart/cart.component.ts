import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../../dto/Purchase';
import { ShoppingCart } from '../../../dto/ShoppingCart';
import { InvoiceService } from '../../service/invoice.service';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/dto/Invoice';

@Component({
  selector: 'app-purchase',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class PurchaseComponent implements OnInit {

  purchase: Purchase[];

  constructor(public shoppingCart: ShoppingCart, private invoiceService: InvoiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.purchase = this.shoppingCart.purchase
  }

  checkOut(){
    let invoice = new Invoice();
    invoice.purchase = this.shoppingCart.purchase
    invoice.subtotal = this.shoppingCart.subTotal;
    invoice.tax  =this.shoppingCart.tax;
    invoice.total = this.shoppingCart.total;

    this.invoiceService.save(invoice).subscribe(
      inv => {
        this.shoppingCart.clear();
        this.router.navigate(['/invoices', inv.id])
      }
    );
  }

}
