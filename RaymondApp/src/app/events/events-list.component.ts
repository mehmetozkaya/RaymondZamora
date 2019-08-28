import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventListComponent {    
    
    handleEventClicked(data) : void {
        console.log('received data : '+ data);
    }
    
}