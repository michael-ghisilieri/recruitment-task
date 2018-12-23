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

  it('form invalid when all empty', () => {
    expect(component.form.valid).toBeFalsy();
  })

  it('empty title invalid', () => {
    let errors = {};
    let title = component.form.controls['title'];
    errors = title.errors || {};
    // required error being Truthy proves invalid error exist
    expect(errors['required']).toBeTruthy();
  })

  it('set title valid', () => {
    let title = component.form.controls['title'];
    title.setValue("Test Name");
    let errors = title.errors || {};
    // if title is included, no required error given anymore
    expect(errors['required']).toBeFalsy();
  })

  it('empty author invalid', () => {
    let errors = {};
    let author = component.form.controls['author'];
    errors = author.errors || {};
    // required error being Truthy proves invalid error exist
    expect(errors['required']).toBeTruthy();
  })

  it('set author valid', () => {
    let author = component.form.controls['author'];
    author.setValue("TestName");
    let errors = author.errors || {};
    // if author is included, no required error given anymore
    expect(errors['required']).toBeFalsy();
  })

  it('form valid when filled out', () => {
    let title = component.form.controls['title'];
    let author = component.form.controls['author'];
    title.setValue("Test Title");
    author.setValue("Test Name");
    expect(component.form.valid).toBeTruthy();
  })

  it('invalid title too long', () => {
    let title = component.form.controls['title'];
    title.setValue("This title is going to be really really long, too long for this unit test to pass...");
    let errors = title.errors || {};
    // if title is too long, maxlength error will be found
    expect(errors['maxlength']).toBeTruthy();
  })

  it('invalid author too long', () => {
    let author = component.form.controls['author'];
    author.setValue("This name would be too long to fit into the author field.");
    let errors = author.errors || {};
    // if title is too long, maxlength error will be found
    expect(errors['maxlength']).toBeTruthy();
  })
});
