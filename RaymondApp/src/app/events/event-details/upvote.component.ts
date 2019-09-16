import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'upvote',
    template: ``
})
export class UpvoteComponent {
    @Input() count: number
    @Input() voted: boolean
    @Output() vote = new EventEmitter()

    onClick() : void {
        this.vote.emit({})
    }

}