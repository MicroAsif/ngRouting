import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { AuthGuardService } from '../_guards/auth.guard';
export const HomeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        canActivate : [AuthGuardService],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'products', component: ProductComponent }
        ]
    }
];