import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';

import { Hero }         from '../../shared/entities/hero/classes/hero';
import { HeroService }  from '../../shared/entities/hero/services/hero.service';
import { Router }       from "@angular/router";


@Component({
    styleUrls: ['app/heroes/styles/heroes.component.css'],
    templateUrl: 'app/heroes/templates/heroes.component.html',
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService){
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        name = name.trim();
        if(!name)
            return;
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            })
    }

    ngOnInit(): void {
        this.getHeroes()
    }
}