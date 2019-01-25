import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsModule } from './items/items.module';
import { CustomersModule } from './customers/customers.module';

const routes: Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    // { path: 'items', loadChildren: './items/items.module#ItemsModule' },
    // { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' }
    { path: 'items', loadChildren: () => ItemsModule },
    { path: 'customers', loadChildren: () => CustomersModule }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
