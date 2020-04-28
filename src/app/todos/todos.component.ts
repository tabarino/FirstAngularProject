import {Component, OnInit} from '@angular/core';
import {bounceOutLeftAnimation, fadeInAnimation} from "../animations";
import {
    animate,
    animateChild,
    group,
    query,
    stagger,
    style,
    transition,
    trigger,
    useAnimation
} from "@angular/animations";

@Component({
    selector: 'todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'],
    animations: [
        trigger('todosAnimation', [
            transition(':enter', [
                group([
                    query('h1', [
                        style({transform: 'translateY(-20px)'}),
                        animate(500)
                    ]),
                    query('@todoAnimation', stagger(200, animateChild()))
                ])
            ])
        ]),
        trigger('todoAnimation', [
            transition(':enter', useAnimation(fadeInAnimation, {
                params: {
                    duration: '1000ms'
                }
            })),
            transition(':leave', [
                style({backgroundColor: 'red'}),
                animate(500),
                useAnimation(bounceOutLeftAnimation)
            ])
        ])
    ]
})
export class TodosComponent implements OnInit {
    items: any[] = [
        'Wash the dishes',
        'Call the accountant',
        'Apply for a car insurance'
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    addItem(input: HTMLInputElement) {
        this.items.splice(0, 0, input.value);
        input.value = '';
    }

    removeItem(item) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

    animationStarted($event) {
        console.log($event);
    }

    animationDone($event) {
        console.log($event);
    }
}
