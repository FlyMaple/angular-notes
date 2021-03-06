import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { SurveyComponent } from './survey/survey.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [{
    path: '', component: DashboardComponent, children: [
        { path: '', component: MainComponent, },
        { path: 'survey', component: SurveyComponent, },
        { path: 'blog', component: BlogComponent, }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
