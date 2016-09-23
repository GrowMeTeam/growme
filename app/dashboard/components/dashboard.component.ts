import { Component, OnInit }    from '@angular/core';
import { Router }               from "@angular/router";

import { Hero }         from '../../shared/entities/hero/classes/hero';
import { HeroService }  from '../../shared/entities/hero/services/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: '../../dashboard.component.html',
    styleUrls: ['dashboard/styles/dashboard.component.css'],
    providers: [HeroService]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService){
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}