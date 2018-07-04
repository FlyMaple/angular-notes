import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HeroModule } from './hero/hero.module';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { HookTestModule } from './hook-test/hook-test.module';
import { TestComponent } from './test/test.component';
import { PipeDemoModule } from './pipe-demo/pipe-demo.module';
import { YoyoPipe } from './yoyo.pipe';

@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        TestComponent,
        YoyoPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
        HeroModule,
        CustomerDashboardModule,
        HookTestModule,
        PipeDemoModule,
    ],
    exports: [
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
