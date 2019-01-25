import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LogService {
    prefix: string;

    constructor() { }

    setPrefix(prefix): void {
        this.prefix = prefix;
    }

    warn(args: any): void {
        console.warn(`[${this.prefix}] ${args}`);
    }
}
