import { Action, createReducer, on } from '@ngrx/store';
import { update, reset } from './counter.actions';

export const initialState = 0;

// tslint:disable-next-line: variable-name
const counterReducer = createReducer(
  initialState,
  on(update, (state, { value }) => (state + value)),
  on(reset, (_) => (0)),
);

export const reducer =
  (state: number | undefined, action: Action): number =>
    counterReducer(state, action);
