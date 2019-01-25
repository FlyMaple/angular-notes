import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class HeroService {

    constructor(
        private http: HttpClient
    ) { }

    getHeroes(): Observable<Hero[]> {
        return this.http
            .get<Hero[]>('api/heroes');
    }

    updateHero(hero: Hero): Observable<Hero> {
        return this.http
            .put<Hero>(`api/heroes`, hero);
    }

    deleteHero(hero: Hero): Observable<{}> {
        return this.http.delete(`api/heroes/${hero.id}`);
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(`api/heroes`, hero);
    }

    search(searchTerm: string): Observable<Hero[]> {
        let params = new HttpParams({
            fromString: `name=${searchTerm}`
        });

        return this.http.get<Hero[]>(`api/heroes`, {
            params
        });
    }
}
