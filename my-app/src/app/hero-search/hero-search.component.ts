import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.sass']
})
export class HeroSearchComponent implements OnInit {
    heroes: Hero[];

    constructor(
        private heroService: HeroService
    ) { }

    ngOnInit() {
    }

    searchHero(term: string): void {
        this.heroService
            .searchHeroes(term)
            .subscribe((heroes: Hero[]) => this.heroes = heroes);
    }
}
