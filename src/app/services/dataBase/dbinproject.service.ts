import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbinprojectService {

  private tokenRegister:string='';
  
  private NameUser:string='';

  setNameUser(nameUser:string){
    this.NameUser=nameUser;
  }
  getNameUser(){
    return this.NameUser;
  }

  // BehaviorSubject برای نگهداری و انتشار داده‌های تحلیل‌شده
  private analyzedData = new BehaviorSubject<any>(null);

  // متد برای تنظیم داده‌های جدید بعد از تحلیل
  setAnalyzedData(data: any) {
    this.analyzedData.next(data);
  }

  // متد برای دریافت Observable از داده‌ها
  getAnalyzedData() {
    return this.analyzedData.asObservable();
  }

  db_zodiac: Array<{SignNameNum:number, SignName: string, Element: string, temperament:string , temperamentName:string, Star:string, moon:string}>=[
    {SignNameNum: 1, SignName: 'حمل', Element: 'آتش', temperament:'گرم و خشک' ,temperamentName:'صفرا', Star:'مریخ', moon:'فرودین'},
    {SignNameNum: 2, SignName: 'ثور', Element: 'خاک', temperament:'سرد و خشک' ,temperamentName:'سودا', Star:'زهره', moon:'اردیبهشت'},
    {SignNameNum: 3, SignName: 'جوزا', Element: 'هوا', temperament:'گرم و تر' ,temperamentName:'دم', Star:'عطارد', moon:'خرداد'},
    {SignNameNum: 4, SignName: 'سرطان', Element: 'آب', temperament:'سرد و تر' ,temperamentName:'بلغم', Star:'قمر', moon:'تیر'},
    {SignNameNum: 5, SignName: 'اسد', Element: 'آتش', temperament:'گرم و خشک' ,temperamentName:'صفرا', Star:'شمس', moon:'مرداد'},
    {SignNameNum: 6, SignName: 'سنبله', Element: 'خاک', temperament:'سرد و خشک' ,temperamentName:'سودا', Star:'عطارد', moon:'شهریور'},
    {SignNameNum: 7, SignName: 'میزان', Element: 'هوا', temperament:'گرم و تر' ,temperamentName:'دم', Star:'زهره', moon:'مهر'},
    {SignNameNum: 8, SignName: 'عقرب', Element: 'آب', temperament:'سرد و تر' ,temperamentName:'بلغم', Star:'مریخ', moon:'آبان'},
    {SignNameNum: 9, SignName: 'قوس', Element: 'آتش', temperament:'گرم و خشک' ,temperamentName:'صفرا', Star:'مشتری', moon:'آذر'},
    {SignNameNum: 10, SignName: 'جدی', Element: 'خاک', temperament:'سرد و خشک' ,temperamentName:'سودا', Star:'زحل', moon:'دی'},
    {SignNameNum: 11, SignName: 'دلو', Element: 'هوا', temperament:'گرم و تر' ,temperamentName:'دم', Star:'زحل', moon:'بهمن'},
    {SignNameNum: 12, SignName: 'حوت', Element: 'آب', temperament:'سرد و تر' ,temperamentName:'بلغم', Star:'مشتری', moon:'اسفند'},
  ];
  
  db_NehsDayYears: Array<{Day:number, MonthNumber: number, Month: string, Nahs: string }>=[
    {Day: 22, MonthNumber: 1, Month: 'محرم', Nahs: '22 محرم'  },
    {Day: 11, MonthNumber: 2, Month: 'صفر', Nahs: '11 صفر' },
    {Day: 4, MonthNumber: 3, Month: 'ربیع الاول', Nahs: '4 ربیع اول' },
    {Day: 28, MonthNumber: 4, Month: 'ربیع الثانی (ربیع الاخر)', Nahs: '28 ربیع الثانی' },
    {Day: 28, MonthNumber: 5, Month: 'جمادی الاول', Nahs: '28 جمادی اول' },
    {Day: 12, MonthNumber: 6, Month: 'جمادی الثانی (جمادی الاخر)', Nahs: '12 جمادی الثانی' },
    {Day: 16, MonthNumber: 7, Month: 'رجب', Nahs: '26 رجب' },
    {Day: 12, MonthNumber: 8, Month: 'شعبان', Nahs: '12 شعبان' },
    {Day: 24, MonthNumber: 9, Month: 'رمضان', Nahs: '24 رمضان' },
    {Day: 2, MonthNumber: 10, Month: 'شوال', Nahs: '2 شوال' },
    {Day: 28, MonthNumber: 11, Month: 'ذیقعده', Nahs: '28 ذوالقعده' },
    {Day: 8, MonthNumber: 12, Month: 'ذیحجه', Nahs: '8 ذوالحجه' },
  ];

  db_MonthAP:Array<{MonthNumber:number, MonthArabic: string, MonthPersian: string}>=[
    {MonthNumber:1, MonthArabic: 'محرم', MonthPersian: 'فروردین'},
    {MonthNumber:2, MonthArabic: 'صفر', MonthPersian: 'اردیبهشت'},
    {MonthNumber:3, MonthArabic: 'ربیع الاول', MonthPersian: 'خرداد'},
    {MonthNumber:4, MonthArabic: 'ربیع الثانی (ربیع الاخر)', MonthPersian: 'تیر'},
    {MonthNumber:5, MonthArabic: 'جمادی الاول', MonthPersian: 'مرداد'},
    {MonthNumber:6, MonthArabic: 'جمادی الثانی (جمادی الاخر)', MonthPersian: 'شهریور'},
    {MonthNumber:7, MonthArabic: 'رجب', MonthPersian: 'مهر'},
    {MonthNumber:8, MonthArabic: 'شعبان', MonthPersian: 'آبان'},
    {MonthNumber:9, MonthArabic: 'رمضان', MonthPersian: 'آذر'},
    {MonthNumber:10, MonthArabic: 'شوال', MonthPersian: 'دی'},
    {MonthNumber:11, MonthArabic: 'ذیقعده', MonthPersian: 'بهمن'},
    {MonthNumber:12, MonthArabic: 'ذیحجه', MonthPersian: 'اسفند'},
  ];

  db_zodiacGeometry: Array<{temperament: string, temperamentName: string, SignNames: string, Entity: string, GemetricShapM: string, GemetricShapD: string, PrimaryStoneM: string, SecondaryStoneD: string}>=[
    {temperament:'گرم و خشک' , temperamentName:'صفرا',SignNames:'حمل،اسد،قوس',Entity:'جن',GemetricShapM:'سه گوش یا اشک', GemetricShapD:'پنج ضلعی و شش ضلعی', PrimaryStoneM:'یاقوت قرمز آفریقایی', SecondaryStoneD:'فیروزه'},
    {temperament:'گرم و تر' , temperamentName:'دم',SignNames:'جوزا،میزان،دلو',Entity:'دیو',GemetricShapM:'دایره و بیضی', GemetricShapD:'مربع لوزی', PrimaryStoneM:'عقیق قرمز یمنی', SecondaryStoneD:'زمرد'},
    {temperament:'سرد و خشک' , temperamentName:'سودا',SignNames:'ثور،سنبله،جدی',Entity:'دخان',GemetricShapM:'مربع لوزی', GemetricShapD:'دایره و بیضی', PrimaryStoneM:'زمرد و زبرجد', SecondaryStoneD:'یاقوت کبود'},
    {temperament:'سرد و تر' , temperamentName:'بلغم',SignNames:'سرطان،عقرب،حوت',Entity:'پری',GemetricShapM:'پنج ضلعی و شش ضلعی', GemetricShapD:'سه گوش یا اشک', PrimaryStoneM:'فیروزه', SecondaryStoneD:'یاقوت و عقیق'},
  ];

  db_zodiacRelationships: Array<{NameState: string, Calc: number, quality: string}>=[
    {NameState: 'طال', Calc: 0, quality: 'نه خوب، نه بد'},
    {NameState: 'مقارنه', Calc: 1, quality: 'نصف خوب، نصف بد'},
    {NameState: 'تسدیس', Calc: 2, quality: 'خوب'},
    {NameState: 'تربیع', Calc: 3, quality: 'جدائی، احتمال طلاق'},
    {NameState: 'تثلیث', Calc: 4, quality: 'عالی'},
    {NameState: 'مقابله', Calc: 5, quality: 'نزاع لفظی، مثل سگ و گربه'},
    {NameState: 'تساقط', Calc: 6, quality: 'مرگ، ترور، سقوط، نابودی'},
  ];

  db_zodiacStar:Array<{StarName:string, temperament: string, temperamentName: string, sex: string, day: string, feature:string}>=[
    {StarName:'زحل', temperament: 'سرد و خشک', temperamentName: 'سودا', sex: 'نر', day: 'شنبه', feature:'ریاست طلبی'},
    {StarName:'مشتری', temperament: 'گرم و تر', temperamentName: 'دم', sex: 'نر', day: 'پنج شنبه', feature:'ملاحظه گر'},
    {StarName:'مریخ', temperament: 'گرم و خشک', temperamentName: 'صفرا', sex: 'نر', day: 'سه شنبه', feature:'شفا دهنده'},
    {StarName:'شمس', temperament: 'گرم و خشک', temperamentName: 'صفرا', sex: 'نر', day: 'یکشنبه', feature:'خیر رسان امت'},
    {StarName:'زهره', temperament: 'سرد و تر', temperamentName: 'بلغم', sex: 'نر', day: 'جمعه', feature:'کینه توز'},
    {StarName:'عطارد', temperament: 'سرد و خشک', temperamentName: 'سودا', sex: 'خنثی', day: 'چهارشنبه', feature:'دانایی، نفاق'},
    {StarName:'قمر', temperament: 'سرد و تر', temperamentName: 'بلغم', sex: 'ماده', day: 'دوشنبه', feature:'فضول و جاسوس'},
  ];

  db_temperament:Array<{temperamentName: string, feature: string, type: string, position: string, temperament: string, time: string, season: string, oilM: string, oilD: string}>=[
    {temperamentName: 'دم', feature: 'خنده رو، بد عصبانی، شهوت زیاد', type: 'خون', position: 'رگ', temperament: 'گرم و تر', time: '6 صبح تا 12 ظهر', season: 'بهار', oilM: 'روغن بادام شیرین، روغن زیتون',oilD:'روغن گل سرخ، روغن گشنیز، روغن برگ حنا'},
    {temperamentName: 'صفرا', feature: 'زودجوش، زودآرام، عاطفی، باهوش', type: 'ماده زرد رنگ', position: 'کیسه صفرا', temperament: 'گرم و خشک', time: '12 ظهر تا 6 عصر', season: 'تابستان', oilM: 'روغن اسفند، روغن بادام تلخ، روغن سیاه دانه، روغن بابونه', oilD: 'روغن بنفشه، روغن کدو'},
    {temperamentName: 'سودا', feature: 'حساس، کنجکاو، دقیق', type: 'ماده سیاه رنگ', position: 'طحال', temperament: 'سرد و خشک', time: '6 عصر تا 12 شب', season: 'پاییز', oilM: 'روغن گل سرخ، روغن گشنیز، روغن برگ حنا', oilD: 'روغن بادام شیرین، روغن زیتون'},
    {temperamentName: 'بلغم', feature: 'بیخیال، تنبل', type: 'ماده سفید رنگ (خون نپخته)', position: 'مثانه', temperament: 'سرد و تر', time: '12 شب تا 6 صبح', season: 'زمستان', oilM: 'روغن بنفشه، روغن کدو', oilD: 'روغن اسفند، روغن بادام تلخ، روغن سیاه دانه، روغن بابونه'},
  ];

  db_oilUltra:Array<{oilName: string, temperamentName: string, temperament: string, day: string, TypeSick: string}>=[
    {oilName: 'بنفشه', temperamentName: 'بلغم', temperament: 'سرد و تر', day: 'جمعه و دوشنبه شب', TypeSick: 'صفراوی'},
    {oilName: 'بادام شیرین', temperamentName: 'دم', temperament: 'گرم و تر', day: 'دوشنبه و شنبه شب', TypeSick: 'صفراوی'},
    {oilName: 'بادام تلخ کوهی', temperamentName: 'صفرا', temperament: 'گرم و خشک', day: 'یکشنبه و پنج شنبه شب', TypeSick: 'صفراوی'},
    {oilName: 'سیاه دانه', temperamentName: 'صفرا', temperament: 'گرم و خشک', day: 'شنبه و پنج شنبه شب', TypeSick: 'صفراوی'},
    {oilName: 'گل سرخ', temperamentName: 'سودا', temperament: 'سرد و خشک', day: 'شنبه و چهارشنبه شب', TypeSick: 'صفراوی'},
    {oilName: 'بابونه', temperamentName: 'صفرا', temperament: 'گرم و خشک', day: 'جمعه و پنج شنبه شب', TypeSick: 'صفراوی'},
    {oilName: 'کنجد', temperamentName: 'دم', temperament: 'گرم و تر', day: 'دوشنبه و سه شنبه شب', TypeSick: 'صفراوی'},
    {oilName: 'زیتون با بو', temperamentName: 'دم', temperament: 'گرم و تر', day: 'یکشنبه و پنج شنبه شب', TypeSick: 'صفراوی'},
  ];

  db_StarDay:Array<{day: string, StarName: string, temperamentName: string, temperament: string}>=[
    {day: 'شنبه', StarName: 'زحل', temperamentName: 'سودا', temperament: 'سرد و خشک'},
    {day: 'یک شنبه', StarName: 'شمس', temperamentName: 'صفرا', temperament: 'گرم و خشک'},
    {day: 'دوشنبه', StarName: 'قمر', temperamentName: 'بلغم', temperament: 'سرد و تر'},
    {day: 'سه شنبه', StarName: 'مریخ', temperamentName: 'صفرا', temperament: 'گرم و خشک'},
    {day: 'چهارشنبه', StarName: 'عطارد', temperamentName: 'سودا', temperament: 'سرد و خشک'},
    {day: 'پنج شنبه', StarName: 'مشتری', temperamentName: 'دم', temperament: 'گرم و تر'},
    {day: 'جمعه', StarName: 'زهره', temperamentName: 'بلغم', temperament: 'سرد و تر'},
  ];

  
  db_RelationshipsStar:Array<{StarName: string, friendStar: string, enemyStar: string, mediatorStar: string}>=[
    {StarName: 'زحل', friendStar: 'زهره-عطارد', enemyStar: 'مریخ-شمس-قمر', mediatorStar: 'مشتری'},
    {StarName: 'مشتری', friendStar: 'مریخ-شمس-قمر', enemyStar: 'زهره-عطارد', mediatorStar: 'زحل'},
    {StarName: 'مریخ', friendStar: 'مشتری-شمس-قمر', enemyStar: 'عطارد', mediatorStar: 'زحل-زهره'},
    {StarName: 'شمس', friendStar: 'مشتری-مریخ-قمر', enemyStar: 'زحل-قمر', mediatorStar: 'عطارد'},
    {StarName: 'زهره', friendStar: 'زحل-عطارد', enemyStar: 'شمس-قمر', mediatorStar: 'مشتری-مریخ'},
    {StarName: 'عطارد', friendStar: 'شمس-زهره', enemyStar: 'قمر', mediatorStar: 'زحل-مشتری-مریخ'},
    {StarName: 'قمر', friendStar: 'شمس-عطارد', enemyStar: '-', mediatorStar: 'زحل-مشتری'},
  ];

  db_DirectionABJAD: Array<{WordAbjad: string, Direction: string}>=[
    {WordAbjad: 'آابپجچدهوزژ', Direction: 'شمال شرق'},
    {WordAbjad: 'حطیکگلمن', Direction: 'جنوب شرق'},
    {WordAbjad: 'سعفصقرش', Direction: 'جنوب غرب'},
    {WordAbjad: 'تثخذضظغ', Direction: 'شمال غرب'},
  ];


  db_ABJADMain: Array<{Word: string, Meaning: string, NumWord:number , type:string}>=[
    {Word:'ابجد', Meaning:'آگاه باش', NumWord:0, type:''},
    {Word:'هوز', Meaning:'دریاب', NumWord:0, type:''},
    {Word:'حطی', Meaning:'خوب بفهم', NumWord:0, type:''},
    {Word:'کلمن', Meaning:'نگهدار', NumWord:0, type:''},
    {Word:'سعفص', Meaning:'رها نکن', NumWord:0, type:''},
    {Word:'قرشت', Meaning:'دانا باش', NumWord:0, type:''},
    {Word:'ثخذ', Meaning:'واقف باش', NumWord:0, type:''},
    {Word:'ضظغ', Meaning:'از قبل بدان', NumWord:0, type:''},
  ];
  db_ABJAD: Array<{W: string, Saghir: number, Kabir: number, NumW:number , type:string}>=[
    {W: 'ا', Saghir: 1, Kabir: 1, NumW: 1, type:''},
    {W: 'ب', Saghir: 2, Kabir: 2, NumW: 2, type:''},
    {W: 'ج', Saghir: 3, Kabir: 3, NumW: 3, type:''},
    {W: 'د', Saghir: 4, Kabir: 4, NumW: 4, type:''},
    {W: 'ه', Saghir: 5, Kabir: 5, NumW: 5, type:''},
    {W: 'و', Saghir: 6, Kabir: 6, NumW: 6, type:''},
    {W: 'ز', Saghir: 7, Kabir: 7, NumW: 7, type:''},
    {W: 'ح', Saghir: 8, Kabir: 8, NumW: 8, type:''},
    {W: 'ط', Saghir: 9, Kabir: 9, NumW: 9, type:''},
    {W: 'ی', Saghir: 10, Kabir: 10, NumW: 10, type:''},
    {W: 'ک', Saghir: 8, Kabir: 20, NumW: 11, type:''},
    {W: 'ل', Saghir: 6, Kabir: 30, NumW: 12, type:''},
    {W: 'م', Saghir: 4, Kabir: 40, NumW: 13, type:''},
    {W: 'ن', Saghir: 2, Kabir: 50, NumW: 14, type:''},
    {W: 'س', Saghir: 0, Kabir: 60, NumW: 15, type:''},
    {W: 'ع', Saghir: 10, Kabir: 70, NumW: 16, type:''},
    {W: 'ف', Saghir: 8, Kabir: 80, NumW: 17, type:''},
    {W: 'ص', Saghir: 6, Kabir: 90, NumW: 18, type:''},
    {W: 'ق', Saghir: 4, Kabir: 100, NumW: 19, type:''},
    {W: 'ر', Saghir: 8, Kabir: 200, NumW: 20, type:''},
    {W: 'ش', Saghir: 0, Kabir: 300, NumW: 21, type:''},
    {W: 'ت', Saghir: 4, Kabir: 400, NumW: 22, type:''},
    {W: 'ث', Saghir: 8, Kabir: 500, NumW: 23, type:''},
    {W: 'خ', Saghir: 0, Kabir: 600, NumW: 24, type:''},
    {W: 'ذ', Saghir: 4, Kabir: 700, NumW: 25, type:''},
    {W: 'ض', Saghir: 8, Kabir: 800, NumW: 26, type:''},
    {W: 'ظ', Saghir: 0, Kabir: 900, NumW: 27, type:''},
    {W: 'غ', Saghir: 4, Kabir: 1000, NumW: 28, type:''},
    {W: 'گ', Saghir: 8, Kabir: 20, NumW: 29, type:''},
    {W: 'چ', Saghir: 3, Kabir: 3, NumW: 30, type:''},
    {W: 'پ', Saghir: 2, Kabir: 2, NumW: 31, type:''},
    {W: 'ژ', Saghir: 7, Kabir: 7, NumW: 32, type:''},
    {W: 'آ', Saghir: 1, Kabir: 1, NumW: 1, type:''},
    {W: 'ء', Saghir: 1, Kabir: 1, NumW: 1, type:''},
    {W: 'الف', Saghir: 1, Kabir: 1, NumW: 1, type:''},
  ];

  db_DTTS: Array<{dayName: string, day: number, time: number, type: string, star: string, timeCal: string}> = [
    {dayName: 'شنبه',day: 1, time: 1, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 2, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 3, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 4, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 5, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 6, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 7, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 8, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 9, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 10, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 11, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 12, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 13, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 14, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 15, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 16, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 17, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 18, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 19, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 20, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 21, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 22, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 23, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'شنبه',day: 1, time: 24, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    
    {dayName: 'يكشنبه',day: 2, time: 1, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 2, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 3, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 4, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 5, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 6, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 7, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 8, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 9, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 10, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 11, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 12, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 13, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 14, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 15, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 16, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 17, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 18, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 19, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 20, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 21, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 22, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 23, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'يكشنبه',day: 2, time: 24, type: 'نحس اکبر', star: 'زحل',timeCal: ""},

    {dayName: 'دوشنبه',day: 3, time: 1, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 2, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 3, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 4, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 5, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 6, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 7, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 8, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 9, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 10, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 11, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 12, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 13, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 14, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 15, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 16, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 17, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 18, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 19, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 20, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 21, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 22, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 23, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'دوشنبه',day: 3, time: 24, type: 'سعد', star: 'شمس',timeCal: ""},

    {dayName: 'سه شنبه',day: 4, time: 1, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 2, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 3, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 4, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 5, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 6, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 7, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 8, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 9, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 10, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 11, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 12, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 13, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 14, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 15, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 16, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 17, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 18, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 19, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 20, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 21, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 22, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 23, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'سه شنبه',day: 4, time: 24, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},

    {dayName: 'چهارشنبه',day: 5, time: 1, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 2, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 3, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 4, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 5, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 6, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 7, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 8, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 9, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 10, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 11, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 12, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 13, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 14, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 15, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 16, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 17, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 18, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 19, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 20, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 21, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 22, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 23, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'چهارشنبه',day: 5, time: 24, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    
    {dayName: 'پنج شنبه',day: 6, time: 1, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 2, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 3, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 4, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 5, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 6, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 7, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 8, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 9, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 10, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 11, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 12, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 13, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 14, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 15, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 16, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 17, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 18, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 19, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 20, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 21, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 22, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 23, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'پنج شنبه',day: 6, time: 24, type: 'میانه', star: 'عطارد',timeCal: ""},
    
    {dayName: 'جمعه',day: 7, time: 1, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 2, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 3, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 4, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 5, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 6, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 7, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 8, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 9, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 10, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 11, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 12, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 13, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 14, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 15, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 16, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 17, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 18, type: 'نحس اصغر', star: 'مریخ',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 19, type: 'سعد', star: 'شمس',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 20, type: 'سعد اصغر', star: 'زهره',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 21, type: 'میانه', star: 'عطارد',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 22, type: 'تابع موقعیت', star: 'قمر',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 23, type: 'نحس اکبر', star: 'زحل',timeCal: ""},
    {dayName: 'جمعه',day: 7, time: 24, type: 'سعد اکبر', star: 'مشتری',timeCal: ""},
  ];


  db_Users: Array<{Username: string, Password: string, Name:string, id:number}>=[
    // {Username: '1064010000', Password: '09106401000', Name: 'ادمین', id: 0 },
    // {Username: '0052136396', Password: '09127781085', Name: 'ژیلا سلیمانی', id: 0 },
    {Username: '0381130118', Password: '09902925468', Name: 'صدیقه کاظمی', id: 1 },
    {Username: '3080104773', Password: '09377342334', Name: 'آرزو کاظمی', id: 2 },
    {Username: '2031651005', Password: '09374842973', Name: 'نرگس کشاورزیان', id: 3 },
    {Username: '0067762077', Password: '09123876355', Name: 'اکرم پورحیدری', id: 4 },
    {Username: '4578871886', Password: '09127311769', Name: 'مرضیه هراسانی', id: 5 },
    {Username: '0600863980', Password: '09361562444', Name: 'فاطمه شرافتی', id: 6 },
    {Username: '0054896551', Password: '09125402404', Name: 'زهرا زال پور', id: 7 },
    {Username: '0068991906', Password: '09124669398', Name: 'مریم اسکندری', id: 8 },
    {Username: '4310020259', Password: '09126819520', Name: 'ندا حنیفی', id: 9 },
    {Username: '0078570761', Password: '09217305797', Name: 'فریده هیزجی', id: 10 },
    {Username: '0491474946', Password: '09125404408', Name: 'حمیده بهرامی', id: 11 },
    {Username: '0481272402', Password: '09904014408', Name: 'سما گل محمدی', id: 12 },
    {Username: '0058375988', Password: '09124270631', Name: 'اعظم قربانی', id: 13 },
    {Username: '0046749411', Password: '09190785644', Name: 'سیده فاطمه حسینی', id: 14 },
    {Username: '0057381941', Password: '09124110432', Name: 'فریده امین بنانی', id: 15 },
    {Username: '0066645689', Password: '09035826917', Name: 'اکرم سلیمانی', id: 16 },
    {Username: '0050818791', Password: '09125130554', Name: 'اعظم واشقانی فراهانی', id: 17 },
    {Username: '0083180427', Password: '09038285536', Name: 'سکینه سلیمانی', id: 18   },
    {Username: '0043865321', Password: '09124867253', Name: 'زهرا دهقان زاده', id: 19   },
    {Username: '4400057518', Password: '09194349355', Name: 'عصمت فیروزی', id: 20   },
    {Username: '0083613048', Password: '09108931582', Name: 'ثریا حیدری', id: 21   },
    {Username: '0063142333', Password: '09221403517', Name: 'لیلا جاویدفر', id: 22   },
    {Username: '4723130985', Password: '09365157052', Name: 'منا سادات میرهاشم', id: 23   },
    {Username: '2092855344', Password: '09125135677', Name: 'فرشته امیدیان', id: 24   },
    {Username: '0384557491', Password: '09126081358', Name: 'آمنه زادفر', id: 25   },
    {Username: '0073759813', Password: '09125251526', Name: 'خاطره اکبری ماشک', id: 26   },
    {Username: '4591291741', Password: '09128022498', Name: 'فرشته محمدی', id: 27   },
  ];



  constructor() { }

  gettokenRegister(){
    return this.tokenRegister;
  }
  settokenRegister(data: string) {
    this.tokenRegister = data;
  }
  getDatazodiac(){
    return this.db_zodiac;
  }
  getNehsDayYears(){
    return this.db_NehsDayYears;
  }
  getMonthAP(){
    return this.db_MonthAP;
  }
  getZodiacGeometry(){
    return this.db_zodiacGeometry;
  }
  getzodiacRelationships(){
    return this.db_zodiacRelationships;
  }
  getzodiacStar(){
    return this.db_zodiacStar;
  }
  gettemperament(){
    return this.db_temperament;
  }
  getoilUltra(){
    return this.db_oilUltra;
  }
  getStarDay(){
    return this.db_StarDay;
  }
  getRelationshipsStar(){
    return this.db_RelationshipsStar;
  }
  getDirectionABJAD(){
    return this.db_DirectionABJAD;
  }
  getDataABJAD(){
    return this.db_ABJAD;
  }
  getData(){
    return this.db_DTTS;
  }

  getuser(){
    return this.db_Users;
  }
  
}
