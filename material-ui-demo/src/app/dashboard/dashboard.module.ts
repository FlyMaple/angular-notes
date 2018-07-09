import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { SharedMaterialModule } from '../shared-material.module';
import { SurveyComponent } from './survey/survey.component';
import { MatStepperIntl } from '@angular/material';

export class TwStepperIntl extends MatStepperIntl {
    optionalLabel = '非必填';
}

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedMaterialModule
    ],
    exports: [
    ],
    providers: [{
        provide: MatStepperIntl,
        useClass: TwStepperIntl,
    }],
    declarations: [DashboardComponent, MainComponent, SurveyComponent]
})
export class DashboardModule { }
