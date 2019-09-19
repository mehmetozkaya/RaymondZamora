import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {
  EventListComponent,
  EventThumnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator  
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common/index'
import { CustomerModule } from './customer/customer.module';

//let toastr: Toastr = window['toastr']
let jQuery = window['$']

@NgModule({ 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CustomerModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers: [
    EventService, 
    { provide: JQ_TOKEN, useValue: jQuery },
    ToastrService, 
    EventRouteActivator,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
  pageTitle: string = 'asd';
 }
