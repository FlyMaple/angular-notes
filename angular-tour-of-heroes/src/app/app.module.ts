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

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    TestComponent,
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
    HookTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
