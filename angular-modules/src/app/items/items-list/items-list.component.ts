import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../item.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.sass']
})
export class ItemsListComponent implements OnInit {
    items$: Observable<Item[]>;

    constructor(
        private itemService: ItemService
    ) { }

    ngOnInit() {
        this.items$ = this.itemService.getItems();
    }

}
