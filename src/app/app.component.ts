import { Component, Optional } from '@angular/core';
import { AlertController, IonRouterOutlet, NavController, Platform, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { DbinprojectService } from './services/dataBase/dbinproject.service';
import { StorageService } from './services/storage/storage.service';
import { TitleStrategy } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Router } from '@angular/router';
import { PointGroup,PonitsService } from './services/acupressure/ponits/ponits.service';
import { Preferences } from '@capacitor/preferences';
import { LaunchServiceService } from './services/LaunchService/launch-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuSearchTerm: string = '';
  groups: PointGroup[] = [];
  public filteredGroups: PointGroup[] = [];

  // آرایه منو
  reflexologyMenu: string[] = [
    "reflexology",
    "BossPoint",
    "nerves",
    "digestive",
    "FrozenShoulder",
    "NeckWaistKneesAnkles",
    "hypertension",
    "nose",
    "eye",
    "mouth",
    "ear",
    "fever",
    "addiction",
    "toothache",
    "diabetes",
    "headache",
    "slimming",
    "AlarmPoint",
    "WellPoint",
    "WaterPoint",
    "SourcePoint",
    "ConnectingPoint",
    "EntryPoint",
    "ExitPoint",
    "TonificationPoint",
    "SedationPoint",
    "TransportPoint",
    "BrookPoint",
    "TwoCommandPoint",
    "FourCommandPoint",
    "SixCommandPoint",
    "LowerSeaPointsOfTheSixBowelsPoint",
    "EightMeetingPoint",
    "ConfluencePointsOfTheEightVesselsPoint",
    "SevenPointForCVAPoint",
    "8PointsForBeriberi",
    "NinePointsForRecoveryYang",
    "WindowsOfHeavenPoint",
    "StreamPoint",
    "MaDanYangTwelveHeavenlyStarPoint",
    "13GhostPoint",
    "ThreeJiaoProblems",
    "ThreeSubstancesPoint",
    "4GatePoint",
    "PointsOfTheFourSeasSeaOfQi",
    "PointsOfTheFourSeasSeaOfBlood",
    "PointsOfTheFourSeasSeaOfWater&Grain",
    "PointsOfTheFourSeasSeaOfMarrow",
    "RiverPoint",
    "SeaPoint",
    "WoodPoint",
    "FirePoint",
    "EarthPoint",
    "MetalPoint",
    "FrontMuPoints",
    "8exYinLink",
    "8exYangLink",
    "8exYangHeel",
    "8exYinHeel",
    "8excv",
    "8exgv",
    "8exbv",
    "8extv"
  ];
  
  flagadmin : boolean =false;
  flagLogin : boolean =false;
  tokenRegister: string = '';
  Counter: string = '';
  CounterRegister: number =0;
  CounterRegister2: number =0;
  NameUser: string = '';
  tap = 0;
  constructor(
    private pointsService: PonitsService,
    private launchService: LaunchServiceService,
    private storage : StorageService,
    private dbSer:DbinprojectService,
    public translate: TranslateService,
    private platform: Platform,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private router: Router,
    @Optional() private routerOutlet?: IonRouterOutlet) 
  {
    if (Capacitor.isNativePlatform()) {
      // تنظیم استایل نوار وضعیت
      //StatusBar.setStyle({ style: Style.Dark }); // یا Style.Light بسته به نیاز
      // اختیاری: مخفی کردن نوار وضعیت
      // StatusBar.hide();
      // اختیاری: نمایش نوار وضعیت
      // StatusBar.show();
      // تنظیم رنگ پس‌زمینه نوار وضعیت (فقط در Android)
      //StatusBar.setBackgroundColor({ color: '#ffffff' });
    }
      this.checkLanguage("fa-ir");
      //this.checkLanguage("en-gb");
      this.platform.ready().then(() => {
        this.exitAppOnDoubleTap();
        this.exitAppOnAlert();
        this.handleBackButton();
      });
      this.navCtrl.navigateRoot('/register');
      console.log("app component constructor");
      console.log("NameUser:",this.NameUser);
      //this.flagadmin=true;
      this.initializeApp(); // براي استاد بدون قفل 
      
    //this.navCtrl.navigateRoot('/home'); //اضافه براي استاد بدون قفل 
      if(this.tokenRegister != ''){
        this.getNameUser(); // صفحه جدید به عنوان root تنظیم می‌شود
      }
      if(this.NameUser==''){
        this.getNameUser(); // صفحه جدید به عنوان root تنظیم می‌شود
      }
      this.checkExecutionSeed();
    //this.checkLaunch();
  }
  
  // async checkLaunch() {
  //   this.CounterRegister2 = await this.launchService.increaseLaunchCount();
  //   console.log('App launched:', this.CounterRegister2, 'times');

  //   if (this.CounterRegister2 > 10) {
  //     this.navCtrl.navigateRoot('/register'); // بعد از 20 بار بره صفحه ریجستر
  //   }
  // }
  async checkExecutionSeed() {
    const seedKey = 'executionSeed';
    const resetCounterKey = 'resetCounter';
    const maxExecutions = 31300000000000000000000000000000000000000;
    const seed = await Preferences.get({ key: seedKey });
    const resetCounter = await Preferences.get({ key: resetCounterKey });
    this.CounterRegister = await this.storage.getItem('CounterRegister') || 1;
    this.Counter = await this.storage.getItem('Counter') || '';  // انتظار برای دریافت مقدار

    if (!seed.value) {
      // اگه برای اولین بار هست، یه Seed تصادفی ایجاد کن
      const initialSeed = Math.floor(Math.random() * 1000000).toString();
      await Preferences.set({ key: seedKey, value: initialSeed });
      await Preferences.set({ key: resetCounterKey, value: '0' });
    } else {
      let currentSeed = parseInt(seed.value, 10);
      currentSeed += 1; // با هر اجرا، 1 به Seed اضافه کن
      this.CounterRegister+= 1;
      this.storage.setItem('CounterRegister',this.CounterRegister);
      console.log("CounterRegister",this.CounterRegister);
      await Preferences.set({ key: seedKey, value: currentSeed.toString() });
      // چک کردن تعداد ریست‌ها
      //let resetCount = parseInt(resetCounter.value || '0', 10);
      // تخمین تعداد اجرا (Seed خودش تعداد اجرا رو نشان می‌ده)
      if (this.CounterRegister >= maxExecutions) {
        //resetCount += 1; // افزایش تعداد ریست
        this.Counter += 1;
        this.storage.setItem('Counter',this.Counter);
        this.storage.setItem('tokenRegister','');
        this.dbSer.settokenRegister('');
        await Preferences.remove({ key: seedKey }); // پاک کردن Seed
        this.router.navigate(['/register']); // هدایت به صفحه ثبت‌نام
      }
    }
  }

  async initializeApp() {
    console.log("app component initializeApp");
    this.tokenRegister = await this.storage.getItem('tokenRegister') || '';  // انتظار برای دریافت مقدار
    //alert('tokenRegister :'+ this.tokenRegister);
   
    //this.flagadmin=true;
    if(this.tokenRegister == ''){
      console.log("app component initializeApp if(this.tokenRegister == '') ");
      this.flagLogin=false;
      this.navCtrl.navigateRoot('/register'); // صفحه جدید به عنوان root تنظیم می‌شود     // for ostad whitout code comment
      //this.navCtrl.navigateRoot('/home');
    }else{
      this.flagLogin=true;
      this.navCtrl.navigateRoot('/home');
    }
    //this.navCtrl.navigateRoot('/home');
    //this.flagadmin=true;
  }

  async getNameUser() {
    
    console.log("getNameUser:",this.NameUser);
    this.NameUser = await this.storage.getItem('userName') || '';
    if(this.NameUser==='ادمین'){
      this.flagadmin=true;
    }
    if(this.NameUser==='ژیلا سلیمانی'){
      this.flagadmin=true;
    }
    if(this.NameUser==='استاد داودی نژاد'){
      this.flagadmin=true;
    }
    if(this.NameUser==='آرش رضوانی'){
      this.flagadmin=true;
    }
    // if (this.NameUser.length > 3){
      
    //   console.log(" if (this.NameUser == ''",this.NameUser);
    //   this.flagLogin=false;
    //   this.navCtrl.navigateRoot('/register');// for ostad whitout code comment
    // }
    this.dbSer.setNameUser(this.NameUser);
  }
// متد فیلتر زنده
  // این متد هر بار که سرچ تغییر می‌کنه اجرا میشه
  filterMenu() {
    const term = this.menuSearchTerm.toLowerCase();
    if (!term) {
      this.filteredGroups = this.groups;
      return;
    }

    this.filteredGroups = this.groups.filter(group => {
      const translated = this.translate.instant(group.title).toLowerCase();
      return translated.includes(term);
    });
  }
  ngOnInit() {
    this.groups = this.pointsService.getGroups();
    this.filteredGroups = this.groups;
    //this.getNameUser();// for ostad whitout code comment
  }

  handleBackButton() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      const currentUrl = this.router.url;

      if (currentUrl === '/home') {
        // اگه روی صفحه خانه هست، با بک از اپ خارج بشه
        this.exitAppOnAlert();
      } else {
        // اگه صفحه دیگه هست، به صفحه قبل بره
        //window.history.back();
      }
    });
  }

  logout(){
    this.storage.setItem('userName','');
    this.dbSer.setNameUser('');
    this.NameUser='';
    console.log("this.NameUser",this.NameUser);
    if (this.NameUser == ''){
      this.flagLogin=false;
      this.navCtrl.navigateRoot('/register');
    }

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
