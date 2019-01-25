import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    showHeroes: boolean = false;
    showConfig: boolean = false;
    showDownloader: boolean = false;
    showUploader: boolean = true;
    showSearch: boolean = true;

}
