import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';


@Component({
        selector: 'event-thumnail',
        templateUrl: './event-thumnail.component.html',
        styles: ['.green {color: #003300 !important; }']
})
export class EventThumnailComponent {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();    

    handleClickMe() : void {
        console.log('clicked !');
        this.eventClick.emit(this.event.name);
    }

    logFoo(): void {
        console.log('mozk');
    }
}