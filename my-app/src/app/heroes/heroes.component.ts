import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];

    constructor(
        private heroService: HeroService
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    addHero(name): void {
        this.heroService
            .addHero({ name } as Hero)
            .subscribe(hero => this.heroes.push(hero));
    }

    deleteHero(hero: Hero): void {
        this.heroService
            .deleteHero(hero)
            .subscribe(() => {
                this.heroes = this.heroes.filter(hero => hero.id !== hero.id);
            });
    }
}