import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeDemoRoutingModule } from './pipe-demo-routing.module';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { KusoPipe } from './kuso.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
      KusoPipe,
  ],
  declarations: [PipeDemoComponent, KusoPipe]
})
export class PipeDemoModule { }
