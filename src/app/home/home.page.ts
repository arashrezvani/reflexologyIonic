import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CalServicService } from '../services/calService/cal-servic.service';
import { App } from '@capacitor/app';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  analyzedData: any; // داده‌هایی که قرار است نمایش داده شوند

  //=========================================

  nameInput: string = '';   // ورودی نام
  MomnameInput:string='';
  namesList: string[] = []; // لیست برای نمایش نام‌ها
  //=========================================
features = [
    {
      title: 'بازتاب ها',
      description: 'تحلیل و درمان نقاط بازتابی برای بهبود سلامتی',
      icon: 'body-outline',
      route: '/reflexologymain/reflection',
      buttonText: 'ورود',
      color: '#4CAF50',
      gradient: 'linear-gradient(135deg, #4CAF50, #81C784)',
    },
    {
      title: 'مریدین',
      description: 'بررسی مسیرهای انرژی اصلی بدن',
      icon: 'pulse-outline',
      route: '/reflexologymain/meridian',
      buttonText: 'مشاهده',
      color: '#2196F3',
      gradient: 'linear-gradient(135deg, #2196F3, #64B5F6)',
    },
    {
      title: 'کانال ها',
      description: 'مدیریت کانال‌های فوق‌العاده انرژی',
      icon: 'water-outline',
      route: '/reflexologymain/channels',
      buttonText: 'شروع',
      color: '#FF9800',
      gradient: 'linear-gradient(135deg, #FF9800, #FFB74D)',
    },
    {
      title: 'نقاط کلیدی',
      description: 'نقاط ویژه برای درمان‌های خاص',
      icon: 'star-outline',
      route: '/reflexologymain/keypoints',
      buttonText: 'کاوش',
      color: '#9C27B0',
      gradient: 'linear-gradient(135deg, #9C27B0, #AB47BC)',
    },
  ];

infoSections = [
    // { title: 'توضیحات اپلیکیشن', icon: 'information-circle-outline', route: '/description', color: '#4CAF50' },
    // { title: 'نظرات', icon: 'chatbox-ellipses-outline', route: '/comments', color: '#2196F3' },
    { title: 'درباره ما', icon: 'business-outline', route: '/about-us', color: '#FF9800' },
    { title: 'تماس با ما', icon: 'call-outline', route: '/contact-us', color: '#9C27B0' },
  ];


  appVersion: string = '';
  optionss = [
    { value: '1', text: 'شنبه' },
    { value: '2', text: 'يكشنبه' },
    { value: '3', text: 'دوشنبه' },
    { value: '4', text: 'سه شنبه' },
    { value: '5', text: 'چهارشنبه' },
    { value: '6', text: 'پنج شنبه' },
    { value: '7', text: 'جمعه' }
  ];
  selectedOption: string="1";
  options2 = [
    { value: 'سعد', text: 'سعد' },
    { value: 'سعد اکبر', text: 'سعد اکبر' },
    { value: 'سعد اصغر', text: 'سعد اصغر' },
    { value: 'میانه', text: 'میانه' },
    { value: 'نحس اکبر', text: 'نحس اکبر' },
    { value: 'نحس اصغر', text: 'نحس اصغر' },
    { value: 'تابع موقعیت', text: 'تابع موقعیت' }
  ];
  selectedOption2: string="";

  public searchDay: string = "";
  public searchType: string = "";
  flag:boolean=false;
  search:string="";
  searchd:any;
  blockData:any;
  blockData1:any;
  H:number=0;
  M:number=0;
  daysS:string ="شنبه";

  constructor(
    private calSer: CalServicService,
    private dbSer:DbinprojectService,
    private router: Router,
    private platform: Platform,
    private AppComp:AppComponent) {

      
    }
  async ngOnInit() {
    const info = await App.getInfo();
    this.appVersion = info.build + info.id + info.name + info.version;
    console.log('App Version:', this.appVersion);
  }


    //===================================================
    submitForm() {
      if (this.nameInput.trim() !== '') {
        this.blockData1=this.calSer.CalAbjadSaghir(this.nameInput,this.MomnameInput);


      // اشتراک به داده‌های تحلیل شده و دریافت داده‌ها
      this.dbSer.getAnalyzedData().subscribe((data) => {
        if (data) {
          this.analyzedData = data;
          console.log('Analyzed Data:', this.analyzedData);
        }
      });

        this.nameInput = ''; // پاک کردن ورودی پس از ارسال
      }
      

    }
    objectKeys(obj: any): string[] {
      return Object.keys(obj);
    }
      //===================================================

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
    goToDetermineTimePage() {
      this.router.navigate(['/determine-time']);
    }

    navigateTo(route : string){
      this.router.navigate([route]);
    }
    onOptionChange(event:any) {
      console.log('گزینه انتخاب شده:', event.detail.value);
    }
    onOptionChangeEnd(event:any) {
      this.blockData=this.calSer.Cal1(event.detail.value,this.H,this.M,this.selectedOption); // for ion-select
      console.log(this.blockData);
      console.log('گزینه انتخاب شده:', event.detail.value);
    }


  ClickH(e : any){
    this.H=e.value;
    console.log(this.H);
  }
  ClickM(e : any){
    this.M=e.value;
    console.log(this.M);
  }

  
  ClickR(e : any){
    console.log(e.value);
    this.daysS=e.value;
    console.log(this.daysS);
  }
  
  ClickMo(e : any){
    console.log("days ======= قبل از فراخوانی"+this.daysS);
    this.blockData=this.calSer.Cal(e.value,this.H,this.M,this.daysS); // for ion-select
    console.log(this.blockData);
  }
  onClickDay(daysInsert : any){
    console.log("days.detail.value ======= "+daysInsert);
    this.daysS=daysInsert;
    console.log("days ======= "+this.daysS);
  }
  onClick(e : any){

    console.log(e.value);
    console.log(11);
    
    console.log(this.blockData);
  }
  ionChangeDay(daysInsert : any){
    console.log("days.detail.value ======= "+daysInsert);
    this.daysS=daysInsert;
  }
  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
  selectLan(){
    console.log(this.search);
    console.log("selectLan");
    if(this.flag){
      this.flag=false;
      console.log("fa-ir");
      this.AppComp.checkLanguage("fa-ir");
    }else{
      this.flag=true;
      console.log("en-gb");
      this.AppComp.checkLanguage("en-gb");
    }
  }
  
  // متغیر اندازه فونت

  fontSize = 14; // اندازه پیش‌فرض

  // تابع برای افزایش اندازه فونت
  increaseFontSize() {
    this.fontSize += 2; // افزایش اندازه فونت
  }

  // تابع برای کاهش اندازه فونت
  decreaseFontSize() {
    if (this.fontSize > 8) { // حداقل اندازه فونت
      this.fontSize -= 2; // کاهش اندازه فونت
    }
  }

}
