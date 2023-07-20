import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { ForumWithUserDTO } from '../models/forumWithUserDto';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
  authUser: any; // Declare authUser as a class property

  postId!: number;
  forum : ForumWithUserDTO = {
    question: '',
    content: '',
    title: '',
    creationDate: '',// Consider changing to a Date type if needed
    user: {
      username: '',
      email: ''

    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {} 
  
  ngOnInit(): void {
    // Get the reclamation id from the route parameters
    const id = this.route.snapshot.params['id']; // Use index signature to access 'id'

    // Retrieve the reclamation data based on the id
    this.postService.getForumInfoById(id).subscribe(
      (forum) => {
        // Assign the retrieved data to the 'reclamation' property
        this.forum = forum;
      },
      (error) => {
        console.error('Error fetching reclamation:', error);
      }
    );

    const authUserJson = sessionStorage.getItem('user');
    this.authUser = authUserJson ? JSON.parse(authUserJson) : null;

  }

  onDeleteForm(id?: number) {
    if (id) {
      this.postService.deleteForum(id).subscribe(
        () => {
          this.router.navigate(['/postlist']);
        },
        (error) => {
          console.error('Error deleting reclamation:', error);
        }
      );
    }
  }



}
