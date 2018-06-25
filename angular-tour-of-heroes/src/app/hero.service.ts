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
                catchError(this.handleError('getHeroes', []))
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
