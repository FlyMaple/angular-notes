import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() name: any;
    messageIdx: number = 0;
    updated: boolean = false;
    _name: string;

    @Input()
    set name2(name: string) {
        this._name = `>>> ${name} <<<`;
    }

    get name2(): string {
        return this._name;
    }

    @Output() itemClick = new EventEmitter<any>();

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

    updateBoolean(): void {
        this.updated = !this.updated;
    }

    log(message): void {
        console.log(`# ${this.messageIdx++} ${message}`);
    }

    test(): void {
        console.warn('yoyoyo');
    }
}   
