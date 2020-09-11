import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../dto/ShoppingCart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCart) { }

  ngOnInit(): void {
    
  }

}
