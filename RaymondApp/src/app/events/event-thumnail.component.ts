import { Component, Input } from '@angular/core';


@Component({
        selector: 'event-thumnail',
        templateUrl: './event-thumnail.component.html'
})
export class EventThumnailComponent {
    @Input() event: any;
}