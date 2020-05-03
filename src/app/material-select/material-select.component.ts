import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'material-select',
    templateUrl: './material-select.component.html',
    styleUrls: ['./material-select.component.css']
})
export class MaterialSelectComponent implements OnInit {
    colors = [
        { id: 1, name: 'Red' },
        { id: 2, name: 'Blue' },
        { id: 3, name: 'Yellow' }
    ];
    defaultColor: number;

    constructor() {
        this.defaultColor = 1;
    }

    ngOnInit(): void {
    }
}
