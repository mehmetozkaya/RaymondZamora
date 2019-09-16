import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
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
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.event = this.eventService.getEvent(id);    
        })        
    }
    
    addSession() : void {
        this.addMode = true
    }

    removeSession() : void {
        this.addMode = false
    }
}