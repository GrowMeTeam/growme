import { NgModule }         from '@angular/core';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from '../shared/services/in-memory-data.service';

import { AppComponent }         from './components/app.component';
import { routing }              from '../app.routing';
import {DashboardModule}        from "../dashboard/dashboard.module";
import {HeroesModule}           from "../heroes/heroes.module";
import {HeroDetailModule}       from "../hero-detail/hero-detail.module";

@NgModule({
  imports: [
      routing,
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
