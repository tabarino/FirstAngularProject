import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment } from './actions/counter.actions';
import { ICounterState } from './reducers/counter.reducers';
import { Observable } from 'rxjs';
import { selectCounter } from './selectors/counter.selectors';

@Component({
    selector: 'redux-demo',
    templateUrl: './redux-demo.component.html',
    styleUrls: ['./redux-demo.component.css']
})
export class ReduxDemoComponent implements OnInit {
    title = 'Redux Demo';
    counter$: Observable<number>;

    constructor(private store: Store<ICounterState>) {
        this.counter$ = store.pipe(select(selectCounter));
    }

    ngOnInit(): void {
    }

    increment() {
        // this.counter++;
        this.store.dispatch(increment());
    }
}
