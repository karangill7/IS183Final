import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs';

@Injectable()
export class UserService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    getUsers(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/user`)
            .toPromise()
            .then((resp) => {
                let users = resp.json();
                // console.log('books', books);
                return users;
            });
    }

    getUserById(userId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/user/id/${userId}`)
            .toPromise()
            .then((resp) => {
                let user = resp.json();
                // console.log('book', book);
                return user;
            });
    }

    addUser(user): Promise<Object> {
        return this.http.post(`${this.apiUrl}/user`, user)
            .toPromise()
            .then((resp) => {
                let user = resp.json();
                // console.log('book', book);
                return user;
            });
    }

    deleteUser(id): Promise<Object> {
        // console.log(`from book.service delete method......`);
        return this.http.delete(`${this.apiUrl}/user/id/${id}`)
            .toPromise()
            .then((resp) => {
                let status = resp.json();
                // console.log('book', status);
                return status;
            });
    }

    updateUser(id, user): Promise<Object> {
        return this.http.put(`${this.apiUrl}/user/id/${id}`, user)
            .toPromise()
            .then((resp) => {
                let user = resp.json();
                // console.log('book', book);
                return user;
            });
    }

}
