import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-child-view',
    templateUrl: './child-view.component.html',
    styleUrls: ['./child-view.component.sass']
})
export class ChildViewComponent implements OnInit {

    prefix: string = `[Child-view]`;
    messages: string[];
    input1: string;

    constructor(
        private messageService: MessageService
    ) {
        this.logIt(`constructor`);
    }

    ngOnInit() {
        this.logIt(`ngOnInit`);
    }

    logIt(log): void {
        this.messageService.add(`${this.prefix} ${log}`);
        this.messageService.tick();
    }

    update(): void {
        console.log(Math.random());
    }
}
