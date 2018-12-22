import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../api.service';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submitted: boolean;
  postForm: FormGroup;
  formData: Post;

  @Input() postLength: number;

  @Output() submitPost: EventEmitter<Post> = new EventEmitter();

  constructor() {
    this.postForm = this.createFormGroup();
  }

  ngOnInit() {

  }

  createFormGroup() {
    return new FormGroup({
      title: new FormControl(),
      author: new FormControl()
    })
  }

  onSubmit() {
   console.log(this.postForm.value.author + ' just submitted a post');
   this.submitted = true;
   this.formData = {
     id: this.postLength + 1,
     title: this.postForm.value.title,
     author: this.postForm.value.author
   };
   this.submitPost.emit(this.formData);
  }

}
