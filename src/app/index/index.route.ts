import { LoginGuardService } from './../_guards/login.guard';
import { ForgetComponent } from './forget/forget.component';
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index.component';

export const IndexRoutes: Route[] = [
    {
        path: '',
        component: IndexComponent,
        canActivate : [LoginGuardService],
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'forgot', component: ForgetComponent }
        ]
    }
];