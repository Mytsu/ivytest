import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
