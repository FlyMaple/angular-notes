import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
    selector: 'app-after-view',
    templateUrl: './after-view.component.html',
    styleUrls: ['./after-view.component.sass'],
    providers: [
        MessageService
    ]
})
export class AfterViewComponent implements OnInit {
    @ViewChild(ChildViewComponent) childView: ChildViewComponent;

    prefix: string = `[After-view]`;
    messages: string[];
    showChild: boolean = true;

    constructor(
        private messageService: MessageService
    ) {
        this.logIt(`constructor`);
    }

    ngOnInit() {
        this.logIt(`ngOnInit`);
    }

    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.

        this.logIt(`ngDoCheck`);
    }

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.

        this.logIt(`ngAfterViewInit`);
        if (this.childView) {
            this.logIt(`child view input: ${this.childView.input1}`)
        }
    }

    ngAfterViewChecked(): void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.

        this.logIt(`ngAfterViewChecked`);
        if (this.childView) {
            this.logIt(`child view input: ${this.childView.input1}`)
        }
    }

    logIt(log): void {
        this.messageService.add(`${this.prefix} ${log}`);
        this.messages = this.messageService.messages;
    }

    toggleChild(): void {
        this.showChild = !this.showChild;
    }
}
