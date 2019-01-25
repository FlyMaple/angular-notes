import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService, Item } from '../item.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-items-detail',
    templateUrl: './items-detail.component.html',
    styleUrls: ['./items-detail.component.sass']
})
export class ItemsDetailComponent implements OnInit {
    item: Item;

    constructor(
        private activeRoute: ActivatedRoute,
        private itemService: ItemService
    ) { }

    ngOnInit() {
        this.activeRoute.paramMap.subscribe(d => {
            var id = d.get('id');

            this.itemService.getItem(id).subscribe(item => this.item = item);
        });
    }

}
