import { Directive, OnInit, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';


@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
   
    constructor(@Inject(JQ_TOKEN) private $ : any) {        
    }
    
    ngOnInit(): void {
        this.$('#simple-modal').modal({})
    }

}