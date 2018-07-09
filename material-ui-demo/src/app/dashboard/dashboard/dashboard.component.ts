import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry, MatRipple, MatSidenav, MatDrawerToggleResult } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @ViewChild(MatSidenav) sideNav: MatSidenav;

    constructor() {
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        Object.assign(this.sideNav, {
            mode: 'push',
            disableClose: false,
            position: 'start',
        });
    }

    toggleSideNav(sideNav: MatSidenav): void {
        this.log(sideNav);
        sideNav.toggle().then((result: MatDrawerToggleResult) => {
            this.log(result);
        });
    }

    openSideNav(sideNav: MatSidenav): void {
        this.log(sideNav);
        sideNav.open().then((result: MatDrawerToggleResult) => {
            this.log(result);
        });
    }

    closeSideNav(sideNav: MatSidenav): void {
        this.log(sideNav);
        sideNav.close().then((result: MatDrawerToggleResult) => {
            this.log(result);
        });
    }

    onSideNavOpened(): void {
        this.log('SideNav is opened.');
    }

    onSideNavClosed(): void {
        this.log('SideNav is closed.');
    }

    log(...args: any[]): void {
        console.log(args)
    }
}
