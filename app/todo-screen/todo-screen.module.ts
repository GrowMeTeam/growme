import { NgModule }         from '@angular/core';

import {TodoScreenComponent} from "./components/todo-screen.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {TodoListingComponent} from "./components/todo-listing.component";
import {TodoListComponent} from "./components/todo-list.component";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
  ],
  declarations: [
      TodoScreenComponent,
      TodoListingComponent,
      TodoListComponent
  ],
  bootstrap: [ TodoScreenComponent ]
})
export class TodoScreenModule { }
