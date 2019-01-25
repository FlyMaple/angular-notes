import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DownloaderService {

    constructor(
        private http: HttpClient
    ) { }

    getTextFile(): Observable<string> {
        return this.http.get(`assets/textfile.txt`, {responseType: 'text'});
    }
}
