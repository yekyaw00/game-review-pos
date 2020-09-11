import { Injectable } from '@angular/core'
import { GraphicCard } from './GraphicCard';
import { Purchase } from './Purchase';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCart{
    
    private _purchase: Purchase[] = [];

    get purchase(){
        return this._purchase;
    }

    addToCart(graphicCard: GraphicCard){
        let purchase = this._purchase.find(purchase => purchase.graphicCard.id == graphicCard.id);
        if(purchase)
            purchase.quantity += 1;
        else{
            let p = new Purchase();
            p.graphicCard = graphicCard;
            this._purchase.push(p)
        }
           
    }

    subFromCart(graphicCard: GraphicCard){
       let purchase = this._purchase.find(p => p.graphicCard.id == graphicCard.id);
       if(purchase){
            purchase.quantity -= 1;
            
            if(!purchase.quantity){
                this.removePurchase(purchase);
            }
                
       }
    }

    removePurchase(purchase: Purchase){
        let index = this._purchase.findIndex(p => p.graphicCard.id == purchase.graphicCard.id);
        this._purchase.splice(index, 1);
    }


    get subTotal(){
        return this._purchase.reduce((acc, p) => acc + (p.quantity * p.graphicCard.price), 0)
    }

    get tax(){
        return Math.floor(this.subTotal * 0.07);
    }

    get total(){
        return this.subTotal + this.tax;
    }

    get cartSize(){
        return this._purchase.length
    }

    clear() {
        this._purchase = []
    }
}