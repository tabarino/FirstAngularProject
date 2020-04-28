import {Component, OnInit} from '@angular/core';
import {bounceOutLeftAnimation, fadeInAnimation} from "../animations";
import {animate, style, transition, trigger, useAnimation} from "@angular/animations";

@Component({
    selector: 'todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'],
    animations: [
        trigger('todoAnimation', [
            transition(':enter', useAnimation(fadeInAnimation, {
                params: {
                    duration: '500ms'
                }
            })),
            transition(':leave', [
                style({backgroundColor: 'red'}),
                animate(1000),
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
}
