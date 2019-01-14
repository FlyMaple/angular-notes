import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Hero } from '../hero';

@Component({
    selector: 'app-spy-parent',
    templateUrl: './spy-parent.component.html',
    styleUrls: ['./spy-parent.component.sass'],
    providers: [
        MessageService
    ],
})
export class SpyParentComponent implements OnInit {

    prefix: string = `[Spy-parent]`;
    heroes: Hero[];
    messages: string[];
    newName: string;

    constructor(
        private messageService: MessageService
    ) { }

    logIt(log): void {
        this.messageService.add(`${this.prefix} ${log}`);
    }

    ngOnInit() {
        this.logIt(`ngOnInit`);
        this.messages = this.messageService.messages;
        this.heroes = [
            new Hero(Math.random(), 'Skye'),
            new Hero(Math.random(), 'Tina')
        ];
    }

    addHero(): void {
        this.heroes.push(
            new Hero(Math.random(), this.newName)
        );
        this.newName = null;
    }

    resetHero(): void {
        this.heroes = [];
    }
}
