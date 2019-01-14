import { Directive } from '@angular/core';
import { MessageService } from './message.service';

@Directive({
    selector: '[appMySpy]'
})
export class MySpyDirective {

    prefix: string = `[Spy]`;

    constructor(
        private messageService: MessageService
    ) { }

    logIt(log): void {
        this.messageService.add(`${this.prefix} ${log}`);
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

        this.logIt(`ngOnInit`);
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.

        this.logIt(`ngOnDestroy`);
    }
}
