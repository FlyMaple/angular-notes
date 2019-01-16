import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { CountdownLocalVarParentComponent } from './countdown-local-var-parent/countdown-local-var-parent.component';
import { StyleComponent } from './style/style.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroDetailComponent },
    { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
    { path: 'version', component: VersionParentComponent },
    { path: 'vote-taker', component: VoteTakerComponent },
    { path: 'countdown-timer', component: CountdownLocalVarParentComponent },
    { path: 'style', component: StyleComponent },
    { path: 'dynamic-component', component: DynamicComponentComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: 'pipe', component: PipeComponent },
    { path: 'forms', component: FormsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
