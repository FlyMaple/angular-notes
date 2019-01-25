import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Config } from './config/config';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ConfigService {

    constructor(
        private http: HttpClient
    ) { }

    getConfig(): Observable<Config> {
        return this.http.get<Config>(`assets/config.json`);
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<HttpResponse<Config>>(`assets/config.json`, {
            observe: 'response'
        });
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }

        return throwError(`Something bad happened; please try again later.`);
    }

    makeIntentionalError(): Observable<any> {
        return this.http
            .get(`a/b/c/d`)
            .pipe(
                catchError(this.handleError)
            );
    }
}
