import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HookTestModule } from './hook-test/hook-test.module';


const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
    { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
    { path: 'hero', loadChildren: './hero/hero.module#HeroModule' },
    { path: 'hook-test', loadChildren: './hook-test/hook-test.module#HookTestModule' },
    { path: 'dynamic-component', loadChildren: './dynamic-component/dynamic-component.module#DynamicComponentModule', },
    { path: 'attribute-directive', loadChildren: './attribute-directive/attribute-directive.module#AttributeDirectiveModule', },
    { path: 'structure-directive', loadChildren: './structure-directive/structure-directive.module#StructureDirectiveModule' },
    { path: 'pipe-demo', loadChildren: './pipe-demo/pipe-demo.module#PipeDemoModule', },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
