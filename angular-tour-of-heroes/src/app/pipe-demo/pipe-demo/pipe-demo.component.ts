import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipe-demo',
    templateUrl: './pipe-demo.component.html',
    styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
    template: string = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, at suscipit quibusdam magnam dicta aspernatur aliquid reiciendis soluta molestiae quisquam? Voluptate aliquid dicta repellendus debitis aut aliquam, vitae modi illo.`;

    constructor() { }

    ngOnInit() {
    }

}
