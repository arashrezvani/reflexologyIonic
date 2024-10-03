import { Component, Optional } from '@angular/core';
import { AlertController, IonRouterOutlet, NavController, Platform, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  tap = 0;
  constructor(
    public translate: TranslateService,
    private platform: Platform,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    @Optional() private routerOutlet?: IonRouterOutlet) {
      this.checkLanguage("fa-ir");
      //this.checkLanguage("en-gb");
      this.platform.ready().then(() => {
        this.exitAppOnDoubleTap();
        // this.exitAppOnAlert();
      });

    }
    navigateToPage(page: string) {
      this.navCtrl.navigateRoot(page); // صفحه جدید به عنوان root تنظیم می‌شود
    }
    exitAppOnAlert() {
      if(Capacitor.getPlatform() == 'android') {
        this.platform.backButton.subscribeWithPriority(10, async() => {
          if (!this.routerOutlet?.canGoBack()) {
            this.alertExit();
          }
        });
      }
    }
  
    exitAppOnDoubleTap() {
      if(Capacitor.getPlatform() == 'android') {
        this.platform.backButton.subscribeWithPriority(10, async() => {
          if (!this.routerOutlet?.canGoBack()) {
              // double tap exit
              this.tap++;
              if(this.tap == 2) App.exitApp();
              else {
                this.doubleTapExitToast();
              }
          }
        });
      }
    }
  
  
    async doubleTapExitToast() {
      console.log('doubletapexit was called!');
      let toast = await this.toastCtrl.create({
        message: 'Tap back button again to exit the App before I\'m gone',
        duration: 3000,
        position: 'bottom',
        color: 'primary'
      });
      toast.present();
      const dismiss = await toast.onDidDismiss();
      if(dismiss) {
        console.log('dismiss: ', dismiss);
        this.tap = 0;
      }
    }
  
    async alertExit() {
      console.log('alert');
      const alert = await this.alertCtrl.create({
        header: 'Exit App',
        subHeader: 'Confirm',
        message: 'Are you sure you want to exit the App?',
        buttons: [
          {
            text: 'NO',
            role: 'cancel'
          },
          {
            text: 'YES',
            role: 'confirm',
            handler: () => { App.exitApp(); }
          }
        ],
      });
      alert.present();
    }

     // Check Language And Set Direction 
    checkLanguage(language:any) {
    //(language);
    //language="fa-ir";

    switch (language) {
      case 'ar': case 'ar-ar':
        {
          document.documentElement.setAttribute('dir', 'rtl')
          this.translate.setDefaultLang('ar');
          this.translate.use('ar');
          break;
        }
      case 'ru-ru':
        {
          document.documentElement.setAttribute('dir', 'ltr')
          this.translate.setDefaultLang('ru');
          this.translate.use('ru');
          break;
        }
      case 'fa-ir':
        {
          document.documentElement.setAttribute('dir', 'rtl')
          this.translate.setDefaultLang('fa-ir');
          this.translate.use('fa-ir');
          break;
        }
      case 'en-gb':
        {
          document.documentElement.setAttribute('dir', 'ltr');
          this.translate.setDefaultLang('en');
          this.translate.use('en');
          break;
        }

      case 'tr-tr':
        {
          document.documentElement.setAttribute('dir', 'ltr');
          this.translate.setDefaultLang('tr-tr');
          this.translate.use('tr-tr');
          break;
        }
    }
  }

}
