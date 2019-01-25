import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Item } from '../items/item.service';

export class Contact {
    constructor(
        public id: number,
        public name: string
    ) { }
}

const contacts: Contact[] = [
    new Contact(1, 'Skye'),
    new Contact(2, 'Kai'),
    new Contact(3, 'RS'),
];

@Injectable()
export class ContactService {

    constructor() { }

    getContacts(): Observable<Contact[]> {
        return of(contacts);
    }
}
