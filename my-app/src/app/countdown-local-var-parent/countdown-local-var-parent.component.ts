import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
    selector: 'app-countdown-local-var-parent',
    templateUrl: './countdown-local-var-parent.component.html',
    styleUrls: ['./countdown-local-var-parent.component.sass']
})
export class CountdownLocalVarParentComponent implements OnInit {
    @ViewChild(CountdownTimerComponent) countdownTimer: CountdownTimerComponent;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        
        setTimeout(() => this.countdownTimer.seconds = 0, 0);
    }

    stop(countdownTimer: CountdownTimerComponent): void {
        countdownTimer.stop();
    }

    stop2(): void {
        this.countdownTimer.stop();
    }
}
