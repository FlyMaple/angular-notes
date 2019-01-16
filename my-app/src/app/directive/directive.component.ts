import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.sass']
})
export class DirectiveComponent implements OnInit {
    parentColor: string = 'gold';
    items: string[];

    constructor() { }

    ngOnInit() {
        this.items = [
            "A",
            "B",
            "C",
            "D",
            "E",
        ];
    }

}
