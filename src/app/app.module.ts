import { LoginGuardService } from './_guards/login.guard';
import { AuthGuardService } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NoPageComponent } from './no-page/no-page.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from './app-route';
import { IndexModule } from './index/index.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NoPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HomeModule, 
    IndexModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuardService, LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
