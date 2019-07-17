import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule
  ],
  declarations: [LoginComponent, SignupComponent, ForgetComponent]
})
export class IndexModule { }
