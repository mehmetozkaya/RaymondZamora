import { Component } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventListComponent {    
    events: any[]
    constructor(private eventService : EventService){
      this.events = this.eventService.getEvents();
    }
    
    handleEventClicked(data) : void {
        console.log('received data : '+ data);
    }    
}