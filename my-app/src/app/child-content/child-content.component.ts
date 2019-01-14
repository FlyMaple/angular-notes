import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-child-content',
    templateUrl: './child-content.component.html',
    styleUrls: ['./child-content.component.sass']
})
export class ChildContentComponent implements OnInit {

    prefix: string = `[Child-content]`;
    messages: string[];
    input: string = '';

    constructor(
        private messageService: MessageService
    ) {

    }

    ngOnInit() {

    }

    logIt(log): void {
        this.messageService.add(`${this.prefix} ${log}`);
        this.messageService.tick();
    }

}
