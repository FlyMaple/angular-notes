import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    timer: Date;
    timerAsync$: Observable<Date>;
    timerAsync2$: Observable<Date>;

    constructor() { }

    ngOnInit() {
        this.run();
    }

    run(): void {
        setInterval(() => {
            this.timer = new Date();
        }, 1000);

        this.timerAsync$ = interval(1000).pipe(
            map(() => new Date())
        );

        this.timerAsync2$ = new Observable(observer => {
            setInterval(() => observer.next(new Date()), 1000);
        });
    }

}
