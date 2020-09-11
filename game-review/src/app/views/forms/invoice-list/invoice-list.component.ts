import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../../dto/Invoice';
import { InvoiceService } from '../../service/invoice.service';
import { BaseService } from '../../../common/base.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.findAll().subscribe(invoices => this.invoices = invoices)
  }

}
