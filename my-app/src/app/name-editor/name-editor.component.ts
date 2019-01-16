import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-name-editor',
    templateUrl: './name-editor.component.html',
    styleUrls: ['./name-editor.component.sass']
})
export class NameEditorComponent implements OnInit {
    name: FormControl;

    constructor() { }

    ngOnInit() {
        this.name = new FormControl();
    }

    updateName(): void {
        this.name.setValue(Math.random());
    }

}
