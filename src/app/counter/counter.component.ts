import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() counter!: number | null;
  @Output() updateEvent = new EventEmitter<number>();

  update(value: number): void {
    this.updateEvent.emit(value);
  }
}
