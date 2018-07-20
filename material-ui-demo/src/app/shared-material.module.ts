import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MAT_DATE_LOCALE,
    MAT_DATE_FORMATS,
    MatSelectModule,
    MAT_LABEL_GLOBAL_OPTIONS,
    MatCheckboxModule,
    MAT_CHECKBOX_CLICK_ACTION,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule
} from '@angular/material';
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
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatGridListModule,
        MatCardModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatDialogModule
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
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatGridListModule,
        MatCardModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatDialogModule
    ],
    declarations: [],
    providers: [{
        provide: MAT_DATE_LOCALE,
        useValue: 'zh-TW',
    }, {
        provide: MAT_DATE_FORMATS,
        useValue: TW_FORMATS,
    }, {
        provide: MAT_LABEL_GLOBAL_OPTIONS,
        useValue: {
            float: 'always',
        },
    }, {
        provide: MAT_CHECKBOX_CLICK_ACTION,
        useValue: 'check-indeterminate',
        // noop、check、check-indeterminate
    }],
})
export class SharedMaterialModule { }
