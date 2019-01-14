import { Component, OnInit, ContentChild } from '@angular/core';
import { ChildContentComponent } from '../child-content/child-content.component';

@Component({
    selector: 'app-after-content',
    templateUrl: './after-content.component.html',
    styleUrls: ['./after-content.component.sass']
})
export class AfterContentComponent implements OnInit {
    @ContentChild(ChildContentComponent) childContent: ChildContentComponent;

    message: string;

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentChecked(): void {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.

        if (this.childContent.input.length > 10) {
            this.message = 'Waring input > 10';
        } else {
            this.message = '';
        }
    }
}
