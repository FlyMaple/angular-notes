import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';

@NgModule({
    imports: [
        CommonModule,
        DynamicComponentRoutingModule
    ],
    declarations: [DynamicComponentComponent, AdDirective, AdBannerComponent, HeroProfileComponent, HeroJobAdComponent],
    entryComponents: [HeroJobAdComponent, HeroProfileComponent],
})
export class DynamicComponentModule { }
