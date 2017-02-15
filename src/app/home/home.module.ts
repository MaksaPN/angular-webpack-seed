import { NgModule } from '@angular/core';
import { TranslateModule } from "ng2-translate/ng2-translate";

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    TranslateModule
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
