import {animate, state, style, transition, trigger} from "@angular/animations";

export const expandCollapse = trigger('expandCollapse', [
    state('collapse', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
    })),
    transition('collapse => expanded', [
        animate('300ms ease-out', style({
            height: '*',
            paddingTop: '*',
            paddingBottom: '*',
        })),
        animate('1s', style({opacity: 1}))
    ]),
    transition('expanded => collapse', [
        animate('300ms ease-in')
    ])
])
