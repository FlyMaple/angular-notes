import { Component, OnInit } from '@angular/core';
import { Config } from './config';
import { ConfigService } from '../config.service';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.sass'],
    providers: [
        { provide: ConfigService, useClass: ConfigService }
    ]
})
export class ConfigComponent implements OnInit {
    config: Config;
    error: any;
    headers: string[] = [];

    constructor(
        private configService: ConfigService
    ) { }

    ngOnInit() {
    }

    clear(): void {
        this.config = undefined;
        this.error = undefined;
        this.headers = [];
    }

    showConfig(): void {
        this.configService
            .getConfig()
            .subscribe(config => this.config = config);
    }
    showConfigResponse(): void {
        this.configService
            .getConfigResponse()
            .subscribe(response => {
                let keys = response.headers.keys();
                this.config = response.body;
                keys.forEach(key => this.headers.push(`${key}: ${response.headers.get(key)}`))
            });
    }
    makeError(): void {
        this.configService
            .makeIntentionalError()
            .subscribe(
                null,
                error => this.error = error
            );
    }
}
