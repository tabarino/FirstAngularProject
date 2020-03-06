import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'new-course-form2',
  templateUrl: './new-course-form2.component.html',
  styleUrls: ['./new-course-form2.component.css']
})
export class NewCourseForm2Component implements OnInit {
  newCourseForm2 = new FormGroup({
    topics: new FormArray([])
  });

  constructor() { }

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
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
