import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {    
        
        if(this.authService.isLogin && this.authService.role == 'ADMIN'){
            return true;
        }
        this.authService.activeUrl = state.url;

        this.router.navigate(['/sign-in'])
    }
}