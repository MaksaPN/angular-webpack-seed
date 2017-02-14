import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import './styles.scss';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(public translate: TranslateService) {
        translate.addLangs(["en", "de"]);
        translate.setDefaultLang('en');

        let browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
    }
}
