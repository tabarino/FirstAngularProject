import { createReducer, on } from '@ngrx/store';
import { increment } from '../actions/counter.actions';

export interface ICounterState {
    counter: number;
}

export const initialState: ICounterState = {
    counter: 0
}

const _counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    })
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}
