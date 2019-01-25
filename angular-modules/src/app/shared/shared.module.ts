import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        AwesomePipe,
        HighlightDirective
    ],
    exports: [
        AwesomePipe,
        HighlightDirective,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }
