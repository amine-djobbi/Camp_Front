import { Component } from '@angular/core';
import { ForumWithUserDTO } from '../models/forumWithUserDto';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { ClaimServiceService } from '../services/claim-service.service';
import { ReclamationWithUserDto } from '../models/reclamationWithUserDto';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent {

  reclamationInfo!: ReclamationWithUserDto;
  authUser: any; // Declare authUser as a class property
  postId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService : CommentService,
    private reclamationService : ClaimServiceService
  ) {} 

  forum : ReclamationWithUserDto = {
    description: '',
    status: '',
    response: '',
    title: '',
    dateRec: '',// Consider changing to a Date type if needed
    user: {
      username: '',
      email: ''

    }
  }

  ngOnInit(): void {
    // Get the reclamation id from the route parameters
    const id = this.route.snapshot.params['id']; // Use index signature to access 'id'
    this.postId = id;
    // Retrieve the reclamation data based on the id
    this.reclamationService.getReclamationInfoById(id).subscribe(
      (reclamationInfo) => {
        // Assign the retrieved data to the 'reclamation' property
        this.reclamationInfo = reclamationInfo;
      },
      (error) => {
        console.error('Error fetching reclamation:', error);
      }
    );

    const authUserJson = sessionStorage.getItem('user');
    this.authUser = authUserJson ? JSON.parse(authUserJson) : null;

    }

}
