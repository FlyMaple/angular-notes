import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    baseUrl: string = 'http://localhost:3000';

    constructor(
        private messageService: MessageService,
        private http: HttpClient
    ) { }

    getHeroes(): Observable<Hero[]> {
        this.messageService.add(`HeroService: fetched heroes`);

        return this.http
            .get<Hero[]>(`${this.getUrl('/api/heroes')}`)
            .pipe(
                tap(heroes => console.log(`fetched heroes`)),
                catchError(this.handleError<Hero[]>('getHeroes', []))
            );
    }

    getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fetched hero id = ${id}`);
        
        return this.http
            .get<Hero>(`${this.getUrl('/api/hero')}/${id}`)
            .pipe(
                tap(hero => console.log(`fetched hero id = ${id}`)),
                catchError(this.handleError<Hero>('getHero'))
            );
    }

    updateHero(hero: Hero): Observable<Hero> {
        return this.http
            .put<Hero>(`${this.getUrl('/api/hero')}/${hero.id}`, hero, httpOptions)
            .pipe(
                tap(hero => console.log(`updated hero id = ${hero.id}`)),
                catchError(this.handleError<Hero>('updateHero'))
            );
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http
            .post<Hero>(`${this.getUrl('/api/hero')}`, hero, httpOptions)
            .pipe(
                tap((hero: Hero) => console.log(`added hero w/id = ${hero.id}`)),
                catchError(this.handleError<Hero>('addHero'))
            );
    }

    deleteHero(hero: Hero): Observable<Hero> {
        return this.http
            .delete<Hero>(`${this.getUrl('/api/hero')}/${hero.id}`, httpOptions)
            .pipe(
                tap(() => console.log(`deleted hero id = ${hero.id}`)),
                catchError(this.handleError<Hero>('deleteHero'))
            );
    }

    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
            return of([]);
        }

        return this.http
            .get<Hero[]>(`${this.getUrl('/api/heroes')}`, {
                params: {
                    q: term
                }
            })
            .pipe(
                tap((heroes: Hero[]) => console.log(`found heroes matching "${term}"`)),
                catchError(this.handleError('searchHeroes', []))
            );
    }

    getUrl(url): string {

        return `${this.baseUrl}${url}`;
    }

    handleError<T>(operation = 'operation', result?: T) {
        return (err: any): Observable<T> => {
            console.log(`${operation} failed: ${err.message}`);

            return of(result as T);
        };
    }
}
