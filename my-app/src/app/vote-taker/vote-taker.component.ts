import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vote-taker',
    templateUrl: './vote-taker.component.html',
    styleUrls: ['./vote-taker.component.sass']
})
export class VoteTakerComponent implements OnInit {
    agreed: number = 0;
    disagreed: number = 0;
    voters: string[] = ['Skye', 'Tina', 'Shane'];

    constructor() { }

    ngOnInit() {
    }


    onVoted(agreed: boolean): void {
        agreed ? this.agreed++ : this.disagreed++;
    }
}
