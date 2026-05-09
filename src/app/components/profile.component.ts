// Profile component - shows logged in user's info
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="form-container">
      <h2>My Profile</h2>

      <!-- If user is logged in, show their info -->
      <div *ngIf="user">
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Password:</strong> {{ user.password }}</p>
        <button (click)="onLogout()">Logout</button>
      </div>

      <!-- If not logged in, ask them to login -->
      <div *ngIf="!user">
        <p>You are not logged in.</p>
        <a routerLink="/login">Go to Login</a>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileComponent {

  // Get the logged in user from the service
  get user() {
    return this.userService.getLoggedInUser();
  }

  constructor(private userService: UserService, private router: Router) { }

  onLogout() {
    this.userService.logout();
    alert('You have been logged out.');
    this.router.navigate(['/login']);
  }
}
