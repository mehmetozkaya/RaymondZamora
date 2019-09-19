import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: any
  
  constructor() { }

  ngOnInit() {
  }

}
