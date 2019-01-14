import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { CountdownLocalVarParentComponent } from './countdown-local-var-parent/countdown-local-var-parent.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroDetailComponent },
    { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
    { path: 'version', component: VersionParentComponent },
    { path: 'vote-taker', component: VoteTakerComponent },
    { path: 'countdown-timer', component: CountdownLocalVarParentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
