import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerModule } from './customer/customer.module';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'customers', loadChildren: () => CustomerModule },
    { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
