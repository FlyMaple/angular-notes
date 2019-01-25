import { Component, OnInit } from '@angular/core';
import { UploaderService } from './uploader.service';

@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.sass'],
    providers: [
        { provide: UploaderService, useClass: UploaderService }
    ]
})
export class UploaderComponent implements OnInit {
    message: string;

    constructor(
        private uploaderService: UploaderService
    ) { }

    ngOnInit() {
    }

    onPicked(el: HTMLInputElement): void {
        const file = el.files[0];

        console.log(file);
    }
}
