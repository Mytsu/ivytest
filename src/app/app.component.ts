import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { update } from './counter/store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.counter$ = store.select('count');
  }

  updateCounter(v: number): void {
    this.store.dispatch(update({ value: v }));
  }
}
