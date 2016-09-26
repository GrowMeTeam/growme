import { Component } from '@angular/core';
import {TodoList} from "../classes/todo-list";

@Component({
    templateUrl: 'app/todo-screen/templates/todo-screen.component.html',
    styleUrls: ['app/todo-screen/styles/todo-screen.component.css']
})
export class TodoScreenComponent {
    activeList: TodoList = null;
}