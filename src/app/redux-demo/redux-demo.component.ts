import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from './actions/counter.actions';
import { ICounterState } from './reducers/counter.reducers';

@Component({
    selector: 'redux-demo',
    templateUrl: './redux-demo.component.html',
    styleUrls: ['./redux-demo.component.css']
})
export class ReduxDemoComponent implements OnInit {
    title = 'Redux Demo';
    counter = 0;

    constructor(private store: Store<ICounterState>) {
    }

    ngOnInit(): void {
    }

    increment() {
        // this.counter++;
        this.store.dispatch(increment());
    }
}
