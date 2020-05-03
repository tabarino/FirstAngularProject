import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'material-input',
    templateUrl: './material-input.component.html',
    styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {
    emailFormControl = new FormControl('', [
        Validators.required
    ]);

    matcher = new MyErrorStateMatcher();

    constructor() {
    }

    ngOnInit(): void {
    }

}
