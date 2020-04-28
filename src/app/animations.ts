import {animate, state, style, transition, trigger} from "@angular/animations";

export let slide = trigger('slide', [
    transition(':enter', [
        style({transform: 'translateX(-10px)'}),
        animate(500)
    ]),
    transition(':leave', [
        // linear / ease-in / ease-out / ease-in-out / cubic-bezier(.17, .67, .83, .67)
        animate('0.5s ease-in', style({transform: 'translateX(-100%)'}))
    ])
]);

export let fade = trigger('fade', [
    state('void', style({opacity: 0})),
    transition(':enter, :leave', [ // or transition('void <=> *', [
        animate(1000)
    ])
]);
