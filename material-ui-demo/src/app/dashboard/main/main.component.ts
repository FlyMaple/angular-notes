import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry, MatRipple, MatSidenav, MatDrawerToggleResult } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    @ViewChild(MatRipple) ripple: MatRipple;

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        this.matIconRegistry.addSvgIconInNamespace(
            'custom-svg',
            'angular',
            this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/wifi.svg')
        );

        this.matIconRegistry.registerFontClassAlias(
            'fontawesome',
            'fa'
        );

        this.log(this.ripple);
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }

    triggerRipple(): void {
        const point1 = this.ripple.launch(0, 0, {
            color: 'pink',
            centered: true,
            persistent: true,
            radius: 50,
        });
        const point2 = this.ripple.launch(0, 0, {
            color: 'green',
            centered: true,
            persistent: true,
            radius: 25,
        });

        setTimeout(() => {
            point1.fadeOut();
        }, 3000);

        setTimeout(() => {
            point2.fadeOut();
        }, 3500);

        this.log(point1, point2);
    }

    clearRipple(): void {
        this.ripple.fadeOutAll();
    }

    log(...args: any[]): void {
        console.log(args)
    }
}
