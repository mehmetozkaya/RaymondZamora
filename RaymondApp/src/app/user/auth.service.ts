import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
 
    currentUser: IUser

    constructor(private http: HttpClient) {

    }

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Mehmet',
            lastName: 'Ozkaya'
        }

        // this.http.post('api/login')
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}