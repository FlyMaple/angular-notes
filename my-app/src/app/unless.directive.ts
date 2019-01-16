import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    unless: boolean;
    @Input() set appUnless(condition: any) {
        console.log('set');
        this.unless = !!condition;
        if (this.unless) {
            this.viewContainerRef.clear();
        } else {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    };

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) { }

}
