import { Component, Optional } from '@angular/core';
import { AlertController, IonRouterOutlet, NavController, Platform, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { DbinprojectService } from './services/dataBase/dbinproject.service';
import { StorageService } from './services/storage/storage.service';
import { TitleStrategy } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  flagadmin : boolean =false;
  tokenRegister: string = '';
  NameUser: string = '';
  tap = 0;
  constructor(
    private storage : StorageService,
    private dbSer:DbinprojectService,
    public translate: TranslateService,
    private platform: Platform,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    @Optional() private routerOutlet?: IonRouterOutlet) 
  {
    
      this.checkLanguage("fa-ir");
      //this.checkLanguage("en-gb");
      this.platform.ready().then(() => {
        this.exitAppOnDoubleTap();
        this.exitAppOnAlert();
      });
      this.initializeApp();
      this.getNameUser();
  }
  async initializeApp() {
    this.tokenRegister = await this.storage.getItem('tokenRegister') || '';  // انتظار برای دریافت مقدار
    //alert('tokenRegister :'+ this.tokenRegister);
    if(this.tokenRegister ==''){
      this.navCtrl.navigateRoot('/register'); // صفحه جدید به عنوان root تنظیم می‌شود
    }
  }

  async getNameUser() {

    this.NameUser = await this.storage.getItem('userName') || '';
    if(this.NameUser==='ادمین'){
      this.flagadmin=true;
    }
    if(this.NameUser==='ژیلا سلیمانی'){
      this.flagadmin=true;
    }
    this.dbSer.setNameUser(this.NameUser);
  }

  ngOnInit() {
    this.getNameUser();
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
      header: this.translate.instant('Exit App'),
      subHeader: this.translate.instant('Confirm'),
      message: this.translate.instant('Are you sure'),
      buttons: [
        {
          text: this.translate.instant('NO'),
          role: this.translate.instant('Cancel1')
        },
        {
          text: this.translate.instant('YES'),
          role: this.translate.instant('Confirm'),
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
          this.translate.use('ar');
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
          this.translate.use('fa');
          document.documentElement.setAttribute('dir', 'rtl')
          this.translate.setDefaultLang('fa-ir');
          this.translate.use('fa-ir');
          break;
        }
      case 'en-gb':
        {
          this.translate.use('en');
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
