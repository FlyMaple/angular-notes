import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HeroService } from '../hero.service';

import { Hero } from '../hero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    heroName2: string;

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    add(name: string): void {
        name = name.trim();

        if (!name) { return; }

        this.heroService.addHero({ name } as Hero)
            .subscribe(hero => this.heroes.push(hero));
    }

    add2(): void {
        this.heroName2 = this.heroName2.trim();

        if (!this.heroName2) { return; }

        this.heroService.addHero({ name: this.heroName2 } as Hero)
            .subscribe(hero => this.heroes.push(hero));
    }

    delete(hero: Hero): void {
        this.heroService.deleteHero(hero)
            .subscribe(_ => this.heroes = this.heroes.filter(h => h !== hero));
    }
}
