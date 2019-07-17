import { Route, Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
     if (this.authService.logout())
      this.router.navigate(['/login']);
  }

}
