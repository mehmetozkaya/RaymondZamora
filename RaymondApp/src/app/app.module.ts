import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumnailComponent } from './events/event-thumnail.component';

@NgModule({ 
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumnailComponent
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
  pageTitle: string = 'asd';
 }
