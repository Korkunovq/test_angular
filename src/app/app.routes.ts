import { Routes } from '@angular/router';
import { UserResourceListComponent } from './components/user-resource-list/user-resource-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', component: UserResourceListComponent },
    { path: 'user/:id', component: UserDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
