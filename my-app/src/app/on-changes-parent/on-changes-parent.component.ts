import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';
import { OnChangesComponent } from '../on-changes/on-changes.component';

@Component({
    selector: 'app-on-changes-parent',
    templateUrl: './on-changes-parent.component.html',
    styleUrls: ['./on-changes-parent.component.sass'],
    providers: [
        MessageService
    ]
})
export class OnChangesParentComponent implements OnInit {
    @ViewChild(OnChangesComponent) onChangeChild: OnChangesComponent;

    prefix: string = `[On-Changes-parent]`;
    hero: any;
    messages: string[];

    constructor(
        private messageService: MessageService
    ) {
        this.logIt(`constructor`);
        this.hero = {
            power: 'eat',
            name: 'Skye',
        }
    }

    logIt(log): void {
        this.messageService.add(`${this.prefix} ${log}`);
        this.messages = this.messageService.messages;
    }

    update(): void {
        this.hero = {
            power: Math.random(),
            name: Math.random(),
        }

        // this.hero.power = Math.random();
        // setTimeout(() => {
        //     this.hero.name = Math.random();
        // }, 1000);
    }

    resetLog(): void {
        this.onChangeChild.resetLog();
    }

    ngOnInit() {
        this.logIt(`ngOnInit`);

    }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.

        this.logIt(`ngOnChanges`);
        this.messages = this.messageService.messages;
    }

}
