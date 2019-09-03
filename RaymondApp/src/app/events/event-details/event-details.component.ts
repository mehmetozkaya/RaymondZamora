import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styles: ['.container { padding-left:20px, padding-right:20px } .event-image { height: 100px }']
})
export class EventDetailsComponent implements OnInit {
    event: IEvent
    addMode: boolean
    filterBy: string = 'all'
    sortBy: string = 'votes'
    
    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.event = this.eventService.getEvent(id);        
    }
    
    addSession() {
        this.addMode = true
    }

    removeSession() : void {
        this.addMode = false
    }
}