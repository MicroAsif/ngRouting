import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  UserInfo : any; 
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserInfo().then(data => {
      console.log(data);
      this.UserInfo = data;
    })
  }



}
