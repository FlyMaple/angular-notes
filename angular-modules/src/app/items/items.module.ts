import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';
import { ItemService } from './item.service';
import { ItemsComponent } from './items/items.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        ItemsRoutingModule,
        CoreModule
    ],
    declarations: [ItemsListComponent, ItemsDetailComponent, ItemsComponent],
    providers: [
        ItemService
    ]
})
export class ItemsModule { }
