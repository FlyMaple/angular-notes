import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdItem } from '../ad-item';
import { AdComponent } from '../ad-component';

@Component({
    selector: 'app-ad-banner',
    template: `
            <div class="ad-banner">
              <h3>Advertisements</h3>
              <ng-template ad-host></ng-template>
            </div>
          `,
    styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {
    @Input() ads: AdItem[];
    currentAdIndex: number = -1;
    @ViewChild(AdDirective) adHost: AdDirective;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        console.log(this.ads);
        this.loadComponent();
        this.getAds();
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        clearInterval(this.interval);
    }

    loadComponent(): void {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;

        let adItem = this.ads[this.currentAdIndex];

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        let viewContainerRef = this.adHost.viewContainerRef;

        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);

        (<AdComponent>componentRef.instance).data = adItem.data;
    }

    getAds(): void {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }
}
