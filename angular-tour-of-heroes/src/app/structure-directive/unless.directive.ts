import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    hasView: boolean;

    @Input()
    set appUnless(condition: boolean) {
        // condition === true, 不要顯示
        if (!condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);

            this.hasView = true;
        } else if (condition && this.hasView) {
            this.viewContainer.clear()
            this.hasView = false;
        }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

}
