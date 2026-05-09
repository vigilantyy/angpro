// User service - stores users in memory (no database needed for this demo)
import { Injectable } from '@angular/core';

// Define what a User looks like
export interface User {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root' // available everywhere without adding to providers
})
export class UserService {

  // In-memory storage for registered users
  private users: User[] = [];
  // Currently logged in user (null = not logged in)
  private loggedInUser: User | null = null;

  constructor() { }

  // Register a new user
  register(username: string, email: string, password: string): boolean {
    // Check if username already taken
    const exists = this.users.find(u => u.username === username);
    if (exists) {
      return false; // user already exists
    }
    // Add new user to our "database"
    this.users.push({ username, email, password });
    return true;
  }

  // Login with username and password
  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  // Logout - clear the logged in user
  logout(): void {
    this.loggedInUser = null;
  }

  // Check if someone is logged in
  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  // Get the currently logged in user
  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }
}
