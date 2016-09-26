import { Injectable } from '@angular/core';

import { Headers, Http }    from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {TodoList} from "../classes/todo-list";
import {TodoItem} from "../classes/todo-item";

@Injectable()
export class TodoService {

    private apiUrl = 'app/todolist'; // Url to web API
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getLists(): Promise<TodoList[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as TodoList[])
            .catch(this.handleError);
    }

    getList(id: number): Promise<TodoItem[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as TodoItem[])
            .catch(this.handleError);
    }

    /*update(hero: Hero): Promise<Hero> {
        const url = `${this.apiUrl}/{hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.apiUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }*/

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}