import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor(
    private platform: Platform) { }

  ngOnInit() {
  }

  
  openEitaa() {
    const eitaaUrl = 'https://eitaa.com/yasenokhbe12'; // لینک Eitaa خود را اینجا قرار دهید
    if (this.platform.is('capacitor')) {
      // برای اپلیکیشن‌های Capacitor
      window.open(eitaaUrl, '_system');
    } else {
      // برای اپلیکیشن‌های وب
      window.open(eitaaUrl, '_blank');
    }
  }
  openTelegram(){
    const eitaaUrl = 'https://t.me/yasenokhbe12'; // لینک telegaram خود را اینجا قرار دهید
    if (this.platform.is('capacitor')) {
      // برای اپلیکیشن‌های Capacitor
      window.open(eitaaUrl, '_system');
    } else {
      // برای اپلیکیشن‌های وب
      window.open(eitaaUrl, '_blank');
    }
  }

  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
}
