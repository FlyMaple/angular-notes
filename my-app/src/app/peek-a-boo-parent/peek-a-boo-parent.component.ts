import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-peek-a-boo-parent',
    templateUrl: './peek-a-boo-parent.component.html',
    styleUrls: ['./peek-a-boo-parent.component.sass']
})
export class PeekABooParentComponent implements OnInit {

    prefix: string = `[Peek-a-boo-parent]`;
    heroName: string = `Skye`;
    hasChild: boolean = false;
    messages: string[] = [];

    constructor(public messageService: MessageService) {
        this.messages = this.messageService.messages;
        this.messageService.add(`${this.prefix} constructor`);
    }

    ngOnInit() {
        this.messageService.add(`${this.prefix} ngOnInit`);
    }

    toggleChild(): void {
        this.hasChild = !this.hasChild;
        if (this.hasChild) {
            this.messageService.clear();
        }
        this.messages = this.messageService.messages;
        this.messageService.tick();
    }

    updateHero(): void {
        this.heroName = Math.random().toString(16);
        this.messageService.tick();
    }

}
