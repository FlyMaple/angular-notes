import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersService } from './customers.service';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        CustomersRoutingModule,
        CoreModule
    ],
    declarations: [CustomersComponent, CustomersListComponent, CustomersDetailComponent],
    providers: [
        CustomersService
    ]
})
export class CustomersModule { }
