import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
    colorControl: FormControl;

    constructor() { }

    ngOnInit() {
        this.colorControl = new FormControl();
    }

}
