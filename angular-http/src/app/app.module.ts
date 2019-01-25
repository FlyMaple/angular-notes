import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { ConfigComponent } from './config/config.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { UploaderComponent } from './uploader/uploader.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        ConfigComponent,
        DownloaderComponent,
        UploaderComponent,
        PackageSearchComponent,
        MessagesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, {
            dataEncapsulation: false,
            passThruUnknownUrl: true,
            put204: false // return entity after PUT/update
          }
        )
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
