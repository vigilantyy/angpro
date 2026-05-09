// Application routes - maps URLs to components
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register.component';
import { LoginComponent } from './components/login.component';
import { ProfileComponent } from './components/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // default page
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/login' } // if page not found, go to login
];
