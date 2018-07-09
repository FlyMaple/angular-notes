import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatRippleModule, MatSidenavModule, MatToolbarModule, MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatRippleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatMenuModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatRippleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatMenuModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    declarations: []
})
export class SharedMaterialModule { }
