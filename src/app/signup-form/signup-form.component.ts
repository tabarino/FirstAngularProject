import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signUpForm = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ], UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  get username() {
    return this.signUpForm.get('account.username');
  }

  login() {
    this.signUpForm.setErrors({
      invalidLogin: true
    });
  }
}
