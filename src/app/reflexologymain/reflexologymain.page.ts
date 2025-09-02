import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CalServicService } from '../services/calService/cal-servic.service';
import { App } from '@capacitor/app';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';import { Category, PointGroup, PonitsService } from '../services/acupressure/ponits/ponits.service';
0
@Component({
  selector: 'app-reflexologymain',
  templateUrl: './reflexologymain.page.html',
  styleUrls: ['./reflexologymain.page.scss'],
})
export class ReflexologymainPage implements OnInit {

  analyzedData: any; // داده‌هایی که قرار است نمایش داده شوند

  //=========================================

  nameInput: string = '';   // ورودی نام
  MomnameInput:string='';
  namesList: string[] = []; // لیست برای نمایش نام‌ها
  //=========================================

  title!: string;
  features: Category[] = [];
  PointGroup: PointGroup[] = [];

  points : Category[]=[];
infoSections = [
    // { title: 'توضیحات اپلیکیشن', icon: 'information-circle-outline', route: '/description', color: '#4CAF50' },
    // { title: 'نظرات', icon: 'chatbox-ellipses-outline', route: '/comments', color: '#2196F3' },
    { title: 'درباره ما', icon: 'business-outline', route: '/about-us', color: '#FF9800' },
    { title: 'تماس با ما', icon: 'call-outline', route: '/contact-us', color: '#9C27B0' },
  ];


  appVersion: string = '';

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
// آرایه رنگ‌ها
  cardColors = [
    '#FF6B6B', // قرمز روشن
    '#4ECDC4', // فیروزه‌ای
    '#45B7D1', // آبی آسمانی
    '#96CEB4', // سبز ملایم
    '#FFEEAD', // زرد روشن
    '#D4A5A5', // صورتی ملایم
    '#9B59B6', // بنفش
    '#3498DB', // آبی
    '#E74C3C', // قرمز تیره
    '#2ECC71', // سبز
    '#F1C40F', // زرد
    '#E67E22', // نارنجی
    // می‌تونی رنگ‌های بیشتری اضافه کنی
  ];

  // آرایه آیکون‌ها (از ionicons)
  cardIcons = [
    'heart-outline', // قلب
    'star-outline', // ستاره
    'pulse-outline', // نبض
    'leaf-outline', // برگ
    'eye-outline', // چشم
    'ear-outline', // گوش
    'water-outline', // آب
    'flame-outline', // آتش
    'body-outline', // بدن
    'medkit-outline', // جعبه کمک‌های اولیه
    'nutrition-outline', // تغذیه
    'accessibility-outline', // دسترسی
    'walk-outline', // راه رفتن
    'bicycle-outline', // دوچرخه
    'bandage-outline', // بانداژ
    'fitness-outline', // فیتنس
    'heart-circle-outline', // قلب دایره‌ای
    'sparkles-outline', // جرقه
    'thermometer-outline', // دماسنج
    'flower-outline', // گل
  ];


  constructor(
    private pointsService : PonitsService,
    private route: ActivatedRoute,
    private calSer: CalServicService,
    private dbSer:DbinprojectService,
    private router: Router,
    private platform: Platform,
    private AppComp:AppComponent) {

      
    }
  async ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title') || '';
    this.PointGroup= this.pointsService.getAllByCategoriessubgroups(this.title);
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
      let cleanRoute = route.trim();
      cleanRoute = `/reflex/${cleanRoute}`;
      this.router.navigate([cleanRoute]);
    }
    onOptionChange(event:any) {
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
