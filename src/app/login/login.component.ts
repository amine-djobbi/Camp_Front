import { Component } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  email: string = ''; // Initialize the properties
  password: string = ''; // Initialize the properties
  loginError: boolean = false; // Add the error flag

  constructor(private authService: AuthService,private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Handle successful login response here
        sessionStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/centres']);
        
      },
      (error) => {
        // Handle login error here
        console.error('Login error:', error);
        this.loginError = true; // Set the error flag to true

      }
    );
  }

}
