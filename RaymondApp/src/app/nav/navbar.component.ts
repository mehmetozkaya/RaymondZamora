import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {
    searchTerm: string = ""
    foundSessions: ISession[]
    
    constructor(private authService: AuthService){        
    }

    searchSessions(searchTerm): void {
        
    }
}