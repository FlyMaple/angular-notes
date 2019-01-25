import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.sass'],
    providers: [
        { provide: HeroService, useClass: HeroService }
    ]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    editHero: Hero;

    constructor(
        private heroService: HeroService
    ) { }

    ngOnInit() {
        this.setHeroes();
    }

    setHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    refresh(): void {
        this.setHeroes();
    }
    add(name: string): void {
        const hero: Hero = { name } as Hero;
        this.heroService
            .addHero(hero)
            .subscribe(h => {
                console.log(h);
                this.heroes.push(h);
            });
    }
    search(name: string): void {
        this.heroService
            .search(name)
            .subscribe(heroes => this.heroes = heroes);
    }
    edit(hero: Hero): void {
        this.editHero = hero;
    }
    update(): void {
        this.heroService
            .updateHero(this.editHero)
            .subscribe(() => {
            });
        this.editHero = undefined;

    }
    delete(hero: Hero): void {
        this.heroService
            .deleteHero(hero)
            .subscribe();
        this.heroes = this.heroes.filter(_hero => _hero !== hero);
    }
}
