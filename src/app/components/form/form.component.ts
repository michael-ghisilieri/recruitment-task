import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../api.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData: Post;
  message: string;

  @Input() postLength: number;
  @Input() editLabel: string = 'Post';
  @Input() postId: number;

  @Output() submitPost: EventEmitter<Post> = new EventEmitter();
  @Output() editPost: EventEmitter<Post> = new EventEmitter();

  constructor() {
    
  }

  ngOnInit() {
    
  }

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    author: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });

  onSubmit() {
    console.log(this.form.value.author + ' just submitted a post');
    this.formData = {
      id: this.postId || this.postLength + 1,
      title: this.form.value.title,
      author: this.form.value.author
    };
    if (this.postId) {
      this.editPost.emit(this.formData);
    } else {
      this.submitPost.emit(this.formData);
    }
    this.form.reset();
  }
}
