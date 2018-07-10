import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatRippleModule, MatSidenavModule, MatToolbarModule, MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

export const TW_FORMATS = {
    parse: {
        dateInput: 'YYY/MM/DD'
    },
    display: {
        dateInput: 'YYYY/MM/DD',
        monthYearLabel: 'YYYY MMM',
        dateA11yLabel: 'YYYY/MM/DD',
        monthYearA11yLabel: 'YYYY MMM'
    },
};

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
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatMomentDateModule,
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
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatMomentDateModule,
    ],
    declarations: [],
    providers: [{
        provide: MAT_DATE_LOCALE,
        useValue: 'zh-TW',
    }, {
        provide: MAT_DATE_FORMATS,
        useValue: TW_FORMATS,
    }],
})
export class SharedMaterialModule { }
