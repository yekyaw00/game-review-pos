import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage: string;

  constructor(private authService: AuthService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  signIn(signInForm: NgForm){
    this.errorMessage = null;
    this.authService.login(signInForm.value).subscribe({
      error: error => this.errorMessage = 'Login Email or Password Incorrect. Please try again!',
      complete: () => {
        if (this.authService.activeUrl){
        this.router.navigate([this.authService.activeUrl]);
        this.authService.activeUrl = null;
      }
      else {
        this.router.navigate(['/home'])
      }
      },
    });

    signInForm.reset();
  }

}
