import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-version-parent',
    templateUrl: './version-parent.component.html',
    styleUrls: ['./version-parent.component.sass']
})
export class VersionParentComponent implements OnInit {
    major: number = 10;
    minor: number = 0;

    constructor() { }

    ngOnInit() {
    }

    newMajor(): void {
        this.major++
        this.minor = 0;
    }

    newMinor(): void {
        this.minor++;
    }
}
