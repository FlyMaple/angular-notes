import { Component, OnInit } from '@angular/core';
import { DownloaderService } from './downloader.service';

@Component({
    selector: 'app-downloader',
    templateUrl: './downloader.component.html',
    styleUrls: ['./downloader.component.sass'],
    providers: [
        { provide: DownloaderService, useClass: DownloaderService }
    ]
})
export class DownloaderComponent implements OnInit {
    contents: string;

    constructor(
        private downloaderService: DownloaderService
    ) { }

    ngOnInit() {
    }

    download(): void {
        this.downloaderService
            .getTextFile()
            .subscribe(data => this.contents = data);
    }
    clear(): void {
        this.contents = undefined;
    }

}
