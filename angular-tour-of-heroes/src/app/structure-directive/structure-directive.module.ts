import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureDirectiveRoutingModule } from './structure-directive-routing.module';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { UnlessDirective } from './unless.directive';
import { PipeDemoModule } from '../pipe-demo/pipe-demo.module';

@NgModule({
    imports: [
        CommonModule,
        StructureDirectiveRoutingModule,
        PipeDemoModule
    ],
    declarations: [StructureDirectiveComponent, UnlessDirective]
})
export class StructureDirectiveModule { }
