import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './counter/store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
