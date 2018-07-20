import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { SharedMaterialModule } from '../shared-material.module';
import { SurveyComponent } from './survey/survey.component';
import { MatStepperIntl } from '@angular/material';
import { BlogComponent } from './blog/blog.component';
import { AddPostDialogComponent } from './blog/add-post-dialog/add-post-dialog.component';
import { AddPostConfirmDialogComponent } from './blog/add-post-confirm-dialog/add-post-confirm-dialog.component';

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
    entryComponents: [
        AddPostDialogComponent,
        AddPostConfirmDialogComponent,
    ],
    declarations: [DashboardComponent, MainComponent, SurveyComponent, BlogComponent, AddPostDialogComponent, AddPostConfirmDialogComponent]
})
export class DashboardModule { }
