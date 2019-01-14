import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-after-content-parent',
    templateUrl: './after-content-parent.component.html',
    styleUrls: ['./after-content-parent.component.sass'],
    providers: [
        MessageService
    ]
})
export class AfterContentParentComponent implements OnInit {
    prefix: string = `[After-Content]`;
    messages: string[];
    show: boolean = false;

    constructor(
        private messageService: MessageService
    ) {
        this.logIt(`constructor`);
    }

    ngOnInit() {
        this.logIt(`ngOnInit`);
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.

        this.logIt(`ngAfterContentInit`);
    }

    ngAfterContentChecked(): void {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.

        this.logIt(`ngAfterContentChecked`);
    }

    logIt(log): void {
        this.messageService.add(`${this.prefix} ${log}`);
        this.messages = this.messageService.messages;
    }

}
