import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

        // let loginInfo = { userName: userName, password: password }
        // this.http.post('api/login', loginInfo)
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

    logout() {
        this.currentUser = undefined
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}
        return this.http.post('/api/logout', {}, options)
    }
   
}