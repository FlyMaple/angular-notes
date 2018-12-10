import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private activeRoute: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.getHero()
    }

    save(): void {
        this.heroService
            .updateHero(this.hero)
            .subscribe(() => this.goBack());
    }

    getHero(): void {
        const heroId = +this.activeRoute.snapshot.paramMap.get('id');

        this.heroService
            .getHero(heroId)
            .subscribe((hero: Hero) => {
                this.hero = hero;
            });
    }

    goBack(): void {
        this.location.back();
    }
}
