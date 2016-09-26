import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from "@angular/http";

import { routing }              from '../main/app.routing';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from '../shared/services/in-memory-data.service';
import {HeroDetailComponent} from "./components/hero-detail.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        HeroDetailComponent
    ],
    bootstrap: [ HeroDetailComponent ]
})
export class HeroDetailModule { }
