import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';

const routes: Routes = [
    { path: '', component: StructureDirectiveComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StructureDirectiveRoutingModule { }
