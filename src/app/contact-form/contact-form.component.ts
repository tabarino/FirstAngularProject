import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Mobile' },
    { id: 3, name: 'Phone Home' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm);
  }
}
