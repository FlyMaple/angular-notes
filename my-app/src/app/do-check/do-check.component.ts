import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-do-check',
    templateUrl: './do-check.component.html',
    styleUrls: ['./do-check.component.sass'],
})
export class DoCheckComponent implements OnInit {
    @Input() hero: any;
    @Input() power: string;

    heroName: string;
    heroPower: string;
    changeDetected: boolean = false;

    prefix: string = `[Do-Check]`;
    messages: string[];

    constructor(
        private messageService: MessageService
    ) { }

    logIt(log): void {
        this.messageService.add(`${this.prefix} ${log}`);
        this.messages = this.messageService.messages;
    }

    resetLog(): void {
        this.messageService.clear();
        this.messageService.add(`---- clear ----`);
        this.messages = this.messageService.messages;
    }

    ngOnInit() {
        this.logIt(`ngOnInit`);

        this.heroName = this.hero.name;
        this.heroPower = this.hero.power;
    }

    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.

        this.logIt(`ngDoCheck`);

        if (this.hero.name !== this.heroName) {
            this.changeDetected = true;
            this.logIt(`Hero name changed to ${this.hero.name} from ${this.heroName}`);
            this.heroName = this.hero.name;
        }

        if (this.hero.power !== this.heroPower) {
            this.changeDetected = true;
            this.logIt(`Hero name changed to ${this.hero.power} from ${this.heroPower}`);
            this.heroPower = this.hero.power;
        }
    }
}
