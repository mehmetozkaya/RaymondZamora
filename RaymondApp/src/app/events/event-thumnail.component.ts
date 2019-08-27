import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
        selector: 'event-thumnail',
        templateUrl: './event-thumnail.component.html'
})
export class EventThumnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();

    handleClickMe() : void {
        console.log('clicked !');
        this.eventClick.emit('foo');
    }
}