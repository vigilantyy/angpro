// Register component - form to create a new account
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // needed for ngModel
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="form-container">
      <h2>Register</h2>

      <!-- Show error message if registration fails -->
      <p *ngIf="errorMsg" class="error">{{ errorMsg }}</p>

      <!-- Registration form -->
      <form (ngSubmit)="onRegister()" #registerForm="ngForm">
        <div>
          <label>Username:</label>
          <input type="text" [(ngModel)]="username" name="username" required>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" [(ngModel)]="email" name="email" required>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" [(ngModel)]="password" name="password" required>
        </div>
        <button type="submit" [disabled]="!registerForm.form.valid">Register</button>
      </form>

      <p>Already have an account? <a routerLink="/login">Login here</a></p>
    </div>
  `,
  styles: []
})
export class RegisterComponent {

  // Form fields
  username = '';
  email = '';
  password = '';
  errorMsg = '';

  constructor(private userService: UserService, private router: Router) { }

  // Called when the form is submitted
  onRegister() {
    // Try to register - returns true if successful
    const success = this.userService.register(this.username, this.email, this.password);
    if (success) {
      alert('Registration successful! Please login.');
      this.router.navigate(['/login']); // go to login page
    } else {
      this.errorMsg = 'Username already taken. Try a different one.';
    }
  }
}
