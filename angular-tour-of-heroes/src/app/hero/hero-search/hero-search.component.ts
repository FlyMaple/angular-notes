import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
    heroes$: Observable<Hero[]>;

    private searchName = new Subject<string>();

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.heroes$ = this.searchName.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((name: string) => this.heroService.searchHeros(name))
        );
    }

    search(name: string): void {
        this.searchName.next(name);
    }

}
