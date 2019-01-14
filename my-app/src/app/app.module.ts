import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { SpyParentComponent } from './spy-parent/spy-parent.component';
import { MySpyDirective } from './my-spy.directive';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { ChildContentComponent } from './child-content/child-content.component';
import { AfterContentComponent } from './after-content/after-content.component';
import { HeroItemComponent } from './hero-item/hero-item.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VoteComponent } from './vote/vote.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { CountdownLocalVarParentComponent } from './countdown-local-var-parent/countdown-local-var-parent.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent,
        PeekABooComponent,
        PeekABooParentComponent,
        LifecycleHooksComponent,
        SpyParentComponent,
        MySpyDirective,
        OnChangesComponent,
        OnChangesParentComponent,
        DoCheckComponent,
        DoCheckParentComponent,
        ChildViewComponent,
        AfterViewComponent,
        AfterContentParentComponent,
        ChildContentComponent,
        AfterContentComponent,
        HeroItemComponent,
        VersionParentComponent,
        VersionChildComponent,
        VoteComponent,
        VoteTakerComponent,
        CountdownLocalVarParentComponent,
        CountdownTimerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        HeroService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
