import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-structure-directive',
    templateUrl: './structure-directive.component.html',
    styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
    bool: boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
