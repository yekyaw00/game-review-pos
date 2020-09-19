import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';
import { Account } from '../../../dto/Account';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  account: Account;
  roles = ['ADMIN', 'CUSTOMER']

  constructor(private router:Router, private accountService: AccountService) { }

  ngOnInit(): void {
    this.account = history.state.account;
  }

  signup(signUpForm: NgForm){
    if(this.account) signUpForm.value.login = this.account.email
     this.accountService.save(signUpForm.value).subscribe(() => {
       this.account = null;
       signUpForm.reset();
       this.router.navigate(['/home'])
     });
  }

}
