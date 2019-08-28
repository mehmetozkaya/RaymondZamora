import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
        selector: 'event-thumnail',
        templateUrl: './event-thumnail.component.html',
        styles: ['.green {color: #003300 !important; }']
})
export class EventThumnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();
    someProperty: any = "mozk property";

    handleClickMe() : void {
        console.log('clicked !');
        this.eventClick.emit(this.event.name);
    }

    logFoo(): void {
        console.log('mozk');
    }
}