import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AdItem } from '../ad-item';
import { interval } from 'rxjs';
import { AdDirective } from '../ad.directive';
import { AdComponent } from '../ad-component';

@Component({
    selector: 'app-ad-banner',
    templateUrl: './ad-banner.component.html',
    styleUrls: ['./ad-banner.component.sass']
})
export class AdBannerComponent implements OnInit {
    @Input() ads: AdItem[];
    intervalId: any;
    currentAdIdx = -1;
    @ViewChild(AdDirective) adHost: AdDirective;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngOnInit() {
        this.loadComponent();
        this.getAds();
    }

    loadComponent(): void {
        this.currentAdIdx = (this.currentAdIdx + 1) % this.ads.length;
        let ad = this.ads[this.currentAdIdx];

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ad.component);
        
        let viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = this.adHost.viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = ad.data;
    }

    getAds(): void {
        this.intervalId = setInterval(() => {
            this.loadComponent();
        }, 2000);
    }
}
