import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  postData = {
    'email': '',
    'password': ''
  }
  public errorText: string;

  constructor(private authService: AuthService, public router: Router) {
    this.errorText = '';
  }

  ngOnInit() {
  }

  loginAction() {
    console.log(this.postData);
    if (this.postData.email && this.postData.password) {
      
      if (this.authService.login(this.postData)) {
        this.router.navigate(['']);
      }
    } else {
      this.errorText = 'Please give valid data'
    }
  }

}
