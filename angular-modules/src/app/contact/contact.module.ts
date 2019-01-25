import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactService } from './contact.service';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule
    ],
    declarations: [ContactComponent],
    providers: [
        ContactService,
        CoreModule
    ]
})
export class ContactModule { }
