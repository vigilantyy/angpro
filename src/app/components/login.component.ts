// Login component - form to sign in
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="form-container">
      <h2>Login</h2>

      <!-- Show error message if login fails -->
      <p *ngIf="errorMsg" class="error">{{ errorMsg }}</p>

      <!-- Login form -->
      <form (ngSubmit)="onLogin()" #loginForm="ngForm">
        <div>
          <label>Username:</label>
          <input type="text" [(ngModel)]="username" name="username" required>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" [(ngModel)]="password" name="password" required>
        </div>
        <button type="submit" [disabled]="!loginForm.form.valid">Login</button>
      </form>

      <p>Don't have an account? <a routerLink="/register">Register here</a></p>
    </div>
  `,
  styles: []
})
export class LoginComponent {

  username = '';
  password = '';
  errorMsg = '';

  constructor(private userService: UserService, private router: Router) { }

  onLogin() {
    const success = this.userService.login(this.username, this.password);
    if (success) {
      alert('Welcome back, ' + this.username + '!');
      this.router.navigate(['/profile']); // go to profile page
    } else {
      this.errorMsg = 'Invalid username or password.';
    }
  }
}
