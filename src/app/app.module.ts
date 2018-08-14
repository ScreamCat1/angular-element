import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CounterComponent } from './counter/counter.component';

@NgModule({
  entryComponents: [CounterComponent],
  declarations: [CounterComponent],
  imports: [BrowserModule]
})

export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(CounterComponent, { injector: this.injector });
    customElements.define('app-counter', el);
  }
}
