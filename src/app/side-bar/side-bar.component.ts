import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(private router: Router) {}

  logout() {
    // Clear the session storage
    sessionStorage.clear();

    // Redirect to the login page
    this.router.navigate(['/login']);
  }


}
