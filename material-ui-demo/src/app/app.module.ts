import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedMaterialModule } from './shared-material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, //  套用動畫
        // NoopAnimationsModule,  //  取消動畫
        SharedMaterialModule,
        HttpClientModule,
        // FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
