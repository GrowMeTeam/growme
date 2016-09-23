import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from "@angular/http";

import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { AppComponent }         from './app.component';
import { routing }              from './app.routing';
import { DashboardComponent }   from "./dashboard.component";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      routing,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      DashboardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
