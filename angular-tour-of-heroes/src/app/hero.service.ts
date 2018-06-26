import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { Hero } from './hero';


@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes';

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap(heroes => this.log(`fetched heroes: ${heroes.length}`)),
                catchError(this.handleError<Hero[]>('getHeroes', []))
            );
    }

    getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}}`;

        return this.http.get<Hero>(url)
            .pipe(
                tap(_ => this.log(`fetched hero id = ${id}`)),
                catchError(this.handleError<Hero>(`getHero id = ${id}`))
            );
    }

    updateHero(hero: Hero): Observable<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http.put<Hero>(url, hero)
            .pipe(
                tap(_ => this.log(`updated hero id = ${hero.id}`)),
                catchError(this.handleError<any>('updateHero'))
            );
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero).pipe(
            tap((hero: Hero) => this.log(`added hero w/ id = ${hero.id}`)),
            catchError(this.handleError<Hero>('addHero')),
        );
    }

    deleteHero(hero: Hero): Observable<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http.delete<Hero>(url)
            .pipe(
                tap(_ => this.log(`deleted hero id = ${hero.id}`)),
                catchError(this.handleError<Hero>('deleteHero'))
            );
    }

    searchHeros(name: string): Observable<Hero[]> {
        name = name.trim();

        if (!name) { return of([]) }

        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${name}`)
            .pipe(
                tap((heroes: Hero[]) => this.log(`searched heroes: ${heroes.length}, using: ${name}`)),
                catchError(this.handleError<Hero[]>('searchHero', []))
            );
    }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

    log(message: string): void {
        this.messageService.add(`HeroService: ${message}`);
    }

}
