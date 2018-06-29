import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-spy-parent',
    templateUrl: './spy-parent.component.html',
    styleUrls: ['./spy-parent.component.css']
})
export class SpyParentComponent implements OnInit {
    messageIdx: number = 0;
    heroes: string[] = [];

    constructor() {
        this.log('constructor');
    }

    ngOnInit() {
        this.log('ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.log('ngOnChanges');
        console.log(changes);

    }

    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        this.log('ngDoCheck');

    }

    ngAfterContentInit() {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.log('ngAfterContentInit');

    }

    ngAfterContentChecked() {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        this.log('ngAfterContentChecked');

    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.log('ngAfterViewInit');

    }

    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        this.log('ngAfterViewChecked');

    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.log('ngOnDestroy');

    }

    update(): void {
        this.log('update start');
        let count = 0;
        for (let i = 0; i < 999999999; i++) {
            count++;
        }
        this.log('update end');
    }

    addHero(name): void {
        this.heroes.push(name);
    }

    reset(): void {
        this.log('-- reset --')
        this.heroes = [];
    }

    log(message): void {
        console.log(`[spy-parent] # ${this.messageIdx++} ${message}`);
    }

}
