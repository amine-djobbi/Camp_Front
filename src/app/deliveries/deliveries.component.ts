import { LivreurService } from './../services/livreur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
  export class DeliveriesComponent implements OnInit {
    deliveries: any[] = []; // Replace 'any' with the appropriate type for your data
  authUser: any;
  
    constructor(private LivreurService: LivreurService) {}
  
    ngOnInit(): void {
      const authUserJson = sessionStorage.getItem('user');
      this.authUser = authUserJson ? JSON.parse(authUserJson) : null;
      this.fetchData();
    }
  
    fetchData(): void {
      this.LivreurService.getAssignedDeliveries(this.authUser.id).subscribe(
        (data: any[]) => {
          this.deliveries = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
    StateDelivered(assignmentId: number): void {
      this.LivreurService.StateDelivered(assignmentId).subscribe(
        (response) => {
          console.log('Reservation delivered successfully.');
          this.fetchData(); // Optionally, you can refresh the data after the change
        },
        (error) => {
          console.error('Failed to deliver reservation:', error);
        }
      );
    }
  
    StateCanceled(assignmentId: number): void {
      this.LivreurService.StateCanceled(assignmentId).subscribe(
        (response) => {
          console.log('Reservation cancelled successfully.');
          this.fetchData(); // Optionally, you can refresh the data after the change
        },
        (error) => {
          console.error('Failed to cancel reservation:', error);
        }
      );
    }
}
