import {animate, animation, keyframes, state, style, transition, trigger, useAnimation} from "@angular/animations";

export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-out', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
)

export let slide = trigger('slide', [
    transition(':enter', [
        style({transform: 'translateX(-10px)'}),
        animate(500)
    ]),
    transition(':leave', [
        // linear / ease-in / ease-out / ease-in-out / cubic-bezier(.17, .67, .83, .67)
        // animate('0.5s ease-in', style({transform: 'translateX(-100%)'}))
        useAnimation(bounceOutLeftAnimation)
    ])
]);

export let fade = trigger('fade', [
    state('void', style({opacity: 0})),
    transition(':enter, :leave', [ // or transition('void <=> *', [
        animate(1000)
    ])
]);
