import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.sass']
})
export class PipeComponent implements OnInit {
    now: Date = new Date();
    items: number[] = [];

    constructor() { }

    ngOnInit() {
        for (let i = 0; i < 10; i++) {
            this.items.push(i);
        }
    }

    add(): void {
        let length = this.items.length;

        for (let i = length; i < length + 20; i++) {
            this.items.push(i);
        }
    }
}
