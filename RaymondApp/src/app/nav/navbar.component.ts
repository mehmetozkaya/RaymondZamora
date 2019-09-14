import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {
    searchTerm: string = ""
    foundSessions: ISession[]
    
    constructor(private authService: AuthService, private eventService: EventService){        
    }

    searchSessions(searchTerm): void {
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
                console.log(this.foundSessions)
            }
        )
    }
}