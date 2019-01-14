import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-countdown-timer',
    templateUrl: './countdown-timer.component.html',
    styleUrls: ['./countdown-timer.component.sass']
})
export class CountdownTimerComponent implements OnInit {
    intervalId: number = 0;
    seconds: number = 10;
    message: string = '';

    constructor() { }

    ngOnInit() {
    }

    start(): void {
        this.intervalId = window.setInterval(() => {
            this.seconds--;

            if (this.seconds === 0) {
                this.message = `Blast off!`;
            } else {
                if (this.seconds < 0) {
                    this.seconds = 10;
                }
                this.message = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
    }

    stop(): void {
        clearInterval(this.intervalId);
        this.message = `Holding at T-${this.seconds} seconds`;
    }
}
