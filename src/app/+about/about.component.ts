import { Component, OnInit } from '@angular/core';
import './about.component.scss'

@Component({
    selector: 'about',
    templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('navigated to about...');
    }
}
