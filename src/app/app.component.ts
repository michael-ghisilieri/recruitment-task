import { Component, OnInit } from '@angular/core';

import { ApiService, Post, Comment } from './api.service';
import { PostComponent } from './components/post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MICHAEL GHISILIERI - OWNED OUTCOMES';
  dataIsAvailable: boolean;
  posts: Post[];
  comments: Comment[];
  currentPost: number; // stores ID of current post selection
  newPost: Post;
  length: number;

  

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
  }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.dataIsAvailable = true;
      this.length = posts.length;
    });
  }

  setPost(postID: number) {
    if (this.currentPost == postID) { // if same post was clicked, close it
      this.currentPost = 0;
    } else { // else open up the current post
      this.currentPost = postID;
      this.comments = [];
      this.apiService.getComments(this.currentPost).subscribe(comments => {
        this.comments = comments;
      })
    }

    console.log('Post ' + this.currentPost + ' clicked');
  }

  submitPost(formData: Post) {
    this.apiService.createPost(formData).subscribe(res => {
      console.log(res);
    }, err => {
      console.log("Error occured");
    })
    this.loadPosts();
  }

  editPost(formData: Post) {
    this.apiService.updatePost(formData).subscribe(res => {
      console.log(res);
    }, err => {
      console.log("Error occured");
    })
    this.loadPosts();
  }
}
