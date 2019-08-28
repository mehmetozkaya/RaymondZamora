import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

declare let toastr

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventListComponent implements OnInit {    
    events: any[]
    constructor(private eventService : EventService){      
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
    
    handleEventClicked(data) : void {
        console.log('received data : '+ data);
    }

    handleThumbnailClick(eventName) {
        toastr.success(eventName);
    }
}