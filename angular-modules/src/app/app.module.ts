import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact/contact.module';
import { CustomersModule } from './customers/customers.module';
import { ItemsModule } from './items/items.module';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ContactModule,
        // ItemsModule,
        // CustomersModule,
        CoreModule.forRoot({ username: 'tinaaaaaaaaaaaaaaaa' }),
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
