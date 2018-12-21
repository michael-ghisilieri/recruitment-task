import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //currentPost: number;

  @Input() postings: Post[];
  @Input() currentPost: number;

  @Output() clickPost: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectPost(buttonID: number) {
    this.clickPost.emit(buttonID);
  }

}
