import { Component, OnInit, Input } from '@angular/core';

import { Comment } from '../../api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comments: Comment[];

  constructor() { }

  ngOnInit() {
  }

}
