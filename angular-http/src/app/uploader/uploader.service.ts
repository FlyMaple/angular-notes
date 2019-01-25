import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UploaderService {

    constructor(
        private http: HttpClient
    ) { }

    upload(): void {

    }
}
