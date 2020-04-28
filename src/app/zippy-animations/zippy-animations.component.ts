import {Component, Input, OnInit} from '@angular/core';
import {expandCollapse} from "./zippy-animations.component.animations";

@Component({
    selector: 'zippy-animations',
    templateUrl: './zippy-animations.component.html',
    styleUrls: ['./zippy-animations.component.css'],
    animations: [expandCollapse]
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
