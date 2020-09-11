import { Purchase } from './Purchase';
export class Invoice {

    id: number;
    invoice_date: string;
    purchase: Purchase[];
    subtotal: number;
    tax: number;
    total: number;
}