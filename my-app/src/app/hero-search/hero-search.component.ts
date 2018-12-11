import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap, switchAll } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.sass']
})
export class HeroSearchComponent implements OnInit {
    heroes$: Observable<Hero[]>;
    searchTerm: Subject<string>;
    hes: Hero[];

    constructor(
        private heroService: HeroService
    ) {
        this.searchTerm =  new Subject<string>();
    }

    ngOnInit() {
        this.heroes$ = this.searchTerm.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.heroService.searchHeroes(term))
        );
    }

    searchHero(term: string): void {
        this.searchTerm.next(term);
    }
}
