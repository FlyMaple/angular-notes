import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from } from 'rxjs';

export class Item {
    constructor(
        public id: number,
        public name: string
    ) {}
}

const items: Item[] = [
    new Item(1, 'AAAAA'),
    new Item(2, 'BBBBB'),
    new Item(3, 'CCCCC'),
    new Item(4, 'DDDDD'),
    new Item(5, 'EEEEE'),
];

@Injectable()
export class ItemService implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.warn(`[ItemService] ngOnInit`);
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.warn(`[ItemService] ngOnDestroy`);
    }

    getItems(): Observable<Item[]> {
        return of(items);
    }

    getItem(id: any): Observable<Item> {
        return of(items.find(item => item.id === +id));
    }
}
