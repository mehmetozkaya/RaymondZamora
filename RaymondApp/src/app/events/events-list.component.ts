import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared';


@Component({    
    templateUrl: './events-list.component.html'
})
export class EventListComponent implements OnInit {    
    events: IEvent[]
    constructor(private eventService : EventService, private toastrService : ToastrService){      
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(events => this.events = events);
    }
    
    handleEventClicked(data) : void {
        console.log('received data : '+ data);
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}