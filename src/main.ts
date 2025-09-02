import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { StatusBar, Style } from '@capacitor/status-bar';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

async function initApp() {
  await StatusBar.setOverlaysWebView({ overlay: false }); // جلوگیری از همپوشانی
  await StatusBar.setStyle({ style: Style.Light }); // رنگ متن روشن
  await StatusBar.setBackgroundColor({ color: '#ffffff' }); // رنگ پس‌زمینه سفید
}

initApp().catch(err => console.error(err)); // فراخوانی تابع با مدیریت خطا


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
