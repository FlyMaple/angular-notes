import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[app-ad-host]'
})
export class AdDirective {

    constructor(
        public viewContainerRef: ViewContainerRef
    ) { }

}
