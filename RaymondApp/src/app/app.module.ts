import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumnailComponent } from './events/event-thumnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({ 
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumnailComponent,
    NavBarComponent
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
  pageTitle: string = 'asd';
 }
