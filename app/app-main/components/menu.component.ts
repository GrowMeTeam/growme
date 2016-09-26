import { Component } from '@angular/core';
import {AppSettings} from '../../app-settings';

@Component({
    selector: 'my-menu',
    templateUrl: 'app/app-main/templates/menu.component.html',
    styleUrls: ['app/app-main/styles/menu.component.css']
})
export class MenuComponent {
    title = AppSettings.APP_TITLE;
}