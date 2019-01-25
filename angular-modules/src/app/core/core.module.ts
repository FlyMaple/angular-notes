import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { UserService, UserConfig } from './user.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TitleComponent],
    exports: [
        TitleComponent
    ],
    providers: [
        UserService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: UserConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [{
                provide: UserConfig,
                useValue: config
            }]
        };
    }
}
