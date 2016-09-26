import { Component } from '@angular/core';
import {AppSettings} from '../../app-settings';

@Component({
    selector: 'app-main',
    templateUrl: 'app/app-main/templates/app-main.component.html',
    styleUrls: ['app/app-main/styles/app-main.component.css']
})
export class AppMainComponent {
    title = AppSettings.APP_TITLE;
}