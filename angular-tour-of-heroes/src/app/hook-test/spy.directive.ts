import { Directive } from '@angular/core';

@Directive({
    selector: '[appSpy]'
})
export class SpyDirective {
    messageIdx: number = 0;

    constructor() { }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.log(`ngOnInit`);
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.log(`ngOnDestroy`);
    }

    log(message): void {
        console.log(`[spy-directive] # ${this.messageIdx++} ${message}`);
    }
}
