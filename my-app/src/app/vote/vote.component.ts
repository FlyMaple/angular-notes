import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.sass']
})
export class VoteComponent implements OnInit {
    @Input() voter: string;
    @Output() voted: EventEmitter<boolean> = new EventEmitter<boolean>();

    didVote: boolean = false;
  
    constructor() { }
  
    ngOnInit() {
    }
  
    vote(agreed: boolean): void {
        this.didVote = true
        this.voted.emit(agreed);
    }
}
