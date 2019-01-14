import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-on-changes',
    templateUrl: './on-changes.component.html',
    styleUrls: ['./on-changes.component.sass'],
})
export class OnChangesComponent implements OnInit {
    @Input() hero: any;
    @Input() power: string;

    prefix: string = `[On-Changes]`;
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

    }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.

        this.logIt(`ngOnChanges`);
        for (let prop in changes) {
            const change = changes[prop];
            const cur = JSON.stringify(change.currentValue);
            const prev = JSON.stringify(change.previousValue);

            if (change.firstChange) {
                this.logIt(`Init ${prop}: ${cur}`);
            } else {
                this.logIt(`Update ${prop}: ${prev} to ${cur}`);
            }
        }
        this.messages = this.messageService.messages;
    }

}
