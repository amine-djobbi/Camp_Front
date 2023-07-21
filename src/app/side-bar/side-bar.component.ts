import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  constructor(private router: Router) {}
  authUser: any; // Declare authUser as a class property
  userRole!: string;

  ngOnInit() {
    // Retrieve the userId from sessionStorage when the component is initialized
    const authUserJson = sessionStorage.getItem('user');
    this.authUser = authUserJson ? JSON.parse(authUserJson) : null;
    this.userRole = this.authUser.roles[0];

    console.log(this.authUser.roles[0])
  }

  
  logout() {
    // Clear the session storage
    sessionStorage.clear();

    // Redirect to the login page
    this.router.navigate(['/login']);
  }


}
