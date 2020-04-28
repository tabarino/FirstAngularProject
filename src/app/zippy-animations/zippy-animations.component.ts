import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'zippy-animations',
    templateUrl: './zippy-animations.component.html',
    styleUrls: ['./zippy-animations.component.css']
})
export class ZippyAnimationsComponent implements OnInit {
    @Input('title') title: string;
    isExpanded: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
