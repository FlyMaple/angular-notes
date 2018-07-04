import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

const routes: Routes = [
    { path: '', component: PipeDemoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PipeDemoRoutingModule { }
