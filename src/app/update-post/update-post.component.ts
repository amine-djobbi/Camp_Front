import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from '../models/forum';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}  
  forum: Forum = {
    title: '',
    question: '', // If needed, provide a default value for status
    content: '' // If needed, provide a default value for dateRec
  };


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
  }


}
