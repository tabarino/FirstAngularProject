import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterReducer, ICounterState } from '../reducers/counter.reducers';

export const selectCounterState = createFeatureSelector<ICounterState>('counterReducer');

export const selectCounter = createSelector(
    selectCounterState,
    counterReducer => counterReducer.counter
);
