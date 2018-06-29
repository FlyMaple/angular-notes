import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HookTestRoutingModule } from './hook-test-routing.module';
import { HookTestComponent } from './hook-test/hook-test.component';
import { ChildComponent } from './child/child.component';
import { SpyParentComponent } from './spy-parent/spy-parent.component';
import { SpyDirective } from './spy.directive';

@NgModule({
    imports: [
        CommonModule,
        HookTestRoutingModule
    ],
    declarations: [HookTestComponent, ChildComponent, SpyParentComponent, SpyDirective]
})
export class HookTestModule { }
