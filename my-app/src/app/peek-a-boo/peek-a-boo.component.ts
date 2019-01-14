import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-peek-a-boo',
    templateUrl: './peek-a-boo.component.html',
    styleUrls: ['./peek-a-boo.component.sass']
})
export class PeekABooComponent implements OnInit {
    @Input() name: string;
    prefix: string = `[Peek-a-boo]`;

    constructor(
        private messageService: MessageService
    ) {
        this.logIt(`constructor`);
        this.logIt(`input name ${this.name ? 'is' : 'not'} exist`);
    }

    logIt(log): void {
        this.messageService.add(`${this.prefix} ${log}`);
    }

    ngOnInit() {
        this.logIt(`ngOnInit`);
    }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.logIt(`ngOnChanges`);
        this.logIt(`input name ${this.name ? 'is' : 'not'} exist`);
    }

    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.

        this.logIt(`ngDoCheck`);
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

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.

        this.logIt(`ngAfterViewInit`);
    }

    ngAfterViewChecked(): void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.

        this.logIt(`ngAfterViewChecked`);
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.

        this.logIt(`ngOnDestroy`);
    }
}
