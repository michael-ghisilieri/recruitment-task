import { Component, OnInit } from '@angular/core';

import { ApiService, Post } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Michael Ghisilieri - Owned Outcomes';
  dataIsAvailable: boolean;
  posts: Post[];
  currentPost: number; // stores ID of current post selection

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.dataIsAvailable = true;
    });
  }

  setPost(postID: number) {
    if (this.currentPost == postID) { // if same post was clicked, close it
      this.currentPost = 0;
    } else { // else open up the current post
      this.currentPost = postID;
    }
    console.log('Post ' + this.currentPost + ' clicked');
  }
}
