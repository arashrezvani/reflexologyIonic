import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../dataBase/InterFaceDb'; // مسیر به فایل اینترفیس

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

  db_zodiac: Array<{SignNameNum:number, SignName: string, Element: string, temperament:string , temperamentName:string, Star:string, moon:string, herz:string,MF:string,PF:string,NF:string}>=[
    {SignNameNum: 1, SignName: 'حمل', Element: 'آتش', temperament:'گرم و خشک' ,temperamentName:'صفرا', Star:'مریخ', moon:'فرودین', herz:'حرز امام جواد علیه سلام روی پوست آهو نوشته شود',MF:'برج یک - برج فلکی حمل یا میش (فروردین)',PF:'ماجراجویی-شجاعت-تنوع طلبی-سرزندگی-تفکرمثبت-پرشور بودن',NF:'خودرای بودن-کله شقی- تصمیم گیری آنی-نامرتب بودن-مخالف بودن'},
    {SignNameNum: 2, SignName: 'ثور', Element: 'خاک', temperament:'سرد و خشک' ,temperamentName:'سودا', Star:'زهره', moon:'اردیبهشت', herz:'حرز امام جواد علیه سلام روی فلز نوشته شود(انگشتر شبیه ستاره یا دستبند)',MF:'برج دو - برج فلکی ثور یاگاو (اردیبهشت)',PF:'بخشنده بودن- قابل اتکا بودن- تواضع-سرسختی',NF:'کله شقی - خودخواهی - تنبلی'},
    {SignNameNum: 3, SignName: 'جوزا', Element: 'هوا', temperament:'گرم و تر' ,temperamentName:'دم', Star:'عطارد', moon:'خرداد', herz:'حرز امام جواد علیه سلام روی پوست آهو نوشته شود',MF:'برج سه - برج فلکی جوزا یا دو پیکر (خرداد)',PF:'انطباق پذیری- تنوع طلبی- روابط عموی قوی-شوخ طبعی',NF:'عدم ثبات- ظاهر بینی- بی هدف بودن- استرسی بودن'},
    {SignNameNum: 4, SignName: 'سرطان', Element: 'آب', temperament:'سرد و تر' ,temperamentName:'بلغم', Star:'قمر', moon:'تیر', herz:'حرز امام جواد علیه سلام روی کاغذ نوشته شود',MF:'برج چهار - برج سرطان یا خرچنگ(تیر)',PF:'خلاقیت- قدرت تدبیر-وفاداری- عاطفی بودن',NF:'دمدمی مزاج بودن- منفی گرایی- شکاکیت'},
    {SignNameNum: 5, SignName: 'اسد', Element: 'آتش', temperament:'گرم و خشک' ,temperamentName:'صفرا', Star:'شمس', moon:'مرداد', herz:'حرز امام جواد علیه سلام روی پوست آهو نوشته شود',MF:'برج پنج - برج اسد یا شير (مرداد)',PF:'پر انرژی بودن- خوش بینی- رک گویی- وفاداری',NF:'لجاجت- احساس مالکیت- عجول بودن- خود رای بودن'},
    {SignNameNum: 6, SignName: 'سنبله', Element: 'خاک', temperament:'سرد و خشک' ,temperamentName:'سودا', Star:'عطارد', moon:'شهریور', herz:'حرز امام جواد علیه سلام روی فلز نوشته شود(انگشتر شبیه ستاره یا دستبند)',MF:'برج شش - برج فلکی سنبله یا دوشیزه (شهریور)',PF:'دقیق بودن- عملگرابودن- تحلیل گر بودن- قابل اطمینان بودن',NF:'منتقدبودن- گاهی بی رحم می شوند- محافظه کاری - وسواس بودن'},
    {SignNameNum: 7, SignName: 'میزان', Element: 'هوا', temperament:'گرم و تر' ,temperamentName:'دم', Star:'زهره', moon:'مهر', herz:'حرز امام جواد علیه سلام روی پوست آهو نوشته شود',MF:'برج هفت - برج فلکی میزان یا ترازو  (مهر)',PF:'رمانتیک بودن- انصاف داشتن - تدبیر داشتن- شنونده های خوب',NF:'غیر قابل اعتمادبودن- عدم قاطعیت - ظاهر بین'},
    {SignNameNum: 8, SignName: 'عقرب', Element: 'آب', temperament:'سرد و تر' ,temperamentName:'بلغم', Star:'مریخ', moon:'آبان', herz:'حرز امام جواد علیه سلام روی کاغذ نوشته شود',MF:'برج هشت - برج فلکی عقرب یا کژدم (آبان)',PF:'تمرکز داشتن - شجاعت- جاه طلبی- فراست',NF:'حسادت-  زود رنج بودن- دوست دارند همیشه حاکم باشند'},
    {SignNameNum: 9, SignName: 'قوس', Element: 'آتش', temperament:'گرم و خشک' ,temperamentName:'صفرا', Star:'مشتری', moon:'آذر', herz:'حرز امام جواد علیه سلام روی پوست آهو نوشته شود',MF:'برج نه - برج فلکی قوس یا کمان (آذر)',PF:'رک گویی- روشنفکری- فیلسوف بودن- سخاوتمند بودن',NF:'بی احتیاطی - بی تدبیری- عجول بودن -اعتماد به نفس بیش از حد'},
    {SignNameNum: 10, SignName: 'جدی', Element: 'خاک', temperament:'سرد و خشک' ,temperamentName:'سودا', Star:'زحل', moon:'دی', herz:'حرز امام جواد علیه سلام روی فلز نوشته شود(انگشتر شبیه ستاره یا دستبند)',MF:'برج ده - برج فلکی جدی یا بزغاله (دی)',PF:'عملگرایی-باهوش بودن- صبور بودن - منظم بودن',NF:'منفی بافی- کله شق بودن- پررویی'},
    {SignNameNum: 11, SignName: 'دلو', Element: 'هوا', temperament:'گرم و تر' ,temperamentName:'دم', Star:'زحل', moon:'بهمن', herz:'حرز امام جواد علیه سلام روی پوست آهو نوشته شود',MF:'برج یازده - برج فلکی دلو (بهمن)',PF:'دوست داشتنی بودن- بشر دوستی - خلاقیت- وفاداری',NF:'غیر قابل پیش بینی بودن- عدم ثبات - یک دنده- گوشه گیری ناگهانی- تندرو'},
    {SignNameNum: 12, SignName: 'حوت', Element: 'آب', temperament:'سرد و تر' ,temperamentName:'بلغم', Star:'مشتری', moon:'اسفند', herz:'حرز امام جواد علیه سلام روی کاغذ نوشته شود',MF:'برج دوازده - برج فلکی حوت یا ماهی (اسفند)',PF:'تخیل فوق العاده- مهربانی- غمخواری بودن- قدرت تفکربالا- احساسی بودن',NF:'تمایل به فرار از موقعیت- منفی گرایی - تنبلی'},
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
  db_ABJAD: Array<{W: string, Saghir: number, Kabir: number, NumW:number , type:string,tw:string,mean:string,tw1:string,tw2:string,tw3:string,tw4:string,jab1:string,jab2:string,jab3:string,jab4:string}>=[
    {W: 'ا', Saghir: 1, Kabir: 1, NumW: 1, type:'',tw:'الف',mean:'جامعیت و تمام',tw1:'نورانی',tw2:'ملفوظی',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ب', Saghir: 2, Kabir: 2, NumW: 2, type:'',tw:'با',mean:'شروع و آغاز کار',tw1:'ظلمانی',tw2:'مسروری',tw3:'سماوی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ج', Saghir: 3, Kabir: 3, NumW: 3, type:'',tw:'جیم',mean:'عظمت و بزرگی',tw1:'ظلمانی',tw2:'ملفوظی',tw3:'سماوی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'د', Saghir: 4, Kabir: 4, NumW: 4, type:'',tw:'دال',mean:'شکست و احتیاج',tw1:'ظلمانی',tw2:'ملفوظی',tw3:'سماوی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ه', Saghir: 5, Kabir: 5, NumW: 5, type:'',tw:'ها',mean:'ترس و وحشت',tw1:'نورانی',tw2:'مسروری',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'و', Saghir: 6, Kabir: 6, NumW: 6, type:'',tw:'واو',mean:'نهایت یک چیز',tw1:'ظلمانی',tw2:'ملبوبی',tw3:'سماوی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'هم در دنیا موفقند هم در آخرت',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ز', Saghir: 7, Kabir: 7, NumW: 7, type:'',tw:'زا',mean:'شکوه و بزرگی',tw1:'ظلمانی',tw2:'مسروری',tw3:'سماوی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ح', Saghir: 8, Kabir: 8, NumW: 8, type:'',tw:'حا',mean:'حقیقت طلبی و حق',tw1:'نورانی',tw2:'مسروری',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ط', Saghir: 9, Kabir: 9, NumW: 9, type:'',tw:'طا',mean:'طلاق و جدایی',tw1:'نورانی',tw2:'مسروری',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ی', Saghir: 10, Kabir: 10, NumW: 10, type:'',tw:'یا',mean:'همراهی و مشارکت',tw1:'نورانی',tw2:'مسروری',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ک', Saghir: 8, Kabir: 20, NumW: 11, type:'',tw:'کاف',mean:'بخشش و کرم',tw1:'نورانی',tw2:'ملفوظی',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ل', Saghir: 6, Kabir: 30, NumW: 12, type:'',tw:'لام',mean:'محدودیت و مرزبندی',tw1:'نورانی',tw2:'ملفوظی',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'م', Saghir: 4, Kabir: 40, NumW: 13, type:'',tw:'میم',mean:'مالکیت',tw1:'نورانی',tw2:'ملبوبی',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'هم در دنیا موفقند هم در آخرت',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ن', Saghir: 2, Kabir: 50, NumW: 14, type:'',tw:'نون',mean:'توجه به اصل',tw1:'نورانی',tw2:'ملبوبی',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'هم در دنیا موفقند هم در آخرت',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'س', Saghir: 0, Kabir: 60, NumW: 15, type:'',tw:'سین',mean:'آرامش و سکون',tw1:'نورانی',tw2:'ملفوظی',tw3:'ارضی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ع', Saghir: 10, Kabir: 70, NumW: 16, type:'',tw:'عین',mean:'علم و آگاهی',tw1:'نورانی',tw2:'ملفوظی',tw3:'ارضی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'موفق در علوم زمینی،زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ف', Saghir: 8, Kabir: 80, NumW: 17, type:'',tw:'فا',mean:'فانی،پایان،نابودی',tw1:'ظلمانی',tw2:'مسروری',tw3:'ارضی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ص', Saghir: 6, Kabir: 90, NumW: 18, type:'',tw:'صاد',mean:'صبر و مقاومت',tw1:'نورانی',tw2:'ملفوظی',tw3:'ارضی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ق', Saghir: 4, Kabir: 100, NumW: 19, type:'',tw:'قاف',mean:'بقا، باقی ماندن',tw1:'نورانی',tw2:'ملفوظی',tw3:'ارضی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ر', Saghir: 8, Kabir: 200, NumW: 20, type:'',tw:'را',mean:'کشف، شفافیت',tw1:'نورانی',tw2:'مسروری',tw3:'ارضی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ش', Saghir: 0, Kabir: 300, NumW: 21, type:'',tw:'شین',mean:'شدت و استحکام',tw1:'ظلمانی',tw2:'ملفوظی',tw3:'ارضی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ت', Saghir: 4, Kabir: 400, NumW: 22, type:'',tw:'تا',mean:'خواسته و شوق ',tw1:'ظلمانی',tw2:'مسروری',tw3:'ارضی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ث', Saghir: 8, Kabir: 500, NumW: 23, type:'',tw:'ثا',mean:'علت و دلیل',tw1:'ظلمانی',tw2:'مسروری',tw3:'ارضی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'خ', Saghir: 0, Kabir: 600, NumW: 24, type:'',tw:'خا',mean:'خلاقیت و ابتکار',tw1:'ظلمانی',tw2:'مسروری',tw3:'ارضی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ذ', Saghir: 4, Kabir: 700, NumW: 25, type:'',tw:'ذال',mean:'کوبندگی و محکم بودن',tw1:'ظلمانی',tw2:'ملفوظی',tw3:'ارضی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ض', Saghir: 8, Kabir: 800, NumW: 26, type:'',tw:'ضاد',mean:'ضرر و زیان',tw1:'ظلمانی',tw2:'ملفوظی',tw3:'ارضی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'ظ', Saghir: 0, Kabir: 900, NumW: 27, type:'',tw:'ظا',mean:'نگهداری',tw1:'ظلمانی',tw2:'مسروری',tw3:'ارضی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'غ', Saghir: 4, Kabir: 1000, NumW: 28, type:'',tw:'غین',mean:'غلظت و تراکم',tw1:'ظلمانی',tw2:'ملفوظی',tw3:'ارضی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'موفق در علوم زمینی، زیستی، دامداری، گیاه شناسی، پزشکی',jab4:''},
    {W: 'گ', Saghir: 8, Kabir: 20, NumW: 29, type:'',tw:'گاف',mean:'بخشش و کرم',tw1:'نورانی',tw2:'ملفوظی',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'چ', Saghir: 3, Kabir: 3, NumW: 30, type:'',tw:'چیم',mean:'عظمت و بزرگی',tw1:'ظلمانی',tw2:'ملفوظی',tw3:'سماوی',tw4:'',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'پ', Saghir: 2, Kabir: 2, NumW: 31, type:'',tw:'پا',mean:'شروع و آغاز کار',tw1:'ظلمانی',tw2:'',tw3:'سماوی',tw4:'مسروری',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ژ', Saghir: 7, Kabir: 7, NumW: 32, type:'',tw:'ژا',mean:'شکوه و بزرگی',tw1:'ظلمانی',tw2:'',tw3:'سماوی',tw4:'مسروری',jab1:'در امور دنیا توفیق دارند - برای تربیت شان باید وقت گذاشت',jab2:'اخروی هستند- باید به فکر کسب مهارت و شغل خوب باشند',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'آ', Saghir: 1, Kabir: 1, NumW: 1, type:'',tw:'الف',mean:'جامعیت و تمام',tw1:'نورانی',tw2:'ملفوظی',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
    {W: 'ء', Saghir: 1, Kabir: 1, NumW: 1, type:'',tw:'',mean:'-',tw1:'',tw2:'',tw3:'',tw4:'',jab1:'',jab2:'',jab3:'',jab4:''},
    //{W: 'الف', Saghir: 1, Kabir: 1, NumW: 1, type:'',tw:'الف',mean:'جامعیت و تمام',tw1:'نورانی',tw2:'ملفوظی',tw3:'سماوی',tw4:'',jab1:'در امور معنوی موفق ترند - فرکانس جذب معنویتشون بالاست - باید مهارت پول در آوردن یاد بگیرند',jab2:'دست به خاکستر بزنه طلا میشه',jab3:'کسب علوم آسمانی، عرفان، نجوم، فلسفه، حقوق',jab4:''},
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


  db_Users: Array<{Username: string, Mobile: string, Mobile1: string, Password: string, City: string, Package : string, Cost: string, Costopt: string, Gender: string, etiaa: string ,telegram: string, FirstName: string, LastName: string, Name:string, id:number}>=[
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 235  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 236  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 237  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 238  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 239  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 240  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 241  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 242  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 243  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 244  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 245  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 246  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 247  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 248  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 249  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 250  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 251  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 252  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 253  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 254  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 255  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 256  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 257  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 258  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 259  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 260  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 261  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 262  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 263  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 264  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 265  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 266  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 267  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 268  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 269  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 270  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 271  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 272  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 273  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 274  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 275  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 276  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 277  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 278  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 279  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 280  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 281  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 282  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 283  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 284  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 285  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 286  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 287  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 288  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 289  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 290  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 291  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 292  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 293  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 294  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 295  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 296  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 297  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 298  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 299  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 300  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 301  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 302  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 303  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 304  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 305  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 306  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 307  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 308  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 309  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 310  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 311  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 312  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 313  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 314  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 315  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 316  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 317  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 318  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 319  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 320  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 321  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 322  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 323  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 324  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 325  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 326  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 327  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 328  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 329  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 330  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 331  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 332  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 333  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 334  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 335  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 336  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 337  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 338  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 339  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 340  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 341  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 342  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 343  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 344  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 345  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 346  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 347  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 348  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 349  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 350  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 351  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 352  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 353  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 354  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 355  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 356  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 357  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 358  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 359  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 360  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 361  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 362  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 363  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 364  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 365  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 366  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 367  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 368  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 369  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 370  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 371  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 372  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 373  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 374  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 375  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 376  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 377  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 378  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 379  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 380  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 381  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 382  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 383  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 384  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 385  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 386  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 387  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 388  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 389  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 390  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 391  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 392  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 393  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 394  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 395  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 396  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 397  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 398  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 399  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 400  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 401  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 402  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 403  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 404  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 405  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 406  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 407  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 408  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 409  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 410  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 411  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 412  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 413  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 414  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 415  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 416  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 417  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 418  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 419  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 420  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 421  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 422  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 423  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 424  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 425  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 426  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 427  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 428  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 429  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 430  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 431  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 432  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 433  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 434  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 435  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 436  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 437  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 438  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 439  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 440  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 441  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 442  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 443  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 444  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 445  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 446  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 447  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 448  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 449  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 450  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 451  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 452  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 453  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 454  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 455  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 456  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 457  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 458  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 459  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 460  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 461  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 462  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 463  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 464  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 465  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 466  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 467  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 468  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 469  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 470  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 471  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 472  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 473  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 474  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 475  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 476  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 477  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 478  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 479  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 480  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 481  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 482  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 483  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 484  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 485  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 486  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 487  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 488  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 489  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 490  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 491  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 492  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 493  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 494  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 495  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 496  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 497  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 498  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 499  },
    {Username: '2443424434' , Mobile: '', Mobile1: '', Password: '12443424434', City: '', Package : '2', Cost: 'بله', Costopt: 'خير', Gender: 'خانم', etiaa: '' ,telegram: '', FirstName: '', LastName: '', Name:'', id: 500  },
  ];

  updateUser(updatedUser: User) {
    const index = this.db_Users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.db_Users[index] = { ...updatedUser };
      console.log("this.db_Users[index] : ",this.db_Users[index]);
    }
  }



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
