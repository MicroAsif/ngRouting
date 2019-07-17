import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule
  ],
  declarations: [DashboardComponent, ProductComponent, SettingsComponent]
})
export class HomeModule { }
