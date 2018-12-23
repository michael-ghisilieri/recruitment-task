import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

fdescribe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('postForm invalid when all empty', () => {
    expect(component.postForm.valid).toBeFalsy();
  })

  it('empty title invalid', () => {
    let errors = {};
    let title = component.postForm.controls['title'];
    errors = title.errors || {};
    // required error being Truthy proves invalid error exist
    expect(errors['required']).toBeTruthy();
  })

  it('set title valid', () => {
    let author = component.postForm.controls['author'];
    author.setValue("Test Post");
    let errors = author.errors || {};
    // if title is included, no required error given anymore
    expect(errors['required']).toBeFalsy();
  })

  it('empty author invalid', () => {
    let errors = {};
    let author = component.postForm.controls['author'];
    errors = author.errors || {};
    // required error being Truthy proves invalid error exist
    expect(errors['required']).toBeTruthy();
  })

  it('set author valid', () => {
    let author = component.postForm.controls['author'];
    author.setValue("Michael");
    let errors = author.errors || {};
    // if author is included, no required error given anymore
    expect(errors['required']).toBeFalsy();
  })

  it('postForm valid when filled out', () => {
    let author = component.postForm.controls['author'];
    let title = component.postForm.controls['title'];
    author.setValue("Michael");
    title.setValue("Test Post");
    expect(component.postForm.valid).toBeTruthy();
  })

  it('invalid title too long', () => {
    let title = component.postForm.controls['title'];
    title.setValue("This title is going to be really really long, too long for this unit test to pass...");
    let errors = title.errors || {};
    // if title is too long, maxlength error will be found
    expect(errors['maxlength']).toBeTruthy();
  })

  it('invalid author too long', () => {
    let author = component.postForm.controls['author'];
    author.setValue("This name would be too long to fit into the author field.");
    let errors = author.errors || {};
    // if title is too long, maxlength error will be found
    expect(errors['maxlength']).toBeTruthy();
  })
});
