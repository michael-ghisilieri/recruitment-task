import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  showEdit = false;
  editLabel = 'Edit';

  @Input() postings: Post[];
  @Input() comments: Comment[];
  @Input() currentPost: number;

  @Output() clickPost: EventEmitter<number> = new EventEmitter();
  @Output() enterEdit: EventEmitter<boolean> = new EventEmitter();
  @Output() editPost: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectPost(buttonID: number) {
    this.clickPost.emit(buttonID);
    this.showEdit = false;
  }

  selectEdit() {
    this.showEdit = !this.showEdit;
  }

  passEdit(formData: Post) {
    this.editPost.emit(formData);
  }

}
