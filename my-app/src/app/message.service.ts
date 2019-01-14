import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    messages: string[] = [];

    constructor() { }

    add(message: string): void {
        this.messages.push(message);
    }

    clear(): void {
        this.messages = [];
    }

    tick(): void {
        setTimeout(() => {

        }, 0);
    }
    // tick() { this.tick_then(() => { }); }
    // tick_then(fn: () => any) { setTimeout(fn, 0); }
}
