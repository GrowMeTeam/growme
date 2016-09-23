import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from "@angular/http";

import { AppComponent }         from './components/app.component';
import { routing }              from '../app.routing';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from '../shared/services/in-memory-data.service';
import {DashboardModule} from "../dashboard/dashboard.module";
import {HeroesModule} from "../heroes/heroes.module";
import {HeroDetailModule} from "../hero-detail/hero-detail.module";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      routing,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      DashboardModule,
      HeroesModule,
      HeroDetailModule
  ],
  declarations: [
      AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
