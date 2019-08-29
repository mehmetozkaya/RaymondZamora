import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';


@Component({    
    templateUrl: './events-list.component.html'
})
export class EventListComponent implements OnInit {    
    events: any[]
    constructor(private eventService : EventService, private toastrService : ToastrService){      
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
    
    handleEventClicked(data) : void {
        console.log('received data : '+ data);
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}