import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
        <div>
        <img [src]="event?.imageUrl" [alt]="event?.name">
    
        <div class="row">
        <div class="col-md-11">
            <h2>{{event?.name}} </h2>
        </div>
        </div>
    
        <div class="row">
        <div class="col-md-6">
            <div><strong>Date:</strong> {{event?.date}}</div>
            <div><strong>Time:</strong> {{event?.time}}</div>
            <div><strong>Price:</strong> \${{event?.price}}</div>
        </div>
        <div class="col-md-6">
            <address>
            <strong>Address:</strong><br />
            {{event?.location?.address}}<br />
            {{event?.location?.city}}, {{event?.location?.country}}
            </address>
        </div>
        </div>
    </div>
    `
})
export class EventListComponent {

    event = 
        {
          id: 1,
          name: 'Angular Connect',
          date: '9/26/2036',
          time: '10:00 am',
          price: 599.99,
          imageUrl: '/assets/images/angularconnect-shield.png',
          location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
          }
        }
}