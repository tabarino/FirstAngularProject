import {animate, animation, keyframes, style, transition, trigger, useAnimation} from "@angular/animations";

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

export let fadeInAnimation = animation([
    style({opacity: 0}),
    animate('{{duration}} {{easing}}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let fadeOutAnimation = animation([
    animate(1000, style({opacity: 0}))
]);

export let fade = trigger('fade', [
    transition(':enter', useAnimation(fadeInAnimation)),
    transition(':leave', useAnimation(fadeOutAnimation))
]);
