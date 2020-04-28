import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'zippy-animations',
    templateUrl: './zippy-animations.component.html',
    styleUrls: ['./zippy-animations.component.css'],
    animations: [
        trigger('expandCollapse', [
            state('collapse', style({
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: 'hidden'
            })),
            transition('collapse => expanded', [
                animate('300ms ease-out')
            ]),
            transition('expanded => collapse', [
                animate('300ms ease-in')
            ])
        ])
    ]
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
