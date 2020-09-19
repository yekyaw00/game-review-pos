import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../dto/ShoppingCart';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { searchChange } from '../../common/common-util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCart, public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  logout(){
    this.authService.logOut();
    this.router.navigate(['/home'])
  }

  search(value){
    searchChange.next(value)
  }

}
