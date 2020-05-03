import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'material-chips',
    templateUrl: './material-chips.component.html',
    styleUrls: ['./material-chips.component.css']
})
export class MaterialChipsComponent implements OnInit {
    categories = [
        { name: 'Beginner' },
        { name: 'Intermediate' },
        { name: 'Advanced' },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    selectCategory(category) {
        this.categories.filter(c => c != category).forEach(
            c => c['selected'] = false
        );

        category.selected = !category.selected;
    }
}
