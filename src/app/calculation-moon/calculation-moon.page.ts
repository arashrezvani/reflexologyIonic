import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { CalServicService } from '../services/calService/cal-servic.service';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';

@Component({
  selector: 'app-calculation-moon',
  templateUrl: './calculation-moon.page.html',
  styleUrls: ['./calculation-moon.page.scss'],
})
export class CalculationMoonPage implements OnInit {


  analyzedData: any; // داده‌هایی که قرار است نمایش داده شوند
  ResultNameMoon : string ='';
  DayShInput: number = 1;   // ورودی نام
  DayGInput: number = 1;


  
  SignName: string ='';
  temperament: string ='';
  temperamentName: string ='';
  Star: string ='';
  SignNameKhN: string ='';
  temperamentKhN: string ='';
  temperamentNameKhN: string ='';
  StarKhN: string ='';
  DayNahs: string ='';
  DayMahgh: string ='';
  MessageE: string ='';
  
  // روز و ماه شمسی
  solarDay!: number ;
  solarMonth: string = '';

  // روز و ماه قمری
  lunarDay!: number ;
  lunarMonth: string = '';

  
  solarMonths  = [
    { value: '1', name: 'فروردین' },
    { value: '2', name: 'اردیبهشت' },
    { value: '3', name: 'خرداد' },
    { value: '4', name: 'تیر' },
    { value: '5', name: 'مرداد' },
    { value: '6', name: 'شهریور' },
    { value: '7', name: 'مهر' },
    { value: '8', name: 'آبان' },
    { value: '9', name: 'آذر' },
    { value: '10', name: 'دی' },
    { value: '11', name: 'بهمن' },
    { value: '12', name: 'اسفند' }
  ];

  lunarMonths  = [
    { value: '1', name: 'محرم' },
    { value: '2', name: 'صفر' },
    { value: '3', name: 'ربیع الاول' },
    { value: '4', name: 'ربیع الثانی (ربیع الاخر)' },
    { value: '5', name: 'جمادی الاول' },
    { value: '6', name: 'جمادی الثانی (جمادی الاخر)' },
    { value: '7', name: 'رجب' },
    { value: '8', name: 'شعبان' },
    { value: '9', name: 'رمضان' },
    { value: '10', name: 'شوال' },
    { value: '11', name: 'ذیقعده' },
    { value: '12', name: 'ذیحجه' }
  ];


  constructor(
    private calSer: CalServicService,
    private dbSer:DbinprojectService,) { }

  ngOnInit() {
  }

  
  result!: number;

  // تابعی برای اعتبارسنجی روز وارد شده (محدود به 1 تا 31)
  validateDay(event: any) {
    const input = event.target.value;
    if (input > 31) {
      event.target.value = 31; // اگر ورودی بیشتر از 31 بود، آن را به 31 محدود می‌کنیم.
    } else if (input < 1) {
      event.target.value = ''; // اگر ورودی کمتر از 1 بود، آن را خالی می‌کنیم.
    }
  }
  //===================================================
  submitForm() {
    if(this.analyzedData != null ) this.resetData();
    this.resetDataResult();
    if(this.solarMonth.trim() !== '' && this.solarDay !== 0 && this.lunarMonth.trim() !== '' && this.lunarDay !== 0){
      this.ResultNameMoon =this.calSer.CalcMoon(parseInt(this.solarMonth),this.solarDay,parseInt(this.lunarMonth),this.lunarDay);
      this.dbSer.getAnalyzedData().subscribe((data) => {
        if (data) {
          this.analyzedData = data;
          console.log('Analyzed Data:', this.analyzedData);
          this.SignName = this.analyzedData.SignName;
          this.temperament = this.analyzedData.temperament;
          this.temperamentName = this.analyzedData.temperamentName;
          this.Star = this.analyzedData.Star;
          this.SignNameKhN = this.analyzedData.SignNameKhN;
          this.temperamentKhN = this.analyzedData.temperamentKhN;
          this.temperamentNameKhN = this.analyzedData.temperamentNameKhN;
          this.StarKhN = this.analyzedData.StarKhN;
          this.DayNahs = this.analyzedData.DayNahs;
          if(this.analyzedData.DayNahs=='') this.DayNahs = 'نیست';
          this.DayMahgh = this.analyzedData.DayMahgh;
          if(this.analyzedData.DayMahgh=='') this.DayMahgh = 'نیست';
          this.MessageE = this.analyzedData.MessageE;
        }
      });

    }else{
      this.SignName = '';
      this.temperament = '';
      this.temperamentName = '';
      this.Star = '';
      this.SignNameKhN = '';
      this.temperamentKhN = '';
      this.temperamentNameKhN = '';
      this.StarKhN = '';
      this.DayNahs = '';
      this.DayMahgh = '';
      this.MessageE = '';
    }
    console.log("------------------ this.ResultNameMoon "+this.ResultNameMoon);

  }
  resetData(){
    this.ResultNameMoon='';
    // روز و ماه شمسی
    this.solarDay = 1;
    this.solarMonth = '';
  
    this.analyzedData = null;
    // روز و ماه قمری
    this.lunarDay = 1;
    this.lunarMonth = '';

    
    this.SignName = '';
    this.temperament = '';
    this.temperamentName = '';
    this.Star = '';
    this.SignNameKhN = '';
    this.temperamentKhN = '';
    this.temperamentNameKhN = '';
    this.StarKhN = '';
    this.DayNahs = '';
    this.DayMahgh = '';
    this.MessageE = '';
  }
  resetDataResult(){
    this.analyzedData = null;
    this.SignName = '';
    this.temperament = '';
    this.temperamentName = '';
    this.Star = '';
    this.SignNameKhN = '';
    this.temperamentKhN = '';
    this.temperamentNameKhN = '';
    this.StarKhN = '';
    this.DayNahs = '';
    this.DayMahgh = '';
    this.MessageE = '';
  }
  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
}
