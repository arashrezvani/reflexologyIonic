import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { CalServicService } from '../services/calService/cal-servic.service';

@Component({
  selector: 'app-calculation-moon',
  templateUrl: './calculation-moon.page.html',
  styleUrls: ['./calculation-moon.page.scss'],
})
export class CalculationMoonPage implements OnInit {


  ResultNameMoon : string ='';
  DayShInput: number = 1;   // ورودی نام
  DayGInput: number = 1;
  
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
    private calSer: CalServicService) { }

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
    // محاسبه قمر در عقرب
    this.result = (this.lunarDay * 2);
    this.result = this.result + 5;
    this.result = this.result / 5;
    this.result = Math.round(this.result);
    console.log("------------------ this.result "+this.result);
    this.ResultNameMoon =this.calSer.CalcMoon(this.result,parseInt(this.solarMonth),this.DayShInput,parseInt(this.lunarMonth),this.DayGInput);
    console.log("------------------ this.ResultNameMoon "+this.ResultNameMoon);

  }
  resetData(){
    this.ResultNameMoon='';
    // روز و ماه شمسی
    this.solarDay = 1;
    this.solarMonth = '';
  
    // روز و ماه قمری
    this.lunarDay = 1;
    this.lunarMonth = '';
  }

  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
}
