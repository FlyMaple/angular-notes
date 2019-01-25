import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { CustomizeNameDirective } from './customize-name.directive';
import { IdentityRevealedDirective } from './identity-revealed.directive';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionComponent } from './question/question.component';
import { TimerComponent } from './timer/timer.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

@NgModule({
    declarations: [
        AppComponent,
        HeroFormComponent,
        HeroFormReactiveComponent,
        CustomizeNameDirective,
        IdentityRevealedDirective,
        QuestionFormComponent,
        QuestionComponent,
        TimerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CustomerDashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
