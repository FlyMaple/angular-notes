import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdService } from '../ad.service';

@Component({
    selector: 'app-dynamic-component',
    templateUrl: './dynamic-component.component.html',
    styleUrls: ['./dynamic-component.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DynamicComponentComponent implements OnInit {
    ads: AdItem[];

    constructor(private adService: AdService) { }

    ngOnInit() {
        this.ads = this.adService.getAds();
    }

}
