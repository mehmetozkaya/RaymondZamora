import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {

    newEvent

    constructor(private router: Router, private eventService: EventService){
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.router.navigate(['/events']);
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }
}