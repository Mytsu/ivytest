import { createAction, props } from '@ngrx/store';

export const update = createAction(
  '[Counter Component] Update',
  props<{ value: number }>()
);
export const reset = createAction('[Counter Component] Reset');
