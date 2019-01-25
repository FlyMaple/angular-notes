import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from '../contact.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
    contacts: Contact[];
    contact: Contact;
    idx: number = -1;

    constructor(
        private contactService: ContactService
    ) { }

    ngOnInit() {
        this.contactService.getContacts().subscribe(contacts => {
            this.idx = 0;
            this.contacts = contacts;
            this.contact = contacts[this.idx];
        });
    }

    onSubmit(): void {
        console.warn(`Saved`);
    }

    next(): void {
        this.idx = (this.idx + 1) % this.contacts.length;
        this.contact = this.contacts[this.idx];
    }

    new(): void {
        this.contacts.push(
            new Contact(Math.random(), '')
        );
        this.idx = this.contacts.length - 1;
        this.contact = this.contacts[this.idx];
    }
}
