import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    // {
    //     path: '', component: AppComponent, children: [{
    //         path: '', redirectTo: '/dashboard', pathMatch: 'full'
    //     }, {
    //         path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',
    //     }]
    // },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full', },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
