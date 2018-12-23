import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../api.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submitted: boolean;
  //postForm: FormGroup;
  formData: Post;
  editMode = false;

  @Input() postLength: number;

  @Output() submitPost: EventEmitter<Post> = new EventEmitter();
  @Output() editPost: EventEmitter<Post> = new EventEmitter();

  constructor() {
    //this.postForm = this.createFormGroup();
  }

  ngOnInit() {

  }

  /*
  createFormGroup() {
    return new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl()
    })
  }
  */
  postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    author: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });

  editForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    author: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });

  onSubmit() {
    console.log(this.postForm.value.author + ' just submitted a post');
    this.submitted = true;
    this.formData = {
      id: this.postLength + 1,
      title: this.postForm.value.title,
      author: this.postForm.value.author
    };
    this.submitPost.emit(this.formData);
    this.postForm.reset();
  }

  onEdit() {
    console.log(this.editForm.value.author + ' just edited a post');
    this.submitted = true;
    this.formData = {
      id: this.editForm.value.id,
      title: this.editForm.value.title,
      author: this.editForm.value.author
    };
    this.editPost.emit(this.formData);
    this.editForm.reset();
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }
}
