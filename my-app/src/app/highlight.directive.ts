import { Directive, Input, SimpleChanges, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('appHighlight') color: string;
    @Input() defaultColor: string;


    constructor(
        private el: ElementRef
    ) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.color || this.defaultColor || 'yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    highlight(color: string): void {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
