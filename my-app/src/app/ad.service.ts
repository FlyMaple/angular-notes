import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';

@Injectable({
    providedIn: 'root'
})
export class AdService {

    constructor() { }

    getAds(): AdItem[] {
        return [
            new AdItem(HeroProfileComponent, { name: 'Skye', desc: '111111111111111' }),
            new AdItem(HeroProfileComponent, { name: 'Tina', desc: '2222222222222222222' }),
            new AdItem(HeroJobAdComponent, { headline: 'aaaaaaaaaaaaa', body: 'bbbbbbbbbbbbb' }),
            new AdItem(HeroJobAdComponent, { headline: 'cccccccccccc', body: 'ccccccccccccc' }),
        ];
    }
}
