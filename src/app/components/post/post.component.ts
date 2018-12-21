import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postings: Post[];

  constructor() { }

  ngOnInit() {
  }

}
