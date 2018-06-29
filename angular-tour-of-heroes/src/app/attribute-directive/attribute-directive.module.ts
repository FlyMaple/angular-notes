import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeDirectiveRoutingModule } from './attribute-directive-routing.module';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    AttributeDirectiveRoutingModule
  ],
  declarations: [AttributeDirectiveComponent, HighlightDirective]
})
export class AttributeDirectiveModule { }
