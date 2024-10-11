import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'; // Đường dẫn tới MainPageComponent
import { AppComponent } from './app.component'; // Đường dẫn tới AppComponent
import { TuyaPageComponent } from './tuya-page/tuya-page.component';
import { QuanPageComponent } from './quan-page/quan-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },  // Màn hình chính (landing page)
    { path: 'appTuya', component: TuyaPageComponent },     // Màn hình hiện tại của bạn
    { path: 'appQuan', component: QuanPageComponent}
];
