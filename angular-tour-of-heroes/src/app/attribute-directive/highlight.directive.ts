import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input() bgColor: string;
    @Input() fontColor: string;

    constructor(private el: ElementRef) {
        console.log('highlight constructor');
        console.log(el);
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('highlight init');
    }

    highlight(bgColor: string = 'black', fontColor: string): void {
        this.el.nativeElement.style.backgroundColor = bgColor;
        this.el.nativeElement.style.color = fontColor;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.bgColor, this.fontColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null, null);
    }
}
