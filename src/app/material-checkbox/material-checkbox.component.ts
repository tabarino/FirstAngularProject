import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'material-checkbox',
    templateUrl: './material-checkbox.component.html',
    styleUrls: ['./material-checkbox.component.css']
})
export class MaterialCheckboxComponent implements OnInit {
    isChecked = true;

    constructor() {
    }

    ngOnInit(): void {
    }

    onChange($event) {
        console.log($event);
    }
}
