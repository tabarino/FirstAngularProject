import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form2',
  templateUrl: './new-course-form2.component.html',
  styleUrls: ['./new-course-form2.component.css']
})
export class NewCourseForm2Component implements OnInit {
  newCourseForm2: FormGroup;

  constructor(fb: FormBuilder) {
    this.newCourseForm2 = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  ngOnInit(): void {
  }

  get topics() {
    return this.newCourseForm2.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
