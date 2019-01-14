import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-version-child',
    templateUrl: './version-child.component.html',
    styleUrls: ['./version-child.component.sass']
})
export class VersionChildComponent implements OnInit {
    @Input() major: string;
    @Input() minor: string;

    logs: string[] = [];

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.

        for (let propName in changes) {
            let change = changes[propName];

            if (change.isFirstChange()) {
                this.logIt(`${propName} is init: ${change.currentValue}`);
            } else {
                this.logIt(`${propName} change to ${change.currentValue} from ${change.previousValue}`);
            }
        }
    }

    logIt(message): void {
        this.logs.push(message);
    }
}
