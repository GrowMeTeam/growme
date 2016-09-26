import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero }         from '../../shared/entities/hero/classes/hero';
import { HeroService }  from '../../shared/entities/hero/services/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail/templates/hero-detail.component.html',
    styleUrls: ['app/hero-detail/styles/hero-detail.component.css'],
    providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            console.log(id);
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        })
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(this.goBack);
    }

    goBack(): void {
        window.history.back();
    }
}