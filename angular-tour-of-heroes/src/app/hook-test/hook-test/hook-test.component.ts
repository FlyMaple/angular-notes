import { Component, OnInit, SimpleChanges, ViewChildren, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'app-hook-test',
    templateUrl: './hook-test.component.html',
    styleUrls: ['./hook-test.component.css']
})
export class HookTestComponent implements OnInit {
    hasChild: boolean = false;
    hasSpy: boolean = false;
    name: any;
    name2: string = 'Skye';
    parentName: any;
    @ViewChild(ChildComponent) child: ChildComponent;

    constructor() {
    }

    ngOnInit() {
    }

    changeName(): void {
        this.name = Math.random();
    }

    changeParentName(): void {
        this.parentName = Math.random();
    }

    toggleChildFunction(): void {
        this.child.test();
    }

    childItemClick(data: string): void {
        console.log(data);
    }
}
