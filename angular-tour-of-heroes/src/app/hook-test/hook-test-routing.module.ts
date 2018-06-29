import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HookTestComponent } from './hook-test/hook-test.component';

const routes: Routes = [
    { path: '', component: HookTestComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HookTestRoutingModule { }
