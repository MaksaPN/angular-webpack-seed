import { NgModule } from '@angular/core';
import { TranslateModule } from "ng2-translate/ng2-translate";

import { AboutRoutingModule } from './about.routing';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        AboutRoutingModule,
        TranslateModule
    ],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }
