// Navbar component - navigation bar at the top of every page
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <a routerLink="/" class="brand">User Profile</a>
      <div class="nav-links">
        <!-- Show these links when NOT logged in -->
        <a routerLink="/login" *ngIf="!userService.isLoggedIn()">Login</a>
        <a routerLink="/register" *ngIf="!userService.isLoggedIn()">Register</a>
        
        <!-- Show these links when logged in -->
        <a routerLink="/profile" *ngIf="userService.isLoggedIn()">Profile</a>
        <a routerLink="/login" *ngIf="userService.isLoggedIn()" (click)="userService.logout()">Logout</a>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  constructor(public userService: UserService) { }
}
