import { NgModule }         from '@angular/core';

import { AppMainComponent }         from './components/app-main.component';
import { routing }              from './app-main.routing';
import {MenuComponent} from './components/menu.component';
import {TodoScreenModule} from "../todo-screen/todo-screen.module";

@NgModule({
  imports: [
      routing,
      TodoScreenModule
  ],
  declarations: [
      AppMainComponent,
      MenuComponent
  ],
  bootstrap: [ AppMainComponent ]
})
export class AppMainModule { }
