import { HttpClient } from '@angular/common/http';
import { Invoice } from '../../dto/Invoice';
import { Injectable } from "@angular/core";
import { BaseService } from '../../common/base.service';
import { INVOICE_API } from '../../common/base-api';

@Injectable({
    providedIn: 'root'
})
export class InvoiceService extends BaseService<Invoice>{
        
    protected url(): string {
        return INVOICE_API;
    }
     
}