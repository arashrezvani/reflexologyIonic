import { Injectable } from '@angular/core';
export interface PointsModel{
  category: string;   
  id: string;
  name: string;
  Enname: string;
  faname: string;
  meridian:string;
  Fameridian:string;
  description: string;
  location: string;
  pressureAngle: string;
  pressureAmount: string;
  repetitions: string;
  time: string;
  extra: string;
  imageUrl: string;
  desc: string;
  descrip: string;
  descExtra: string;
  supplementary: string;
  boss: string;
  ex: string;
  yinyang: string;
  des: string;
  imageUrls: string;
  main: string;
}
export interface Category {
  title: string;
  titleFa: string;
  desc: string;
  subgroups: PointGroup[];
}
// 🔹 ساختار جدید برای گروه‌های سفارشی
export interface PointGroup {
  title: string;       // مثل Alarm point
  ids: string[];       // لیست آی‌دی‌ها
  desc: string;
}
@Injectable({
  providedIn: 'root'
})
export class PonitsService {
  private points:PointsModel[]=[
    {
      category: "",
      Enname: "",
      faname: "",
      meridian: "",
      Fameridian: "",
      id: "",
      name: "",
      description: "",
      location: "",
      pressureAngle: "",
      pressureAmount: "",
      repetitions: "",
      time: "",
      extra: "",
      imageUrl: "",
      desc: `

      `,
      descrip: "",
      descExtra: "",
      supplementary: "",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
    },


// ==============================================  LI   ===============================================


{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر مریدین روده بزرگ به شرح زیر است:

1. شروع از نوک انگشت دوم (LI1).  
2. حرکت در امتداد لبه فوقانی انگشت دوم (LI2، LI3).  
3. خروج از هاپ‌گوک (LI4) بین استخوان متاکارپال اول و دوم.  
4. صعود و ورود به جعبه آناتومیکال (مرکز بین دو تاندون اکستنسور پولیسیس برویس و اکستنسور پولیسیس لونگوس) (LI5).  
5. حرکت در امتداد لبه فوقانی استخوان زند زبرین (LI6، LI7، LI8، LI9، LI10).  
6. ورود به لبه خارجی ناحیه آرنج (LI11).  
7. صعود در امتداد لبه قدامی خارجی بازو (LI12، LI13، LI14).  
8. صعود به شانه (LI15).  
9. خروج از لبه قدامی انتهای آکرومیال کتف (LI16).  
10. صعود (SI12)، خروج از دای‌چو (GV14) و تجمع با شش مریدین یانگ (GV14).  
11. نزول و ورود به حفره بزرگ بالای ترقوه.  
12. ارتباط با ریه.  
13. نزول و نفوذ به دیافراگم.  
14. اتصال به روده بزرگ (ST25، نقطه جلویی-مو روده بزرگ).  
15. شاخه‌ای از مریدین،  
16. جدا شدن از حفره بزرگ بالای ترقوه، صعود در امتداد گردن و نفوذ به گونه (LI17، LI18).  
17. ورود به دندان‌های تحتانی.  
18. چرخش و حرکت در امتداد دهان.  
19. تقاطع با مریدین مقابل در فیلتروم (GV26).  
20. از چپ به راست و از راست به چپ.  
21. حرکت در امتداد سوراخ بینی و صعود (LI19، LI20).

مسیر انشعاب مریدین روده بزرگ به شرح زیر است:

1. انشعاب مریدین روده بزرگ،  
2. حرکت در امتداد ناحیه قفسه سینه و پستان از دست.  
3. جدا شدن از مفصل شانه (LI15).  
4. ورود به زیر ستون مهره‌های نخاعی.  
5. حرکت به سمت روده بزرگ.  
6. پیوستن به ریه.  
7. صعود دوباره در امتداد حلق و حنجره.  
8. ظهور از حفره بزرگ بالای ترقوه.  
9. ترکیب با مریدین روده بزرگ.


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

//LI
{
category: "LI",
Enname: "Shangyang",
faname: "شانگ یانگ",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI1",
name: "LI1 Shangyang شانگ یانگ",
description: "تجاری یانگ",
location: "محل نقطه: در گوشه خارجی ناخن انگشت اشاره دست (۰.۱ سون از لبه ناخن)",
pressureAngle: " مایل (۱۵ درجه)",
pressureAmount: "فشار ۲-۳ (ملایم)",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Jing-Well (چاه)",
imageUrl: "assets/images/li/li1.jpg",
desc: `

درمان گلودرد و تب

بهبود دندان درد

کاهش سردرد

بیدار کردن هوشیاری
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اضطراری برای احیای هوشیاری"
},
{
category: "LI",
Enname: "Erjian",
faname: "ار جیان",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI2",
name: "LI2 Erjian ار جیان",
description: "فضای دوم",
location: "محل نقطه: روی انگشت اشاره، در فرورفتگی قرمز-سفید پوست در سمت انگشت شست هنگام خم کردن انگشت",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Ying-Spring (چشمه)",
imageUrl: "assets/images/li/li2.jpg",
desc: `

درمان دندان درد

کاهش تورم گلو

بهبود سردرد

تنظیم روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای دندان درد"
},
{
category: "LI",
Enname: "Sanjian",
faname: "سان جیان",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI3",
name: "LI3 Sanjian سان جیان",
description: "فضای سوم",
location: "محل نقطه: روی انگشت اشاره، در فرورفتگی پشت مفصل متاکارپوفالانژیال (وقتی دست مشت شده است)",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Shu-Stream (جریان)",
imageUrl: "assets/images/li/li3.jpg",
desc: `

درمان درد انگشت

کاهش تب

بهبود بینایی

تنظیم عملکرد روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای دردهای دست"
},
{
category: "LI",
Enname: "Hegu",
faname: "هیگو",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI4",
name: "LI4 Hegu هیگو",
description: "دره اتصال",
location: "محل نقطه: روی دست، بین انگشت شصت و اشاره بین استخوان‌های متاکارپ اول و دوم (در بلندترین نقطه ماهیچه هنگام بستن انگشتان)",
pressureAngle: "عمود",
pressureAmount: "فشار 7 تا 10",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Yuan-Source (منبع) رئیسه - یانگ",
imageUrl: "assets/images/li/li4.jpg",
desc: `

حرکت روده ها را تسهیل
نفخ را رفع کرده
انتشار انرژی از ریه به سطح بدن کمک میکند
درمان سردرد
دندان درد
سینوزیت 
سرماخوردگی
درمان سردرد و دندان درد
کاهش استرس
بهبود یبوست
تقویت سیستم ایمنی
تسکین درد زایمان
درد نواحی فوقانی بدن
اهمیت بسیاری دارد.

توجه در زمان بارداری این نقطه گرفته نشود باعث سقط جنین می شود


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"رئیسه",
      ex:"",
      yinyang:"یانگ",
      des:"",
      imageUrls:"assets/images/hegu.jpg",
      main: "یکی از مهمترین نقاط بدن برای تسکین درد"
},
{
category: "LI",
Enname: "Yangxi",
faname: "یانگ شی",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI5",
name: "LI5 Yangxi یانگ شی",
description: "دره یانگ",
location: "محل نقطه: روی مچ دست، در فرورفتگی بین تاندون‌های اکستانسور پولیسیس لونگوس و اکستانسور دیژیتوروم",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Jing-River (رودخانه)",
imageUrl: "assets/images/li/li5.jpg",
desc: `

درمان درد مچ دست

کاهش تورم گلو

بهبود وزوز گوش

تنظیم روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/li5.png",
      main: "نقطه مؤثر برای مشکلات مچ دست"
},
{
category: "LI",
Enname: "Pianli",
faname: "پیان لی",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI6",
name: "LI6 Pianli پیان لی",
description: "انحراف از مسیر",
location: "محل نقطه: روی ساعد، ۳ سون بالاتر از چین مچ دست، در خط اتصال LI5 به LI11",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Luo-Connecting (اتصال)",
imageUrl: "assets/images/li/li6.jpg",
desc: `

درمان تورم صورت

کاهش وزوز گوش

بهبود اسهال

تنظیم مایعات بدن
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای تورم صورت"
},
{
category: "LI",
Enname: "Wenliu",
faname: "ون لیو",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI7",
name: "LI7 Wenliu ون لیو",
description: "جریان گرم",
location: "محل نقطه: روی ساعد، ۵ سون بالاتر از چین مچ دست، در خط اتصال LI5 به LI11",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Xi-Cleft (شکاف)",
imageUrl: "assets/images/li/li7.jpg",
desc: `

درمان گلودرد

کاهش تب

بهبود درد شانه

تنظیم تعریق
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/li7.png",
      main: "نقطه مؤثر برای عفونت‌های گلو"
},
{
category: "LI",
Enname: "Xialian",
faname: "شیان لیان",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI8",
name: "LI8 Xialian شیان لیان",
description: "بخش پایینی",
location: "محل نقطه: روی ساعد، ۴ سون زیر LI11، در خط اتصال LI5 به LI11",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای روده",
imageUrl: "assets/images/li/li8.jpg",
desc: `

درمان درد بازو

کاهش سردرد

بهبود مشکلات گوارشی

تنظیم فشار خون
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای دردهای اندام فوقانی"
},
{
category: "LI",
Enname: "Shanglian",
faname: "شانگ لیان",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI9",
name: "LI9 Shanglian شانگ لیان",
description: "بخش بالایی",
location: "محل نقطه: روی ساعد، ۳ سون زیر LI11، در خط اتصال LI5 به LI11",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای روده",
imageUrl: "assets/images/li/li9.jpg",
desc: `

درمان درد شانه

کاهش تورم گلو

بهبود یبوست

تنظیم انرژی روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای دردهای شانه"
},
{
category: "LI",
Enname: "Shousanli",
faname: "شو سان لی",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI10",
name: "LI10 Shousanli شو سان لی",
description: "سه لی دست",
location: "محل نقطه: روی ساعد، ۲ سون زیر LI11، در خط اتصال LI5 به LI11",
pressureAngle: " عمود",
pressureAmount: "۴-۶",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه مهم برای اندام فوقانی",
imageUrl: "assets/images/li/li10.jpg",
desc: `

درمان درد بازو و شانه

تقویت سیستم ایمنی

بهبود فلج صورت

تنظیم عملکرد روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای دردهای اندام فوقانی"
},
{
category: "LI",
Enname: "Quchi",
faname: "چی چی",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI11",
name: "LI11 Quchi چی چی",
description: "استخر خمیده",
location: "محل نقطه: در چین آرنج، در انتهای خارجی چین (وقتی آرنج خم است)",
pressureAngle: " عمود",
pressureAmount: "فشار 2 تا 10",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه He-Sea (دریا)",
imageUrl: "assets/images/li/li11.jpg",
desc: `

کاهش تب و التهاب

درمان اگزما و بیماری‌های پوستی

تقویت سیستم ایمنی

تنظیم فشار خون

بهبود درد آرنج
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"رئیسه",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/li11.png",
      main: "یکی از مهمترین نقاط بدن برای تقویت ایمنی"
},
{
category: "LI",
Enname: "Zhouliao",
faname: "ژو لیائو",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI12",
name: "LI12 Zhouliao ژو لیائو",
description: "سوراخ آرنج",
location: "محل نقطه: روی بازو، ۱ سون بالاتر از LI11، در فرورفتگی پشت استخوان بازو",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای آرنج",
imageUrl: "assets/images/li/li12.jpg",
desc: `

درمان درد آرنج

کاهش تورم شانه

بهبود فلج بازو

تنظیم انرژی روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای مشکلات آرنج"
},
{
category: "LI",
Enname: "Shouwuli",
faname: "شو وو لی",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI13",
name: "LI13 Shouwuli شو وو لی",
description: "پنج لی دست",
location: "محل نقطه: روی بازو، ۳ سون بالاتر از LI11، در لبه خارجی عضله دوسر",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای بازو",
imageUrl: "assets/images/li/li13.jpg",
desc: `

درمان درد بازو

کاهش تورم غدد لنفاوی

بهبود سرفه

تنظیم عملکرد روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای دردهای بازو"
},
{
category: "LI",
Enname: "Binao",
faname: "بی نائو",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI14",
name: "LI14 Binao بی نائو",
description: "بازوی بالایی",
location: "محل نقطه: روی بازو، ۷ سون بالاتر از LI11، در لبه خارجی عضله دلتوئید",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه تقاطع با مریدین روده کوچک",
imageUrl: "assets/images/li/li14.jpg",
desc: `

درمان درد شانه

بهبود دید چشم

کاهش تورم غدد

تنظیم انرژی روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای دردهای شانه"
},
{
category: "LI",
Enname: "Jianyu",
faname: "جیان یو",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI15",
name: "LI15 Jianyu جیان یو",
description: "استخوان شانه",
location: "محل نقطه: روی شانه، در فرورفتگی زیر زائده آکرومیون (وقتی دست به طرفین بالا برده می‌شود)",
pressureAngle: " عمود",
pressureAmount: "۴-۶",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه مهم برای شانه",
imageUrl: "assets/images/li/li15.jpg",
desc: `

درمان درد و فلج شانه

بهبود آرتروز شانه

کاهش تب

تنظیم عملکرد روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/li15.png",
      main: "نقطه کلیدی برای مشکلات شانه"
},
{
category: "LI",
Enname: "Jugu",
faname: "جو گو",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI16",
name: "LI16 Jugu جو گو",
description: "استخوان بزرگ",
location: "محل نقطه: در بالای شانه، بین زائده آکرومیون و انتهای استخوان ترقوه",
pressureAngle: " عمود",
pressureAmount: "۳-۵",
repetitions: "۲-۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه تقاطع با مریدین کیسه صفرا",
imageUrl: "assets/images/li/li16.jpg",
desc: `

درمان درد شانه و گردن

بهبود مشکلات تنفسی

کاهش تورم غدد

تنظیم انرژی روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای دردهای شانه و گردن"
},
{
category: "LI",
Enname: "Tianding",
faname: "تیان دینگ",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI17",
name: "LI17 Tianding تیان دینگ",
description: "ظرف آسمانی",
location: "محل نقطه: روی گردن، ۱ سون پشت LI18، در لبه عضله استرنوکلیدوماستوئید",
pressureAngle: " عمود (با احتیاط)",
pressureAmount: "۲-۴ (ملایم)",
repetitions: "۱-۲ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه حساس گردن",
imageUrl: "assets/images/li/li17.jpg",
desc: `

درمان گلودرد

کاهش خفگی

بهبود گرفتگی صدا

تنظیم عملکرد روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای مشکلات گلو"
},
{
category: "LI",
Enname: "Futu",
faname: "فو تو",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI18",
name: "LI18 Futu فو تو",
description: "پشتیبان برجسته",
location: "محل نقطه: روی گردن، ۳ سون بالاتر از ترقوه، در لبه عضله استرنوکلیدوماستوئید",
pressureAngle: " عمود (با احتیاط)",
pressureAmount: "۲-۴ (ملایم)",
repetitions: "۱-۲ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه حساس گردن",
imageUrl: "assets/images/li/li18.jpg",
desc: `

درمان سرفه و آسم

کاهش تورم گلو

بهبود گرفتگی صدا

تنظیم عملکرد روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/li18.png",
      main: "نقطه مؤثر برای مشکلات تنفسی"
},
{
category: "LI",
Enname: "Kouheliao",
faname: "کو هه لیائو",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI19",
name: "LI19 Kouheliao کو هه لیائو",
description: "سوراخ دهان",
location: "محل نقطه: روی صورت، در زیر بینی و خارج از لب بالا (در خط عمودی از مردمک چشم)",
pressureAngle: " مایل (۳۰ درجه)",
pressureAmount: "۲-۳ (ملایم)",
repetitions: "۱-۲ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه حساس صورت",
imageUrl: "assets/images/li/li19.jpg",
desc: `

درمان خونریزی بینی

کاهش فلج صورت

بهبود گرفتگی بینی

تنظیم عملکرد روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای مشکلات بینی"
},
{
category: "LI",
Enname: "Yingxiang",
faname: "یینگ شیانگ",
meridian: "Large Intestine Meridian (LI)",
Fameridian: "مریدین روده بزرگ",
id: "LI20",
name: "LI20 Yingxiang یینگ شیانگ",
description: "استقبال از عطر",
location: "محل نقطه: کنار بینی، در فرورفتگی کنار بال بینی (در چین نازولبیال)",
pressureAngle: " مایل (۳۰ درجه به سمت بینی)",
pressureAmount: "۲-۳ (ملایم)",
repetitions: "۱-۲ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "آخرین نقطه مریدین روده بزرگ",
imageUrl: "assets/images/li/li20.jpg",
desc: `

درمان گرفتگی بینی

کاهش سینوزیت

بهبود آلرژی

تنظیم بویایی
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/li520.png",
      main: "نقطه کلیدی برای مشکلات بینی و سینوس"
},


// ==============================================  SI   ===============================================


{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر مریدین روده کوچک به شرح زیر است:

1. شروع از نوک انگشت پنجم (SI1).  
2. حرکت در امتداد لبه خارجی انگشت پنجم (SI2، SI3، SI4، SI5).  
3. خروج از زائده استیلوئید استخوان زُند زیرین (SI6).  
4. صعود مستقیم در امتداد لبه تحتانی استخوان زند زبرین (SI7).  
5. خروج از بین زائده آرنجی استخوان زند زیرین و اپی‌کوندیل داخلی استخوان بازو در ناحیه داخلی آرنج (SI8).  
6. صعود در امتداد لبه خلفی خارجی بازو.  
7. خروج از نقطه گیون‌جونگ (تقاطع مفصل گلنوهومرال) (SI9).  
8. حرکت در اطراف ناحیه کتف (SI10، SI11، SI12، SI13، BL41، SI14، BL11، SI15).  
9. تقاطع در شانه (GV14).  
10. نفوذ و ورود به حفره بزرگ بالای ترقوه.  
11. ارتباط با قلب (CV17).  
12. حرکت در امتداد حلق.  
13. نفوذ به دیافراگم (CV13) و نزول.  
14. رسیدن به معده (CV12).  
15. ورود به روده کوچک (CV10).  
16. یکی از شاخه‌ها،  
17. جدا شدن از حفره بزرگ بالای ترقوه (SI16، SI17).  
18. صعود در امتداد گردن و عبور از گونه (ST6).  
19. رسیدن به گوشه خارجی چشم (GB1).  
20. بازگشت و ورود به گوش (TE22، SI19).  
21. شاخه دیگر،  
22. جدا شدن به‌صورت متفاوت از گونه و صعود مورب به استخوان بینی (ST6).  
23. رسیدن به بینی.  
24. حرکت به گوشه خارجی چشم (BL1).  
25. همگرایی در ناحیه اطراف استخوان گونه (SI18).

مسیر انشعاب مریدین روده کوچک به شرح زیر است:

1. انشعاب مریدین روده کوچک،  
2. حرکت از بالا به پایین.  
3. جدا شدن از مفصل شانه.  
4. ورود به زیر بغل.  
5. حرکت به سمت قلب.  
6. اتصال به روده کوچک.


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

    //مریدین روده کوچک (Small Intestine Meridian - SI) 
    {
      category: "SI",
      Enname: "خلاصه مریدین روده کوچک",
      faname: "",
      meridian: "Small Intestine Meridian (SI)",
      Fameridian: "مریدین روده کوچک",
      id: "",
      name: "",
      description: "",
      location: "",
      pressureAngle: "",
      pressureAmount: "",
      repetitions: "",
      time: "",
      extra: "",
      imageUrl: "",
      desc: `
تعداد نقاط: ۱۹ نقطه (SI1 تا SI19)

نقاط کلیدی:

SI3 (هو شی) برای دردهای اسکلتی

SI6 (یانگ لائو) برای بینایی

SI11 (تیان زونگ) برای درد شانه

مسیر مریدین: از انگشت کوچک دست ➔ پشت دست ➔ ساعد ➔ پشت شانه ➔ گردن ➔ صورت
      `,
      descrip: "",
      descExtra: "",
      supplementary: "",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
    },
    
{
  category: "SI",
  Enname: "Shaoze",
  faname: "شائو زه",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI1",
  name: "SI1 Shaoze شائو زه",
  description: "نقطه ابتدایی مریدین روده کوچک",
  location: "محل نقطه: در گوشه خارجی ناخن انگشت کوچک دست (سمت انگشت حلقه)، حدود ۲ میلیمتر از لبه ناخن",
  pressureAngle: " مایل (45 درجه) یا عمود",
  pressureAmount: "فشار ۳ تا ۵ (به دلیل حساسیت نقطه)",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Jing-Well (چاه)",
  imageUrl: "assets/images/si/si1.jpg",
  desc: `
- درمان سردرد و میگرن
- تسکین گلودرد
- بهبود تب و لرز
- افزایش هوشیاری در موارد بیهوشی
- مفید برای درد چشم
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Qiangu",
  faname: "کیان گو",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI2",
  name: "SI2 Qiangu کیان گو",
  description: "نقطه دوم مریدین روده کوچک",
  location: "محل نقطه: در لبه خارجی دست، در فرورفتگی پایین مفصل بین بند اول و دوم انگشت کوچک",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Ying-Spring (چشمه)",
  imageUrl: "assets/images/si/si2.jpg",
  desc: `
- تسکین درد گوش و کم شنوایی
- کاهش تب
- بهبود تاری دید
- درمان درد انگشتان دست
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Houxi",
  faname: "هو شی",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI3",
  name: "SI3 Houxi هو شی",
  description: "نقطه مهم برای درد کمر و گردن",
  location: "محل نقطه: در لبه خارجی دست، وقتی مشت می‌کنید در انتهای چین خوردگی کف دست",
  pressureAngle: " عمود یا مایل",
  pressureAmount: "فشار ۷ تا ۹",
  repetitions: "۳ تا ۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Shu-Stream (جریان)، نقطه کلیدی برای دردهای اسکلتی",
  imageUrl: "assets/images/si/si3.jpg",
  desc: `
- درمان خشکی و درد گردن
- تسکین کمردرد
- بهبود آرتروز
- کاهش تنش عصبی
- مفید برای تشنج
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/si3.png",
      main: "نقطه کلیدی",
},
{
  category: "SI",
  Enname: "Wangu",
  faname: "وان گو",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI4",
  name: "SI4 Wangu وان گو",
  description: "نقطه چهارم مریدین روده کوچک",
  location: "محل نقطه: در لبه خارجی مچ دست، در فرورفتگی بین استخوان اولنا و استخوان پنجم متاکارپال",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Yuan-Source (منبع)",
  imageUrl: "assets/images/si/si4.jpg",
  desc: `
- درمان درد مچ دست
- تسکین سردرد
- کاهش تپش قلب
- بهبود وزوز گوش
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Yanggu",
  faname: "یانگ گو",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI5",
  name: "SI5 Yanggu یانگ گو",
  description: "نقطه پنجم مریدین روده کوچک",
  location: "محل نقطه: در لبه خارجی مچ دست، در فرورفتگی بین استخوان اولنا و استخوان سه وجهی",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Jing-River (رودخانه)",
  imageUrl: "assets/images/si/si5.jpg",
  desc: `
- تسکین درد دندان
- کاهش استرس
- بهبود خشکی گلو
- درمان بی‌خوابی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Yanglao",
  faname: "یانگ لائو",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI6",
  name: "SI6 Yanglao یانگ لائو",
  description: "نقطه مهم برای بینایی",
  location: "محل نقطه: در سمت داخلی ساعد، در فرورفتگی بالای استخوان اولنا وقتی آرنج خم شده است",
  pressureAngle: " مایل (به سمت استخوان)",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Xi-Cleft (شکاف)",
  imageUrl: "assets/images/si/si6.jpg",
  desc: `
- بهبود تاری دید
- کاهش درد شانه
- تسکین کمردرد
- درمان درد بازو
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/si6.png",
      main: "نقطه ویژه بینایی",
},
{
  category: "SI",
  Enname: "Zhizheng",
  faname: "ژی ژنگ",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI7",
  name: "SI7 Zhizheng ژی ژنگ",
  description: "نقطه اتصال مریدین",
  location: "محل نقطه: در سمت داخلی ساعد، ۵ سون بالاتر از مچ دست بین استخوان اولنا و فلکسور کارپی اولناریس",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Luo-Connecting (اتصال)",
  imageUrl: "assets/images/si/si7.jpg",
  desc: `
- درمان اضطراب
- تسکین درد گلو
- بهبود تب
- کاهش تپش قلب
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Xiaohai",
  faname: "شیائو های",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI8",
  name: "SI8 Xiaohai شیائو های",
  description: "نقطه دریاچه کوچک",
  location: "محل نقطه: در پشت آرنج، در فرورفتگی بین اولهکرانون و اپیکوندیل داخلی وقتی آرنج کمی خم است",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه He-Sea (دریا)",
  imageUrl: "assets/images/si/si8.jpg",
  desc: `
- تسکین درد آرنج
- کاهش استرس
- بهبود تشنج
- درمان درد شانه
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Jianzhen",
  faname: "جیان ژن",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI9",
  name: "SI9 Jianzhen جیان ژن",
  description: "نقطه شانه",
  location: "محل نقطه: در پشت شانه، ۱ سون بالاتر از چین زیر بغل وقتی بازو آویزان است",
  pressureAngle: " عمود یا مایل",
  pressureAmount: "فشار ۷ تا ۹",
  repetitions: "۳ تا ۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/si/si9.jpg",
  desc: `
- درمان درد شانه و بازو
- بهبود محدودیت حرکتی شانه
- تسکین درد گردن
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/si9.png",
      main: "",
},
{
  category: "SI",
  Enname: "Naoshu",
  faname: "نائو شو",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI10",
  name: "SI10 Naoshu نائو شو",
  description: "نقطه پشت شانه",
  location: "محل نقطه: در پشت شانه، در فرورفتگی زیر زائده اخرمی وقتی بازو به موازات زمین است",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Hui-Meeting (ملاقات)",
  imageUrl: "assets/images/si/si10.jpg",
  desc: `
- درمان درد شدید شانه
- بهبود فلج شانه
- تسکین آرتروز شانه
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Tianzong",
  faname: "تیان زونگ",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI11",
  name: "SI11 Tianzong تیان زونگ",
  description: "نقطه ستاره آسمانی",
  location: "محل نقطه: در مرکز کتف، در فرورفتگی وسط استخوان کتف",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۷ تا ۹",
  repetitions: "۳ تا ۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/si/si11.jpg",
  desc: `
- درمان درد شانه و کتف
- بهبود تنفس
- تسکین درد سینه
- کاهش استرس
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی شانه",
},
{
  category: "SI",
  Enname: "Bingfeng",
  faname: "بینگ فنگ",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI12",
  name: "SI12 Bingfeng بینگ فنگ",
  description: "نقطه بادگیر",
  location: "محل نقطه: در بالای کتف، در فرورفتگی بالای SI11 وقتی دست روی کمر قرار گرفته است",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/si/si12.jpg",
  desc: `
- درمان درد شانه و گردن
- بهبود سرفه
- تسکین آسم
- کاهش تنش
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Quyuan",
  faname: "چو یوان",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI13",
  name: "SI13 Quyuan چو یوان",
  description: "نقطه خمیده",
  location: "محل نقطه: در لبه داخلی کتف، در فرورفتگی نزدیک ستون فقرات وقتی دست روی کمر است",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/si/si13.jpg",
  desc: `
- درمان درد شانه
- بهبود عملکرد ریه
- تسکین تنگی نفس
- کاهش خستگی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Jianwaishu",
  faname: "جیان وای شو",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI14",
  name: "SI14 Jianwaishu جیان وای شو",
  description: "نقطه خارجی شانه",
  location: "محل نقطه: در پشت شانه، ۳ سون خارج از مهره‌های T1 و T2",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/si/si14.jpg",
  desc: `
- درمان درد شانه و گردن
- بهبود سردرد
- تسکین سرگیجه
- کاهش تنش
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Jianzhongshu",
  faname: "جیان ژونگ شو",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI15",
  name: "SI15 Jianzhongshu جیان ژونگ شو",
  description: "نقطه مرکزی شانه",
  location: "محل نقطه: در پشت شانه، ۲ سون خارج از مهره‌های C7 و T1",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/si/si15.jpg",
  desc: `
- درمان درد شانه
- بهبود گردش خون
- تسکین سردرد
- کاهش استرس
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Tianchuang",
  faname: "تیان چوانگ",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI16",
  name: "SI16 Tianchuang تیان چوانگ",
  description: "نقطه پنجره آسمانی",
  location: "محل نقطه: در پشت گردن، در لبه بیرونی عضله استرنوکلیدوماستوئید، هم‌سطح با زائده آدام",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/si/si16.jpg",
  desc: `
- درمان درد گردن
- بهبود شنوایی
- تسکین وزوز گوش
- کاهش سردرد
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Tianrong",
  faname: "تیان رونگ",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI17",
  name: "SI17 Tianrong تیان رونگ",
  description: "نقطه پذیرش آسمانی",
  location: "محل نقطه: در پشت گوش، در فرورفتگی بین زائده ماستوئید و زاویه فک",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/si/si17.jpg",
  desc: `
- درمان درد گوش
- بهبود شنوایی
- تسکین گلودرد
- کاهش تورم گلو
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "SI",
  Enname: "Quanliao",
  faname: "چوان لیائو",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI18",
  name: "SI18 Quanliao چوان لیائو",
  description: "نقطه حفره گونه",
  location: "محل نقطه: در صورت، زیر استخوان گونه، در راستای مردمک چشم وقتی به جلو نگاه می‌کنید",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/si/si18.jpg",
  desc: `
- درمان درد صورت
- بهبود سینوزیت
- تسکین سردرد
- کاهش تورم صورت
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/si18.png",
      main: "",
},
{
  category: "SI",
  Enname: "Tinggong",
  faname: "تینگ گونگ",
  meridian: "Small Intestine Meridian (SI)",
  Fameridian: "مریدین روده کوچک",
  id: "SI19",
  name: "SI19 Tinggong تینگ گونگ",
  description: "نقطه کاخ شنوایی",
  location: "محل نقطه: در جلوی گوش، در فرورفتگی بین تراگوس و لوبول گوش وقتی دهان کمی باز است",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/si/si19.jpg",
  desc: `
- درمان کم شنوایی
- بهبود وزوز گوش
- تسکین دندان‌درد
- کاهش سردرد
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/si19.png",
      main: "",
},

// ==============================================  ST   ===============================================
//مریدین معده (Stomach Meridian - ST) - 45 نقطه

{
category: "ST",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر مریدین معده به شرح زیر است:

1. شروع از کنار پره بینی (LI20).  
2. تقاطع از یک طرف به طرف دیگر در پل بینی.  
3. صعود به پل بینی و ورود به مریدین مجاور مثانه (BL1).  
4. چرخش و نزول در امتداد کنار خارجی بینی (ST1، ST2، ST3).  
5. ورود به دندان‌های فوقانی.  
6. بازگشت و حرکت در امتداد دهان و چرخش در اطراف لب (ST4).  
7. نزول و تجمع در نقطه سونگ‌جانگ (CV24).  
8. بازگشت، در امتداد لبه خلفی تحتانی فک.  
9. ظهور از دایئونگ (ST5).  
10. حرکت در امتداد هیوپ‌گو (ST6).  
11. صعود به ناحیه پیش‌گوشی.  
12. عبور از سانگ‌گوان (GB3).  
13. حرکت در امتداد خط موی قدامی (ST8).  
14. رسیدن به نقطه میانی خط موی قدامی (GV24).  
15. شاخه‌ای از مریدین،  
16. جدا شده از دایئونگ (ST5، ST9)، ظهور در آنجا و نزول به این‌یئونگ (ST9).  
17. حرکت در امتداد گلو (ST10، ST11).  
18. ورود به حفره بزرگ بالای ترقوه و رفتن به دای‌چو و بازگشت به ناحیه بالای ترقوه.  
19. نزول و نفوذ به دیافراگم.  
20. اتصال به معده (CV13، CV12).  
21. ارتباط با طحال.  
22. شاخه مستقیم،  
23. جدا شده از حفره بزرگ بالای ترقوه و نزول در امتداد لبه داخلی نوک پستان (ST12، ST13، ST14، ST15، ST16، ST17، ST18).  
24. حرکت به سمت پایین در امتداد ناف (ST19، ST20، ST21، ST22، ST23، ST24، ST25، ST26، ST27، ST28).  
25. ورود به ناحیه کشاله ران (ST29، ST30).  
26. شاخه دیگر،  
27. شروع از کاردیا (دریچه معده).  
28. نزول در امتداد داخل صفاق (CV10).  
29. حرکت به سمت پایین تا ناحیه کشاله ران (ST30) و یکی شدن با شاخه اصلی.  
30. سپس، نزول به بیگوان (ST31).  
31. رسیدن به بوک‌تو (ST32).  
32. نزول (ST33، ST34) و ورود به مرکز کشکک زانو (ST35).  
33. دوباره نزول در امتداد لبه خارجی استخوان درشت‌نی (ST36، ST37، ST38، ST39، ST40).  
34. نزول به پشت پا (ST41، ST42، ST43).  
35. حرکت به سمت سطح داخلی انگشت سوم پا (ST44، ST45).  
36. شاخه دیگر،  
37. جدا شده از جوک‌سانی (ST36، ST40) در فاصله سهسونپایین‌تر از کشکک زانو.  
38. نزول به سمت سطح خارجی انگشت سوم پا.  
39. شاخه دیگر،  
40. جدا شده از پشت پا.  
41. حرکت بین انگشت اول و دوم پا.  
42. خروج از انتهای انگشت اول پا (SP1).  


مسیر انشعاب مریدین معده به شرح زیر است:

1. انشعاب مریدین معده،  
2. صعود و رسیدن به ناحیه ران.  
3. ورود به سمت داخلی شکم.  
4. ترکیب با معده.  
5. پراکنده شدن در طحال.  
6. صعود و نفوذ به قلب.  
7. صعود در امتداد حلق.  
8. ظهور از دهان.  
9. صعود دوباره در امتداد پل بینی و استخوان گونه.  
10. اتصال به خط مریدین بینایی.  
11. ملاقات با مریدین معده.

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

    {
      category: "ST",
      Enname: "خلاصه مریدین روده کوچک",
      faname: "",
      meridian: "Stomach Meridian (ST)",
      Fameridian: "مریدین معده",
      id: "",
      name: "",
      description: "",
      location: "",
      pressureAngle: "",
      pressureAmount: "",
      repetitions: "",
      time: "",
      extra: "",
      imageUrl: "",
      desc: `
نقاط کلیدی مریدین معده:
ST36 (Zusanli): تقویت سیستم ایمنی، درمان مشکلات گوارشی

ST40 (Fenglong): کاهش چربی خون، درمان سرفه و خلط

ST44 (Neiting): درمان درد دندان و گلودرد
      `,
      descrip: "",
      descExtra: "",
      supplementary: "",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
    },

{
  category: "ST",
  Enname: "Chengqi",
  faname: "چنگ چی",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST1",
  name: "ST1 Chengqi چنگ چی",
  description: "نقطه ابتدایی مریدین معده",
  location: "محل نقطه: زیر چشم، در راستای مردمک چشم وقتی به جلو نگاه می‌کنید",
  pressureAngle: " بسیار ملایم",
  pressureAmount: "فشار ۲ تا ۴",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Jing-Well (چاه)",
  imageUrl: "assets/images/st/st1.jpg",
  desc: `
- کاهش پف زیر چشم
- تسکین سردردهای پیشانی
- بهبود خشکی چشم
- تنظیم انرژی معده
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st1.png",
      main: "",
},
{
  category: "ST",
  Enname: "Sibai",
  faname: "سی بای",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST2",
  name: "ST2 Sibai سی بای",
  description: "نقطه دوم مریدین معده",
  location: "محل نقطه: در صورت، زیر چشم و در راستای مردمک چشم",
  pressureAngle: " ملایم",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Ying-Spring (چشمه)",
  imageUrl: "assets/images/st/st2.jpg",
  desc: `
- بهبود بینایی
- کاهش تورم صورت
- تسکین سردرد
- درمان آبریزش بینی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st2.png",
      main: "",
},
{
  category: "ST",
  Enname: "Juliao",
  faname: "جیو لیائو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST3",
  name: "ST3 Juliao جیو لیائو",
  description: "نقطه سوم مریدین معده",
  location: "محل نقطه: در صورت، کنار بینی در سطح پایین سوراخ بینی",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st3.jpg",
  desc: `
- درمان سینوزیت
- تسکین درد صورت
- بهبود گرفتگی بینی
- کاهش آبریزش بینی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st3.png",
      main: "",
},
{
  category: "ST",
  Enname: "Dicang",
  faname: "دی تسانگ",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST4",
  name: "ST4 Dicang دی تسانگ",
  description: "نقطه چهارم مریدین معده",
  location: "محل نقطه: در صورت، کنار دهان در راستای گوشه لب",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st4.jpg",
  desc: `
- درمان فلج صورت
- بهبود افتادگی دهان
- تسکین درد فک
- کاهش تیک‌های عصبی صورت
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st4.png",
      main: "",
},
{
  category: "ST",
  Enname: "Daying",
  faname: "دا یینگ",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST5",
  name: "ST5 Daying دا یینگ",
  description: "نقطه پنجم مریدین معده",
  location: "محل نقطه: در صورت، روی عضله ماضغه در جلوی لوب گوش",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st5.jpg",
  desc: `
- درمان درد فک
- بهبود جویدن
- تسکین دندان‌درد
- کاهش تورم صورت
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Jiache",
  faname: "جیا چه",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST6",
  name: "ST6 Jiache جیا چه",
  description: "نقطه فک",
  location: "محل نقطه: روی عضله ماضغه، در بالای زاویه فک پایین",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st6.jpg",
  desc: `
- درمان درد فک
- بهبود دندان قروچه
- تسکین دندان‌درد
- کاهش تورم صورت
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st6.png",
      main: "",
},
{
  category: "ST",
  Enname: "Xiaguan",
  faname: "شیا گوان",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST7",
  name: "ST7 Xiaguan شیا گوان",
  description: "نقطه زیر مفصل فک",
  location: "محل نقطه: در جلوی گوش، در فرورفتگی زیر قوس گونه وقتی دهان بسته است",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st7.jpg",
  desc: `
- درمان درد فک
- بهبود مشکلات جویدن
- تسکین سردرد
- کاهش وزوز گوش
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Touwei",
  faname: "تو وی",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST8",
  name: "ST8 Touwei تو وی",
  description: "نقطه گوشه پیشانی",
  location: "محل نقطه: در پیشانی، در گوشه خارجی خط رویش مو",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st8.jpg",
  desc: `
- درمان سردرد پیشانی
- بهبود سرگیجه
- تسکین درد چشم
- کاهش استرس
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Renying",
  faname: "رن یینگ",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST9",
  name: "ST9 Renying رن یینگ",
  description: "نقطه پذیرش انسان",
  location: "محل نقطه: در گردن، کنار نای، در کنار برجستگی سیب آدم",
  pressureAngle: " بسیار ملایم",
  pressureAmount: "فشار ۲ تا ۳",
  repetitions: "۱ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه کلیدی فشار خون",
  imageUrl: "assets/images/st/st9.jpg",
  desc: `
- تنظیم فشار خون
- بهبود تپش قلب
- تسکین گلودرد
- کاهش اضطراب
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه حساس - با احتیاط فشار دهید",
},
{
  category: "ST",
  Enname: "Shuitu",
  faname: "شوی تو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST10",
  name: "ST10 Shuitu شوی تو",
  description: "نقطه آب و خاک",
  location: "محل نقطه: در گردن، در کنار نای، دو انگشت بالاتر از ST9",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st10.jpg",
  desc: `
- درمان سرفه
- بهبود گرفتگی صدا
- تسکین گلودرد
- کاهش تورم گلو
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Qishe",
  faname: "چی شه",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST11",
  name: "ST11 Qishe چی شه",
  description: "نقطه استراحت انرژی",
  location: "محل نقطه: در بالای ترقوه، در فرورفتگی بین دو عضله جناغی-چنبری-پستانی و جناغی-لامی",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st11.jpg",
  desc: `
- درمان گلودرد
- بهبود مشکلات بلع
- تسکین سکسکه
- کاهش تنش گردن
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Quepen",
  faname: "کوه پن",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST12",
  name: "ST12 Quepen کوه پن",
  description: "نقطه حوضچه فرو رفته",
  location: "محل نقطه: در بالای ترقوه، در فرورفتگی وسط ترقوه",
  pressureAngle: " مایل (به سمت پایین)",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st12.jpg",
  desc: `
- درمان سرفه
- بهبود آسم
- تسکین درد شانه
- کاهش تورم گلو
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Qihu",
  faname: "چی هو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST13",
  name: "ST13 Qihu چی هو",
  description: "نقطه دروازه انرژی",
  location: "محل نقطه: در قفسه سینه، در فرورفتگی زیر ترقوه، دو انگشت خارج از خط وسط",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st13.jpg",
  desc: `
- درمان سرفه
- بهبود تنفس
- تسکین درد قفسه سینه
- کاهش استرس
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Kufang",
  faname: "کو فانگ",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST14",
  name: "ST14 Kufang کو فانگ",
  description: "نقطه اتاق گریه",
  location: "محل نقطه: در قفسه سینه، در فضای بین دنده‌ای اول، دو انگشت خارج از خط وسط",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st14.jpg",
  desc: `
- درمان سرفه
- بهبود آسم
- تسکین درد سینه
- کاهش اضطراب
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Wuyi",
  faname: "وو یی",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST15",
  name: "ST15 Wuyi وو یی",
  description: "نقطه پوشش خارجی",
  location: "محل نقطه: در قفسه سینه، در فضای بین دنده‌ای دوم، دو انگشت خارج از خط وسط",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st15.jpg",
  desc: `
- درمان سرفه
- بهبود تنفس
- تسکین درد سینه
- کاهش استرس
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Yingchuang",
  faname: "یینگ چوانگ",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST16",
  name: "ST16 Yingchuang یینگ چوانگ",
  description: "نقطه پنجره سینه",
  location: "محل نقطه: در قفسه سینه، در فضای بین دنده‌ای سوم، دو انگشت خارج از خط وسط",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st16.jpg",
  desc: `
- درمان سرفه
- بهبود آسم
- تسکین درد سینه
- کاهش تنش
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Ruzhong",
  faname: "رو ژونگ",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST17",
  name: "ST17 Ruzhong رو ژونگ",
  description: "نقطه مرکز سینه",
  location: "محل نقطه: در نوک پستان (در مردان)، یا در مرکز آرئول (در زنان)",
  pressureAngle: " بدون فشار مستقیم (ماساژ ملایم)",
  pressureAmount: "فشار ۱ تا ۲ (بسیار ملایم)",
  repetitions: "۱ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه حساس - با احتیاط",
  imageUrl: "assets/images/st/st17.jpg",
  desc: `
- تنظیم شیر مادران
- بهبود سلامت سینه
- تسکین استرس
- افزایش آرامش
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st17.png",
      main: "نقطه حساس",
},
{
  category: "ST",
  Enname: "Rugen",
  faname: "رو گن",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST18",
  name: "ST18 Rugen رو گن",
  description: "نقطه ریشه سینه",
  location: "محل نقطه: در قفسه سینه، یک انگشت زیر ST17 (در پایین آرئول)",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st18.jpg",
  desc: `
- تنظیم شیر مادران
- بهبود سلامت سینه
- تسکین درد قفسه سینه
- کاهش استرس
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Burong",
  faname: "بو رونگ",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST19",
  name: "ST19 Burong بو رونگ",
  description: "نقطه عدم تحمل",
  location: "محل نقطه: در شکم، دو انگشت بالای ناف و دو انگشت خارج از خط وسط",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st19.jpg",
  desc: `
- درمان نفخ
- بهبود سوءهاضمه
- تسکین درد معده
- کاهش استرس گوارشی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Chengman",
  faname: "چنگ مان",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST20",
  name: "ST20 Chengman چنگ مان",
  description: "نقطه پذیرش کامل",
  location: "محل نقطه: در شکم، یک انگشت بالای ناف و دو انگشت خارج از خط وسط",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st20.jpg",
  desc: `
- درمان نفخ
- بهبود هضم
- تسکین درد معده
- کاهش تهوع
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Liangmen",
  faname: "لیانگ من",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST21",
  name: "ST21 Liangmen لیانگ من",
  description: "نقطه دروازه دانه",
  location: "محل نقطه: در شکم، دو انگشت پایین ناف و دو انگشت خارج از خط وسط",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st21.jpg",
  desc: `
- درمان اسهال
- بهبود نفخ
- تسکین درد شکم
- تنظیم گوارش
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st21.png",
      main: "",
},
{
  category: "ST",
  Enname: "Guanmen",
  faname: "گوان من",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST22",
  name: "ST22 Guanmen گوان من",
  description: "نقطه دروازه بسته",
  location: "محل نقطه: در شکم، سه انگشت پایین ناف و دو انگشت خارج از خط وسط",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st22.jpg",
  desc: `
- درمان یبوست
- بهبود نفخ
- تسکین درد شکم
- تنظیم دفع
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Taiyi",
  faname: "تای یی",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST23",
  name: "ST23 Taiyi تای یی",
  description: "نقطه بزرگترین یکپارچگی",
  location: "محل نقطه: در شکم، چهار انگشت پایین ناف و دو انگشت خارج از خط وسط",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st23.jpg",
  desc: `
- درمان اختلالات گوارشی
- بهبود نفخ
- تسکین درد شکم
- کاهش استرس
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Huaroumen",
  faname: "هوا رو من",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST24",
  name: "ST24 Huaroumen هوا رو من",
  description: "نقطه دروازه گوشت گل",
  location: "محل نقطه: در شکم، پنج انگشت پایین ناف و دو انگشت خارج از خط وسط",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st24.jpg",
  desc: `
- درمان اختلالات گوارشی
- بهبود نفخ
- تسکین درد شکم
- تنظیم اشتها
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "",
},
{
  category: "ST",
  Enname: "Tianshu",
  faname: "تیان شو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST25",
  name: "ST25 Tianshu تیان شو",
  description: "نقطه محور آسمانی",
  location: "محل نقطه: در شکم، دو انگشت خارج از ناف",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Mu-Alarm (هشدار) روده بزرگ",
  imageUrl: "assets/images/st/st25.jpg",
  desc: `
- درمان اسهال و یبوست
- بهبود نفخ
- تسکین درد شکم
- تنظیم عملکرد روده
- کاهش استرس گوارشی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه کلیدی گوارش",
},
{
  category: "ST",
  Enname: "Wailing",
  faname: "وای لینگ",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST26",
  name: "ST26 Wailing وای لینگ",
  description: "نقطه ستون بیرونی",
  location: "محل نقطه: در شکم، یک انگشت پایین ناف و دو انگشت خارج از خط وسط",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st26.jpg",
  desc: `
- درمان اختلالات ادراری
- بهبود نفخ
- تسکین درد زیر شکم
- تنظیم قاعدگی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "",
},
{
  category: "ST",
  Enname: "Daju",
  faname: "دا جیو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST27",
  name: "ST27 Daju دا جیو",
  description: "نقطه بزرگ‌ترین ستون",
  location: "محل نقطه: در شکم، دو انگشت پایین ناف و دو انگشت خارج از خط وسط",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st27.jpg",
  desc: `
- درمان اختلالات ادراری
- بهبود نفخ
- تسکین درد زیر شکم
- تنظیم عملکرد مثانه
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "",
},
{
  category: "ST",
  Enname: "Shuidao",
  faname: "شوی دائو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST28",
  name: "ST28 Shuidao شوی دائو",
  description: "نقطه مسیر آب",
  location: "محل نقطه: در شکم، سه انگشت پایین ناف و دو انگشت خارج از خط وسط",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st28.jpg",
  desc: `
- درمان احتباس ادرار
- بهبود تورم
- تسکین درد زیر شکم
- تنظیم قاعدگی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "",
},
{
  category: "ST",
  Enname: "Guilai",
  faname: "گوی لای",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST29",
  name: "ST29 Guilai گوی لای",
  description: "نقطه بازگشت",
  location: "محل نقطه: در شکم، چهار انگشت پایین ناف و دو انگشت خارج از خط وسط",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st29.jpg",
  desc: `
- درمان اختلالات قاعدگی
- بهبود ناباروری
- تسکین درد زیر شکم
- تنظیم عملکرد رحم
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st29.png",
      main: "",
},
{
  category: "ST",
  Enname: "Qichong",
  faname: "چی چونگ",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST30",
  name: "ST30 Qichong چی چونگ",
  description: "نقطه طغیان انرژی",
  location: "محل نقطه: در کشاله ران، در کنار استخوان شرمگاهی",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st30.jpg",
  desc: `
- درمان اختلالات ادراری
- بهبود ناباروری
- تسکین درد کشاله ران
- تنظیم انرژی جنسی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "",
},
// {
//   category: "ST",
//   Enname: "Qichong",
//   faname: "چی چونگ",
//   meridian: "Stomach Meridian (ST)",
//   Fameridian: "مریدین معده",
//   id: "ST30",
//   name: "ST30 Qichong چی چونگ",
//   description: "نقطه طغیان انرژی",
//   location: "محل نقطه: در کشاله ران، در کنار استخوان شرمگاهی",
//   pressureAngle: " مایل",
//   pressureAmount: "فشار ۳ تا ۵",
//   repetitions: "۱ تا ۲ بار",
//   time: "بین 30 ثانیه تا 3 دقیقه",
//   extra: "",
//   imageUrl: "assets/images/st/st30.jpg",
//   desc: `
// - درمان اختلالات ادراری
// - بهبود ناباروری
// - تسکین درد کشاله ران
// - تنظیم انرژی جنسی
//   `,
//   descrip: "",
//   descExtra: "",
//   supplementary: "",
  
//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "",
// },
{
  category: "ST",
  Enname: "Biguan",
  faname: "بی گوان",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST31",
  name: "ST31 Biguan بی گوان",
  description: "نقطه دروازه ران",
  location: "محل نقطه: در ران، در چین کشاله ران، در کنار شریان رانی",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st31.jpg",
  desc: `
- درمان درد ران
- بهبود آرتروز لگن
- تسکین درد سیاتیک
- افزایش تحرک مفصل ران
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Futu",
  faname: "فو تو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST32",
  name: "ST32 Futu فو تو",
  description: "نقطه خرگوشی",
  location: "محل نقطه: در ران، دو انگشت بالاتر از ST31، روی عضله چهارسر ران",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st32.jpg",
  desc: `
- درمان درد ران
- بهبود ضعف پا
- تسکین درد زانو
- افزایش انرژی پاها
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Yinshi",
  faname: "یین شی",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST33",
  name: "ST33 Yinshi یین شی",
  description: "نقطه بازار شیطان",
  location: "محل نقطه: در ران، سه انگشت بالاتر از زانو، روی عضله چهارسر ران",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st33.jpg",
  desc: `
- درمان درد زانو
- بهبود آرتروز
- تسکین ضعف پا
- افزایش تحرک مفصل زانو
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Liangqiu",
  faname: "لیانگ چیو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST34",
  name: "ST34 Liangqiu لیانگ چیو",
  description: "نقطه تپه‌ای روشن",
  location: "محل نقطه: در ران، دو انگشت بالاتر از کشکک زانو، روی عضله چهارسر ران",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Xi-Cleft (شکاف)",
  imageUrl: "assets/images/st/st34.jpg",
  desc: `
- درمان درد حاد زانو
- بهبود تورم زانو
- تسکین درد معده
- کاهش اسپاسم عضلانی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st34.png",
      main: "",
},
{
  category: "ST",
  Enname: "Dubi",
  faname: "دو بی",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST35",
  name: "ST35 Dubi دو بی",
  description: "نقطه گریه گاومیش",
  location: "محل نقطه: در زانو، در فرورفتگی زیر کشکک زانو و کنار رباط کشککی",
  pressureAngle: " مایل",
  pressureAmount: "فشار ۳ تا ۵",
  repetitions: "۱ تا ۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه خارج از مریدین",
  imageUrl: "assets/images/st/st35.jpg",
  desc: `
- درمان درد زانو
- بهبود آرتروز
- تسکین تورم زانو
- افزایش تحرک مفصل
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st35.png",
      main: "",
},
{
  category: "ST",
  Enname: "Zusanli",
  faname: "زو سان لی",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST36",
  name: "ST36 Zusanli زو سان لی",
  description: "نقطه سه مایل پا",
  location: "محل نقطه: در ساق پا، چهار انگشت پایین‌تر از کشکک و یک انگشت خارج‌تر از لبه استخوان درشت‌نی",
  pressureAngle: " عمود",
  pressureAmount: "فشار 6 تا 10",
  repetitions: "۳ تا ۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه He-Sea (دریا)، تقویت‌کننده عمومی",
  imageUrl: "assets/images/st/st36.jpg",
  desc: `
- تقویت سیستم ایمنی
- بهبود مشکلات گوارشی
- کاهش خستگی
- تنظیم قند خون
- تسکین درد زانو
- افزایش انرژی حیاتی

جریان خون و انرژی را در Stomach معده (St) 
و Spleen طحال (Sp)  تعدیل می کند.
ضعیف بودن عمل هضم
هیجان
سردرد
درد پاها
و گردش خون ضعیف در نقاط مهم درمانی به شمار می رود
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"رئیسه",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st36.png",
      main: "نقطه کلیدی تقویت بدن",
},
{
  category: "ST",
  Enname: "Shangjuxu",
  faname: "شانگ جیو شو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST37",
  name: "ST37 Shangjuxu شانگ جیو شو",
  description: "نقطه فضای بالایی بزرگ",
  location: "محل نقطه: در ساق پا، سه انگشت پایین‌تر از ST36 و یک انگشت خارج‌تر از لبه استخوان درشت‌نی",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Lower He-Sea (دریای پایینی)",
  imageUrl: "assets/images/st/st37.jpg",
  desc: `
- درمان اسهال
- بهبود سوءهاضمه
- تسکین درد شکم
- تنظیم عملکرد روده
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Tiaokou",
  faname: "تیائو کو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST38",
  name: "ST38 Tiaokou تیائو کو",
  description: "نقطه دهانه باز",
  location: "محل نقطه: در ساق پا، هشت انگشت بالاتر از مچ پا و یک انگشت خارج‌تر از لبه استخوان درشت‌نی",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "",
  imageUrl: "assets/images/st/st38.jpg",
  desc: `
- درمان درد ساق پا
- بهبود گرفتگی عضلات
- تسکین درد شانه
- کاهش تنش عصبی
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Xiajuxu",
  faname: "شیا جیو شو",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST39",
  name: "ST39 Xiajuxu شیا جیو شو",
  description: "نقطه فضای پایینی بزرگ",
  location: "محل نقطه: در ساق پا، سه انگشت پایین‌تر از ST38 و یک انگشت خارج‌تر از لبه استخوان درشت‌نی",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Lower He-Sea (دریای پایینی)",
  imageUrl: "assets/images/st/st39.jpg",
  desc: `
- درمان یبوست
- بهبود نفخ
- تسکین درد شکم
- تنظیم عملکرد روده
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "ST",
  Enname: "Fenglong",
  faname: "فنگ لونگ",
  meridian: "Stomach Meridian (ST)",
  Fameridian: "مریدین معده",
  id: "ST40",
  name: "ST40 Fenglong فنگ لونگ",
  description: "نقطه ابر بلند",
  location: "محل نقطه: در ساق پا، هشت انگشت بالاتر از مچ پا و دو انگشت خارج‌تر از لبه استخوان درشت‌نی",
  pressureAngle: " عمود",
  pressureAmount: "فشار ۵ تا ۷",
  repetitions: "۲ تا ۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "نقطه Luo-Connecting (اتصال)",
  imageUrl: "assets/images/st/st40.jpg",
  desc: `
- کاهش چربی خون
- درمان سرفه و خلط
- بهبود اضطراب
- تسکین سردرد
- تنظیم متابولیسم
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی کاهش چربی",
},
{
category: "ST",
Enname: "Jiexi",
faname: "جی‌اکسی",
meridian: "Stomach Meridian (ST)",
Fameridian: "مریدین معده",
id: "ST41",
name: "ST41 Jiexi جی‌اکسی",
description: "دره آزاد",
location: "محل نقطه: روی مچ پا، در فرورفتگی بین تاندون‌های اکستانسور هالوسیس لونگوس و اکستانسور دیژیتوروم لونگوس (وقتی پا به سمت پشت خم می‌شود)",
pressureAngle: " عمود",
pressureAmount: "فشار ۴ تا ۶",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Jing-River (رودخانه)",
imageUrl: "assets/images/st/st41.jpg",
desc: `

تسکین درد و تورم مچ پا

بهبود سوءهاضمه و نفخ

کاهش گرمای معده (خشکی دهان، بوی بد دهان)

تنظیم جریان انرژی معده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st41.png",
      main: "نقطه کلیدی برای مشکلات مچ پا و گوارش"
},
{
category: "ST",
Enname: "Chongyang",
faname: "چانگ‌یانگ",
meridian: "Stomach Meridian (ST)",
Fameridian: "مریدین معده",
id: "ST42",
name: "ST42 Chongyang چانگ‌یانگ",
description: "سیلاب خروشان",
location: "محل نقطه: روی پا، در بالاترین نقطه قوس پا، بین مفاصل متاتارس دوم و سوم، جایی که نبض پشت پا حس می‌شود",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Yuan-Source (منبع)",
imageUrl: "assets/images/st/st42.jpg",
desc: `

تقویت معده و طحال

تنظیم فشار خون

بهبود مشکلات گوارشی

تسکین درد پا

تحریک گردش خون
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st42.png",
      main: "نقطه کلیدی برای تنظیم انرژی معده"
},
{
category: "ST",
Enname: "Xiangu",
faname: "شیانگو",
meridian: "Stomach Meridian (ST)",
Fameridian: "مریدین معده",
id: "ST43",
name: "ST43 Xiangu شیانگو",
description: "دره غرق‌شده",
location: "محل نقطه: روی پا، بین استخوان‌های متاتارس دوم و سوم، در فرورفتگی جلو از ST42",
pressureAngle: " مایل (۴۵ درجه)",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Shu-Stream (جریان)",
imageUrl: "assets/images/st/st43.jpg",
desc: `

کاهش تورم و درد پا

بهبود نفخ و سوءهاضمه

تسکین سردردهای سینوسی

کمک به دفع رطوبت از بدن
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای دفع رطوبت و تورم"
},
{
category: "ST",
Enname: "Neiting",
faname: "نئی‌تینگ",
meridian: "Stomach Meridian (ST)",
Fameridian: "مریدین معده",
id: "ST44",
name: "ST44 Neiting نئی‌تینگ",
description: "حیاط داخلی",
location: "محل نقطه: بین انگشتان دوم و سوم پا، در فرورفتگی جلو از مفصل متاتارسوفالانژیال",
pressureAngle: "مایل (۴۵ درجه)",
pressureAmount: "فشار 6 تا 10",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Ying-Spring (چشمه)",
imageUrl: "assets/images/st/st44.jpg",
desc: `

کاهش گرمای معده و التهاب

تسکین دندان‌درد و گلو درد

بهبود بی‌خوابی و اضطراب

تنظیم اشتها
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"رئیسه",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/st44.png",
      main: "نقطه کلیدی برای کاهش التهاب و گرمای بدن"
},
{
category: "ST",
Enname: "Lidui",
faname: "لی‌دویی",
meridian: "Stomach Meridian (ST)",
Fameridian: "مریدین معده",
id: "ST45",
name: "ST45 Lidui لی‌دویی",
description: "نقطه شیطان",
location: "محل نقطه: در گوشه خارجی ناخن انگشت دوم پا (حدود ۲ میلی‌متر از لبه ناخن)",
pressureAngle: " مایل (۱۰ تا ۱۵ درجه)",
pressureAmount: " ۲ تا ۴ (فشار ملایم)",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Jing-Well (چاه)",
imageUrl: "assets/images/st/st45.jpg",
desc: `

درمان کابوس‌های شبانه و بی‌قراری

کاهش تب و گرمای بدن

تسکین سردردهای شدید

بهبود مشکلات روانی مرتبط با معده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه انتهایی مریدین معده برای آرامش روانی"
},

// ==============================================  LU   ===============================================
//LU

{
category: "LU",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر مریدین ریه به شرح زیر است:

1. شروع از ناحیه جونگ‌وان (CV12).  
2. نزول و ارتباط با روده بزرگ (CV9).  
3. چرخش، حرکت در امتداد مریدین CV، صعود و عبور از کاردیا (CV13).  
4. نفوذ به دیافراگم و صعود.  
5. اتصال به ریه (در همان سطح CV15).  
6. صعود به حلق و حنجره و حرکت در امتداد خط مریدین ریه.  
7. حرکت عرضی به زیر بغل و ظهور در آنجا (LU1، LU2).  
8. حرکت در امتداد سطح داخلی بازو (LU3، LU4).  
9. عبور از جلوی مریدین پریکاردیوم و مریدین قلب.  
10. نزول به حفره آرنج (LU5).  
11. حرکت در امتداد سطح داخلی ساعد (LU6).  
12. نزول در امتداد لبه تحتانی استخوان زند زبرین (LU7، LU8).  
13. ورود به چین مچ کف دست (LU9).  
14. صعود به برجستگی تنار (LU10).  
15. حرکت در امتداد لبه شعاعی آن.  
16. پایان در نوک انگشت اول (LU11).  
17. شاخه‌ای از مریدین،  
18. جدا شدن از پشت مچ و حرکت مستقیم به لبه داخلی انگشت دوم (LU7).  
19. خروج از انتهای انگشت دوم (LI1).




مسیر انشعاب مریدین ریه به شرح زیر است:

1. انشعاب مریدین ریه،  
2. جدا شدن از ناحیه یونک (GB22) که در جلوی مریدین قلب قرار دارد.  
3. ورود و حرکت به سمت ریه.  
4. پراکنده شدن در روده بزرگ.  
5. صعود و ظهور از حفره بزرگ بالای ترقوه.  
6. حرکت در امتداد حلق و حنجره.  
7. ادغام دوباره با مریدین روده بزرگ.


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "LU",
Enname: "Zhongfu",
faname: "جونگ فو",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU1",
name: "LU1 Zhongfu جونگ فو",
description: "قصر مرکزی",
location: "محل نقطه: در قفسه سینه، زیر ترقوه، در فضای بین دنده‌ای اول و دوم، ۶ سون خارج از خط وسط",
pressureAngle: " مایل (۴۵ درجه به سمت داخل)",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Hui-Meeting (گردهمایی) برای ریه‌ها",
imageUrl: "assets/images/lu/lu1.jpg",
desc: `

درمان سرفه و آسم

بهبود مشکلات تنفسی

تقویت سیستم ایمنی

کاهش استرس و اضطراب

تسکین درد قفسه سینه
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای مشکلات ریوی"
},
{
category: "LU",
Enname: "Yunmen",
faname: "یون من",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU2",
name: "LU2 Yunmen یون من",
description: "دروازه ابر",
location: "محل نقطه: در قفسه سینه، زیر ترقوه، در فرورفتگی خارج از جناغ سینه، ۶ سون خارج از خط وسط",
pressureAngle: " مایل (۴۵ درجه به سمت پایین)",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه ورودی مریدین ریه",
imageUrl: "assets/images/lu/lu2.jpg",
desc: `

تسکین سرفه و تنگی نفس

کاهش تب

بهبود درد شانه و بازو

تنظیم انرژی ریه
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای مشکلات تنفسی"
},
{
category: "LU",
Enname: "Tianfu",
faname: "تیان فو",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU3",
name: "LU3 Tianfu تیان فو",
description: "قصر بهشتی",
location: "محل نقطه: روی بازو، ۳ سون زیر زیر بغل، در لبه داخلی عضله دوسر بازویی",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه پنجره به آسمان",
imageUrl: "assets/images/lu/lu3.jpg",
desc: `

درمان آسم و برونشیت

کاهش خونریزی بینی

بهبود درد بازو

تنظیم تعریق
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای خونریزی و مشکلات تنفسی"
},
{
category: "LU",
Enname: "Xiabai",
faname: "شیابای",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU4",
name: "LU4 Xiabai شیابای",
description: "سفید باریک",
location: "محل نقطه: روی بازو، ۱ سون زیر LU3، در لبه داخلی عضله دوسر بازویی",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای ریه",
imageUrl: "assets/images/lu/lu4.jpg",
desc: `

تسکین سرفه و تنگی نفس

کاهش اضطراب و ترس

بهبود درد قفسه سینه

تنظیم ضربان قلب
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای مشکلات ریوی و اضطراب"
},
{
category: "LU",
Enname: "Chize",
faname: "چی زه",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU5",
name: "LU5 Chize چی زه",
description: "استخر آرنج",
location: "محل نقطه: در چین آرنج، در فرورفتگی خارج از تاندون عضله دوسر بازویی",
pressureAngle: " عمود",
pressureAmount: "فشار ۴ تا ۶",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه He-Sea (دریا)",
imageUrl: "assets/images/lu/lu5.jpg",
desc: `

درمان سرفه و گلودرد

کاهش تب

تسکین درد آرنج

دفع رطوبت از ریه
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/lu5.png",
      main: "نقطه کلیدی برای مشکلات تنفسی و آرنج"
},
{
category: "LU",
Enname: "Kongzui",
faname: "کونگ زویی",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU6",
name: "LU6 Kongzui کونگ زویی",
description: "جمع‌آوری کننده",
location: "محل نقطه: روی ساعد، ۷ سون بالاتر از چین مچ دست، در لبه خارجی استخوان زند اعلی",
pressureAngle: " عمود",
pressureAmount: "فشار ۴ تا ۶",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Xi-Cleft (شکاف)",
imageUrl: "assets/images/lu/lu6.jpg",
desc: `

درمان سرفه خونی

کاهش تورم گلو

تسکین درد ساعد

تنظیم انرژی ریه
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/lu6.png",
      main: "نقطه کلیدی برای خونریزی ریوی"
},
{
category: "LU",
Enname: "Lieque",
faname: "لیه چوئه",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU7",
name: "LU7 Lieque لیه چوئه",
description: "شکاف دنباله‌دار",
location: "محل نقطه: روی ساعد، ۱.۵ سون بالاتر از چین مچ دست، در فرورفتگی بین تاندون‌ها",
pressureAngle: " مایل (۴۵ درجه به سمت بالا)",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Luo-Connecting (اتصال)",
imageUrl: "assets/images/lu/lu7.jpg",
desc: `

درمان سردرد و گردن درد

کاهش آبریزش بینی

تسکین سرفه و آسم

بهبود درد مچ دست
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/lu7.jpg",
      main: "نقطه کلیدی برای سردرد و مشکلات تنفسی"
},
{
category: "LU",
Enname: "Jingqu",
faname: "جینگ چو",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU8",
name: "LU8 Jingqu جینگ چو",
description: "گذرگاه رودخانه",
location: "محل نقطه: روی ساعد، ۱ سون بالاتر از چین مچ دست، در فرورفتگی بین تاندون‌ها",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Jing-River (رودخانه)",
imageUrl: "assets/images/lu/lu8.jpg",
desc: `

درمان سرفه خشک

کاهش تنگی نفس

تسکین درد ساعد

تنظیم انرژی ریه
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای سرفه خشک"
},
{
category: "LU",
Enname: "Taiyuan",
faname: "تای یوان",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU9",
name: "LU9 Taiyuan تای یوان",
description: "حوضچه بزرگ",
location: "محل نقطه: روی مچ دست، در فرورفتگی خارج از تاندون رادیال، در چین مچ دست",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Yuan-Source (منبع) و Shu-Stream (جریان)",
imageUrl: "assets/images/lu/lu9.jpg",
desc: `

درمان آسم و برونشیت

کاهش تپش قلب

بهبود درد مچ دست

تقویت سیستم ایمنی
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/lu9.png",
      main: "نقطه کلیدی برای آسم و مشکلات قلبی"
},
{
category: "LU",
Enname: "Yuji",
faname: "یو جی",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU10",
name: "LU10 Yuji یو جی",
description: "مرز ماهی",
location: "محل نقطه: روی کف دست، در برجستگی عضله بین استخوان متاکارپ اول و انگشت شست",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Ying-Spring (چشمه)",
imageUrl: "assets/images/lu/lu10.jpg",
desc: `

درمان گلودرد و سرفه

کاهش تب

تسکین درد شست

بهبود مشکلات گوارشی
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای گلودرد و تب"
},
{
category: "LU",
Enname: "Shaoshang",
faname: "شائو شانگ",
meridian: "Lung Meridian (LU)",
Fameridian: "مریدین ریه",
id: "LU11",
name: "LU11 Shaoshang شائو شانگ",
description: "تاجر کوچک",
location: "محل نقطه: در گوشه خارجی ناخن انگشت شست دست، حدود ۲ میلی‌متر از لبه ناخن",
pressureAngle: " مایل (۱۰ تا ۱۵ درجه)",
pressureAmount: "فشار ۲ تا ۴ (ملایم)",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Jing-Well (چاه)",
imageUrl: "assets/images/lu/lu11.jpg",
desc: `

درمان گلودرد شدید

کاهش تب و تشنج

بهبود کابوس‌های شبانه

تسکین اضطراب
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه انتهایی مریدین ریه برای موارد اورژانسی"
},


// ==============================================  SP   ===============================================
//sp

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

مسیر مریدین طحال به شرح زیر است:

1. شروع از انتهای انگشت اول پا (SP1).  
2. حرکت در امتداد مرز بین گوشت سفید و قرمز پا (SP2).  
3. عبور از لبه خلفی برجستگی استخوان ناوی (SP3، SP4).  
4. صعود به سمت لبه قدامی قوزک داخلی (SP5).  
5. صعود در امتداد سطح داخلی ساق پا.  
6. حرکت در امتداد لبه خلفی استخوان درشت‌نی (SP6، SP7).  
7. تقاطع و پیش‌روی در جلوی مریدین کبد (SP8).  
8. از زانو، صعود در امتداد لبه قدامی داخلی ران (SP9، SP10، SP11).  
9. ورود به ناحیه زیرشکمی (SP12، SP13، CV3، CV4، SP14).  
10. اتصال به طحال.  
11. ارتباط با معده (CV10).  
12. ادامه مسیر به سمت بالا، نفوذ به دیافراگم و صعود (SP16، GB24، LR14، SP17، SP18، SP19، SP20، SP21، LU1).  
13. حرکت به سمت بالا در امتداد حلق (ST9).  
14. اتصال به ریشه زبان.  
15. پراکندگی در ناحیه زیرزبانی.  
16. شاخه‌ای از مریدین،  
17. دوباره جدا شدن از معده (CV12).  
18. به‌صورت جداگانه به سمت بالا نفوذ به دیافراگم و صعود.  
19. ورود به مرکز قلب (CV17).

مسیر انشعاب مریدین طحال به شرح زیر است:

1. انشعاب مریدین طحال،  
2. صعود به ناحیه ران.  
3. یکی شدن با بیل‌راک (انشعاب) مریدین معده.  
4. حرکت همراه با شاخه اصلی که از مریدین معده جدا شده است.  
5. صعود و اتصال به حلق.  
6. نفوذ به مرکز زبان.


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
category: "SP",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر مریدین طحال به شرح زیر است:

1. شروع از انتهای انگشت اول پا (SP1).  
2. حرکت در امتداد مرز بین گوشت سفید و قرمز پا (SP2).  
3. عبور از لبه خلفی برجستگی استخوان ناوی (SP3، SP4).  
4. صعود به سمت لبه قدامی قوزک داخلی (SP5).  
5. ادامه مسیر در امتداد سطح داخلی ساق پا.  
6. حرکت در امتداد لبه خلفی استخوان درشت‌نی (SP6، SP7).  
7. تقاطع و پیش‌روی در جلوی مریدین کبد (SP8).  
8. از زانو، صعود در امتداد لبه قدامی داخلی ران (SP9، SP10، SP11).  
9. ورود به ناحیه زیرشکمی (SP12، SP13، CV3، CV4، SP14).  
10. اتصال به طحال و ارتباط با معده (CV10).  
11. ادامه مسیر به سمت بالا، نفوذ به دیافراگم و صعود (SP16، GB24، LR14، SP17، SP18، SP19، SP20، SP21، LU1).  
12. حرکت به سمت بالا در امتداد حلق (ST9).  
13. ارتباط با ریشه زبان.  
14. پراکندگی در ناحیه زیرزبانی.  
15. شاخه‌ای از مریدین،  
16. دوباره از معده جدا شده (CV12)،  
17. به طور جداگانه به سمت بالا نفوذ به دیافراگم کرده و صعود می‌کند،  
18. و به مرکز قلب وارد می‌شود (CV17).  

این ترجمه به‌صورت روان و تخصصی انجام شده و اصطلاحات آناتومی و مسیرهای مریدین به‌دقت حفظ شده‌اند.
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "SP",
Enname: "Yinbai",
faname: "یین‌بای",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP1",
name: "SP1 Yinbai یین‌بای",
description: "سپید پنهان",
location: "محل نقطه: در گوشه داخلی ناخن انگشت شست پا، حدود ۲ میلی‌متر از لبه ناخن",
pressureAngle: " مایل (۱۰ تا ۱۵ درجه)",
pressureAmount: "فشار ۲ تا ۴ (ملایم)",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Jing-Well (چاه)",
imageUrl: "assets/images/sp/sp1.jpg",
desc: `

قطع خونریزی‌های غیرطبیعی

درمان بی‌خوابی و کابوس

کاهش اضطراب و ترس

بهبود مشکلات گوارشی
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اولیه مریدین طحال برای خونریزی و اضطراب"
},
{
category: "SP",
Enname: "Dadu",
faname: "دادو",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP2",
name: "SP2 Dadu دادو",
description: "پایتخت بزرگ",
location: "محل نقطه: در لبه داخلی انگشت شست پا، در مفصل متاتارسوفالانژیال (در فرورفتگی قرمز و سفید پوست)",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Ying-Spring (چشمه)",
imageUrl: "assets/images/sp/sp2.jpg",
desc: `

بهبود نفخ و سوءهاضمه

کاهش تب

تسکین درد پا

تنظیم قند خون
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای مشکلات گوارشی"
},
{
category: "SP",
Enname: "Taibai",
faname: "تای‌بای",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP3",
name: "SP3 Taibai تای‌بای",
description: "سپیدار بزرگ",
location: "محل نقطه: در لبه داخلی پا، پشت سر استخوان متاتارس اول (در فرورفتگی قرمز و سفید پوست)",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Yuan-Source (منبع) و Shu-Stream (جریان)",
imageUrl: "assets/images/sp/sp3.jpg",
desc: `

تقویت طحال و معده

کاهش خستگی

درمان اسهال و یبوست

تسکین درد کمر
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/diabetes2.jpg",
      main: "نقطه کلیدی برای تقویت طحال"
},
{
category: "SP",
Enname: "Gongsun",
faname: "گونگ‌سون",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP4",
name: "SP4 Gongsun گونگ‌سون",
description: "شاهزاده زرد",
location: "محل نقطه: در لبه داخلی پا، ۱ سون پشت سر استخوان متاتارس اول (در فرورفتگی)",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Luo-Connecting (اتصال)",
imageUrl: "assets/images/sp/sp4.jpg",
desc: `

درمان درد معده و شکم

کاهش استرس و اضطراب

بهبود مشکلات قاعدگی

تنظیم فشار خون
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/sp4.png",
      main: "نقطه کلیدی برای دردهای شکمی"
},
{
category: "SP",
Enname: "Shangqiu",
faname: "شانگ‌چیو",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP5",
name: "SP5 Shangqiu شانگ‌چیو",
description: "تپه بازرگان",
location: "محل نقطه: در جلوی قوزک داخلی پا، در فرورفتگی بین نوک قوزک و استخوان ناوی",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Jing-River (رودخانه)",
imageUrl: "assets/images/sp/sp5.jpg",
desc: `

درمان اسهال و یبوست

کاهش تورم گلو

تسکین درد مچ پا

بهبود مشکلات گوارشی
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای مشکلات گوارشی"
},
{
category: "SP",
Enname: "Sanyinjiao",
faname: "سان‌یین‌جیائو",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP6",
name: "SP6 Sanyinjiao سان‌یین‌جیائو",
description: "تقاطع سه یین",
location: "محل نقطه: ۳ سون بالاتر از قوزک داخلی، در لبه پشتی استخوان درشت‌نی",
pressureAngle: " عمود",
pressureAmount: "فشار 6 تا 10",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "تقاطع مریدین‌های طحال، کبد و کلیه",
imageUrl: "assets/images/sp/sp6.jpg",
desc: `

تنظیم قاعدگی و هورمون‌ها

بهبود ناباروری

کاهش استرس و بی‌خوابی

تقویت سیستم ایمنی

تسکین دردهای شکمی


کانالهای یین را در پاها تقویت میکند
گردش خون و تولید انرژی
خون را تحریک کرده مانع دم می شود
برای هضم ضعیف
مشکلات مربوط به قاعدگی
نازایی
زایمان های مشکل
بی خوابی
کم خوابی
از نقاط مهم بازتاب درمانی به شمار می رود

توجه در زمان بارداری این نقطه گرفته نشود باعث سقط جنین می شود
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"رئیسه",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/sp6.png",
      main: "یکی از مهمترین نقاط بدن برای زنان"
},
{
category: "SP",
Enname: "Lougu",
faname: "لوگو",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP7",
name: "SP7 Lougu لوگو",
description: "دره نشت‌کننده",
location: "محل نقطه: ۶ سون بالاتر از قوزک داخلی، در لبه پشتی استخوان درشت‌نی",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای طحال",
imageUrl: "assets/images/sp/sp7.jpg",
desc: `

درمان نفخ و سوءهاضمه

کاهش تورم پاها

بهبود اسهال

تسکین درد زانو
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای مشکلات گوارشی"
},
{
category: "SP",
Enname: "Diji",
faname: "دی‌جی",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP8",
name: "SP8 Diji دی‌جی",
description: "مکانیسم زمین",
location: "محل نقطه: ۸ سون بالاتر از قوزک داخلی، در لبه پشتی استخوان درشت‌نی",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Xi-Cleft (شکاف)",
imageUrl: "assets/images/sp/sp8.jpg",
desc: `

تنظیم قاعدگی

کاهش دردهای شکمی

بهبود دیابت

تسکین درد پا
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای مشکلات زنان"
},
{
category: "SP",
Enname: "Yinlingquan",
faname: "یین‌لینگ‌چوان",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP9",
name: "SP9 Yinlingquan یین‌لینگ‌چوان",
description: "چشمه تپه یین",
location: "محل نقطه: در زیر زانو، در فرورفتگی زیر و پشت سر استخوان درشت‌نی",
pressureAngle: " عمود",
pressureAmount: "فشار ۴ تا ۶",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه He-Sea (دریا)",
imageUrl: "assets/images/sp/sp9.jpg",
desc: `

دفع رطوبت از بدن

درمان عفونت‌های ادراری

کاهش تورم زانو

بهبود مشکلات گوارشی
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/sp9.png",
      main: "نقطه کلیدی برای دفع رطوبت"
},
{
category: "SP",
Enname: "Xuehai",
faname: "شوئه‌های",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP10",
name: "SP10 Xuehai شوئه‌های",
description: "دریای خون",
location: "محل نقطه: ۲ سون بالاتر از زانو، در لبه داخلی ران (وقتی زانو ۹۰ درجه خم است)",
pressureAngle: " عمود",
pressureAmount: "فشار ۴ تا ۶",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه مهم برای خون",
imageUrl: "assets/images/sp/sp10.jpg",
desc: `

تنظیم قاعدگی

بهبود مشکلات پوستی

کاهش کهیر و آلرژی

تسکین درد زانو
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/sp10.png",
      main: "نقطه کلیدی برای بیماری‌های خونی و پوستی"
},
{
category: "SP",
Enname: "Jimen",
faname: "جی‌من",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP11",
name: "SP11 Jimen جی‌من",
description: "دروازه سبد",
location: "محل نقطه: ۶ سون بالاتر از SP10، در لبه داخلی ران",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای طحال",
imageUrl: "assets/images/sp/sp11.jpg",
desc: `

درمان عفونت‌های ادراری

کاهش تورم ران

بهبود دردهای لگن

تنظیم جریان خون
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای مشکلات ادراری"
},
{
category: "SP",
Enname: "Chongmen",
faname: "چونگ‌من",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP12",
name: "SP12 Chongmen چونگ‌من",
description: "دروازه حمله",
location: "محل نقطه: در کشاله ران، در کنار شریان فمورال (نزدیک استخوان شرمگاهی)",
pressureAngle: " عمود (با احتیاط)",
pressureAmount: "فشار ۲ تا ۴ (ملایم)",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه حساس - فشار ملایم",
imageUrl: "assets/images/sp/sp12.jpg",
desc: `

درمان دردهای لگن

بهبود هموروئید

تنظیم قاعدگی

کاهش فشار خون
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه حساس برای مشکلات لگن"
},
{
category: "SP",
Enname: "Fushe",
faname: "فو‌شه",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP13",
name: "SP13 Fushe فو‌شه",
description: "اقامتگاه دولت",
location: "محل نقطه: ۴ سون پایین‌تر از ناف، ۰.۵ سون خارج از خط وسط",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای طحال",
imageUrl: "assets/images/sp/sp13.jpg",
desc: `

درمان دردهای شکمی

بهبود یبوست

کاهش تورم غدد لنفاوی

تنظیم انرژی طحال
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه کمکی برای دردهای شکمی"
},
{
category: "SP",
Enname: "Fujie",
faname: "فو‌جیه",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP14",
name: "SP14 Fujie فو‌جیه",
description: "گره شکمی",
location: "محل نقطه: ۱.۳ سون پایین‌تر از SP13، ۰.۵ سون خارج از خط وسط",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای روده‌ها",
imageUrl: "assets/images/sp/sp14.jpg",
desc: `

درمان اسهال و یبوست

کاهش نفخ شکم

تسکین دردهای قاعدگی

بهبود مشکلات روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه کمکی برای مشکلات روده"
},
{
category: "SP",
Enname: "Daheng",
faname: "دا‌هنگ",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP15",
name: "SP15 Daheng دا‌هنگ",
description: "عرض بزرگ",
location: "محل نقطه: در سطح ناف، ۴ سون خارج از خط وسط",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه تقاطع با مریدین معده",
imageUrl: "assets/images/sp/sp15.jpg",
desc: `

درمان یبوست

کاهش چربی شکم

بهبود مشکلات گوارشی

تنظیم عملکرد روده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/sp15.png",
      main: "نقطه کلیدی برای یبوست"
},
{
category: "SP",
Enname: "Fuai",
faname: "فو‌آی",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP16",
name: "SP16 Fuai فو‌آی",
description: "اندوه شکمی",
location: "محل نقطه: ۳ سون بالاتر از ناف، ۴ سون خارج از خط وسط",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای معده",
imageUrl: "assets/images/sp/sp16.jpg",
desc: `

درمان سوءهاضمه

کاهش درد معده

بهبود بی‌اشتهایی

تنظیم اسید معده
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای معده"
},
{
category: "SP",
Enname: "Shidou",
faname: "شی‌دو",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP17",
name: "SP17 Shidou شی‌دو",
description: "غار غذا",
location: "محل نقطه: در فضای بین دنده‌ای پنجم، ۶ سون خارج از خط وسط",
pressureAngle: " مایل (۴۵ درجه)",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای طحال",
imageUrl: "assets/images/sp/sp17.jpg",
desc: `

درمان سکسکه

کاهش نفخ شکم

بهبود مشکلات تنفسی

تسکین درد قفسه سینه
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای مشکلات تنفسی و گوارشی"
},
{
category: "SP",
Enname: "Tianxi",
faname: "تیان‌شی",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP18",
name: "SP18 Tianxi تیان‌شی",
description: "جویبار بهشتی",
location: "محل نقطه: در فضای بین دنده‌ای چهارم، ۶ سون خارج از خط وسط",
pressureAngle: " مایل (۴۵ درجه)",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای سینه",
imageUrl: "assets/images/sp/sp18.jpg",
desc: `

درمان سرفه و تنگی نفس

کاهش درد سینه

بهبود مشکلات شیردهی

تنظیم انرژی قفسه سینه
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای مشکلات سینه"
},
{
category: "SP",
Enname: "Xiongxiang",
faname: "شیونگ‌شیانگ",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP19",
name: "SP19 Xiongxiang شیونگ‌شیانگ",
description: "روستای سینه",
location: "محل نقطه: در فضای بین دنده‌ای سوم، ۶ سون خارج از خط وسط",
pressureAngle: " مایل (۴۵ درجه)",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای قفسه سینه",
imageUrl: "assets/images/sp/sp19.jpg",
desc: `

درمان دردهای بین دنده‌ای

کاهش تنگی نفس

بهبود سرفه

تسکین اضطراب
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای دردهای قفسه سینه"
},
{
category: "SP",
Enname: "Zhourong",
faname: "ژو‌رونگ",
meridian: "Spleen Meridian (SP)",
Fameridian: "مریدین طحال",
id: "SP20",
name: "SP20 Zhourong ژو‌رونگ",
description: "شکوفایی فراگیر",
location: "محل نقطه: در فضای بین دنده‌ای دوم، ۶ سون خارج از خط وسط",
pressureAngle: " مایل (۴۵ درجه)",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه پایانی مریدین طحال",
imageUrl: "assets/images/sp/sp20.jpg",
desc: `

درمان سرفه و آسم

کاهش استرس

بهبود مشکلات تنفسی

تنظیم انرژی قفسه سینه
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه پایانی مریدین طحال برای مشکلات تنفسی"
},
{
  category: "SP",
  id: "SP21",
  name: "SP21 Dabao دا بائو",
  Enname: "Dabao",
  faname: "بسته بزرگ",
  meridian: "Spleen Meridian (SP)",
  Fameridian: "مریدین طحال",
  description: "بیست‌ویکمین نقطه مریدین طحال + نقطه اصلی Luo (اتصالی) برای تمام مریدین‌ها",
  location: "در خط زیربغلی میانی، بین دنده‌های ششم و هفتم",
  pressureAngle: "مایل به سمت دنده (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای قفسه سینه، بدن‌درد و ضعف عمومی",
  imageUrl: "assets/images/sp/sp21.jpg",
  desc: `
دردهای قفسه سینه  
بدن‌درد عمومی  
ضعف و خستگی عضلات
`,
  descrip: "نقطه اصلی Luo برای اتصال تمام مریدین‌ها",
  descExtra: "برای فیبرومیالژی و سندروم خستگی مزمن مؤثر است",
  supplementary: "با ST36 و GB21 ترکیب شود",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه کلیدی برای دردهای عمومی بدن"
},


// ==============================================  HT   ===============================================

{
category: "HT",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر مریدین قلب به شرح زیر است:

1. شروع از قلب (CV17).  
2. ظهور از قلب و اتصال به خط مریدین قلب.  
3. نفوذ به سمت پایین و عبور از دیافراگم.  
4. ارتباط با روده کوچک (CV10).  
5. شاخه‌ای از مریدین،  
6. جدا شدن از خط مریدین قلب و صعود در امتداد دو طرف حلق.  
7. اتصال به خط مریدین بینایی.  
8. شاخه مستقیم،  
9. دوباره از مریدین قلب و صعود به سمت ریه.  
10. حرکت عرضی به زیر بغل و ظهور در آنجا (HT1).  
11. نزول در امتداد سطح خلفی داخلی بازو (HT2).  
12. عبور از پشت مریدین ریه و مریدین پریکاردیوم.  
13. نزول به حفره داخلی آرنج (HT3).  
14. حرکت در امتداد سطح خلفی داخلی ساعد (HT4، HT5، HT6، HT7).  
15. رسیدن به ناحیه استخوان نخودی در پشت کف دست.  
16. ورود به لبه خلفی داخلی کف دست (HT8).  
17. حرکت در امتداد سطح داخلی انگشت پنجم.  
18. خروج از انتهای انگشت پنجم (HT9).



مسیر انشعاب مریدین قلب به شرح زیر است:

1. انشعاب مریدین قلب،  
2. ورود جداگانه بین دو عضله در ناحیه یونک (GB22) که در فضای بین‌دنده‌ای چهارم در خط میانی زیر بغل قرار دارد.  
3. پیوستن به قلب.  
4. سپس صعود به سمت حلق و حنجره.  
5. ظهور از صورت.  
6. ادغام در گوشه داخلی چشم.

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
//ht
{
category: "HT",
Enname: "Jiquan",
faname: "جی‌چوان",
meridian: "Heart Meridian (HT)",
Fameridian: "مریدین قلب",
id: "HT1",
name: "HT1 Jiquan جی‌چوان",
description: "چشمه نهایی",
location: "محل نقطه: در زیر بغل، در مرکز حفره زیربغلی، روی شریان اکسیلاری",
pressureAngle: " عمود (با احتیاط)",
pressureAmount: "فشار ۲ تا ۴ (ملایم)",
repetitions: "۱ تا ۲ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه ابتدایی مریدین قلب",
imageUrl: "assets/images/ht/ht1.jpg",
desc: `

درمان دردهای قلبی

کاهش استرس و اضطراب

بهبود تعریق شبانه

تسکین درد بازو
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه حساس برای مشکلات قلبی-عروقی"
},
{
category: "HT",
Enname: "Qingling",
faname: "چینگ‌لینگ",
meridian: "Heart Meridian (HT)",
Fameridian: "مریدین قلب",
id: "HT2",
name: "HT2 Qingling چینگ‌لینگ",
description: "روح آبی",
location: "محل نقطه: روی بازو، ۳ سون بالاتر از چین آرنج، در لبه داخلی عضله دوسر",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه کمکی برای قلب",
imageUrl: "assets/images/ht/ht2.jpg",
desc: `

درمان تپش قلب

کاهش درد شانه

بهبود سردرد

آرامش بخش روحی
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آرامش بخش قلبی"
},
{
category: "HT",
Enname: "Shaohai",
faname: "شائوهای",
meridian: "Heart Meridian (HT)",
Fameridian: "مریدین قلب",
id: "HT3",
name: "HT3 Shaohai شائوهای",
description: "دریای کوچک",
location: "محل نقطه: در چین آرنج، در انتهای داخلی چین (وقتی آرنج خم است)",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه He-Sea (دریا)",
imageUrl: "assets/images/ht/ht3.jpg",
desc: `

درمان درد آرنج

کاهش اضطراب

بهبود بی‌خوابی

تنظیم فشار خون
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ht3.png",
      main: "نقطه کلیدی برای آرامش روانی"
},
{
category: "HT",
Enname: "Lingdao",
faname: "لینگ‌دائو",
meridian: "Heart Meridian (HT)",
Fameridian: "مریدین قلب",
id: "HT4",
name: "HT4 Lingdao لینگ‌دائو",
description: "مسیر روح",
location: "محل نقطه: روی ساعد، ۱.۵ سون بالاتر از چین مچ دست، در لبه داخلی استخوان اولنا",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Jing-River (رودخانه)",
imageUrl: "assets/images/ht/ht4.jpg",
desc: `

درمان تپش قلب

کاهش استرس

بهبود لکنت زبان

تسکین درد ساعد
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"رئیسه",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای اختلالات گفتاری"
},
{
category: "HT",
Enname: "Tongli",
faname: "تونگ‌لی",
meridian: "Heart Meridian (HT)",
Fameridian: "مریدین قلب",
id: "HT5",
name: "HT5 Tongli تونگ‌لی",
description: "گذرگاه داخلی",
location: "محل نقطه: روی ساعد، ۱ سون بالاتر از چین مچ دست، در لبه داخلی استخوان اولنا",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Luo-Connecting (اتصال)",
imageUrl: "assets/images/ht/ht5.jpg",
desc: `

درمان فراموشی

کاهش اضطراب

بهبود بی‌خوابی

تسکین گلودرد
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ht5.png",
      main: "نقطه کلیدی برای تقویت حافظه"
},
{
category: "HT",
Enname: "Yinxi",
faname: "یین‌شی",
meridian: "Heart Meridian (HT)",
Fameridian: "مریدین قلب",
id: "HT6",
name: "HT6 Yinxi یین‌شی",
description: "شکاف یین",
location: "محل نقطه: روی ساعد، ۰.۵ سون بالاتر از چین مچ دست، در لبه داخلی استخوان اولنا",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Xi-Cleft (شکاف)",
imageUrl: "assets/images/ht/ht6.jpg",
desc: `

درمان تعریق شبانه

کاهش تپش قلب

بهبود بی‌خوابی

تسکین اضطراب
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ht6.png",
      main: "نقطه مؤثر برای تعریق زیاد"
},
{
category: "HT",
Enname: "Shenmen",
faname: "شن‌من",
meridian: "Heart Meridian (HT)",
Fameridian: "مریدین قلب",
id: "HT7",
name: "HT7 Shenmen شن‌من",
description: "دروازه روح",
location: "محل نقطه: روی مچ دست، در چین مچ، در فرورفتگی خارج از تاندون فلکسور کارپی اولناریس",
pressureAngle: " عمود",
pressureAmount: "فشار 6 تا 10",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Yuan-Source (منبع) و Shu-Stream (جریان)",
imageUrl: "assets/images/ht/ht7.jpg",
desc: `

درمان بی‌خوابی

کاهش اضطراب و استرس

بهبود تپش قلب

آرامش بخش سیستم عصبی
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"رئیسه",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ht7.jpg",
      main: "مهمترین نقطه برای آرامش ذهن"
},
{
category: "HT",
Enname: "Shaofu",
faname: "شائو فو",
meridian: "Heart Meridian (HT)",
Fameridian: "مریدین قلب",
id: "HT8",
name: "HT8 Shaofu شائو فو",
description: "قصر کوچک",
location: "محل نقطه: روی کف دست، بین استخوان‌های متاکارپ چهارم و پنجم (وقتی دست مشت شده است)",
pressureAngle: " عمود",
pressureAmount: "فشار ۳ تا ۵",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Ying-Spring (چشمه)",
imageUrl: "assets/images/ht/ht8.jpg",
desc: `

درمان درد قلب

کاهش اضطراب

بهبود زخم‌های دهانی

تسکین خارش کف دست
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مؤثر برای مشکلات روحی-روانی"
},
{
category: "HT",
Enname: "Shaochong",
faname: "شائو چونگ",
meridian: "Heart Meridian (HT)",
Fameridian: "مریدین قلب",
id: "HT9",
name: "HT9 Shaochong شائو چونگ",
description: "حمله کوچک",
location: "محل نقطه: در گوشه خارجی ناخن انگشت کوچک دست (سمت انگشت چهارم)، حدود ۲ میلی‌متر از لبه ناخن",
pressureAngle: " مایل (۱۰ تا ۱۵ درجه)",
pressureAmount: "فشار ۲ تا ۴ (ملایم)",
repetitions: "۲ تا ۳ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "نقطه Jing-Well (چاه)",
imageUrl: "assets/images/ht/ht9.jpg",
desc: `

درمان اضطراب شدید

کاهش تب

بهبود بیهوشی

تسکین تپش قلب
`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ht9.png",
      main: "نقطه انتهایی مریدین قلب برای موارد اورژانسی"
},



// ==============================================  BL-1   ===============================================
//BL

// {
// category: "BL-1",
// Enname: "",
// faname: "",
// meridian: "",
// Fameridian: "",
// id: "",
// name: "",
// description: "",
// location: "",
// pressureAngle: "",
// pressureAmount: "",
// repetitions: "",
// time: "",
// extra: "",
// imageUrl: "",
// desc: `
// مسیر مریدین مثانه به شرح زیر است:

// 1. شروع از گوشه داخلی چشم (BL1).  
// 2. صعود به سمت پیشانی (GV23، BL2، BL3، BL4، GB15، BL5، BL6، BL7).  
// 3. تقاطع با مریدین GV در نقطه برجستگی پیشانی (GV20).  
// 4. شاخه‌ای از مریدین،  
// 5. از برجستگی پیشانی به سمت نوک فوقانی گوش (BL8، GB7، GB8، GB9، GB10، GB11، GB12).  
// 6. شاخه مستقیم،  
// 7. از برجستگی پیشانی وارد استخوان جمجمه شده و با مغز ارتباط برقرار می‌کند (GV20، BL9، GV18).  
// 8. دور زدن و جدا شدن از مریدین GV، سپس نزول به‌صورت جداگانه در امتداد ناحیه پس‌گردنی (BL10، GV14، GV13).  
// 9. حرکت در امتداد لبه داخلی استخوان کتف.  
// 10. نزول موازی با ستون فقرات (BL11، BL12، BL13، BL14، BL15، BL16، BL17).  
// 11. رسیدن به مرکز ناحیه کمری (BL18، BL19، BL20، BL21).  
// 12. دوباره ورود در امتداد ستون فقرات.  
// 13. ارتباط با کلیه.  
// 14. اتصال به مثانه.  
// 15. شاخه‌ای دیگر،  
// 16. از ناحیه کمری در امتداد ناحیه ستون فقرات نزول می‌کند (BL21، BL22، BL23، BL24، BL25، BL26، BL27، BL28، BL29، BL30، BL31، BL32، BL33، BL34).  
// 17. نفوذ به ناحیه باسن و نزول (BL35، BL36، BL37، BL38، BL39).  
// 18. ورود به حفره پشت زانو (BL40).  
// 19. شاخه‌ای دیگر،  
// 20. از لبه داخلی هر دو استخوان کتف،  
// 21. به‌صورت جداگانه به سمت پایین نفوذ به استخوان‌های کتف می‌کند.  
// 22. در امتداد خط میانی ستون فقرات (BL41، BL42، BL43، BL44، BL45، BL46، BL47، BL48، BL49، BL50، BL51، BL52، BL53، BL54).  
// 23. عبور از مفصل ران و تروکانتر بزرگ استخوان ران (GB30).  
// 24. در امتداد لبه خلفی خارجی ران.  
// 25. نزول به سمت حفره پشت زانو و یکی شدن با شاخه اصلی (BL40).  
// 26. سپس نزول و نفوذ به ساق پا (BL55، BL56، BL57، BL58، BL59).  
// 27. پدیدار شدن در پشت قوزک خارجی (BL60).  
// 28. در امتداد برجستگی استخوان پنجم کف پا (BL61، BL62، BL63، BL64، BL65، BL66).  
// 29. نزول به سمت سطح خارجی انگشت پنجم پا (BL67).  

// این ترجمه با دقت و به‌صورت روان و تخصصی ارائه شده است، با حفظ اصطلاحات آناتومیکی و مسیرهای مریدین.
// `,
// descrip: "",
// descExtra: "",
// supplementary: "",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "",
// },

// {
// category: "BL-1",
// Enname: "",
// faname: "",
// meridian: "",
// Fameridian: "",
// id: "",
// name: "",
// description: "",
// location: "",
// pressureAngle: "",
// pressureAmount: "",
// repetitions: "",
// time: "",
// extra: "",
// imageUrl: "",
// desc: `

// `,
// descrip: "",
// descExtra: "",
// supplementary: "",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "",
// },

// {
// category: "BL-1",
// Enname: "Jingming",
// faname: "جینگ مینگ",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL1",
// name: "BL1 Jingming جینگ مینگ",
// description: "چشم درخشان",
// location: "محل نقطه: در گوشه داخلی چشم، حدود ۰.۱ سون از حاشیه چشم",
// pressureAngle: " مایل (۱۵ درجه به سمت بینی)",
// pressureAmount: "۱-۲ (بسیار ملایم)",
// repetitions: "۱-۲ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "اولین نقطه مریدین مثانه",
// imageUrl: "assets/images/bl/bl1.jpg",
// desc: `

// درمان مشکلات بینایی

// کاهش قرمزی و تورم چشم

// بهبود سردرد

// آرامش بخشیدن به ذهن
// `,
// descrip: "این نقطه برای اختلالات چشمی و سردردهای پیشانی بسیار مؤثر است",
// descExtra: "از فشار شدید خودداری کنید زیرا منطقه حساسی است",
// supplementary: "همراه با GB20 برای سردرد مؤثرتر است",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"assets/images/bl1.png",
//       main: "نقطه کلیدی برای سلامت چشم"
// },
// {
// category: "BL-1",
// Enname: "Zanzhu",
// faname: "زان ژو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL2",
// name: "BL2 Zanzhu زان ژو",
// description: "خیز بامبو",
// location: "محل نقطه: در ابتدای ابرو، در فرورفتگی بالای حدقه چشم",
// pressureAngle: " مایل (۳۰ درجه به سمت پایین)",
// pressureAmount: "۲-۳",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه مهم برای سردرد",
// imageUrl: "assets/images/bl/bl2.jpg",
// desc: `

// درمان سردرد و میگرن

// کاهش فشار چشم

// بهبود بی‌خوابی

// تسکین اضطراب
// `,
// descrip: "برای سردردهای پیشانی و تنشی بسیار مناسب است",
// descExtra: "می‌تواند همراه با ماساژ ابروها استفاده شود",
// supplementary: "همراه با GB20 و LI4 برای سردرد بهتر عمل می‌کند",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"assets/images/bl2.png",
//       main: "نقطه مؤثر برای سردردهای پیشانی"
// },
// {
// category: "BL-1",
// Enname: "Meichong",
// faname: "می چونگ",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL3",
// name: "BL3 Meichong می چونگ",
// description: "حمله ابرو",
// location: "محل نقطه: بالای ابرو، حدود ۰.۵ سون بالای BL2",
// pressureAngle: " عمود",
// pressureAmount: "۲-۳",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه کمکی برای سردرد",
// imageUrl: "assets/images/bl/bl3.jpg",
// desc: `

// درمان سرگیجه

// کاهش استرس

// بهبود بینایی

// تسکین سردرد
// `,
// descrip: "برای سرگیجه‌های ناشی از استرس مفید است",
// descExtra: "فشار ملایم توصیه می‌شود",
// supplementary: "می‌تواند با BL10 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کمکی برای سرگیجه"
// },
// {
// category: "BL-1",
// Enname: "Quchai",
// faname: "چو چای",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL4",
// name: "BL4 Quchai چو چای",
// description: "انحراف خمیده",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، ۰.۵ سون پشت خط رویش مو",
// pressureAngle: " عمود",
// pressureAmount: "۲-۳",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه کمکی برای سر",
// imageUrl: "assets/images/bl/bl4.jpg",
// desc: `

// درمان سردرد

// کاهش فشار خون

// بهبود بینایی

// تسکین اضطراب
// `,
// descrip: "برای سردردهای ناحیه پیشانی مؤثر است",
// descExtra: "از فشار مستقیم بر شریان خودداری کنید",
// supplementary: "با BL2 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کمکی برای سردرد"
// },
// {
// category: "BL-1",
// Enname: "Wuchu",
// faname: "وو چو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL5",
// name: "BL5 Wuchu وو چو",
// description: "پنج مکان",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، ۱ سون پشت خط رویش مو",
// pressureAngle: " عمود",
// pressureAmount: "۲-۳",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه کمکی برای سر",
// imageUrl: "assets/images/bl/bl5.jpg",
// desc: `

// درمان سرگیجه

// کاهش استرس

// بهبود بینایی

// تسکین سردرد
// `,
// descrip: "برای مشکلات بینایی و سرگیجه مفید است",
// descExtra: "فشار ملایم توصیه می‌شود",
// supplementary: "با BL9 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کمکی برای سرگیجه"
// },
// {
// category: "BL-1",
// Enname: "Chengguang",
// faname: "چنگ گوانگ",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL6",
// name: "BL6 Chengguang چنگ گوانگ",
// description: "دریافت نور",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، ۲.۵ سون پشت خط رویش مو",
// pressureAngle: " عمود",
// pressureAmount: "۲-۳",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه کمکی برای سر",
// imageUrl: "assets/images/bl/bl6.jpg",
// desc: `

// درمان سردرد

// کاهش سرگیجه

// بهبود بینایی

// تسکین اضطراب
// `,
// descrip: "برای سردردهای ناحیه تاج سر مفید است",
// descExtra: "از فشار شدید خودداری کنید",
// supplementary: "با GV20 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کمکی برای سردرد"
// },
// {
// category: "BL-1",
// Enname: "Tongtian",
// faname: "تونگ تیان",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL7",
// name: "BL7 Tongtian تونگ تیان",
// description: "ارتباط با بهشت",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، ۴ سون پشت خط رویش مو",
// pressureAngle: " عمود",
// pressureAmount: "۲-۳",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه مهم برای سر",
// imageUrl: "assets/images/bl/bl7.jpg",
// desc: `

// درمان سردرد

// کاهش سرگیجه

// بهبود احتقان بینی

// تسکین استرس
// `,
// descrip: "برای سردردهای ناشی از سینوزیت مؤثر است",
// descExtra: "می‌تواند با LI20 ترکیب شود",
// supplementary: "برای سینوزیت با BL2 استفاده شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه مؤثر برای سینوزیت"
// },
// {
// category: "BL-1",
// Enname: "Luoque",
// faname: "لو چوئه",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL8",
// name: "BL8 Luoque لو چوئه",
// description: "ردپای شبکه",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، ۵.۵ سون پشت خط رویش مو",
// pressureAngle: " عمود",
// pressureAmount: "۲-۳",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه کمکی برای سر",
// imageUrl: "assets/images/bl/bl8.jpg",
// desc: `

// درمان سرگیجه

// کاهش وزوز گوش

// بهبود مشکلات روانی

// تسکین سردرد
// `,
// descrip: "برای سرگیجه و مشکلات شنوایی مفید است",
// descExtra: "فشار ملایم توصیه می‌شود",
// supplementary: "با GB20 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کمکی برای سرگیجه"
// },
// {
// category: "BL-1",
// Enname: "Yuzhen",
// faname: "یو ژن",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL9",
// name: "BL9 Yuzhen یو ژن",
// description: "بالش یشم",
// location: "محل نقطه: ۱.۳ سون خارج از خط وسط، در پایین استخوان پس‌سری",
// pressureAngle: " عمود",
// pressureAmount: "۲-۳",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه مهم برای سر",
// imageUrl: "assets/images/bl/bl9.jpg",
// desc: `

// درمان سردرد پس‌سری

// کاهش تنش گردن

// بهبود بینایی

// تسکین بی‌خوابی
// `,
// descrip: "برای سردردهای ناحیه پشت سر عالی است",
// descExtra: "می‌تواند با GB20 ماساژ داده شود",
// supplementary: "برای سردرد با BL10 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کلیدی برای سردردهای پس‌سری"
// },
// {
// category: "BL-1",
// Enname: "Tianzhu",
// faname: "تیان ژو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL10",
// name: "BL10 Tianzhu تیان ژو",
// description: "ستون آسمانی",
// location: "محل نقطه: ۱.۳ سون خارج از خط وسط، در فرورفتگی لبه خارجی عضله تراپزیوس",
// pressureAngle: " مایل (۴۵ درجه به سمت مرکز)",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه مهم برای گردن",
// imageUrl: "assets/images/bl/bl10.png",
// desc: `

// درمان گردن درد

// کاهش سرگیجه

// بهبود بینایی

// تسکین استرس
// `,
// descrip: "برای گرفتگی‌های گردن بسیار مؤثر است",
// descExtra: "از فشار شدید خودداری کنید",
// supplementary: "با GB21 برای شانه درد ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کلیدی برای گردن درد"
// },
// {
// category: "BL-1",
// Enname: "Dazhu",
// faname: "دا ژو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL11",
// name: "BL11 Dazhu دا ژو",
// description: "میلۀ بزرگ",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T1 (بین تیغه‌های شانه)",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه Hui-Meeting برای استخوان‌ها",
// imageUrl: "assets/images/bl/bl11.jpg",
// desc: `

// درمان آسم

// کاهش تب

// تقویت سیستم ایمنی

// بهبود درد شانه
// `,
// descrip: "برای مشکلات تنفسی و دردهای شانه مؤثر است",
// descExtra: "در تب‌های شدید مفید است",
// supplementary: "با BL12 و BL13 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"assets/images/bl11.png",
//       main: "نقطه مهم برای سیستم ایمنی"
// },
// {
// category: "BL-1",
// Enname: "Fengmen",
// faname: "فنگ من",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL12",
// name: "BL12 Fengmen فنگ من",
// description: "دروازه باد",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T2",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه مهم برای سرماخوردگی",
// imageUrl: "assets/images/bl/bl12.jpg",
// desc: `

// درمان سرماخوردگی

// کاهش تب

// بهبود آسم

// تقویت سیستم ایمنی
// `,
// descrip: "اولین نقطه برای پیشگیری و درمان سرماخوردگی",
// descExtra: "در فصل سرما می‌تواند به صورت پیشگیرانه ماساژ داده شود",
// supplementary: "با BL13 و GV14 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کلیدی برای سرماخوردگی"
// },
// {
// category: "BL-1",
// Enname: "Feishu",
// faname: "فی شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL13",
// name: "BL13 Feishu فی شو",
// description: "نقطه شو ریه",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T3",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پشتی ریه",
// imageUrl: "assets/images/bl/bl13.jpg",
// desc: `

// درمان آسم و برونشیت

// کاهش سرفه

// بهبود مشکلات پوستی

// تقویت سیستم ایمنی
// `,
// descrip: "یکی از مهمترین نقاط برای سلامت ریوی",
// descExtra: "برای بیماران آسم بسیار مفید است",
// supplementary: "با BL12 و BL43 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه اصلی برای سلامت ریه"
// },
// {
// category: "BL-1",
// Enname: "Jueyinshu",
// faname: "جوئه یین شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL14",
// name: "BL14 Jueyinshu جوئه یین شو",
// description: "نقطه شو جوئه یین",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T4",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پریکارد",
// imageUrl: "assets/images/bl/bl14.jpg",
// desc: `

// درمان درد قفسه سینه

// کاهش استرس

// بهبود تپش قلب

// تنظیم گردش خون
// `,
// descrip: "برای مشکلات قلبی-عروقی مفید است",
// descExtra: "در اضطراب و استرس مؤثر است",
// supplementary: "با BL15 و HT7 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کمکی برای قلب"
// },
// {
// category: "BL-1",
// Enname: "Xinshu",
// faname: "شین شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL15",
// name: "BL15 Xinshu شین شو",
// description: "نقطه شو قلب",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T5",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پشتی قلب",
// imageUrl: "assets/images/bl/bl15.jpg",
// desc: `

// درمان تپش قلب

// کاهش اضطراب

// بهبود بی‌خوابی

// تنظیم فشار خون
// `,
// descrip: "برای اختلالات روانی-قلبی بسیار مؤثر است",
// descExtra: "در شب‌های بی‌خوابی ماساژ دهید",
// supplementary: "با HT7 و BL44 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه اصلی برای سلامت قلب"
// },
// {
// category: "BL-1",
// Enname: "Dushu",
// faname: "دو شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL16",
// name: "BL16 Dushu دو شو",
// description: "نقطه شو دو",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T6",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پشتی دو",
// imageUrl: "assets/images/bl/bl16.jpg",
// desc: `

// درمان مشکلات گوارشی

// کاهش استرس

// بهبود درد پشت

// تنظیم انرژی
// `,
// descrip: "برای مشکلات گوارشی مرتبط با استرس مفید است",
// descExtra: "می‌تواند با BL20 ترکیب شود",
// supplementary: "برای هضم بهتر با ST36 استفاده شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کمکی برای گوارش"
// },
// {
// category: "BL-1",
// Enname: "Geshu",
// faname: "گه شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL17",
// name: "BL17 Geshu گه شو",
// description: "نقطه شو دیافراگم",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T7",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه Hui-Meeting برای خون",
// imageUrl: "assets/images/bl/bl17.jpg",
// desc: `

// درمان سکسکه

// کاهش تهوع

// بهبود کم‌خونی

// تنظیم گردش خون
// `,
// descrip: "یکی از مهمترین نقاط برای اختلالات خونی",
// descExtra: "برای کم‌خونی و مشکلات قاعدگی مؤثر است",
// supplementary: "با BL18 و SP10 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"assets/images/bl17.png",
//       main: "نقطه کلیدی برای اختلالات خونی"
// },
// {
// category: "BL-1",
// Enname: "Ganshu",
// faname: "گان شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL18",
// name: "BL18 Ganshu گان شو",
// description: "نقطه شو کبد",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T9",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پشتی کبد",
// imageUrl: "assets/images/bl/bl18.jpg",
// desc: `

// درمان مشکلات کبدی

// کاهش خشم و تحریک‌پذیری

// بهبود بینایی

// تنظیم قاعدگی
// `,
// descrip: "برای سم‌زدایی کبد و تنظیم هیجانات مؤثر است",
// descExtra: "در سندروم پیش از قاعدگی مفید است",
// supplementary: "با LV3 و GB34 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه اصلی برای سلامت کبد"
// },
// {
// category: "BL-1",
// Enname: "Danshu",
// faname: "دان شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL19",
// name: "BL19 Danshu دان شو",
// description: "نقطه شو کیسه صفرا",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T10",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پشتی کیسه صفرا",
// imageUrl: "assets/images/bl/bl19.jpg",
// desc: `

// درمان سنگ کیسه صفرا

// کاهش تلخی دهان

// بهبود هضم چربی‌ها

// تنظیم اشتها
// `,
// descrip: "برای مشکلات هضم چربی‌ها و کیسه صفرا مؤثر است",
// descExtra: "پس از مصرف غذاهای چرب ماساژ داده شود",
// supplementary: "با GB34 و ST36 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کلیدی برای سلامت کیسه صفرا"
// },
// {
// category: "BL-1",
// Enname: "Pishu",
// faname: "پی شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL20",
// name: "BL20 Pishu پی شو",
// description: "نقطه شو طحال",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T11",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پشتی طحال",
// imageUrl: "assets/images/bl/bl20.jpg",
// desc: `

// درمان نفخ و سوءهاضمه

// کاهش خستگی

// بهبود اشتها

// تنظیم متابولیسم
// `,
// descrip: "برای تقویت سیستم گوارش و جذب مواد مغذی ضروری است",
// descExtra: "در خستگی مزمن مؤثر است",
// supplementary: "با SP6 و ST36 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه اصلی برای سلامت طحال"
// },
// {
// category: "BL-1",
// Enname: "Weishu",
// faname: "وی شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL21",
// name: "BL21 Weishu وی شو",
// description: "نقطه شو معده",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره T12",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پشتی معده",
// imageUrl: "assets/images/bl/bl21.jpg",
// desc: `

// درمان درد معده

// کاهش تهوع

// بهبود اشتها

// تنظیم اسید معده
// `,
// descrip: "برای انواع اختلالات معده مؤثر است",
// descExtra: "پس از غذا ماساژ ملایم مفید است",
// supplementary: "با ST36 و PC6 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کلیدی برای سلامت معده"
// },
// {
// category: "BL-1",
// Enname: "Sanjiaoshu",
// faname: "سان جیائو شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL22",
// name: "BL22 Sanjiaoshu سان جیائو شو",
// description: "نقطه شو سان جیائو",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره L1",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پشتی سان جیائو",
// imageUrl: "assets/images/bl/bl22.jpg",
// desc: `

// تنظیم مایعات بدن

// کاهش تورم

// بهبود عملکرد غدد درون‌ریز

// تسکین کمردرد
// `,
// descrip: "برای تعادل مایعات و سیستم لنفاوی مفید است",
// descExtra: "در احتباس مایعات مؤثر است",
// supplementary: "با SP9 و BL23 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کلیدی برای تعادل مایعات"
// },
// {
// category: "BL-1",
// Enname: "Shenshu",
// faname: "شن شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL23",
// name: "BL23 Shenshu شن شو",
// description: "نقطه شو کلیه",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره L2",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پشتی کلیه",
// imageUrl: "assets/images/bl/bl23.jpg",
// desc: `

// درمان کمردرد

// تقویت کلیه‌ها

// بهبود ناباروری

// افزایش انرژی حیاتی

// ابدا روی مهره فشار وارد نکنید
// نقطه مذکور کی ای ها کلیه ها  را 
// که منابع یین و یانگ در بدن هستند را تقویت میکند.
// `,
// descrip: "یکی از مهمترین نقاط برای سلامت کلیه و انرژی پایه",
// descExtra: "در خستگی مزمن و ضعف عمومی مؤثر است",
// supplementary: "با KI3 و GV4 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"assets/images/bl23.png",
//       main: "نقطه اصلی برای سلامت کلیه"
// },
// {
// category: "BL-1",
// Enname: "Qihaishu",
// faname: "چی های شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL24",
// name: "BL24 Qihaishu چی های شو",
// description: "نقطه شو دریای انرژی",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره L3",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه مرتبط با CV6",
// imageUrl: "assets/images/bl/bl24.jpg",
// desc: `

// درمان کمردرد

// تقویت انرژی حیاتی

// بهبود مشکلات قاعدگی

// تنظیم سیستم ادراری
// `,
// descrip: "برای تقویت انرژی پایه و کمردرد مؤثر است",
// descExtra: "در ضعف عمومی بدن مفید است",
// supplementary: "با BL23 و CV6 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کمکی برای انرژی حیاتی"
// },
// {
// category: "BL-1",
// Enname: "Dachangshu",
// faname: "دا چانگ شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL25",
// name: "BL25 Dachangshu دا چانگ شو",
// description: "نقطه شو روده بزرگ",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره L4",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه شو پشتی روده بزرگ",
// imageUrl: "assets/images/bl/bl25.jpg",
// desc: `

// درمان یبوست

// کاهش اسهال

// بهبود کمردرد

// تنظیم عملکرد روده
// `,
// descrip: "برای تمام اختلالات روده بزرگ مؤثر است",
// descExtra: "در سندروم روده تحریک‌پذیر مفید است",
// supplementary: "با ST25 و ST36 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"assets/images/bl25.png",
//       main: "نقطه کلیدی برای سلامت روده بزرگ"
// },
// {
// category: "BL-1",
// Enname: "Guanyuanshu",
// faname: "گوان یوان شو",
// meridian: "Bladder Meridian (BL)",
// Fameridian: "مریدین مثانه",
// id: "BL26",
// name: "BL26 Guanyuanshu گوان یوان شو",
// description: "نقطه شو دروازه اصلی",
// location: "محل نقطه: ۱.۵ سون خارج از خط وسط، در سطح مهره L5",
// pressureAngle: " عمود",
// pressureAmount: "۳-۴",
// repetitions: "۲-۳ بار",
// time: "بین 30 ثانیه تا 3 دقیقه",
// extra: "نقطه مرتبط با CV4",
// imageUrl: "assets/images/bl/bl26.jpg",
// desc: `

// درمان کمردرد

// تقویت سیستم ادراری

// بهبود ناباروری

// افزایش انرژی پایه
// `,
// descrip: "برای تقویت سیستم تولیدمثل و ادراری مؤثر است",
// descExtra: "در ضعف جنسی مفید است",
// supplementary: "با BL23 و CV4 ترکیب شود",

//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کمکی برای سیستم ادراری-تناسلی"
// },
// {
//     category: "BL-1",
//     id: "BL26",
//     name: "BL26 Guanyuanshu گوان یوان شو",
//     Enname: "Guanyuanshu",
//     faname: "گوان یوان شو",
//     meridian: "Bladder Meridian (BL)",
//     Fameridian: "مریدین مثانه",
//     description: "نقطه شو دروازه اصلی",
//     location: "۱.۵ سون خارج از خط وسط، در سطح مهره L5",
//     pressureAngle: " عمود",
//     pressureAmount: "۳-۴",
//     repetitions: "۲-۳ بار",
//     time: "بین 30 ثانیه تا 3 دقیقه",
//     extra: "نقطه مرتبط با CV4",
//     imageUrl: "assets/images/bl/bl26.jpg",
//     desc: "درمان کمردرد\nتقویت سیستم ادراری\nبهبود ناباروری\nافزایش انرژی پایه",
//     descrip: "برای تقویت سیستم تولیدمثل و ادراری مؤثر است",
//     descExtra: "در ضعف جنسی مفید است",
//     supplementary: "با BL23 و CV4 ترکیب شود",
    
//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کمکی برای سیستم ادراری-تناسلی"
//   },

//   // BL27
//   {
//     category: "BL-1",
//     id: "BL27",
//     name: "BL27 Xiaochangshu شیائو چانگ شو",
//     Enname: "Xiaochangshu",
//     faname: "شیائو چانگ شو",
//     meridian: "Bladder Meridian (BL)",
//     Fameridian: "مریدین مثانه",
//     description: "نقطه شو روده کوچک",
//     location: "۱.۵ سون خارج از خط وسط، در سطح مهره S1 (زیر BL26)",
//     pressureAngle: " مایل به داخل (۴۵ درجه)",
//     pressureAmount: "۳-۵",
//     repetitions: "۲-۳ بار",
//     time: "بین 30 ثانیه تا 3 دقیقه",
//     extra: "مرتبط با هضم و جذب مواد غذایی",
//     imageUrl: "assets/images/bl/bl27.jpg",
//     desc: "بهبود سوءهاضمه\nتنظیم عملکرد روده کوچک\nکاهش نفخ",
//     descrip: "برای مشکلات گوارشی مانند اسهال یا یبوست مفید است",
//     descExtra: "در سندرم روده تحریک‌پذیر استفاده می‌شود",
//     supplementary: "با ST25 و BL25 ترکیب شود",
    
//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه کلیدی برای روده کوچک"
//   },

//   // BL28
//   {
//     category: "BL-1",
//     id: "BL28",
//     name: "BL28 Pangguangshu پانگ گوانگ شو",
//     Enname: "Pangguangshu",
//     faname: "پانگ گوانگ شو",
//     meridian: "Bladder Meridian (BL)",
//     Fameridian: "مریدین مثانه",
//     description: "نقطه شو مثانه",
//     location: "۱.۵ سون خارج از خط وسط، در سطح مهره S2 (زیر BL27)",
//     pressureAngle: " عمود",
//     pressureAmount: "۲-۴",
//     repetitions: "۳ بار",
//     time: "بین 30 ثانیه تا 3 دقیقه",
//     extra: "مرتبط با CV3",
//     imageUrl: "assets/images/bl/bl28.jpg",
//     desc: "درمان عفونت ادراری رفع بی‌اختیاری ادرار تنظیم عملکرد مثانه",
//     descrip: "برای عفونت‌های مجاری ادراری (UTI) مؤثر است",
//     descExtra: "در تکرر ادرار استفاده می‌شود",
//     supplementary: "با BL32 و CV3 ترکیب شود",
    
//       boss:"",
//       ex:"",
//       yinyang:"",
//       des:"",
//       imageUrls:"",
//       main: "نقطه اصلی برای مثانه"
//   },


// ==============================================  BL   ===============================================

{
category: "BL",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

مسیر مریدین مثانه به شرح زیر است:

1. شروع از گوشه داخلی چشم (BL1).  
2. صعود به سمت پیشانی (GV23، BL2، BL3، BL4، GB15، BL5، BL6، BL7).  
3. تقاطع با مریدین GV در نقطه برجستگی پیشانی (GV20).  
4. شاخه‌ای از مریدین،  
5. از برجستگی پیشانی به سمت نوک فوقانی گوش (BL8، GB7، GB8، GB9، GB10، GB11، GB12).  
6. شاخه مستقیم،  
7. از برجستگی پیشانی وارد استخوان جمجمه شده و با مغز ارتباط برقرار می‌کند (GV20، BL9، GV18).  
8. دور زدن و جدا شدن از مریدین GV، سپس نزول به‌صورت جداگانه در امتداد ناحیه پس‌گردنی (BL10، GV14، GV13).  
9. حرکت در امتداد لبه داخلی استخوان کتف.  
10. نزول موازی با ستون فقرات (BL11، BL12، BL13، BL14، BL15، BL16، BL17).  
11. رسیدن به مرکز ناحیه کمری (BL18، BL19، BL20، BL21).  
12. دوباره ورود در امتداد ستون فقرات.  
13. ارتباط با کلیه.  
14. اتصال به مثانه.  
15. شاخه‌ای دیگر،  
16. از ناحیه کمری در امتداد ناحیه ستون فقرات نزول می‌کند (BL21، BL22، BL23، BL24، BL25، BL26، BL27، BL28، BL29، BL30، BL31، BL32، BL33، BL34).  
17. نفوذ به ناحیه باسن و نزول (BL35، BL36، BL37، BL38، BL39).  
18. ورود به حفره پشت زانو (BL40).  
19. شاخه‌ای دیگر،  
20. از لبه داخلی هر دو استخوان کتف،  
21. به‌صورت جداگانه به سمت پایین نفوذ به استخوان‌های کتف می‌کند.  
22. در امتداد خط میانی ستون فقرات (BL41، BL42، BL43، BL44، BL45، BL46، BL47، BL48، BL49، BL50، BL51، BL52، BL53، BL54).  
23. عبور از مفصل ران و تروکانتر بزرگ استخوان ران (GB30).  
24. در امتداد لبه خلفی خارجی ران.  
25. نزول به سمت حفره پشت زانو و یکی شدن با شاخه اصلی (BL40).  
26. سپس نزول و نفوذ به ساق پا (BL55، BL56، BL57، BL58، BL59).  
27. پدیدار شدن در پشت قوزک خارجی (BL60).  
28. در امتداد برجستگی استخوان پنجم کف پا (BL61، BL62، BL63، BL64، BL65، BL66).  
29. نزول به سمت سطح خارجی انگشت پنجم پا (BL67).  

مسیر انشعاب مریدین مثانه به شرح زیر است:

1. انشعاب مریدین مثانه،  
2. ورود جداگانه به حفره پشت زانو، ادغام با انشعاب مریدین کلیه و سپس صعود مشترک.  
3. انشعاب دیگر از فاصله پنجسونپشت انتهای استخوان دنبالچه.  
4. حرکت جداگانه به سمت مقعد.  
5. ترکیب با مثانه.  
6. پراکنده شدن در کلیه.  
7. حرکت در امتداد ستون فقرات.  
8. رسیدن به قلب و پراکندگی در آنجا.  
9. شاخه اصلی مستقیم،  
10. از ستون فقرات، صعود و ظهور از ناحیه پس‌گردنی.  
11. پیوستن دوباره به مریدین مثانه.


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
  // BL1 - Jingming (جینگ مینگ)
  {
    category: "BL",
    id: "BL1",
    name: "BL1 Jingming جینگ مینگ",
    Enname: "Jingming",
    faname: "جینگ مینگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "چشم درخشان",
    location: "در گوشه داخلی چشم، حدود ۰.۱ سان (نصف بند انگشت) از کنار بینی",
    pressureAngle: " مایل به سمت بینی",
    pressureAmount: "۱-۲ (ملایم)",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با GB1",
    imageUrl: "assets/images/bl/bl1.jpg",
    desc: `
سردردهای پیشانی
سرگیجه
احتقان بینی
`,
    descrip: "اولین نقطه مریدین مثانه برای اختلالات چشمی",
    descExtra: "در سردردهای پیشانی مؤثر است",
    supplementary: "با GB1 و TE23 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"از فشار شدید خودداری کنید زیرا منطقه حساسی است",
      imageUrls:"",
      main: "نقطه اصلی برای اختلالات چشم"
  },

  // BL2 - Zanzhu (زان جو)
  {
    category: "BL",
    id: "BL2",
    name: "BL2 Zanzhu زان جو",
    Enname: "Zanzhu",
    faname: "زان جو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "مسکن سردرد",
    location: "در انتهای داخلی ابرو، حدود ۱ سان (یک بند انگشت) بالای BL1",
    pressureAngle: " عمود یا مایل به بالا",
    pressureAmount: "۲-۳",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با سر دردهای فشاری",
    imageUrl: "assets/images/bl/bl2.jpg",
    desc: `
سردردهای پیشانی
سرگیجه
احتقان بینی
`,
    descrip: "برای سردردهای ناشی از استرس مؤثر است",
    descExtra: "در سینوزیت استفاده می‌شود",
    supplementary: "با GB14 و LI20 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای سردرد"
  },

  // BL3 - Meichong (می چونگ)
  {
    category: "BL",
    id: "BL3",
    name: "BL3 Meichong می چونگ",
    Enname: "Meichong",
    faname: "می چونگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه خروجی انرژی سر",
    location: "۱.۵ سان (دو عرض انگشت) بالای BL2، در خط موی پیشانی",
    pressureAngle: " عمود",
    pressureAmount: "۲-۳",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با انرژی سر",
    imageUrl: "assets/images/bl/bl3.jpg",
    desc: `
سردردهای شدید
میگرن
سرگیجه
`,
    descrip: "برای سردردهای میگرنی مؤثر است",
    descExtra: "در اختلالات خواب استفاده می‌شود",
    supplementary: "با GB20 و GV20 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مهم برای میگرن"
  },

  // BL4 - Qucha (چو چا)
  {
    category: "BL",
    id: "BL4",
    name: "BL4 Qucha چو چا",
    Enname: "Qucha",
    faname: "چو چا",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه تنظیم تعادل",
    location: "۱.۵ سان (دو عرض انگشت) خارج از خط وسط سر، در سطح BL3",
    pressureAngle: " مایل به مرکز",
    pressureAmount: "۲-۳",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با تعادل بدن",
    imageUrl: "assets/images/bl/bl4.jpg",
    desc: `
سرگیجه
عدم تعادل
تهوع
`,
    descrip: "برای سرگیجه و اختلالات تعادلی مؤثر است",
    descExtra: "در بیماری حرکت استفاده می‌شود",
    supplementary: "با GB8 و GV19 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای سرگیجه"
  },
// BL5 - Wuchu (وو چو)
  {
    category: "BL",
    id: "BL5",
    name: "BL5 Wuchu وو چو",
    Enname: "Wuchu",
    faname: "وو چو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "پنج اقامتگاه",
    location: "۱.۵ سان (دو عرض انگشت) خارج از خط وسط سر، ۴ سان (چهار عرض انگشت) بالای خط موی پیشانی",
    pressureAngle: " عمود",
    pressureAmount: "۲-۳",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با حواس پنجگانه",
    imageUrl: "assets/images/bl/bl5.jpg",
    desc: `
سردردهای جدی
مشکلات بینایی
سرگیجه
`,
    descrip: "برای اختلالات حسی مؤثر است",
    descExtra: "در میگرن شدید استفاده می‌شود",
    supplementary: "با GB15 و GV21 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مهم برای اختلالات حسی"
  },

  // BL6 - Chengguang (چنگ گوانگ)
  {
    category: "BL",
    id: "BL6",
    name: "BL6 Chengguang چنگ گوانگ",
    Enname: "Chengguang",
    faname: "چنگ گوانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "دریافت نور",
    location: "۱.۵ سان (دو عرض انگشت) خارج از خط وسط سر، ۵ سان (پنج عرض انگشت) بالای خط موی پیشانی",
    pressureAngle: " مایل به پایین",
    pressureAmount: "۲-۳",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با بینایی",
    imageUrl: "assets/images/bl/bl6.jpg",
    desc: `
مشکلات بینایی
خستگی چشم
سردردهای چشمی
`,
    descrip: "برای تقویت بینایی مؤثر است",
    descExtra: "در آستیگماتیسم استفاده می‌شود",
    supplementary: "با BL1 و GB14 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای بینایی"
  },

  // BL7 - Tongtian (تونگ تیان)
  {
    category: "BL",
    id: "BL7",
    name: "BL7 Tongtian تونگ تیان",
    Enname: "Tongtian",
    faname: "تونگ تیان",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "ارتباط با بهشت",
    location: "۱.۵ سان (دو عرض انگشت) خارج از خط وسط سر، ۶ سان (شش عرض انگشت) بالای خط موی پیشانی",
    pressureAngle: " عمود",
    pressureAmount: "۲-۳",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با ارتباطات روحی",
    imageUrl: "assets/images/bl/bl7.jpg",
    desc: `
سردردهای روحی
اضطراب
بی خوابی
`,
    descrip: "برای آرامش ذهن مؤثر است",
    descExtra: "در مدیتیشن استفاده می‌شود",
    supplementary: "با GV20 و Yintang ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مهم برای آرامش"
  },

  // BL8 - Luoque (لوو چو)
  {
    category: "BL",
    id: "BL8",
    name: "BL8 Luoque لوو چو",
    Enname: "Luoque",
    faname: "لوو چو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "شبکه سقوط",
    location: "۱.۵ سان (دو عرض انگشت) خارج از خط وسط سر، ۷ سان (هفت عرض انگشت) بالای خط موی پیشانی",
    pressureAngle: " مایل به پایین",
    pressureAmount: "۲-۳",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با تعادل مایعات",
    imageUrl: "assets/images/bl/bl8.jpg",
    desc: `
سرگیجه
تهوع
عدم تعادل مایعات
`,
    descrip: "برای مشکلات گوش داخلی مؤثر است",
    descExtra: "در بیماری منیر استفاده می‌شود",
    supplementary: "با GB20 و TB17 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای تعادل"
  },

  // BL9 - Yuzhen (یو ژن)
  {
    category: "BL",
    id: "BL9",
    name: "BL9 Yuzhen یو ژن",
    Enname: "Yuzhen",
    faname: "یو ژن",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "بالش یشم",
    location: "۱.۵ سان (دو عرض انگشت) خارج از خط وسط سر، در پایه جمجمه (هم سطح GB20)",
    pressureAngle: " مایل به بالا",
    pressureAmount: "۲-۳",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با آرامش عمیق",
    imageUrl: "assets/images/bl/bl9.jpg",
    desc: `
بی خوابی
کابوس
اضطراب شبانه
`,
    descrip: "برای اختلالات خواب مؤثر است",
    descExtra: "در دندان قروچه استفاده می‌شود",
    supplementary: "با GB20 و GV16 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مهم برای خواب"
  },

  // BL10 - Tianzhu (تیان ژو)
  {
    category: "BL",
    id: "BL10",
    name: "BL10 Tianzhu تیان ژو",
    Enname: "Tianzhu",
    faname: "تیان ژو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "ستون بهشتی",
    location: "۱.۵ سان (دو عرض انگشت) خارج از خط وسط، در فرورفتگی زیر استخوان پس سری",
    pressureAngle: " مایل به مرکز",
    pressureAmount: "۲-۳",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با حمایت ستون فقرات",
    imageUrl: "assets/images/bl/bl10.jpg",
    desc: `
سفتی گردن
سردردهای پس سری
سرگیجه
`,
    descrip: "برای گرفتگی گردن مؤثر است",
    descExtra: "در آرتروز گردن استفاده می‌شود",
    supplementary: "با GB20 و GV15 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای گردن"
  },


  // BL11 - Dazhu (دا ژو)
  {
    category: "BL",
    id: "BL11",
    name: "BL11 Dazhu دا ژو",
    Enname: "Dazhu",
    faname: "دا ژو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "ستون بزرگ",
    location: "1.5 سان (دو عرض انگشت) خارج از خط وسط، در سطح مهره T1",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "نقطه هوی (Hui) برای استخوان‌ها",
    imageUrl: "assets/images/bl/bl11.jpg",
    desc: `
درد شانه
سفتی گردن
مشکلات تنفسی
`,
    descrip: "برای تقویت استخوان‌ها و سیستم ایمنی مفید است",
    descExtra: "در پوکی استخوان استفاده می‌شود",
    supplementary: "با BL12 و GV14 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای استخوان‌ها"
  },

  // BL12 - Fengmen (فنگ من)
  {
    category: "BL",
    id: "BL12",
    name: "BL12 Fengmen فنگ من",
    Enname: "Fengmen",
    faname: "فنگ من",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "دروازه باد",
    location: "1.5 سان خارج از خط وسط، در سطح مهره T2",
    pressureAngle: " مایل به داخل",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "نقطه مهم برای سرماخوردگی",
    imageUrl: "assets/images/bl/bl12.jpg",
    desc: `
سرماخوردگی
آلرژی
تب
`,
    descrip: "برای پیشگیری و درمان سرماخوردگی مؤثر است",
    descExtra: "در آسم استفاده می‌شود",
    supplementary: "با BL13 و LU7 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای سیستم تنفسی"
  },

  // BL13 - Feishu (فی شو)
  {
    category: "BL",
    id: "BL13",
    name: "BL13 Feishu فی شو",
    Enname: "Feishu",
    faname: "فی شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو ریه",
    location: "1.5 سان خارج از خط وسط، در سطح مهره T3",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با LU1",
    imageUrl: "assets/images/bl/bl13.jpg",
    desc: `
سرفه
آسم
تنگی نفس
`,
    descrip: "برای اختلالات ریوی مؤثر است",
    descExtra: "در برونشیت مزمن استفاده می‌شود",
    supplementary: "با BL12 و LU1 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای ریه"
  },

  // BL14 - Jueyinshu (جوئه یین شو)
  {
    category: "BL",
    id: "BL14",
    name: "BL14 Jueyinshu جوئه یین شو",
    Enname: "Jueyinshu",
    faname: "جوئه یین شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو پریکارد",
    location: "1.5 سان خارج از خط وسط، در سطح مهره T4",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با گردش خون",
    imageUrl: "assets/images/bl/bl14.jpg",
    desc: `
درد قفسه سینه
تپش قلب
اضطراب
`,
    descrip: "برای اختلالات قلبی-عروقی مؤثر است",
    descExtra: "در آنژین صدری استفاده می‌شود",
    supplementary: "با BL15 و PC6 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مهم برای قلب"
  },

  // BL15 - Xinshu (شین شو)
  {
    category: "BL",
    id: "BL15",
    name: "BL15 Xinshu شین شو",
    Enname: "Xinshu",
    faname: "شین شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو قلب",
    location: "1.5 سان خارج از خط وسط، در سطح مهره T5",
    pressureAngle: " عمود",
    pressureAmount: "2-3",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "نقطه مهم برای سلامت روحی",
    imageUrl: "assets/images/bl/bl15.jpg",
    desc: `
استرس
بی خوابی
تپش قلب
`,
    descrip: "برای آرامش ذهن و قلب مؤثر است",
    descExtra: "در افسردگی استفاده می‌شود",
    supplementary: "با BL14 و HT7 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای قلب و ذهن"
  },

  // BL16 - Dushu (دو شو)
  {
    category: "BL",
    id: "BL16",
    name: "BL16 Dushu دو شو",
    Enname: "Dushu",
    faname: "دو شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو دیافراگم",
    location: "1.5 سان خارج از خط وسط، در سطح مهره T6",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با گوارش",
    imageUrl: "assets/images/bl/bl16.jpg",
    desc: `
سوء هاضمه
سکسکه
تهوع
`,
    descrip: "برای تنظیم دیافراگم مؤثر است",
    descExtra: "در ریفلاکس معده استفاده می‌شود",
    supplementary: "با BL17 و CV12 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای دیافراگم"
  },

  // BL17 - Geshu (گه شو)
  {
    category: "BL",
    id: "BL17",
    name: "BL17 Geshu گه شو",
    Enname: "Geshu",
    faname: "گه شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه هوی (Hui) برای خون",
    location: "1.5 سان خارج از خط وسط، در سطح مهره T7",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با SP10 و LIV3",
    imageUrl: "assets/images/bl/bl17.jpg",
    desc: `
اختلالات خونی
کم خونی
کبودی آسان
`,
    descrip: "برای تصفیه خون مؤثر است",
    descExtra: "در اختلالات انعقادی استفاده می‌شود",
    supplementary: "با BL18 و SP10 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای خون"
  },

  // BL18 - Ganshu (گان شو)
  {
    category: "BL",
    id: "BL18",
    name: "BL18 Ganshu گان شو",
    Enname: "Ganshu",
    faname: "گان شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو کبد",
    location: "1.5 سان خارج از خط وسط، در سطح مهره T9",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با LIV3 و LIV14",
    imageUrl: "assets/images/bl/bl18.jpg",
    desc: `
خستگی مزمن
مشکلات کبدی
سردردهای میگرنی
`,
    descrip: "برای سم‌زدایی کبد مؤثر است",
    descExtra: "در هپاتیت استفاده می‌شود",
    supplementary: "با BL19 و LIV3 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای کبد"
  },

  // BL19 - Danshu (دان شو)
  {
    category: "BL",
    id: "BL19",
    name: "BL19 Danshu دان شو",
    Enname: "Danshu",
    faname: "دان شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو کیسه صفرا",
    location: "1.5 سان خارج از خط وسط، در سطح مهره T10",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با GB34",
    imageUrl: "assets/images/bl/bl19.jpg",
    desc: `
سنگ کیسه صفرا
سوء هاضمه چرب
تهوع صبحگاهی
`,
    descrip: "برای تنظیم کیسه صفرا مؤثر است",
    descExtra: "در کولیک صفراوی استفاده می‌شود",
    supplementary: "با BL18 و GB34 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای کیسه صفرا"
  },

  // BL20 - Pishu (پی شو)
  {
    category: "BL",
    id: "BL20",
    name: "BL20 Pishu پی شو",
    Enname: "Pishu",
    faname: "پی شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو طحال",
    location: "1.5 سان خارج از خط وسط، در سطح مهره T11",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با SP6 و SP9",
    imageUrl: "assets/images/bl/bl20.jpg",
    desc: `
ضعف گوارش
کمبود انرژی
ادم
`,
    descrip: "برای تقویت طحال و گوارش مؤثر است",
    descExtra: "در دیابت استفاده می‌شود",
    supplementary: "با BL21 و SP6 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای طحال"
  },

  // BL21 - Weishu (وی شو)
  {
    category: "BL",
    id: "BL21",
    name: "BL21 Weishu وی شو",
    Enname: "Weishu",
    faname: "وی شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو معده",
    location: "1.5 سان خارج از خط وسط، در سطح مهره T12",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با ST36 و CV12",
    imageUrl: "assets/images/bl/bl21.jpg",
    desc: `
زخم معده
ریفلاکس
سوء هاضمه
`,
    descrip: "برای تنظیم اسید معده مؤثر است",
    descExtra: "در گاستریت استفاده می‌شود",
    supplementary: "با BL20 و ST36 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای معده"
  },

  // BL22 - Sanjiaoshu (سان جیائو شو)
  {
    category: "BL",
    id: "BL22",
    name: "BL22 Sanjiaoshu سان جیائو شو",
    Enname: "Sanjiaoshu",
    faname: "سان جیائو شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو سه گرم کننده",
    location: "1.5 سان خارج از خط وسط، در سطح مهره L1",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با TB5 و CV6",
    imageUrl: "assets/images/bl/bl22.jpg",
    desc: `
ادم
اختلالات ادراری
عدم تعادل مایعات
`,
    descrip: "برای تنظیم مایعات بدن مؤثر است",
    descExtra: "در نفریت استفاده می‌شود",
    supplementary: "با BL23 و TB6 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای سه گرم کننده"
  },

  // BL23 - Shenshu (شن شو)
  {
    category: "BL",
    id: "BL23",
    name: "BL23 Shenshu شن شو",
    Enname: "Shenshu",
    faname: "شن شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو کلیه",
    location: "1.5 سان خارج از خط وسط، در سطح مهره L2",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با KI3 و GV4",
    imageUrl: "assets/images/bl/bl23.jpg",
    desc: `
کمردرد
خستگی کلیوی
ناتوانی جنسی
`,
    descrip: "برای تقویت انرژی کلیه مؤثر است",
    descExtra: "در ناباروری استفاده می‌شود",
    supplementary: "با BL22 و KI3 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای کلیه"
  },

  // BL24 - Qihaishu (چی های شو)
  {
    category: "BL",
    id: "BL24",
    name: "BL24 Qihaishu چی های شو",
    Enname: "Qihaishu",
    faname: "چی های شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو دریای چی",
    location: "1.5 سان خارج از خط وسط، در سطح مهره L3",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با CV6 و ST29",
    imageUrl: "assets/images/bl/bl24.jpg",
    desc: `
کمبود انرژی
ناتوانی جنسی
بی‌اختیاری ادرار
`,
    descrip: "برای تقویت انرژی پایه مؤثر است",
    descExtra: "در خستگی مزمن استفاده می‌شود",
    supplementary: "با BL23 و CV4 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای انرژی حیاتی"
  },

  // BL25 - Dachangshu (دا چانگ شو)
  {
    category: "BL",
    id: "BL25",
    name: "BL25 Dachangshu دا چانگ شو",
    Enname: "Dachangshu",
    faname: "دا چانگ شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو روده بزرگ",
    location: "1.5 سان خارج از خط وسط، در سطح مهره L4",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با LI4 و ST25",
    imageUrl: "assets/images/bl/bl25.jpg",
    desc: `
یبوست
اسهال
درد شکم
`,
    descrip: "برای تنظیم عملکرد روده مؤثر است",
    descExtra: "در سندرم روده تحریک‌پذیر استفاده می‌شود",
    supplementary: "با BL24 و ST36 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای روده بزرگ"
  },

  // BL26 - Guanyuanshu (گوان یوان شو)
  {
    category: "BL",
    id: "BL26",
    name: "BL26 Guanyuanshu گوان یوان شو",
    Enname: "Guanyuanshu",
    faname: "گوان یوان شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو دروازه اصلی",
    location: "1.5 سان خارج از خط وسط، در سطح مهره L5",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "نقطه مرتبط با CV4",
    imageUrl: "assets/images/bl/bl26.jpg",
    desc: `
کمردرد
تقویت سیستم ادراری
بهبود ناباروری
افزایش انرژی پایه
`,
    descrip: "برای تقویت سیستم تولیدمثل و ادراری مؤثر است",
    descExtra: "در ضعف جنسی مفید است",
    supplementary: "با BL23 و CV4 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای سیستم ادراری-تناسلی"
  },

  // BL27 - Xiaochangshu (شیائو چانگ شو)
  {
    category: "BL",
    id: "BL27",
    name: "BL27 Xiaochangshu شیائو چانگ شو",
    Enname: "Xiaochangshu",
    faname: "شیائو چانگ شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو روده کوچک",
    location: "1.5 سان خارج از خط وسط، در سطح مهره S1",
    pressureAngle: " مایل به داخل",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با SI3 و CV6",
    imageUrl: "assets/images/bl/bl27.jpg",
    desc: `
سوء هاضمه
نفخ
درد شکم
`,
    descrip: "برای بهبود جذب مواد غذایی مؤثر است",
    descExtra: "در عدم تحمل لاکتوز استفاده می‌شود",
    supplementary: "با BL25 و ST36 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای روده کوچک"
  },

  // BL28 - Pangguangshu (پانگ گوانگ شو)
  {
    category: "BL",
    id: "BL28",
    name: "BL28 Pangguangshu پانگ گوانگ شو",
    Enname: "Pangguangshu",
    faname: "پانگ گوانگ شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شو مثانه",
    location: "1.5 سان خارج از خط وسط، در سطح مهره S2",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با BL67 و CV3",
    imageUrl: "assets/images/bl/bl28.jpg",
    desc: `
عفونت ادراری
بی‌اختیاری ادرار
تکرر ادرار
`,
    descrip: "برای تقویت عملکرد مثانه مؤثر است",
    descExtra: "در سنگ کلیه استفاده می‌شود",
    supplementary: "با BL32 و CV3 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای مثانه"
  },

  // BL29 - Zhonglushu (ژونگ لو شو)
  {
    category: "BL",
    id: "BL29",
    name: "BL29 Zhonglushu ژونگ لو شو",
    Enname: "Zhonglushu",
    faname: "ژونگ لو شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "ستون میانی",
    location: "1.5 سان خارج از خط وسط، در سطح مهره S3",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با GV4 و BL23",
    imageUrl: "assets/images/bl/bl29.jpg",
    desc: `
کمردرد
ضعف ستون فقرات
خستگی عمومی
`,
    descrip: "برای حمایت از ستون فقرات مؤثر است",
    descExtra: "در فتق دیسک استفاده می‌شود",
    supplementary: "با BL23 و GV4 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه حمایتی برای ستون فقرات"
  },

  // BL30 - Baihuanshu (بای هوان شو)
  {
    category: "BL",
    id: "BL30",
    name: "BL30 Baihuanshu بای هوان شو",
    Enname: "Baihuanshu",
    faname: "بای هوان شو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "حلقه سفید",
    location: "1.5 سان خارج از خط وسط، در سطح مهره S4",
    pressureAngle: " مایل به پایین",
    pressureAmount: "2-3",
    repetitions: "3-4 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با اعصاب لگن",
    imageUrl: "assets/images/bl/bl30.jpg",
    desc: `
دردهای لگنی
تنظیم عملکرد اعصاب ساکرال
رفع گرفتگی عضلات پرینه
`,
    descrip: "برای نوروپاتی لگن مؤثر است",
    descExtra: "در سیاتیک با منشأ لگنی استفاده می‌شود",
    supplementary: "با BL32 و GB30 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای اعصاب لگن"
  },

  // BL31 - Shangliao (شانگ لیائو)
  {
    category: "BL",
    id: "BL31",
    name: "BL31 Shangliao شانگ لیائو",
    Enname: "Shangliao",
    faname: "شانگ لیائو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "حفره فوقانی ساکروم",
    location: "در اولین سوراخ ساکرال (بالاترین نقطه ساکروم)",
    pressureAngle: " عمود به سمت داخل",
    pressureAmount: "2-3",
    repetitions: "2 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با CV2",
    imageUrl: "assets/images/bl/bl31.jpg",
    desc: `
دردهای ساکرال
تنظیم قاعدگی
بهبود عملکرد جنسی
`,
    descrip: "برای دیسمنوره (قاعدگی دردناک) مؤثر است",
    descExtra: "در ناباروری زنان استفاده می‌شود",
    supplementary: "با BL32 و CV6 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای حفره ساکرال"
  },

  // BL32 - Ciliao (سی لیائو)
  {
    category: "BL",
    id: "BL32",
    name: "BL32 Ciliao سی لیائو",
    Enname: "Ciliao",
    faname: "سی لیائو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "حفره دوم ساکروم",
    location: "در دومین سوراخ ساکرال (زیر BL31)",
    pressureAngle: " عمود به سمت مرکز",
    pressureAmount: "3-4",
    repetitions: "3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با اعصاب سیاتیک",
    imageUrl: "assets/images/bl/bl32.jpg",
    desc: `
سیاتیک
دردهای لگن
رفع یبوست
`,
    descrip: "برای دردهای تیرکشنده پا مؤثر است",
    descExtra: "در اختلالات تخلیه روده استفاده می‌شود",
    supplementary: "با BL33 و GB30 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای سیاتیک"
  },

  // BL33 - Zhongliao (ژونگ لیائو)
  {
    category: "BL",
    id: "BL33",
    name: "BL33 Zhongliao ژونگ لیائو",
    Enname: "Zhongliao",
    faname: "ژونگ لیائو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "حفره میانی ساکروم",
    location: "در سومین سوراخ ساکرال (زیر BL32)",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با اعصاب لگن",
    imageUrl: "assets/images/bl/bl33.jpg",
    desc: `
دردهای لگنی
مشکلات ادراری
ناتوانی جنسی
`,
    descrip: "برای اختلالات عملکرد لگن مؤثر است",
    descExtra: "در پروستاتیت استفاده می‌شود",
    supplementary: "با BL34 و CV4 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه حمایتی برای اعصاب لگن"
  },

  // BL34 - Xialiao (شیائو لیائو)
  {
    category: "BL",
    id: "BL34",
    name: "BL34 Xialiao شیائو لیائو",
    Enname: "Xialiao",
    faname: "شیائو لیائو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "حفره تحتانی ساکروم",
    location: "در چهارمین سوراخ ساکرال (زیر BL33)",
    pressureAngle: " مایل به بالا",
    pressureAmount: "2-3",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با عضلات پرینه",
    imageUrl: "assets/images/bl/bl34.jpg",
    desc: `
دردهای پرینه
بی‌اختیاری ادرار
یبوست
`,
    descrip: "برای تقویت عضلات کف لگن مؤثر است",
    descExtra: "در شقاق مقعد استفاده می‌شود",
    supplementary: "با BL35 و CV1 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه حمایتی برای کف لگن"
  },

  // BL35 - Huiyang (هویی یانگ)
  {
    category: "BL",
    id: "BL35",
    name: "BL35 Huiyang هویی یانگ",
    Enname: "Huiyang",
    faname: "هویی یانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "بازگشت یانگ",
    location: "۰.۵ سان خارج از خط وسط، در پایین استخوان خاجی",
    pressureAngle: " مایل به داخل",
    pressureAmount: "2-3",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با GV1",
    imageUrl: "assets/images/bl/bl35.jpg",
    desc: `
ناتوانی جنسی
بی‌اختیاری ادرار
هموروئید
`,
    descrip: "برای بازگرداندن انرژی یانگ مؤثر است",
    descExtra: "در افتادگی رحم استفاده می‌شود",
    supplementary: "با BL34 و GV1 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای بازگرداندن یانگ"
  },

  // BL36 - Chengfu (چنگ فو)
  {
    category: "BL",
    id: "BL36",
    name: "BL36 Chengfu چنگ فو",
    Enname: "Chengfu",
    faname: "چنگ فو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "دریافت حمایت",
    location: "در وسط چین باسن، زیر عضله گلوتئال ماکسیموس",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با GB30",
    imageUrl: "assets/images/bl/bl36.jpg",
    desc: `
درد باسن
سیاتیک
ضعف عضلات ران
`,
    descrip: "برای دردهای منتشر به پا مؤثر است",
    descExtra: "در آرتروز لگن استفاده می‌شود",
    supplementary: "با BL37 و GB30 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/bl36.png",
      main: "نقطه اصلی برای درد باسن"
  },

  // BL37 - Yinmen (یین من)
  {
    category: "BL",
    id: "BL37",
    name: "BL37 Yinmen یین من",
    Enname: "Yinmen",
    faname: "یین من",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "دروازه یین",
    location: "۶ سان پایین‌تر از BL36، در وسط پشت ران",
    pressureAngle: " عمود",
    pressureAmount: "3-4",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با BL40",
    imageUrl: "assets/images/bl/bl37.jpg",
    desc: `
درد ران
گرفتگی عضلات همسترینگ
سیاتیک
`,
    descrip: "برای گرفتگی عضلات پشت ران مؤثر است",
    descExtra: "در کشیدگی عضلانی استفاده می‌شود",
    supplementary: "با BL40 و GB34 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای عضلات ران"
  },

  // BL38 - Fuxi (فو شی)
  {
    category: "BL",
    id: "BL38",
    name: "BL38 Fuxi فو شی",
    Enname: "Fuxi",
    faname: "فو شی",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "دره شناور",
    location: "۱ سان بالاتر از BL39، در قسمت داخلی پشت زانو",
    pressureAngle: " مایل به بالا",
    pressureAmount: "2-3",
    repetitions: "2-3 بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با BL40",
    imageUrl: "assets/images/bl/bl38.jpg",
    desc: `
درد زانو
تورم زانو
گرفتگی پشت ساق
`,
    descrip: "برای آرتروز زانو مؤثر است",
    descExtra: "در واریس استفاده می‌شود",
    supplementary: "با BL40 و SP9 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه حمایتی برای زانو"
  },
 // BL39 - Weiyang (وی یانگ)
  {
    category: "BL",
    id: "BL39",
    name: "BL39 Weiyang وی یانگ",
    Enname: "Weiyang",
    faname: "وی یانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "تنظیم مایعات بدن",
    location: "پشت زانو، انتهای خارجی چین زانو (همسطح BL40)",
    pressureAngle: "عمود به سمت مرکز زانو",
    pressureAmount: "۲-۳ (متوسط)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با سه گرم‌ساز",
    imageUrl: "assets/images/bl/bl39.jpg",
    desc: `
ادم بدن
مشکلات ادراری
درد زانو
    `,
    descrip: "تنظیم آب و الکترولیت‌ها",
    descExtra: "درمان تورم و احتباس مایعات",
    supplementary: "با BL40 و SP9 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "دفع سموم و تنظیم مایعات"
  },
{
    category: "BL",
    id: "BL40",
    name: "BL40 Weizhong وی ژونگ",
    Enname: "Weizhong",
    faname: "وی ژونگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه کلیدی برای درد کمر و پا",
    location: "در مرکز چین پشت زانو",
    pressureAngle: " عمود با انگشت یا ابزار",
    pressureAmount: "۳-۴ (قوی)",
    repetitions: "۳-۵ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "معروف به 'نقطه فریاد' برای دردهای حاد",
    imageUrl: "assets/images/bl/bl40.jpg",
    desc: `
درد شدید کمر
سیاتیک
کرامپ عضلات پا
گرگرفتگی
`,
    descrip: "یکی از معروف‌ترین نقاط برای تسکین فوری درد",
    descExtra: "در طب چینی برای کاهش التهاب و حرارت بدن استفاده می‌شود",
    supplementary: "با BL60 (Kunlun) و GB34 (Yanglingquan) ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/bl40.png",
      main: "نقطه اصلی برای دردهای حاد و التهاب"
  },

  // BL41 - Fufen (فو فن)
  {
    category: "BL",
    id: "BL41",
    name: "BL41 Fufen فو فن",
    Enname: "Fufen",
    faname: "فو فن",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه برای درد پشت و شانه",
    location: "۳ سان (۴ انگشت) از خط وسط ستون فقرات، در سطح مهره T2",
    pressureAngle: " عمود یا مایل به سمت ستون فقرات",
    pressureAmount: "۲-۳ (متوسط)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با تنفس و عضلات پشت",
    imageUrl: "assets/images/bl/bl41.jpg",
    desc: `
درد شانه و پشت
سرفه
تنگی نفس
`,
    descrip: "کمک به آرامش عضلات بالای پشت",
    descExtra: "در اختلالات تنفسی مؤثر است",
    supplementary: "با BL13 (Feishu) و GB21 (Jianjing) ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کمکی برای دردهای ناحیه شانه"
  },

  // BL42 - Pohu (پو هو)
  {
    category: "BL",
    id: "BL42",
    name: "BL42 Pohu پو هو",
    Enname: "Pohu",
    faname: "پو هو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه مرتبط با روحیه و ریه",
    location: "۳ سان از خط وسط ستون فقرات، در سطح مهره T3",
    pressureAngle: " عمود یا مایل به سمت داخل",
    pressureAmount: "۲ (ملایم تا متوسط)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای افسردگی و غم",
    imageUrl: "assets/images/bl/bl42.jpg",
    desc: `
غم و اندوه
تنفس سطحی
خستگی روحی
`,
    descrip: "نقطه مؤثر بر روحیه و تنفس",
    descExtra: "در طب چینی برای تنظیم احساسات استفاده می‌شود",
    supplementary: "با BL13 (Feishu) و HT7 (Shenmen) ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "تعادل روحی و تنفسی"
  },
// BL43 - Gaohuang (گائو هوانگ)
  {
    category: "BL",
    id: "BL43",
    name: "BL43 Gaohuang گائو هوانگ",
    Enname: "Gaohuang",
    faname: "گائو هوانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه حیاتی برای بیماری‌های مزمن",
    location: "۳ سان از خط وسط ستون فقرات، سطح مهره T4",
    pressureAngle: "عمود یا مایل به داخل",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۵ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای ضعف عمومی بدن",
    imageUrl: "assets/images/bl/bl43.jpg",
    desc: `
بیماری‌های مزمن ریوی
آسم
خستگی مفرط
ضعف سیستم ایمنی
`,
    descrip: "تقویت انرژی حیاتی",
    descExtra: "درمان بیماری‌های عمیق و مزمن",
    supplementary: "با BL23 و ST36 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "احیای انرژی و درمان ضعف"
  },

  // BL44 - Shentang (شن تانگ)
  {
    category: "BL",
    id: "BL44",
    name: "BL44 Shentang شن تانگ",
    Enname: "Shentang",
    faname: "شن تانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه برای آرامش قلب و ذهن",
    location: "۳ سان از خط وسط ستون فقرات، سطح مهره T5",
    pressureAngle: "عمود یا مایل به داخل",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با احساسات",
    imageUrl: "assets/images/bl/bl44.jpg",
    desc: `
اضطراب
بی‌قراری
تپش قلب
بی‌خوابی
`,
    descrip: "آرامش قلب و ذهن",
    descExtra: "تعادل انرژی روانی",
    supplementary: "با HT7 و GV20 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "آرامش بخش روانی"
  },
// BL45 - Yixi (ای شی)
  {
    category: "BL",
    id: "BL45",
    name: "BL45 Yixi ای شی",
    Enname: "Yixi",
    faname: "ای شی",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه برای تسکین سرفه و تنگی نفس",
    location: "۳ سان از خط وسط ستون فقرات، سطح مهره T6",
    pressureAngle: "عمود یا مایل به داخل",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با عملکرد ریه",
    imageUrl: "assets/images/bl/bl45.jpg",
    desc: `
سرفه مزمن
تنگی نفس
درد پشت
خستگی
`,
    descrip: "حمایت از عملکرد ریوی",
    descExtra: "در آسم و برونشیت مؤثر است",
    supplementary: "با BL13 و LU7 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه ریوی و تنفسی"
  },

  // BL46 - Geguan (گه گوان)
  {
    category: "BL",
    id: "BL46",
    name: "BL46 Geguan گه گوان",
    Enname: "Geguan",
    faname: "گه گوان",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه برای اختلالات دیافراگم",
    location: "۳ سان از خط وسط ستون فقرات، سطح مهره T7",
    pressureAngle: "عمود یا مایل به داخل",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با سکسکه و تهوع",
    imageUrl: "assets/images/bl/bl46.jpg",
    desc: `
سکسکه مداوم
تهوع
احساس فشار در قفسه سینه
`,
    descrip: "تنظیم دیافراگم و معده",
    descExtra: "در مشکلات گوارشی فوقانی مؤثر است",
    supplementary: "با BL21 و PC6 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه دیافراگمی"
  },

  // BL47 - Hunmen (هون من)
  {
    category: "BL",
    id: "BL47",
    name: "BL47 Hunmen هون من",
    Enname: "Hunmen",
    faname: "هون من",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه مرتبط با روح و کبد",
    location: "۳ سان از خط وسط ستون فقرات، سطح مهره T9",
    pressureAngle: "عمود یا مایل به داخل",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای اختلالات عاطفی",
    imageUrl: "assets/images/bl/bl47.jpg",
    desc: `
تحریک‌پذیری
کابوس‌های شبانه
احساس سرگردانی
درد هیپوکندری
`,
    descrip: "تعادل روح هون (Hun) در طب چینی",
    descExtra: "در اختلالات خواب و احساسات مؤثر است",
    supplementary: "با BL18 و LV3 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه روحی-کبدی"
  },

  // BL48 - Yanggang (یانگ گانگ)
  {
    category: "BL",
    id: "BL48",
    name: "BL48 Yanggang یانگ گانگ",
    Enname: "Yanggang",
    faname: "یانگ گانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه مرتبط با کیسه صفرا",
    location: "۳ سان از خط وسط ستون فقرات، سطح مهره T10",
    pressureAngle: "عمود یا مایل به داخل",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای مشکلات هضم چربی",
    imageUrl: "assets/images/bl/bl48.jpg",
    desc: `
سوء هاضمه
تهوع پس از مصرف چربی
درد هیپوکندری راست
`,
    descrip: "تنظیم عملکرد کیسه صفرا",
    descExtra: "در طب چینی برای هضم چربی‌ها مهم است",
    supplementary: "با BL19 و GB34 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کیسه صفرا"
  },
  {
  category: "BL",
  id: "BL49",
  name: "BL49 Yishe یی شِه",
  Enname: "Yishe",
  faname: "یی شِه",
  meridian: "Bladder Meridian (BL)",
  Fameridian: "مریدین مثانه",
  description: "اقامتگاه روح",
  location: "۳ سون خارج از مهره‌های T11 (بین مهره‌های T11 و T12)",
  pressureAngle: "عمود یا مایل به سمت داخل",
  pressureAmount: "۲-۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات گوارشی و اضطراب",
  imageUrl: "assets/images/bl/bl49.jpg",
  desc: `
اختلالات گوارش  
استرس و اضطراب  
خستگی مزمن  
`,
  descrip: "تقویت روح و روان",
  descExtra: "در طب چینی برای تنظیم عملکرد طحال و معده استفاده می‌شود",
  supplementary: "با ST36 و BL20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه تعادل روحی-گوارشی"
},
  // BL50 - Huangmen (هوانگ من)
  {
    category: "BL",
    id: "BL50",
    name: "BL50 Huangmen هوانگ من",
    Enname: "Huangmen",
    faname: "هوانگ من",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه دروازه حیاتی",
    location: "۳ سان از خط وسط ستون فقرات، سطح مهره L1",
    pressureAngle: "عمود یا مایل به داخل",
    pressureAmount: "۲-۳ (متوسط)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای اختلالات سیستم ایمنی",
    imageUrl: "assets/images/bl/bl50.jpg",
    desc: `
عفونت‌های مکرر
آلرژی
خستگی مزمن
`,
    descrip: "تقویت سیستم دفاعی بدن",
    descExtra: "در طب چینی به عنوان دروازه انرژی حیاتی شناخته می‌شود",
    supplementary: "با BL23 و GV4 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه ایمنی بدن"
  },

  // BL51 - Weicang (وی تسانگ)
  {
    category: "BL",
    id: "BL51",
    name: "BL51 Weicang وی تسانگ",
    Enname: "Weicang",
    faname: "وی تسانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه ذخیره معده",
    location: "۳ سان از خط وسط ستون فقرات، سطح مهره L1 (همسطح BL50)",
    pressureAngle: "عمود یا مایل به داخل",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای گرسنگی شدید یا بی‌اشتهایی",
    imageUrl: "assets/images/bl/bl51.jpg",
    desc: `
اختلالات اشتها
پرخوری عصبی
بی‌اشتهایی
`,
    descrip: "تنظیم اشتها و هضم",
    descExtra: "در اختلالات خوردن مؤثر است",
    supplementary: "با BL21 و ST36 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه تنظیم معده"
  },
  // BL52 - Zhishi (ژی شی)
  {
    category: "BL",
    id: "BL52",
    name: "BL52 Zhishi ژی شی",
    Enname: "Zhishi",
    faname: "ژی شی",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه حیاتی برای کلیه و اراده",
    location: "۳ سان از خط وسط ستون فقرات، سطح مهره L2",
    pressureAngle: "عمود یا مایل به داخل",
    pressureAmount: "۲-۳ (متوسط)",
    repetitions: "۳-۵ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "تقویت اراده و تصمیم‌گیری",
    imageUrl: "assets/images/bl/bl52.jpg",
    desc: `
ضعف کمر
ترس و عدم اعتماد به نفس
ناتوانی جنسی
تکرر ادرار
`,
    descrip: "تقویت انرژی کلیه و اراده",
    descExtra: "در طب چینی برای افزایش استقامت روانی استفاده می‌شود",
    supplementary: "با BL23 و KI3 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیوی-روانی"
  },

  // BL53 - Baohuang (بائو هوانگ)
  {
    category: "BL",
    id: "BL53",
    name: "BL53 Baohuang بائو هوانگ",
    Enname: "Baohuang",
    faname: "بائو هوانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه مرتبط با مثانه و رحم",
    location: "۳ سان از خط وسط ستون فقرات، سطح مهره L3",
    pressureAngle: "عمود یا مایل به داخل",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای مشکلات ادراری و تناسلی",
    imageUrl: "assets/images/bl/bl53.jpg",
    desc: `
تکرر ادرار
عفونت ادراری
ناباروری
قاعدگی دردناک
`,
    descrip: "حفظ سلامت مثانه و رحم",
    descExtra: "در طب چینی برای سیستم ادراری-تناسلی حیاتی است",
    supplementary: "با BL28 و CV4 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه ادراری-تناسلی"
  },

  // BL54 - Zhibian (ژی بیان)
  {
    category: "BL",
    id: "BL54",
    name: "BL54 Zhibian ژی بیان",
    Enname: "Zhibian",
    faname: "ژی بیان",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه برای درد باسن و ران",
    location: "در خط باسن، ۳ سان پایین‌تر از BL53",
    pressureAngle: "عمود یا مایل به سمت استخوان",
    pressureAmount: "۳ (قوی)",
    repetitions: "۳-۵ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای سیاتیک و هموروئید",
    imageUrl: "assets/images/bl/bl54.jpg",
    desc: `
درد باسن
سیاتیک
هموروئید
بی‌اختیاری ادرار
`,
    descrip: "تسکین دردهای ناحیه لگن",
    descExtra: "در مشکلات پروستات مؤثر است",
    supplementary: "با BL32 و GB30 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه لگنی"
  },

  // BL55 - Heyang (هه یانگ)
  {
    category: "BL",
    id: "BL55",
    name: "BL55 Heyang هه یانگ",
    Enname: "Heyang",
    faname: "هه یانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه اتصال یانگ",
    location: "۲ سان پایین‌تر از BL40، در مرکز ساق پا",
    pressureAngle: "عمود با فشار قوی",
    pressureAmount: "۳ (قوی)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای واریس و گرفتگی پا",
    imageUrl: "assets/images/bl/bl55.jpg",
    desc: `
واریس
گرفتگی عضلات پا
درد ساق پا
خستگی پاها
`,
    descrip: "بهبود گردش خون در پاها",
    descExtra: "در نارسایی وریدی مؤثر است",
    supplementary: "با BL57 و SP6 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه گردش خون پا"
  },

  // BL56 - Chengjin (چنگ جین)
  {
    category: "BL",
    id: "BL56",
    name: "BL56 Chengjin چنگ جین",
    Enname: "Chengjin",
    faname: "چنگ جین",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه برای اسپاسم عضلانی",
    location: "در وسط عضله گاستروکنمیوس، ۵ سان پایین‌تر از BL40",
    pressureAngle: "عمود با فشار متوسط",
    pressureAmount: "۳ (متوسط به قوی)",
    repetitions: "۳-۵ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای کرامپ شبانه پا",
    imageUrl: "assets/images/bl/bl56.jpg",
    desc: `
کرامپ عضلانی
اسپاسم ساق پا
درد پاشنه
`,
    descrip: "آرامش عضلات پا",
    descExtra: "در گرفتگی‌های مکرر مؤثر است",
    supplementary: "با BL57 و KI1 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اسپاسم پا"
  },
  // BL57 - Chengshan (چنگ شان)
  {
    category: "BL",
    id: "BL57",
    name: "BL57 Chengshan چنگ شان",
    Enname: "Chengshan",
    faname: "چنگ شان",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه کلیدی برای درد ساق پا",
    location: "در وسط ساق پا، بین دو سر عضله گاستروکنمیوس",
    pressureAngle: "عمود یا مایل به سمت استخوان",
    pressureAmount: "۳ (قوی)",
    repetitions: "۳-۵ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای هموروئید و اسپاسم پا",
    imageUrl: "assets/images/bl/bl57.jpg",
    desc: `
درد ساق پا
کرامپ عضلانی
هموروئید
سیاتیک
`,
    descrip: "تسکین دردهای اندام تحتانی",
    descExtra: "در طب چینی برای هموروئید داخلی استفاده می‌شود",
    supplementary: "با BL40 و BL60 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/bl57.png",
      main: "نقطه اصلی ساق پا"
  },

  // BL58 - Feiyang (فی یانگ)
  {
    category: "BL",
    id: "BL58",
    name: "BL58 Feiyang فی یانگ",
    Enname: "Feiyang",
    faname: "فی یانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه اتصال مریدین مثانه",
    location: "۷ سان بالاتر از BL60، در لبه خارجی ساق پا",
    pressureAngle: "مایل به سمت استخوان",
    pressureAmount: "۲-۳ (متوسط)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای سردرد و سرگیجه",
    imageUrl: "assets/images/bl/bl58.jpg",
    desc: `
سردرد
سرگیجه
درد کمر
تاری دید
`,
    descrip: "تنظیم انرژی مریدین مثانه",
    descExtra: "در اختلالات سر و چشم مؤثر است",
    supplementary: "با GB20 و BL2 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اتصالی مریدین"
  },

  // BL59 - Fuyang (فو یانگ)
  {
    category: "BL",
    id: "BL59",
    name: "BL59 Fuyang فو یانگ",
    Enname: "Fuyang",
    faname: "فو یانگ",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه شی برای درد مچ پا",
    location: "۳ سان بالاتر از BL60، در لبه خارجی ساق پا",
    pressureAngle: "عمود یا مایل",
    pressureAmount: "۲ (ملایم تا متوسط)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با یانگ کیائو (Yang Qiao)",
    imageUrl: "assets/images/bl/bl59.jpg",
    desc: `
درد مچ پا
ضعف پاها
سردرد یک طرفه
`,
    descrip: "تنظیم انرژی یانگ کیائو",
    descExtra: "در عدم تعادل حرکتی مؤثر است",
    supplementary: "با BL62 و GB34 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه شی برای مچ پا"
  },
  // BL60 - Kunlun (کونلون)
  {
    category: "BL",
    id: "BL60",
    name: "BL60 Kunlun کونلون",
    Enname: "Kunlun",
    faname: "کونلون",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه کلیدی برای درد کمر و پا",
    location: "بین قوزک خارجی و تاندون آشیل",
    pressureAngle: "عمود یا مایل به استخوان",
    pressureAmount: "۳ (متوسط به قوی)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "مرتبط با زایمان",
    imageUrl: "assets/images/bl/bl60.jpg",
    desc: `
درد کمر
سردرد
تورم مچ پا
درد سیاتیک
`,
    descrip: "تسکین دردهای عضلانی و عصبی",
    descExtra: "تسهیل زایمان در طب چینی",
    supplementary: "با BL40 و KI3 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "دردهای ستون فقرات و پا"
  },

  // BL61 - Pushen (پو شن)
  {
    category: "BL",
    id: "BL61",
    name: "BL61 Pushen پو شن",
    Enname: "Pushen",
    faname: "پو شن",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه حمایت از روح",
    location: "۱.۵ سان پایین‌تر و خارج‌تر از BL60",
    pressureAngle: "مایل به سمت پاشنه",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای اضطراب و ترس",
    imageUrl: "assets/images/bl/bl61.jpg",
    desc: `
اضطراب
ترس‌های بی‌دلیل
بی‌خوابی
کابوس
`,
    descrip: "حمایت از ثبات روانی",
    descExtra: "در طب چینی برای آرامش روح شن استفاده می‌شود",
    supplementary: "با HT7 و GV20 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آرامش روان"
  },

  // BL62 - Shenmai (شن مای)
  {
    category: "BL",
    id: "BL62",
    name: "BL62 Shenmai شن مای",
    Enname: "Shenmai",
    faname: "شن مای",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه اتصال یین کیائو",
    location: "در فرورفتگی زیر قوزک خارجی",
    pressureAngle: "مایل به سمت پاشنه",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۵ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای اختلالات خواب",
    imageUrl: "assets/images/bl/bl62.jpg",
    desc: `
بی‌خوابی
کابوس شبانه
اضطراب
سردرد
`,
    descrip: "تنظیم خواب و بیداری",
    descExtra: "در طب چینی برای تعادل یین و یانگ استفاده می‌شود",
    supplementary: "با HT7 و GV20 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/bl62.png",
      main: "نقطه خواب"
  },

  // BL63 - Jinmen (جین من)
  {
    category: "BL",
    id: "BL63",
    name: "BL63 Jinmen جین من",
    Enname: "Jinmen",
    faname: "جین من",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه دروازه طلا",
    location: "در فرورفتگی جلو و زیر قوزک خارجی",
    pressureAngle: "مایل به سمت انگشتان",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای سنگ‌های ادراری",
    imageUrl: "assets/images/bl/bl63.jpg",
    desc: `
سنگ کلیه
سوزش ادرار
تکرر ادرار
`,
    descrip: "حل‌کننده سنگ‌های ادراری",
    descExtra: "در طب چینی برای دفع سنگ استفاده می‌شود",
    supplementary: "با KI3 و SP6 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه سنگ‌شکن"
  },

  // BL64 - Jinggu (جینگ گو)
  {
    category: "BL",
    id: "BL64",
    name: "BL64 Jinggu جینگ گو",
    Enname: "Jinggu",
    faname: "جینگ گو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه استخوان کلیدی",
    location: "در فرورفتگی زیر برجستگی استخوان ناوی (پایین قوزک خارجی)",
    pressureAngle: "عمود با فشار ملایم",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای دردهای استخوانی",
    imageUrl: "assets/images/bl/bl64.jpg",
    desc: `
درد استخوان‌ها
پوکی استخوان
درد مچ پا
`,
    descrip: "تقویت استخوان‌ها",
    descExtra: "در طب چینی برای تغذیه استخوان استفاده می‌شود",
    supplementary: "با BL11 و GB39 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه استخوانی"
  },

  // BL65 - Shugu (شو گو)
  {
    category: "BL",
    id: "BL65",
    name: "BL65 Shugu شو گو",
    Enname: "Shugu",
    faname: "شو گو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه جریان خون",
    location: "در فرورفتگی پشت استخوان پنجم متاتارس (پشت مفصل انگشت کوچک پا)",
    pressureAngle: "مایل به سمت انگشت",
    pressureAmount: "۲ (ملایم)",
    repetitions: "۳-۴ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای سردردهای یک طرفه",
    imageUrl: "assets/images/bl/bl65.jpg",
    desc: `
سردرد یک طرفه
میگرن
درد چشم
`,
    descrip: "تنظیم جریان خون سر",
    descExtra: "در سردردهای ضربان‌دار مؤثر است",
    supplementary: "با GB20 و GB41 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه سردرد"
  },

  // BL66 - Zutonggu (زو تونگ گو)
  {
    category: "BL",
    id: "BL66",
    name: "BL66 Zutonggu زو تونگ گو",
    Enname: "Zutonggu",
    faname: "زو تونگ گو",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "نقطه عبور از دره",
    location: "در فرورفتگی جلوی مفصل انگشت کوچک پا",
    pressureAngle: "مایل به سمت کف پا",
    pressureAmount: "۱-۲ (ملایم)",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای اضطراب و بی‌قراری",
    imageUrl: "assets/images/bl/bl66.jpg",
    desc: `
بی‌قراری
اضطراب
تپش قلب
`,
    descrip: "آرامش روانی",
    descExtra: "در طب چینی برای اضطراب ناگهانی استفاده می‌شود",
    supplementary: "با HT7 و PC6 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آرامش فوری"
  },

  // BL67 - Zhiyin (ژی یین)
  {
    category: "BL",
    id: "BL67",
    name: "BL67 Zhiyin ژی یین",
    Enname: "Zhiyin",
    faname: "ژی یین",
    meridian: "Bladder Meridian (BL)",
    Fameridian: "مریدین مثانه",
    description: "آخرین نقطه مریدین مثانه",
    location: "۰.۱ سان از گوشه خارجی ناخن کوچک پا",
    pressureAngle: "مایل به سمت انگشت",
    pressureAmount: "۱-۲ (ملایم)",
    repetitions: "۲-۳ بار",
    time: "بین 30 ثانیه تا 3 دقیقه",
    extra: "برای چرخش جنین",
    imageUrl: "assets/images/bl/bl67.jpg",
    desc: `
سردرد
بی‌خوابی
اضطراب
تکرر ادرار
`,
    descrip: "تنظیم انرژی‌های راس بدن",
    descExtra: "اصلاح وضعیت جنین در بارداری",
    supplementary: "با GV20 و LI4 ترکیب شود",
    
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "تنظیم انرژی یانگ"
  },


// ==============================================  KI   ===============================================
  //   ki

{
category: "KI",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

مسیر مریدین کلیه به شرح زیر است:

1. شروع از سطح تحتانی انگشت پنجم پا (BL67).  
2. حرکت مورب به سمت کف پا (KI1).  
3. خروج از زیر برجستگی استخوان ناوی، یونگ‌اوک (KI2).  
4. در امتداد سطح خلفی قوزک داخلی (KI3).  
5. ورود جداگانه به پاشنه (KI4، KI5، KI6).  
6. صعود به سمت بالا در امتداد سطح داخلی ساق پا (KI7، KI8، SP6، KI9).  
7. خروج از لبه داخلی حفره پشت زانو (KI10).  
8. صعود در امتداد لبه خلفی داخلی ران (GV1، KI11).  
9. نفوذ و ورود به مهره‌های ستون فقرات (BL23، KI12، KI13، KI14، KI15، KI16، KI17).  
10. ورود به کلیه.  
11. ارتباط با مثانه (CV4، CV3).  
12. شاخه مستقیم،  
13. صعود از کلیه، عبور از کبد، نفوذ به دیافراگم (KI18، KI19).  
14. ورود به ریه (KI23، KI24، KI25).  
15. حرکت در امتداد حلق و حنجره (KI26، KI27، ST9).  
16. نزدیک شدن به ریشه زبان.  
17. شاخه دیگر،  
18. خروج از ریه و ادغام با قلب.  
19. ورود به قفسه سینه (CV17).



مسیر انشعاب مریدین کلیه به شرح زیر است:

1. انشعاب مریدین کلیه،  
2. رسیدن به حفره.  
3. جدا شدن از مریدین کلیه، حرکت به سمت و یکی شدن با انشعاب مریدین مثانه.  
4. صعود و رسیدن به کلیه.  
5. ظهور از دومین مهره کمری.  
6. ادغام با رگ کمری (Belt Vessel).  
7. شاخه اصلی مستقیم،  
8. (صعود مداوم) اتصال به ریشه زبان.  
9. ظهور دوباره از ناحیه پس‌گردنی.  
10. ترکیب با مریدین مثانه.


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
  {
  category: "KI",
  id: "KI1",
  name: "KI1 Yongquan یونگ چوان",
  Enname: "Yongquan",
  faname: "چشمه جوشان",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطهٔ اول مریدین کلیه",
  location: "یک سوم جلویی کف پا (بین انگشتان دوم و سوم)، در فرورفتگی هنگام جمع کردن انگشتان پا",
  pressureAngle: "عمودی یا مایل به سمت انگشتان",
  pressureAmount: "۳-۵ (قوی)",
  repetitions: "۷-۱۰ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اضطراب، بیخوابی، و تقویت انرژی کلیه",
  imageUrl: "assets/images/ki/ki1.jpg",
  desc: `
اضطراب شدید  
بی‌خوابی  
گرگرفتگی  
سرگیجه  
`,
  descrip: "پایین آورندهٔ انرژی اضافی بدن",
  descExtra: "در طب چینی به عنوان نقطهٔ مهم برای «گرفتن آتش سر» استفاده میشود",
  supplementary: "با HT7 و LIV3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ki1.png",
      main: "نقطهٔ اضطراب و انرژی‌بخشی"
},
{
  category: "KI",
  id: "KI2",
  name: "KI2 Rangu ران گو",
  Enname: "Rangu",
  faname: "دره مشتعل",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطهٔ ثانویه مریدین کلیه",
  location: "در فرورفتگی زیر برجستگی استخوان کف پا (متاتارس پنجم)، نزدیک KI1",
  pressureAngle: "مایل به سمت مرکز پا",
  pressureAmount: "۲-۳ (ملایم)",
  repetitions: "۵-۷ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای گلودرد، تب، و خشکی دهان",
  imageUrl: "assets/images/ki/ki2.jpg",
  desc: `
گلودرد  
تب  
خشکی دهان  
ادم (تورم)  
`,
  descrip: "خنک‌کننده و تنظیم‌کنندهٔ حرارت بدن",
  descExtra: "برای علائم گرمایی ناشی از کمبود یین کلیه مؤثر است",
  supplementary: "با LU11 و LI4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطهٔ خنک‌کننده و ضدالتهاب"
},
{
  category: "KI",
  id: "KI3",
  name: "KI3 Taixi تای شی",
  Enname: "Taixi",
  faname: "دره بزرگ",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطهٔ اصلی تقویت کلیه",
  location: "بین تاندون آشیل و قوزک داخلی، در فرورفتگی",
  pressureAngle: "عمودی",
  pressureAmount: "۲-۴ (متوسط)",
  repetitions: "۵-۷ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای کمردرد، ضعف کلیه، و ناباروری",
  imageUrl: "assets/images/ki/ki3.jpg",
  desc: `
کمردرد مزمن  
ضعف کلیه  
تکرر ادرار  
ناباروری  
`,
  descrip: "تقویت‌کنندهٔ انرژی ذاتی (Jing)",
  descExtra: "یکی از مهم‌ترین نقاط برای درمان مشکلات کلیوی در طب چینی",
  supplementary: "با BL23 و CV4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ki3.png",
      main: "نقطهٔ احیای کلیه"
},
{
  category: "KI",
  id: "KI4",
  name: "KI4 Dazhong دا ژونگ",
  Enname: "Dazhong",
  faname: "زنگ بزرگ",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطهٔ اتصال مریدین کلیه",
  location: "پشت و زیر قوزک داخلی، در فرورفتگی کنار تاندون آشیل",
  pressureAngle: "مایل به سمت استخوان",
  pressureAmount: "۲-۳ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای کمردرد، وزوز گوش، و یبوست",
  imageUrl: "assets/images/ki/ki4.jpg",
  desc: `
کمردرد  
وزوز گوش  
یبوست  
آسم  
`,
  descrip: "تنظیم‌کنندهٔ انرژی کلیه و ریه",
  descExtra: "برای اختلالات ناشی از کمبود انرژی کلیه مؤثر است",
  supplementary: "با BL23 و LU7 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطهٔ ارتباطی کلیه-ریه"
},
{
  category: "KI",
  id: "KI5",
  name: "KI5 Shuiquan شوی چوان",
  Enname: "Shuiquan",
  faname: "چشمه آب",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطهٔ شکافندهٔ آب",
  location: "۱ سون زیر KI3، در فرورفتگی نزدیک تاندون آشیل",
  pressureAngle: "عمودی",
  pressureAmount: "۲-۳ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات ادراری و قاعدگی نامنظم",
  imageUrl: "assets/images/ki/ki5.jpg",
  desc: `
تکرر ادرار  
قاعدگی نامنظم  
ناباروری  
خشکی گلو  
`,
  descrip: "تنظیم‌کنندهٔ مایعات و هورمون‌ها",
  descExtra: "برای اختلالات سیستم تناسلی زنان مؤثر است",
  supplementary: "با SP6 و CV4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ki5.png",
      main: "نقطهٔ تعادل هیدراتاسیون و هورمونی"
},
{
  category: "KI",
  id: "KI6",
  name: "KI6 Zhaohai ژائو های",
  Enname: "Zhaohai",
  faname: "دریاچه درخشان",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطهٔ کلیدی برای خواب و گلو",
  location: "۱ سون زیر قوزک داخلی، در فرورفتگی",
  pressureAngle: "مایل به سمت استخوان",
  pressureAmount: "۲-۳ (ملایم تا متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای بی‌خوابی، خشکی گلو، و اختلالات زنانه",
  imageUrl: "assets/images/ki/ki6.jpg",
  desc: `
بی‌خوابی  
خشکی گلو  
قاعدگی نامنظم  
گرفتگی صدا  
`,
  descrip: "تنظیم‌کنندهٔ یین کلیه",
  descExtra: "جزو نقاط هشتگانهٔ معجزه‌آسا (Eight Extraordinary Vessels)",
  supplementary: "با HE7 و LU7 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطهٔ آرامش و آبرسانی"
},
{
  category: "KI",
  id: "KI7",
  name: "KI7 Fuliu فو لیو",
  Enname: "Fuliu",
  faname: "جریان بازگشتی",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطهٔ تنظیم تعریق و تورم",
  location: "۲ سون بالای قوزک داخلی، جلوی تاندون آشیل",
  pressureAngle: "عمودی",
  pressureAmount: "۲-۴ (متوسط)",
  repetitions: "۵-۷ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تعریق زیاد، تورم، و اسهال",
  imageUrl: "assets/images/ki/ki7.jpg",
  desc: `
تعریق بیش‌ازحد  
ادم (تورم)  
اسهال  
ضعف پاها  
`,
  descrip: "تنظیم‌کنندهٔ مایعات بدن",
  descExtra: "برای اختلالات ناشی از عدم تعادل آب و الکترولیت",
  supplementary: "با SP9 و ST36 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطهٔ کنترل مایعات"
},
{
  category: "KI",
  id: "KI8",
  name: "KI8 Jiaoxin جیائو شین",
  Enname: "Jiaoxin",
  faname: "ارتباط ایمان",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطهٔ اتصال مریدین کلیه و قلب",
  location: "۲ سون بالای قوزک داخلی، پشت استخوان تیبیا",
  pressureAngle: "مایل به سمت استخوان",
  pressureAmount: "۲-۳ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای خارش، التهاب، و تپش قلب",
  imageUrl: "assets/images/ki/ki8.jpg",
  desc: `
خارش پوستی  
التهاب  
تپش قلب  
اضطراب  
`,
  descrip: "تنظیم‌کنندهٔ ارتباط قلب و کلیه",
  descExtra: "برای اختلالات پوستی ناشی از استرس مفید است",
  supplementary: "با HT7 و SP10 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطهٔ آرامش پوست و قلب"
},
{
  category: "KI",
  id: "KI9",
  name: "KI9 Zhubin ژو بین",
  Enname: "Zhubin",
  faname: "مهمان سازنده",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطهٔ آرامش‌بخش و متعادل‌کننده",
  location: "۵ سون بالای قوزک داخلی، پشت استخوان تیبیا",
  pressureAngle: "عمودی",
  pressureAmount: "۲-۳ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اضطراب، بی‌خوابی، و تپش قلب",
  imageUrl: "assets/images/ki/ki9.jpg",
  desc: `
اضطراب  
بی‌خوابی  
تپش قلب  
سردرد عصبی  
`,
  descrip: "آرام‌کنندهٔ روح (Shen)",
  descExtra: "جزو نقاط مهم برای اختلالات روان-تنی",
  supplementary: "با Yintang و HT7 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطهٔ ثبات روانی"
},
{
  category: "KI",
  id: "KI10",
  name: "KI10 Yingu یین گو",
  Enname: "Yingu",
  faname: "دره یین",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطهٔ تقویت جنسی و ادراری",
  location: "در چین خمیدگی زانو (سمت داخل)، بین تاندون‌ها",
  pressureAngle: "عمودی یا مایل به سمت استخوان",
  pressureAmount: "۲-۳ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای مشکلات جنسی، تکرر ادرار، و درد زانو",
  imageUrl: "assets/images/ki/ki10.jpg",
  desc: `
ناتوانی جنسی  
تکرر ادرار  
درد زانو  
خستگی کلیه  
`,
  descrip: "تقویت‌کنندهٔ یین کلیه",
  descExtra: "برای اختلالات سیستم تناسلی-ادراری مؤثر است",
  supplementary: "با BL23 و CV4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطهٔ احیای جنسی"
},
{
  category: "KI",
  id: "KI11",
  name: "KI11 Henggu هنگ گو",
  Enname: "Henggu",
  faname: "استخوان عرضی",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه کنترل کننده انرژی جنسی",
  location: "5 سانتیمتر زیر ناف، در لبه فوقانی استخوان عانه (پوبیس)",
  pressureAngle: "عمودی با فشار ملایم",
  pressureAmount: "1-2 (بسیار ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات ادراری و جنسی",
  imageUrl: "assets/images/ki/ki11.jpg",
  desc: `
ناتوانی جنسی
تکرر ادرار
دردهای ناحیه تناسلی
`,
  descrip: "تنظیم کننده انرژی جنسی (Jing)",
  descExtra: "در طب چینی برای تقویت اسپرم و تخمک استفاده می‌شود",
  supplementary: "با CV4 و BL23 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه احیای انرژی جنسی"
},
{
  category: "KI",
  id: "KI12",
  name: "KI12 Dahe دا هه",
  Enname: "Dahe",
  faname: "بزرگترین شکوه",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه تقویت کننده رحم و پروستات",
  location: "4 سانتیمتر زیر ناف، 0.5 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت مرکز",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای ناباروری و قاعدگی نامنظم",
  imageUrl: "assets/images/ki/ki12.jpg",
  desc: `
ناباروری
قاعدگی دردناک
کیست تخمدان
`,
  descrip: "تنظیم کننده عملکرد رحم",
  descExtra: "برای سندرم تخمدان پلی کیستیک (PCOS) مفید است",
  supplementary: "با SP6 و CV6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه سلامت زنان"
},
{
  category: "KI",
  id: "KI13",
  name: "KI13 Qixue چی شوه",
  Enname: "Qixue",
  faname: "حفره انرژی",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه ذخیره انرژی حیاتی",
  location: "3 سانتیمتر زیر ناف، 0.5 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت داخل",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای خستگی مزمن و ضعف سیستم ایمنی",
  imageUrl: "assets/images/ki/ki13.jpg",
  desc: `
خستگی آدرنال
ضعف سیستم ایمنی
پیری زودرس
`,
  descrip: "تقویت کننده انرژی ذخیره ای (Jing)",
  descExtra: "یکی از قوی‌ترین نقاط ضدپیری در طب چینی",
  supplementary: "با ST36 و GV4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه جوانسازی"
},
{
  category: "KI",
  id: "KI14",
  name: "KI14 Siman سی مان",
  Enname: "Siman",
  faname: "چهار دروازه",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه تنظیم کننده مایعات بدن",
  location: "2 سانتیمتر زیر ناف، 0.5 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت پایین",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای ادم (ورم) و احتباس مایعات",
  imageUrl: "assets/images/ki/ki14.jpg",
  desc: `
ادم (تورم)
احتباس آب
ادرار کم
`,
  descrip: "تنظیم کننده تعادل آب و الکترولیت",
  descExtra: "برای ورم دوران قاعدگی مؤثر است",
  supplementary: "با SP9 و CV9 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه بالانس مایعات"
},
{
  category: "KI",
  id: "KI15",
  name: "KI15 Zhongzhu ژونگ ژو",
  Enname: "Zhongzhu",
  faname: "جزیره مرکزی",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه ارتباطی کلیه و کبد",
  location: "1 سانتیمتر زیر ناف، 0.5 سانتیمتر خارج از خط وسط",
  pressureAngle: "عمودی",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای استرس و سم زدایی کبد",
  imageUrl: "assets/images/ki/ki15.jpg",
  desc: `
استرس
سموم کبدی
جوش صورت
`,
  descrip: "پاکسازی کبد-کلیه",
  descExtra: "برای سم‌زدایی پس از مصرف داروها مفید است",
  supplementary: "با LIV3 و BL18 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه سم‌زدایی"
},
{
  category: "KI",
  id: "KI16",
  name: "KI16 Huangshu هوانگ شو",
  Enname: "Huangshu",
  faname: "نقطه حیاتی",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه ارتباطی با سیستم لنفاوی",
  location: "0.5 سانتیمتر خارج از ناف",
  pressureAngle: "مایل به سمت داخل",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات لنفاوی و سیستم ایمنی",
  imageUrl: "assets/images/ki/ki16.jpg",
  desc: `
تورم غدد لنفاوی
خستگی مزمن
عفونت‌های مکرر
`,
  descrip: "تقویت کننده سیستم ایمنی",
  descExtra: "در طب چینی برای درمان سرطان‌ها استفاده می‌شود",
  supplementary: "با SP6 و ST36 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه تقویت سیستم لنفاوی"
},
{
  category: "KI",
  id: "KI17",
  name: "KI17 Shangqu شانگ چو",
  Enname: "Shangqu",
  faname: "منحنی بالایی",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه تنظیم معده و کلیه",
  location: "2 سانتیمتر بالای ناف، 0.5 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت پایین",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سوءهاضمه و ریفلاکس",
  imageUrl: "assets/images/ki/ki17.jpg",
  desc: `
سوءهاضمه
ریفلاکس معده
تهوع
`,
  descrip: "تنظیم کننده عملکرد معده",
  descExtra: "برای گاستریت و زخم معده مفید است",
  supplementary: "با CV12 و ST36 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آرامش معده"
},
{
  category: "KI",
  id: "KI18",
  name: "KI18 Shiguan شی گوان",
  Enname: "Shiguan",
  faname: "گذرگاه سنگ",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه دفع سنگ‌های ادراری",
  location: "3 سانتیمتر بالای ناف، 0.5 سانتیمتر خارج از خط وسط",
  pressureAngle: "عمودی",
  pressureAmount: "2-3 (متوسط)",
  repetitions: "5-7 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سنگ کلیه و مثانه",
  imageUrl: "assets/images/ki/ki18.jpg",
  desc: `
سنگ کلیه
سنگ مثانه
درد پهلو
`,
  descrip: "شکستن سنگ‌های ادراری",
  descExtra: "با ماساژ روغن کرچک اثر آن افزایش می‌یابد",
  supplementary: "با BL64 و SP6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه درمان سنگ‌های ادراری"
},
{
  category: "KI",
  id: "KI19",
  name: "KI19 Yindu یین دو",
  Enname: "Yindu",
  faname: "پایتخت یین",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه تعادل هورمونی",
  location: "4 سانتیمتر بالای ناف، 0.5 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت داخل",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات هورمونی",
  imageUrl: "assets/images/ki/ki19.jpg",
  desc: `
عدم تعادل هورمونی
یائسگی
آکنه هورمونی
`,
  descrip: "تنظیم غدد درون ریز",
  descExtra: "برای سندرم پیش از قاعدگی (PMS) بسیار مؤثر است",
  supplementary: "با SP6 و CV4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه تعادل هورمون‌ها"
},
{
  category: "KI",
  id: "KI20",
  name: "KI20 Futonggu فو تونگ گو",
  Enname: "Futonggu",
  faname: "دره عبور شکم",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه بهبود گوارش",
  location: "5 سانتیمتر بالای ناف، 0.5 سانتیمتر خارج از خط وسط",
  pressureAngle: "عمودی",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سوءجذب و نفخ",
  imageUrl: "assets/images/ki/ki20.jpg",
  desc: `
نفخ شکم
سوءجذب
کاهش وزن
`,
  descrip: "بهبود جذب مواد مغذی",
  descExtra: "برای سندرم روده تحریک‌پذیر (IBS) مفید است",
  supplementary: "با ST25 و CV6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه تقویت گوارش"
},
{
  category: "KI",
  id: "KI21",
  name: "KI21 Youmen یو من",
  Enname: "Youmen",
  faname: "دروازه تاریکی",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه درمان افسردگی",
  location: "6 سانتیمتر بالای ناف، 0.5 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت داخل",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای افسردگی و اندوه",
  imageUrl: "assets/images/ki/ki21.jpg",
  desc: `
افسردگی
اندوه عمیق
بی‌حوصلگی
`,
  descrip: "آرام‌کننده روح",
  descExtra: "برای غم و اندوه پس از فقدان مؤثر است",
  supplementary: "با HT7 و GV20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه نور در تاریکی"
},
{
  category: "KI",
  id: "KI22",
  name: "KI22 Bulang بو لانگ",
  Enname: "Bulang",
  faname: "راهروی قدم‌زنی",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه ارتباط کلیه و ریه",
  location: "فضای بین دنده‌ای پنجم، 2 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت داخل",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تنگی نفس و آسم",
  imageUrl: "assets/images/ki/ki22.jpg",
  desc: `
تنگی نفس
آسم
سرفه مزمن
`,
  descrip: "تنظیم کننده تنفس",
  descExtra: "برای آمفیزم و بیماری‌های انسدادی ریه مفید است",
  supplementary: "با LU1 و LU9 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اکسیژن رسانی"
},
{
  category: "KI",
  id: "KI23",
  name: "KI23 Shenfeng شن فنگ",
  Enname: "Shenfeng",
  faname: "قله روح",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه آرامش قلب و روح",
  location: "فضای بین دنده‌ای چهارم، 2 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت داخل",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اضطراب و تپش قلب",
  imageUrl: "assets/images/ki/ki23.jpg",
  desc: `
تپش قلب
اضطراب
بی‌قراری
`,
  descrip: "آرام‌کننده قلب",
  descExtra: "برای حملات پانیک مؤثر است",
  supplementary: "با HT7 و PC6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه ثبات قلبی"
},
{
  category: "KI",
  id: "KI24",
  name: "KI24 Lingxu لینگ شو",
  Enname: "Lingxu",
  faname: "خرابه روحانی",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه رهاسازی سوگواری",
  location: "فضای بین دنده‌ای سوم، 2 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت داخل",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اندوه و سوگواری",
  imageUrl: "assets/images/ki/ki24.jpg",
  desc: `
سوگواری
اندوه
غم مزمن
`,
  descrip: "تسکین دهنده روح",
  descExtra: "برای پذیرش فقدان عزیزان مفید است",
  supplementary: "با BL42 و GV14 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه التیام قلب شکسته"
},
{
  category: "KI",
  id: "KI25",
  name: "KI25 Shencang شن تسانگ",
  Enname: "Shencang",
  faname: "انبار روح",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه ذخیره خاطرات",
  location: "فضای بین دنده‌ای دوم، 2 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت داخل",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تروما و خاطرات دردناک",
  imageUrl: "assets/images/ki/ki25.jpg",
  desc: `
خاطرات دردناک
تروما
کابوس شبانه
`,
  descrip: "پاکسازی خاطرات منفی",
  descExtra: "در روان‌درمانی انرژی‌درمانی استفاده می‌شود",
  supplementary: "با BL15 و GV24.5 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آزادسازی تروما"
},
{
  category: "KI",
  id: "KI26",
  name: "KI26 Yuzhong یو ژونگ",
  Enname: "Yuzhong",
  faname: "مرکز ظریف",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "نقطه درمان سرفه و آسم",
  location: "فضای بین دنده‌ای اول، 2 سانتیمتر خارج از خط وسط",
  pressureAngle: "مایل به سمت داخل",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرفه خشک و آسم",
  imageUrl: "assets/images/ki/ki26.jpg",
  desc: `
سرفه خشک
آسم
گرفتگی صدا
`,
  descrip: "مرطوب‌کننده ریه",
  descExtra: "برای خشکی مزمن گلو مؤثر است",
  supplementary: "با LU5 و CV22 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آرامش گلو"
},
{
  category: "KI",
  id: "KI27",
  name: "KI27 Shufu شو فو",
  Enname: "Shufu",
  faname: "اقامتگاه شو",
  meridian: "Kidney Meridian (KI)",
  Fameridian: "مریدین کلیه",
  description: "آخرین نقطه مریدین کلیه",
  location: "زیر ترقوه، در فرورفتگی خارج از استخوان جناغ",
  pressureAngle: "مایل به سمت پایین",
  pressureAmount: "1-2 (ملایم)",
  repetitions: "3-5 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرماخوردگی‌های مکرر",
  imageUrl: "assets/images/ki/ki27.jpg",
  desc: `
سرماخوردگی مکرر
ضعف سیستم ایمنی
خستگی مزمن
`,
  descrip: "تقویت کننده دفاعی بدن",
  descExtra: "به عنوان نقطه پایانی مریدین، انرژی کلیه را کامل می‌کند",
  supplementary: "با LU7 و LI4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ki27.png",
      main: "نقطه پایانی مریدین کلیه"
},

// ==============================================  PC   ===============================================

{
category: "PC",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر مریدین پریکاردیوم به شرح زیر است:

1. شروع از قفسه سینه (بین مری و قلب) (CV17).  
2. خروج از قلب و حرکت به سمت خط مریدین پریکاردیوم.  
3. نزول و نفوذ به دیافراگم.  
4. اتصال گسترده به اندام‌های سه‌گانه انرژی‌زا (CV13، CV12، CV7).  
5. یکی از شاخه‌ها،  
6. جدا شده، در امتداد قفسه سینه حرکت کرده و از زیر بغل خارج می‌شود.  
7. سهسون(واحد اندازه‌گیری طب سنتی چینی) پایین‌تر از زیر بغل (PC1).  
8. صعود به سمت زیر بغل.  
9. نزول در امتداد سطح داخلی بازو.  
10. عبور از بین مریدین ریه و مریدین قلب (PC2).  
11. نزول و ورود به حفره آرنج (PC3).  
12. نزول در امتداد ساعد.  
13. عبور از بین تاندون‌های عضلات پالماریس لونگوس و فلکسور کارپی رادیالیس (PC4، PC5، PC6، PC7).  
14. عبور از مفصل رادیوکارپال و ورود به مرکز کف دست (PC8).  
15. حرکت در امتداد انگشت سوم.  
16. خروج از انتهای انگشت سوم (PC9).  
17. شاخه دیگر،  
18. به‌صورت جداگانه از مرکز کف دست جدا می‌شود.  
19. حرکت در امتداد انگشت چهارم.  
20. خروج از انتهای انگشت چهارم.  

مسیر انشعاب مریدین پریکاردیوم به شرح زیر است:

1. انشعاب مریدین پریکاردیوم،  
2. جدا شدن در فاصله سهسونپایین‌تر از ناحیه یونک (GB22).  
3. ورود به مرکز قفسه سینه.  
4. ادغام جداگانه با مریدین سه‌گانه انرژی‌زا.  
5. ظهور و صعود در امتداد حلق و حنجره.  
6. ظهور از ناحیه پشت‌گوشی.  
7. یکی شدن با مریدین سه‌گانه انرژی‌زا در زیر زائده ماستوئید (وانگول GB12).

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "PC",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر انشعاب مریدین پریکاردیوم به شرح زیر است:

1. انشعاب مریدین پریکاردیوم،  
2. جدا شدن در فاصله سهسونپایین‌تر از ناحیه یونک (GB22).  
3. ورود به مرکز قفسه سینه.  
4. ادغام جداگانه با مریدین سه‌گانه انرژی‌زا.  
5. ظهور و صعود در امتداد حلق و حنجره.  
6. ظهور از ناحیه پشت‌گوشی.  
7. یکی شدن با مریدین سه‌گانه انرژی‌زا در زیر زائده ماستوئید (وانگول GB12).


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "PC",
  id: "PC1",
  name: "PC1 Tianchi تیان چی",
  Enname: "Tianchi",
  faname: "استخر بهشتی",
  meridian: "Pericardium Meridian (PC)",
  Fameridian: "مریدین پریکارد",
  description: "اولین نقطه مریدین پریکارد",
  location: "۱ سون خارج از نوک پستان، در فضای بین دنده‌ای چهارم",
  pressureAngle: "مایل به سمت داخل (با احتیاط)",
  pressureAmount: "۱-۲ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای احتقان سینه و اضطراب",
  imageUrl: "assets/images/pc/pc1.jpg",
  desc: `
احتقان سینه  
اضطراب  
تپش قلب  
`,
  descrip: "تنظیم‌کننده انرژی قلب",
  descExtra: "برای زنان در دوران قاعدگی با احتیاط استفاده شود",
  supplementary: "با CV17 و HT7 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آرامش قلب"
},
{
  category: "PC",
  id: "PC2",
  name: "PC2 Tianquan تیان چوان",
  Enname: "Tianquan",
  faname: "چشمه بهشتی",
  meridian: "Pericardium Meridian (PC)",
  Fameridian: "مریدین پریکارد",
  description: "نقطه تنظیم‌کننده قلب و ریه",
  location: "۲ سون بالای چین آرنج، در کنار تاندون دوسر",
  pressureAngle: "عمودی",
  pressureAmount: "۲-۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرفه و درد بازو",
  imageUrl: "assets/images/pc/pc2.jpg",
  desc: `
سرفه خشک  
درد بازو  
تنگی نفس  
`,
  descrip: "مرطوب‌کننده ریه",
  descExtra: "برای سیگاری‌ها مفید است",
  supplementary: "با LU5 و PC6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه تسکین تنفس"
},
{
  category: "PC",
  id: "PC3",
  name: "PC3 Quze چو زه",
  Enname: "Quze",
  faname: "مرداب پیچان",
  meridian: "Pericardium Meridian (PC)",
  Fameridian: "مریدین پریکارد",
  description: "نقطه آرامش‌بخش فوری",
  location: "در چین آرنج، روی چین عرضی هنگام خم کردن آرنج",
  pressureAngle: "عمودی",
  pressureAmount: "۲-۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای استرس شدید و تهوع",
  imageUrl: "assets/images/pc/pc3.jpg",
  desc: `
استرس شدید  
تهوع  
گرگرفتگی  
`,
  descrip: "پاکسازی گرمای قلب",
  descExtra: "برای حمله پانیک فوری مؤثر است",
  supplementary: "با PC6 و GV20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اورژانس روانی"
},
{
  category: "PC",
  id: "PC4",
  name: "PC4 Ximen شی من",
  Enname: "Ximen",
  faname: "دروازه شکافنده",
  meridian: "Pericardium Meridian (PC)",
  Fameridian: "مریدین پریکارد",
  description: "نقطه حیاتی برای قلب",
  location: "۵ سون بالای مچ دست، بین تاندون‌ها",
  pressureAngle: "عمودی",
  pressureAmount: "۲-۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تپش قلب و درد قفسه سینه",
  imageUrl: "assets/images/pc/pc4.jpg",
  desc: `
تپش قلب  
درد قفسه سینه  
بی‌خوابی  
`,
  descrip: "تنظیم ریتم قلب",
  descExtra: "برای آریتمی قلبی استفاده می‌شود",
  supplementary: "با HT7 و CV14 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه نجات قلب"
},
{
  category: "PC",
  id: "PC5",
  name: "PC5 Jianshi جیان شی",
  Enname: "Jianshi",
  faname: "فرستاده میانی",
  meridian: "Pericardium Meridian (PC)",
  Fameridian: "مریدین پریکارد",
  description: "نقطه روان‌درمانی",
  location: "۳ سون بالای مچ دست، بین تاندون‌ها",
  pressureAngle: "عمودی",
  pressureAmount: "۲-۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای وسواس فکری و کابوس",
  imageUrl: "assets/images/pc/pc5.jpg",
  desc: `
وسواس فکری  
کابوس شبانه  
اضطراب  
`,
  descrip: "پاکسازی ذهن",
  descExtra: "برای OCD (اختلال وسواس فکری-عملی) مفید است",
  supplementary: "با GV24.5 و Yintang ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آرامش ذهن"
},
{
  category: "PC",
  id: "PC6",
  name: "PC6 Neiguan نی گوان",
  Enname: "Neiguan",
  faname: "دروازه داخلی",
  meridian: "Pericardium Meridian (PC)",
  Fameridian: "مریدین پریکارد",
  description: "معروف‌ترین نقطه آرامش",
  location: "۲ سون بالای مچ دست، بین تاندون‌ها",
  pressureAngle: "عمودی یا مایل",
  pressureAmount: "۲-۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تهوع، استرس و بی‌خوابی",
  imageUrl: "assets/images/pc/pc6.jpg",
  desc: `
تهوع، اضطراب، مشکلات گوارشی، آرامش‌بخش بسیار قوی
احتقان سینه و معده را برطرف کرده
ذهن را آرام میکند
کاهش هیجان
تهوع
و تسکین بیماری مسافرت کمک میکند 
تهوع (حتی در بارداری)  
استرس  
بی‌خوابی  
`,
  descrip: "تنظیم قلب و معده",
  descExtra: "به‌عنوان «نقطه ضدتهوع» شناخته می‌شود",
  supplementary: "با ST36 و CV12 ترکیب شود",
  
      boss:"رئیسه",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/pc6.png",
      main: "نقطه جهانی آرامش"
},
{
  category: "PC",
  id: "PC7",
  name: "PC7 Daling دا لینگ",
  Enname: "Daling",
  faname: "تپه بزرگ",
  meridian: "Pericardium Meridian (PC)",
  Fameridian: "مریدین پریکارد",
  description: "نقطه اصلی روان‌درمانی",
  location: "در چین مچ دست، بین تاندون‌ها",
  pressureAngle: "عمودی",
  pressureAmount: "فشار 3 تا 6",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای افسردگی و خشم",
  imageUrl: "assets/images/pc/pc7.jpg",
  desc: `
افسردگی  
خشم فروخورده  
تنش عصبی  
`,
  descrip: "تنظیم‌کننده احساسات",
  descExtra: "برای اختلال دوقطبی استفاده می‌شود",
  supplementary: "با LV3 و HT7 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/pc7.png",
      main: "نقطه تعادل عاطفی"
},
{
  category: "PC",
  id: "PC8",
  name: "PC8 Laogong لاو گونگ",
  Enname: "Laogong",
  faname: "کاخ کار",
  meridian: "Pericardium Meridian (PC)",
  Fameridian: "مریدین پریکارد",
  description: "نقطه تخلیه گرمای قلب",
  location: "مرکز کف دست (وقتی انگشتان را جمع می‌کنید، بین نوک انگشتان سوم و چهارم)",
  pressureAngle: "عمودی",
  pressureAmount: "۲-۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای استرس شدید و تب",
  imageUrl: "assets/images/pc/pc8.jpg",
  desc: `
استرس شدید  
تب  
زخم دهان  
`,
  descrip: "خنک‌کننده قلب",
  descExtra: "در طب فشاری برای کاهش تب کودکان استفاده می‌شود",
  supplementary: "با LI11 و GV14 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/pc8.png",
      main: "نقطه خنک‌کننده اضطراب"
},
{
  category: "PC",
  id: "PC9",
  name: "PC9 Zhongchong ژونگ چونگ",
  Enname: "Zhongchong",
  faname: "ضربه میانی",
  meridian: "Pericardium Meridian (PC)",
  Fameridian: "مریدین پریکارد",
  description: "آخرین نقطه مریدین پریکارد",
  location: "در نوک انگشت وسط، ۰.۳ سون از ناخن به سمت انگشت چهارم",
  pressureAngle: "مایل به سمت ناخن",
  pressureAmount: "۱-۲ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای شوک و بیهوشی",
  imageUrl: "assets/images/pc/pc9.jpg",
  desc: `
شوک عصبی  
غش کردن  
کمبود انرژی  
`,
  descrip: "بازگرداندن هوشیاری",
  descExtra: "در طب سوزنی برای احیای اورژانسی استفاده می‌شود",
  supplementary: "با GV26 و PC6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه احیای فوری"
},

// ==============================================  TE   ===============================================

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر مریدین سه‌گانه انرژی‌زا به شرح زیر است:

1. شروع از نوک انگشت چهارم (TE1).  
2. خروج از بین استخوان‌های متاکارپال چهارم و پنجم (TE2، TE3).  
3. حرکت در امتداد پشت دست و صعود به مفصل رادیوکارپال (TE4).  
4. خروج از سطح خارجی ساعد بین استخوان‌های زند زبرین و زیرین (TE5، TE6، TE7، TE8، TE9).  
5. صعود و نفوذ به ناحیه آرنج (TE10).  
6. حرکت در امتداد سطح خارجی بازو (TE11، TE12، TE13).  
7. صعود به شانه (TE14).  
8. تقاطع و خروج از پشت مریدین کیسه صفرا (SI12، TE15، GB21).  
9. ورود به گیول‌بون (ST12).  
10. انشعاب در دان‌جونگ (CV17).  
11. ادغام با پریکاردیوم.  
12. نزول و نفوذ به دیافراگم.  
13. اتصال گسترده به اندام‌های سه‌گانه انرژی‌زا (CV13، CV12، CV7، CV5، BL39).  
14. یکی از شاخه‌ها،  
15. جدا شدن از دان‌جونگ (CV17).  
16. صعود و خروج از گیول‌بون (ST12).  
17. صعود در امتداد پشت ناحیه پس‌گردنی (GV14، TE16).  
18. حرکت به ناحیه پشت‌گوشی (TE17).  
19. حرکت مستقیم به سمت بالا (TE18، TE19).  
20. خروج از نوک فوقانی گوش (TE20).  
21. صعود، بازگشت و نزول به گونه (GB6، GB5، GB4، GB14).  
22. رسیدن به استخوان گونه (SI18).  
23. شاخه دیگر،  
24. جدا شدن از ناحیه پشت‌گوشی و ورود به گوش (TE17).  
25. خروج از ناحیه پیش‌گوشی (SI19، TE21، TE22).  
26. عبور از جلوی سانگ‌گوان (GB3).  
27. تقاطع (با شاخه ذکر شده قبلی) در گونه.  
28. رسیدن به گوشه خارجی چشم (TE23، GB1).

مسیر انشعاب مریدین سه‌گانه انرژی‌زا به شرح زیر است:

1. انشعاب مریدین سه‌گانه انرژی‌زا،  
2. صعود به سمت بالا.  
3. جدا شدن از نقطه برجستگی پیشانی (برگما).  
4. ورود به حفره بزرگ بالای ترقوه.  
5. نزول و حرکت به سمت اندام‌های سه‌گانه انرژی‌زا.  
6. پراکندگی در مرکز قفسه سینه.

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "TE",
  id: "TE1",
  name: "TE1 Guanchong گوان چونگ",
  Enname: "Guanchong",
  faname: "دروازه فرار",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "اولین نقطه مریدین سه‌گرم‌کننده، نقطه چاه (Jing-Well)",
  location: "در گوشه خارجی ناخن انگشت چهارم پا (سمت انگشت کوچک)، حدود ۰.۱ سون از لبه ناخن",
  pressureAngle: "عمود یا مایل به سمت مرکز انگشت",
  pressureAmount: "۱-۲ (ملایم تا متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردرد، تب، و اضطراب",
  imageUrl: "assets/images/te/te1.jpg",
  desc: `
سردرد  
تب  
اضطراب  
گلودرد  
`,
  descrip: "پاک‌کننده گرما و تنظیم‌کننده انرژی",
  descExtra: "حساسیت بالا؛ فشار ملایم اعمال شود",
  supplementary: "با LI4 و GB20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اورژانس برای تب و التهاب"
},
{
  category: "TE",
  id: "TE2",
  name: "TE2 Yemen یه‌من",
  Enname: "Yemen",
  faname: "دره مایع",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "دومین نقطه مریدین، نقطه جویبار (Ying-Spring)",
  location: "بین مفصل انگشت چهارم و پنجم پا، در قسمت قدامی (پشت پا)، در فرورفتگی بین تاندون‌ها",
  pressureAngle: "مایل به سمت پایین یا عمود",
  pressureAmount: "۲-۳ (متوسط)",
  repetitions: "۳-۷ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای وزوز گوش و تاری دید",
  imageUrl: "assets/images/te/te2.jpg",
  desc: `
وزوز گوش  
تاری دید  
سردرد شقیقه‌ای  
`,
  descrip: "تنظیم‌کننده انرژی سر و گوش",
  descExtra: "برای اختلالات گوش میانی مؤثر است",
  supplementary: "با GB2 و SI19 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای اختلالات شنوایی"
},
{
  category: "TE",
  id: "TE3",
  name: "TE3 Zhongzhu ژونگ جو",
  Enname: "Zhongzhu",
  faname: "جزیره مرکزی",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "سومین نقطه مریدین، نقطه جریان (Shu-Stream)",
  location: "در پشت دست، بین استخوان‌های چهارم و پنجم متاکارپال، در فرورفتگی proximal به مفصل متاکارپوفالانژیال",
  pressureAngle: "عمود یا مایل به سمت انگشتان",
  pressureAmount: "۳-۴ (فشار محکم)",
  repetitions: "۵-۷ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای درد شانه و گردن",
  imageUrl: "assets/images/te/te3.jpg",
  desc: `
درد شانه  
گردن‌درد  
استرس  
`,
  descrip: "کاهش‌دهنده درد و گرفتگی عضلات",
  descExtra: "برای آرتروز انگشتان مؤثر است",
  supplementary: "با GB21 و SI15 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آزادکننده تنش بالاتنه"
},
{
  category: "TE",
  id: "TE4",
  name: "TE4 Yangchi یانگ چی",
  Enname: "Yangchi",
  faname: "حوضه یانگ",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "چهارمین نقطه مریدین، نقطه منبع (Yuan-Source)",
  location: "در چین خوردگی پشت مچ دست (بین تاندون اکستانسور دیژیتوروم و اکستانسور دیژیتی مینیمی)",
  pressureAngle: "عمود یا مایل به سمت انگشتان",
  pressureAmount: "۳-۴ (متوسط تا قوی)",
  repetitions: "۵-۷ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای درد مچ دست و خستگی عمومی",
  imageUrl: "assets/images/te/te4.jpg",
  desc: `
درد مچ دست  
خستگی  
دیابت  
`,
  descrip: "تنظیم‌کننده انرژی یانگ و سیستم اندوکرین",
  descExtra: "در طب سوزنی برای دیابت نوع ۲ استفاده می‌شود",
  supplementary: "با LI4 و ST36 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای تعادل متابولیک"
},
{
  category: "TE",
  id: "TE5",
  name: "TE5 Waiguan وای گوان",
  Enname: "Waiguan",
  faname: "دروازه خارجی",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "پنجمین نقطه مریدین، نقطه اتصال (Luo-Connecting) + یکی از نقاط کلیدی برای دردها",
  location: "۲ سون بالای چین خوردگی مچ دست (بین رادیوس و اولنا)",
  pressureAngle: "عمود با زاویه ۹۰ درجه",
  pressureAmount: "۴-۵ (فشار محکم)",
  repetitions: "۷-۱۰ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردردهای یکطرفه (مثل میگرن)",
  imageUrl: "assets/images/te/te5.jpg",
  desc: `
میگرن  
درد شانه  
سرماخوردگی  
`,
  descrip: "مسدود‌کننده درد و تقویت‌کننده سیستم ایمنی",
  descExtra: "معروف به «آسپرین طب چینی» برای تسکین فوری درد",
  supplementary: "با GB20 و LI4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه معجزه‌آسا برای سردرد"
},
{
  category: "TE",
  id: "TE6",
  name: "TE6 Zhigou ژی گو",
  Enname: "Zhigou",
  faname: "شاخه مسدود",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "ششمین نقطه مریدین، نقطه رودخانه (Jing-River)",
  location: "۳ سون بالای مچ دست (بین رادیوس و اولنا)",
  pressureAngle: "عمود یا مایل به سمت آرنج",
  pressureAmount: "۳-۴ (متوسط)",
  repetitions: "۵-۷ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای یبوست و نفخ",
  imageUrl: "assets/images/te/te6.jpg",
  desc: `
یبوست  
نفخ شکم  
کمر درد  
`,
  descrip: "تنظیم‌کننده حرکات روده و کاهش‌دهنده گاز معده",
  descExtra: "به‌عنوان «ملین طبیعی» شناخته می‌شود",
  supplementary: "با ST25 و SP6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/te6.png",
      main: "نقطه دتوکس روده‌ها"
},
{
  category: "TE",
  id: "TE7",
  name: "TE7 Huizong هوی زونگ",
  Enname: "Huizong",
  faname: "گردآوری اصلی",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "هفتمین نقطه مریدین، نقطه شکاف (Xi-Cleft)",
  location: "۱ سون بالاتر از TE6 (به سمت آرنج)، در لبه اولنا",
  pressureAngle: "مایل به سمت استخوان",
  pressureAmount: "۲-۳ (ملایم تا متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تشنج و اختلالات عصبی",
  imageUrl: "assets/images/te/te7.jpg",
  desc: `
تشنج  
اضطراب شدید  
تینیتوس (وزوز گوش)  
`,
  descrip: "آرام‌بخش سیستم عصبی مرکزی",
  descExtra: "برای حملات پانیک مفید است",
  supplementary: "با GV20 و HT7 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اورژانس عصبی"
},
{
  category: "TE",
  id: "TE8",
  name: "TE8 Sanyangluo سان یانگ لو",
  Enname: "Sanyangluo",
  faname: "اتصال سه یانگ",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "هشتمین نقطه مریدین، نقطه تقاطع با مریدین‌های یانگ دیگر",
  location: "۴ سون بالای مچ دست (بین TE5 و TE9)",
  pressureAngle: "عمود با زاویه ۴۵ درجه",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای فلج صورت و گلو درد",
  imageUrl: "assets/images/te/te8.jpg",
  desc: `
فلج بل (صورت)  
گلودرد  
خشکی دهان  
`,
  descrip: "بازکننده مسیرهای یانگ در سر و صورت",
  descExtra: "در سکته‌های خفیف کاربرد دارد",
  supplementary: "با ST4 و GB14 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه احیای عضلات صورت"
},
{
  category: "TE",
  id: "TE9",
  name: "TE9 Sidu سی دو",
  Enname: "Sidu",
  faname: "چهارمین رودخانه",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "نهمین نقطه مریدین، نقطه تقویت‌کننده جریان انرژی",
  location: "۷ سون بالای مچ دست (بین رادیوس و اولنا)",
  pressureAngle: "عمود با زاویه ۶۰ درجه",
  pressureAmount: "۴ (قوی)",
  repetitions: "۷ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سنگ‌های کلیوی و عفونت ادراری",
  imageUrl: "assets/images/te/te9.jpg",
  desc: `
سنگ کلیه  
سوزش ادرار  
کمردرد  
`,
  descrip: "پاک‌کننده گرما از سیستم ادراری",
  descExtra: "به دفع سموم کمک می‌کند",
  supplementary: "با BL23 و SP9 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه سم‌زدایی کلیه‌ها"
},
{
  category: "TE",
  id: "TE10",
  name: "TE10 Tianjing تیان جینگ",
  Enname: "Tianjing",
  faname: "چاه بهشتی",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "دهمین نقطه مریدین، نقطه دریا (He-Sea)",
  location: "۱ سون بالای اولکرانون (زائده آرنج)، در فرورفتگی هنگام خم شدن آرنج",
  pressureAngle: "مایل به سمت استخوان",
  pressureAmount: "۳-۵ (متوسط تا قوی)",
  repetitions: "۵-۱۰ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آرتروز آرنج و التهاب تاندون",
  imageUrl: "assets/images/te/te10.jpg",
  desc: `
آرتروز آرنج  
تاندونیت  
تب  
`,
  descrip: "کاهش‌دهنده التهاب مفاصل",
  descExtra: "برای تنیس البو (درد آرنج) مؤثر است",
  supplementary: "با LI11 و LU5 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه ترمیم مفاصل"
},
{
  category: "TE",
  id: "TE11",
  name: "TE11 Qinglengyuan چینگ لنگ یوان",
  Enname: "Qinglengyuan",
  faname: "باتلاق سرد",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "یازدهمین نقطه مریدین، نقطه ویژه برای کاهش التهاب",
  location: "۱ سون بالای TE10 (تیان جینگ)، در فرورفتگی بین اولنا و تریسپس",
  pressureAngle: "مایل به سمت استخوان (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۵-۷ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آرتریت روماتوئید و گرگرفتگی",
  imageUrl: "assets/images/te/te11.jpg",
  desc: `
گرگرفتگی یائسگی  
التهاب مفاصل  
تعریق شبانه  
`,
  descrip: "خنک‌کننده گرماهای داخلی بدن",
  descExtra: "برای سندرم شوگرن (خشکی مخاط) مفید است",
  supplementary: "با SP6 و KI6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه تعادل یین و یانگ"
},
{
  category: "TE",
  id: "TE12",
  name: "TE12 Xiaoluo شیائو لو",
  Enname: "Xiaoluo",
  faname: "کاهش همهمه",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "دوازدهمین نقطه مریدین، نقطه آرامش‌بخش گوش",
  location: "۵ سون بالای TE11، در لبه خلفی استخوان بازو (هومروس)",
  pressureAngle: "مایل به سمت مریدین (۳۰ درجه)",
  pressureAmount: "۲-۳ (ملایم تا متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای وزوز گوش و سرگیجه",
  imageUrl: "assets/images/te/te12.jpg",
  desc: `
وزوز گوش (تینیتوس)  
سرگیجه  
کاهش شنوایی  
`,
  descrip: "تنظیم‌کننده انرژی گوش داخلی",
  descExtra: "معمولاً با سوزن طلایی تحریک می‌شود",
  supplementary: "با GB2 و SI19 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه طلایی برای اختلالات شنوایی"
},
{
  category: "TE",
  id: "TE13",
  name: "TE13 Naohui نائو هوی",
  Enname: "Naohui",
  faname: "گردآوری بازو",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "سیزدهمین نقطه مریدین، نقطه اتصال عضلات بازو",
  location: "۷ سون بالای TE12، در لبه خلفی دلتویید",
  pressureAngle: "عمود یا مایل به سمت شانه",
  pressureAmount: "۴ (قوی)",
  repetitions: "۵-۷ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای فلج جزئی بازو و شانه‌های منجمد",
  imageUrl: "assets/images/te/te13.jpg",
  desc: `
شانه یخ‌زده  
ضعف عضلانی  
درد شانه  
`,
  descrip: "بازگرداننده حرکت به مفاصل بالاتنه",
  descExtra: "در توانبخشی پس از سکته کاربرد دارد",
  supplementary: "با LI15 و SI11 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه احیای عضلات"
},
{
  category: "TE",
  id: "TE14",
  name: "TE14 Jianliao جیان لیائو",
  Enname: "Jianliao",
  faname: "استخر شانه",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "چهاردهمین نقطه مریدین، نقطه کلیدی برای شانه",
  location: "در فرورفتگی پشت مفصل شانه، هنگام آویزان بودن دست",
  pressureAngle: "مایل به سمت مفصل (۶۰ درجه)",
  pressureAmount: "۵ (بسیار قوی)",
  repetitions: "۷-۱۰ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای شدید شانه و آرتروز",
  imageUrl: "assets/images/te/te14.jpg",
  desc: `
آرتروز شانه  
شانه یخ‌زده  
کرختی بازو  
`,
  descrip: "از معروف‌ترین نقاط برای درد شانه در طب چینی",
  descExtra: "معمولاً با موکسا درمانی همراه می‌شود",
  supplementary: "با GB21 و LI15 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/te14.png",
      main: "نقطه شکستن بلوک‌های انرژی شانه"
},
{
  category: "TE",
  id: "TE15",
  name: "TE15 Tianliao تیان لیائو",
  Enname: "Tianliao",
  faname: "استخر بهشتی",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "پانزدهمین نقطه مریدین، نقطه تقاطع با مریدین کیسه صفرا",
  location: "در فرورفتگی بین استخوان کتف (اسکاپولا) و ترقوه، بالای TE14",
  pressureAngle: "مایل به سمت ستون فقرات (۴۵ درجه)",
  pressureAmount: "۳-۴ (متوسط تا قوی)",
  repetitions: "۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تنگی نفس و اضطراب",
  imageUrl: "assets/images/te/te15.jpg",
  desc: `
تنفس کوتاه  
استرس شدید  
گرفتگی گردن  
`,
  descrip: "تنظیم‌کننده انرژی قفسه سینه و شانه‌ها",
  descExtra: "در درمان آسم کاربرد دارد",
  supplementary: "با CV17 و LU1 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آرامش تنفسی"
},
{
  category: "TE",
  id: "TE16",
  name: "TE16 Tianyou تیان یو",
  Enname: "Tianyou",
  faname: "پنجره بهشتی",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "شانزدهمین نقطه مریدین، نقطه ارتباط با مریدین روده کوچک",
  location: "پشت گوش، در فرورفتگی زیر استخوان ماستوئید",
  pressureAngle: "مایل به سمت بینی (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرگیجه و تهوع",
  imageUrl: "assets/images/te/te16.jpg",
  desc: `
سرگیجه  
تهوع  
گرفتگی صدا  
`,
  descrip: "متوقف‌کننده چرخش انرژی معیوب به سر",
  descExtra: "برای بیماری حرکت (Motion Sickness) عالی است",
  supplementary: "با PC6 و GB20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه ضد استفراغ"
},
{
  category: "TE",
  id: "TE17",
  name: "TE17 Yifeng یی فنگ",
  Enname: "Yifeng",
  faname: "بادگیر",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "هفدهمین نقطه مریدین + یکی از مهم‌ترین نقاط برای گوش",
  location: "پشت لاله گوش، در فرورفتگی بین استخوان ماستوئید و فک",
  pressureAngle: "مایل به سمت گوش (۱۵ درجه)",
  pressureAmount: "۱-۲ (بسیار ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای وزوز گوش و عفونت گوش میانی",
  imageUrl: "assets/images/te/te17.jpg",
  desc: `
عفونت گوش  
کاهش شنوایی  
فلج بل (صورت)  
`,
  descrip: "بازکننده مسیر انرژی گوش و صورت",
  descExtra: "حساسیت بالا؛ فشار ملایم اعمال شود",
  supplementary: "با SI19 و GB2 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه معجزه‌آسای گوش"
},
{
  category: "TE",
  id: "TE18",
  name: "TE18 Qimai چی مای",
  Enname: "Qimai",
  faname: "شریان هوشیاری",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "هجدهمین نقطه مریدین، نقطه ظریف برای هوشیاری",
  location: "پشت لاله گوش، در بالای TE17 (بین گوش و مو)",
  pressureAngle: "عمود با فشار سطحی",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲-۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای غش کردن و کاهش هوشیاری",
  imageUrl: "assets/images/te/te18.jpg",
  desc: `
غش کردن  
کم‌هوشیاری  
میگرن  
`,
  descrip: "احیاء‌کننده هوشیاری در موارد اورژانسی",
  descExtra: "معمولاً با روغن نعنا تحریک می‌شود",
  supplementary: "با GV26 و PC8 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اورژانس عصبی"
},
{
  category: "TE",
  id: "TE19",
  name: "TE19 Luxi لو شی",
  Enname: "Luxi",
  faname: "سکوت گوش",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "نوزدهمین نقطه مریدین، نقطه آرامش گوش",
  location: "بالای لاله گوش، در فرورفتگی بالای TE18",
  pressureAngle: "مایل به سمت پوست (۱۰ درجه)",
  pressureAmount: "۱ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای حساسیت به صدا و تحریک‌پذیری",
  imageUrl: "assets/images/te/te19.jpg",
  desc: `
حساسیت به صدا  
تحریک‌پذیری عصبی  
بی‌خوابی  
`,
  descrip: "تنظیم‌کننده حساسیت‌های حسی",
  descExtra: "برای کودکان اوتیسم مفید است",
  supplementary: "با HT7 و Yintang ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کاهش حساسیت‌های عصبی"
},
{
  category: "TE",
  id: "TE20",
  name: "TE20 Jiaosun جیائو سان",
  Enname: "Jiaosun",
  faname: "گوشه شبکه",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "بیستمین نقطه مریدین، نقطه تقاطع با مریدین معده",
  location: "بالای گوش، در محل اتصال لاله گوش به سر",
  pressureAngle: "مایل به سمت پوست سر (۲۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردردهای گیجگاهی",
  imageUrl: "assets/images/te/te20.jpg",
  desc: `
سردرد گیجگاهی  
جوش صورت  
التهاب لثه  
`,
  descrip: "پاک‌کننده گرما از سر و صورت",
  descExtra: "برای آکنه هورمونی مؤثر است",
  supplementary: "با ST44 و LI11 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه پاکسازی پوست"
},
{
  category: "TE",
  id: "TE21",
  name: "TE21 Ermen ار من",
  Enname: "Ermen",
  faname: "دروازه گوش",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "بیست‌ویکمین نقطه مریدین، نقطه ورود انرژی به گوش",
  location: "جلوی گوش، در فرورفتگی بالای تراگوس (برجستگی غضروفی گوش)",
  pressureAngle: "مایل به سمت گوش (۱۵ درجه)",
  pressureAmount: "۱ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای عفونت‌های مکرر گوش",
  imageUrl: "assets/images/te/te21.jpg",
  desc: `
عفونت گوش  
گرفتگی شیپور استاش  
کاهش شنوایی  
`,
  descrip: "محافظ گوش در برابر عفونت‌ها",
  descExtra: "در کودکان با سابله اوتیت مدیا مؤثر است",
  supplementary: "با SI19 و GB2 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/te21.png",
      main: "نقطه پیشگیری از عفونت گوش"
},
{
  category: "TE",
  id: "TE22",
  name: "TE22 Erheliao ار هه لیائو",
  Enname: "Erheliao",
  faname: "هماهنگی گوش",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "بیست‌ودومین نقطه مریدین، نقطه تنظیم فشار گوش",
  location: "بالای TE21، در فرورفتگی بالای گوش (نزدیک شقیقه)",
  pressureAngle: "مایل به سمت استخوان (۲۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای فشار گوش (مثل پرواز یا غواصی)",
  imageUrl: "assets/images/te/te22.jpg",
  desc: `
فشار گوش  
سرگیجه  
استرس  
`,
  descrip: "تنظیم‌کننده فشار گوش داخلی و خارجی",
  descExtra: "برای غواصان و خلبانان توصیه می‌شود",
  supplementary: "با GB20 و GV24.5 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه تعادل فشار گوش"
},
{
  category: "TE",
  id: "TE23",
  name: "TE23 Sizhukong سی جو کونگ",
  Enname: "Sizhukong",
  faname: "حفره نخلی",
  meridian: "Triple Energizer Meridian (TE)",
  Fameridian: "مریدین سه‌گرم‌کننده",
  description: "بیست‌وسومین نقطه مریدین + آخرین نقطه مریدین سه‌گرم‌کننده",
  location: "در انتهای ابرو (سمت خارجی)، در فرورفتگی استخوانی",
  pressureAngle: "مایل به سمت استخوان (۱۰ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲-۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردردهای پیشانی و چشم‌درد",
  imageUrl: "assets/images/te/te23.jpg",
  desc: `
سردرد پیشانی  
خستگی چشم  
آبریزش چشم  
`,
  descrip: "آرام‌بخش چشم و پیشانی",
  descExtra: "برای سینوزیت هم کاربرد دارد",
  supplementary: "با BL2 و GB14 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/te23.png",
      main: "نقطه پایان‌دهنده مریدین"
},

// ==============================================  LR   ===============================================

{
category: "LR",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

مسیر مریدین کبد به شرح زیر است:

1. شروع از ناحیه مودار انگشت اول پا (LR1).  
2. صعود در امتداد لبه فوقانی پشت پا (LR2، LR3).  
3. عبور از یکسونپایین‌تر از قوزک داخلی و صعود (LR4، SP6، LR5، LR6).  
4. در فاصله هشتسونبالاتر از قوزک داخلی (حوالی SP8).  
5. تقاطع در پشت مریدین طحال و خروج از آنجا (LR7).  
6. صعود به سمت بالا در امتداد سطح داخلی حفره پشت زانو (LR8).  
7. صعود در امتداد سطح داخلی ران (LR9، LR10، LR11).  
8. ورود به ناحیه کشاله ران (SP12، SP13، LR12).  
9. چرخش در اطراف ناحیه تناسلی (CV2).  
10. صعود به ناحیه تحتانی شکم (CV3، CV4).  
11. صعود و حرکت در امتداد معده.  
12. ورود به کبد.  
13. ادغام با کیسه صفرا.  
14. صعود و نفوذ به دیافراگم.  
15. انشعاب در اطراف عضلات بین‌دنده‌ای (LR12، LR13، GB24، GB22، LU2).  
16. صعود در امتداد لبه خلفی حلق و حنجره.  
17. ورود به ناحیه لوزه‌ها (لوزه کامی، ناحیه بین گلو).  
18. صعود و اتصال به خط مریدین بینایی.  
19. خروج از پیشانی (سطح خارجی به سمت GB14، GB15).  
20. ملاقات با مریدین GV در نقطه برجستگی پیشانی (GV20).  
21. یکی از شاخه‌ها،  
22. نزول از خط مریدین بینایی و حرکت به سمت داخل گونه.  
23. چرخش در اطراف لب و تقاطع با هر دو طرف مریدین در اطراف لب.  
24. شاخه دیگر،  
25. جدا شدن از کبد.  
26. نفوذ جداگانه به دیافراگم.  
27. صعود و ورود به ریه.


مسیر انشعاب مریدین کبد به شرح زیر است:

1. انشعاب مریدین کبد،  
2. جدا شدن از پشت پا.  
3. صعود و رسیدن به ناحیه موهای شرمگاهی.  
4. یکی شدن با انشعاب مریدین کیسه صفرا.  
5. حرکت جداگانه به‌صورت مشترک.

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
    {
      category: "LR",
      Enname: "",
      faname: "",
      meridian: "",
      Fameridian: "",
      id: "",
      name: "",
      description: "",
      location: "",
      pressureAngle: "",
      pressureAmount: "",
      repetitions: "",
      time: "",
      extra: "",
      imageUrl: "",
      desc: `
برای کبد آتشین: LR2 + GB13 + LI4

برای افسردگی: LR14 + CV17

برای پریود دردناک: LR8 + SP6
      `,
      descrip: "",
      descExtra: "",
      supplementary: "",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
    },

{
  category: "LR",
  id: "LR1",
  name: "LR1 Dadun دا دون",
  Enname: "Dadun",
  faname: "بزرگ‌ترین بارگاه",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "اولین نقطه مریدین کبد + نقطه چاه (Well Point)",
  location: "روی انگشت شست پا، ۰.۱ سون از گوشه ناخن (سمت داخلی)",
  pressureAngle: "مایل به سمت مرکز انگشت (۱۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای بیهوشی، اضطراب شدید و خونریزی رحمی",
  imageUrl: "assets/images/lr/lr1.jpg",
  desc: `
احیای هوشیاری  
قطع خونریزی‌های غیرطبیعی  
رفع اضطراب حاد
`,
  descrip: "نقطه اضطراری برای بازگرداندن هوشیاری",
  descExtra: "در طب سوزنی برای چرخش جنین استفاده می‌شود",
  supplementary: "با GV26 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه چاه (Well Point) مریدین کبد"
},
{
  category: "LR",
  id: "LR2",
  name: "LR2 Xingjian شینگ جیان",
  Enname: "Xingjian",
  faname: "دره گذر",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "دومین نقطه مریدین کبد + نقطه چشمه (Spring Point)",
  location: "بین انگشتان اول و دوم پا، در ابتدای وب (پایین‌تر از LR3)",
  pressureAngle: "مایل به سمت بالا (۳۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای کاهش گرمای کبد، سردرد و فشار چشم",
  imageUrl: "assets/images/lr/lr2.jpg",
  desc: `
پاکسازی گرمای کبد  
کاهش قرمزی و درد چشم  
تسکین سردردهای طرفین سر
`,
  descrip: "نقطه پاک‌کننده آتش کبد",
  descExtra: "برای کهیر و آلرژی‌های پوستی نیز مؤثر است",
  supplementary: "با GB20 و LI4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه چشمه (Spring Point) مریدین کبد"
},
{
  category: "LR",
  id: "LR3",
  name: "LR3 Taichong تای چونگ",
  Enname: "Taichong",
  faname: "دریای بزرگ",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "سومین نقطه مریدین کبد + نقطه اصلی (Source Point) این مریدین",
  location: "بین انگشتان اول و دوم پا، در فرورفتگی قبل از اتصال استخوان‌های متاتارس",
  pressureAngle: "عمودی یا مایل به سمت بالا (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردردهای میگرنی، فشار خون و استرس",
  imageUrl: "assets/images/lr/lr3.jpg",
  desc: `
تنظیم کننده کبد  
کاهش استرس و اضطراب  
تسکین سردردهای میگرنی  
تنظیم فشار خون

اعمال Liver کبد (LR Liv LV)  را در جریان افزایش جریان آزاد انرژی و گردش خون تنظیم کرده
به کبد(طی انبار کردن خون) کمک کرده
درمان میگرن
مشکلات مربوط به قاعدگی
اختلالات هضمی
تحریک پذیری
و بی خوابی مورد استفاده قرار میگیرد.
`,
  descrip: "تنظیم‌کننده انرژی کبد و آرام‌بخش عمومی",
  descExtra: "برای مشکلات قاعدگی و PMS نیز مؤثر است",
  supplementary: "با LI4 و GB20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/lr3.png",
      main: "نقطه منبع (Source Point) مریدین کبد"
},
{
  category: "LR",
  id: "LR4",
  name: "LR4 Zhongfeng ژونگ فنگ",
  Enname: "Zhongfeng",
  faname: "قله میانی",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "چهارمین نقطه مریدین کبد + نقطه رودخانه (River Point)",
  location: "قوزک داخلی پا، در فرورفتگی جلوی تاندون آشیل",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای کمر و زانو، تکرر ادرار",
  imageUrl: "assets/images/lr/lr4.jpg",
  desc: `
رفع سفتی کمر  
تنظیم ادرار  
کاهش دردهای تناسلی
`,
  descrip: "نقطه تنظیم‌کننده عملکرد ادراری-تناسلی",
  descExtra: "در طب چینی برای ناباروری استفاده می‌شود",
  supplementary: "با KI3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه رودخانه (River Point) مریدین کبد"
},
{
  category: "LR",
  id: "LR5",
  name: "LR5 Ligou لی گو",
  Enname: "Ligou",
  faname: "کانال کرم‌مانند",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "پنجمین نقطه مریدین کبد + نقطه ارتباطی (Luo Point)",
  location: "۵ سون بالای قوزک داخلی، کنار استخوان تیبیا",
  pressureAngle: "مایل به سمت استخوان (۴۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای خارش پوست، درد بیضه و مشکلات زنانگی",
  imageUrl: "assets/images/lr/lr5.jpg",
  desc: `
رفع خارش ژنیتال  
تنظیم ترشحات واژن  
تسکین درد بیضه
`,
  descrip: "نقطه مخصوص مشکلات دستگاه تناسلی",
  descExtra: "برای اگزما و کهیر نیز استفاده می‌شود",
  supplementary: "با SP6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه ارتباطی (Luo Point) مریدین کبد"
},
{
  category: "LR",
  id: "LR6",
  name: "LR6 Zhongdu ژونگ دو",
  Enname: "Zhongdu",
  faname: "پایتخت میانی",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "ششمین نقطه مریدین کبد + نقطه شکاف (Cleft Point)",
  location: "۷ سون بالای قوزک داخلی، کنار استخوان تیبیا",
  pressureAngle: "مایل به سمت استخوان (۶۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۴ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای درد حاد کمر و بی‌قراری کبدی",
  imageUrl: "assets/images/lr/lr6.jpg",
  desc: `
تسکین دردهای ناگهانی کمر  
رفع بی‌قراری و تحریک‌پذیری  
کاهش تورم زانو
`,
  descrip: "نقطه مخصوص شرایط حاد و درد ناگهانی",
  descExtra: "برای کولیک صفراوی نیز استفاده می‌شود",
  supplementary: "با GB34 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/lr3.png",
      main: "نقطه شکاف (Cleft Point) مریدین کبد"
},
{
  category: "LR",
  id: "LR7",
  name: "LR7 Xiguan شی گوان",
  Enname: "Xiguan",
  faname: "دروازه زانو",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "هفتمین نقطه مریدین کبد",
  location: "پشت زانو (سمت داخلی)، در فرورفتگی زیر کندیل داخلی تیبیا",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۲-۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آرتروز زانو و خشکی مفاصل",
  imageUrl: "assets/images/lr/lr7.jpg",
  desc: `
نرم‌کننده زانو  
کاهش خشکی مفاصل  
بهبود گردش خون موضعی
`,
  descrip: "نقطه مخصوص مشکلات زانو",
  descExtra: "در طب سوزنی با سوزن‌گذاری عمقی استفاده می‌شود",
  supplementary: "با ST36 و GB34 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای زانو"
},
{
  category: "LR",
  id: "LR8",
  name: "LR8 Ququan چو چوان",
  Enname: "Ququan",
  faname: "چشمه خمیده",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "هشتمین نقطه مریدین کبد + نقطه دریا (Sea Point)",
  location: "انتهای چین خمیده زانو (سمت داخلی)، در فرورفتگی",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای خارش ناحیه تناسلی و کمبود خون کبد",
  imageUrl: "assets/images/lr/lr8.jpg",
  desc: `
تغذیه خون کبد  
رفع خشکی واژن  
کاهش خارش ژنیتال
`,
  descrip: "نقطه تغذیه‌کننده خون کبد",
  descExtra: "برای ناباروری ناشی از کمبود خون کبد استفاده می‌شود",
  supplementary: "با SP6 و KI3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/lr8.png",
      main: "نقطه دریا (Sea Point) مریدین کبد"
},
{
  category: "LR",
  id: "LR9",
  name: "LR9 Yinbao یین بائو",
  Enname: "Yinbao",
  faname: "بسته یین",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "نهمین نقطه مریدین کبد",
  location: "۴ سون بالای زانو (سمت داخلی ران)، بین عضلات سارتوریوس و گراسیلیس",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای احتباس ادرار و دردهای قاعدگی",
  imageUrl: "assets/images/lr/lr9.jpg",
  desc: `
ادرارآور  
کاهش دردهای قاعدگی  
رفع تنش عضلانی ران
`,
  descrip: "نقطه تنظیم‌کننده ادرار و قاعدگی",
  descExtra: "برای تکرر ادرار شبانه نیز مؤثر است",
  supplementary: "با BL28 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای ران و لگن"
},
{
  category: "LR",
  id: "LR10",
  name: "LR10 Zuwuli زو وو لی",
  Enname: "Zuwuli",
  faname: "پنج مایلی پا",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "دهمین نقطه مریدین کبد",
  location: "۳ سون زیر کشاله ران، کنار شریان فمورال",
  pressureAngle: "مایل به سمت شریان (۱۵ درجه)",
  pressureAmount: "۱ (بسیار ملایم - خطر خونریزی)",
  repetitions: "۱-۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای خارش شدید پوست و کهیر",
  imageUrl: "assets/images/lr/lr10.jpg",
  desc: `
پاکسازی گرمای خون  
رفع کهیر و اگزما  
کاهش خارش عمومی پوست
`,
  descrip: "نقطه مخصوص بیماری‌های پوستی با منشأ کبدی",
  descExtra: "فشار ملایم به دلیل نزدیکی به شریان اصلی",
  supplementary: "با SP10 و LI11 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اختصاصی پوست‌های آلرژیک"
},
{
  category: "LR",
  id: "LR11",
  name: "LR11 Yinlian یین لیان",
  Enname: "Yinlian",
  faname: "درگاه یین",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "یازدهمین نقطه مریدین کبد",
  location: "۲ سون زیر LR12، در ناحیه کشاله ران",
  pressureAngle: "مایل به سمت داخل (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای ترشحات واژینال و درد بیضه",
  imageUrl: "assets/images/lr/lr11.jpg",
  desc: `
تنظیم ترشحات زنانه  
کاهش دردهای تناسلی مردانه  
تعادل رطوبت ناحیه تناسلی
`,
  descrip: "نقطه تنظیم‌کننده رطوبت و ترشحات",
  descExtra: "برای عفونت‌های قارچی واژن نیز استفاده می‌شود",
  supplementary: "با SP9 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای ناحیه اینگوینال"
},
{
  category: "LR",
  id: "LR12",
  name: "LR12 Jimai جی مای",
  Enname: "Jimai",
  faname: "رگ فورانی",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "دوازدهمین نقطه مریدین کبد",
  location: "کنار پایه آلت تناسلی (در مردان) یا لب بزرگ (در زنان)، کنار شریان",
  pressureAngle: "مایل به سمت شریان (۱۰ درجه)",
  pressureAmount: "۱ (فشار غیرمستقیم - خطر خونریزی)",
  repetitions: "۱ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای فتق و دردهای ناحیه ژنیتال",
  imageUrl: "assets/images/lr/lr12.jpg",
  desc: `
رفع فتق اینگوینال  
تسکین دردهای ناحیه تناسلی  
بهبود گردش خون موضعی
`,
  descrip: "نقطه مخصوص شرایط حاد ناحیه ژنیتال",
  descExtra: "در طب سوزنی با احتیاط فراوان استفاده می‌شود",
  supplementary: "با CV3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اورژانسی ناحیه تناسلی"
},
{
  category: "LR",
  id: "LR13",
  name: "LR13 Zhangmen ژانگ من",
  Enname: "Zhangmen",
  faname: "دروازه متورم",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "سیزدهمین نقطه مریدین کبد + نقطه اتصال کبد (Front Mu Point)",
  location: "انتهای دنده شناور (دنده ۱۱)، در خط زیربغلی",
  pressureAngle: "مایل به سمت داخل (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای نفخ شکم، سندروم روده تحریک‌پذیر و افسردگی",
  imageUrl: "assets/images/lr/lr13.jpg",
  desc: `
تنظیم عملکرد کبد و طحال  
کاهش نفخ و سوءهاضمه  
رفع افسردگی ناشی از stagnation کبد
`,
  descrip: "نقطه کلیدی برای اختلالات کبدی-طحالی",
  descExtra: "یکی از مهم‌ترین نقاط برای روان‌درمانی در طب چینی",
  supplementary: "با CV12 و SP6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اتصال کبد (Front Mu Point)"
},
{
  category: "LR",
  id: "LR14",
  name: "LR14 Qimen چی من",
  Enname: "Qimen",
  faname: "دروازه دوره",
  meridian: "Liver Meridian (LR)",
  Fameridian: "مریدین کبد",
  description: "چهاردهمین نقطه مریدین کبد + نقطه اتصال کبد (Front Mu Point)",
  location: "زیر نوک پستان، در فضای بین دنده‌ای ششم و هفتم",
  pressureAngle: "مایل به سمت دنده (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای افسردگی، درد هیپوکندریوم و هپاتیت",
  imageUrl: "assets/images/lr/lr14.jpg",
  desc: `
رفع استرس و خشم فروخورده  
تسکین درد زیر دنده‌ها  
بهبود عملکرد کبد در هپاتیت
`,
  descrip: "نقطه روان‌درمانی مریدین کبد",
  descExtra: "برای سندروم پیش از قاعدگی (PMS) بسیار مؤثر است",
  supplementary: "با GB24 و CV17 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه نهایی مریدین کبد + نقطه اتصال (Mu Point)"
},

// ==============================================  GB   ===============================================

{
category: "GB",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

مسیر مریدین کیسه صفرا به شرح زیر است:

1. شروع از گوشه خارجی چشم (GB1).  
2. صعود به گوشه پیشانی (GB2، GB3، ST8، GB4).  
3. نزول به ناحیه پشت‌گوشی (GB6، GB7، GB8، GB9، TE21، GB10، GB11، GB12، GB13، GB14، GB15، GB16، GB17، GB18، GB19، GB20).  
4. نزول در امتداد گردن (TE16).  
5. عبور از جلوی مریدین سه‌گانه انرژی‌زا.  
6. رسیدن به شانه (GB21).  
7. تقاطع در پشت مریدین سه‌گانه انرژی‌زا و ظهور در آنجا (GV14، BL11، SI12).  
8. ورود به گیول‌بون (ST12).  
9. یکی از شاخه‌ها،  
10. جدا شدن از ناحیه پشت‌گوشی و ورود به گوش (GB20، GB12، TE17).  
11. خروج از ناحیه پیش‌گوشی (SI19، TE21، TE22).  
12. رسیدن به گوشه خارجی چشم (GB1).  
13. شاخه دیگر،  
14. جدا شدن از گوشه خارجی چشم (GB1).  
15. نزول به دایئونگ (ST5).  
16. همگرایی با مریدین سه‌گانه انرژی‌زا.  
17. رسیدن به استخوان گونه (SI18).  
18. نزول و عبور از هیوپ‌گو (ST6).  
19. نزول در امتداد گردن.  
20. ادغام با شاخه اصلی در گیول‌بون (ST12).  
21. ادامه نزول.  
22. نفوذ به دیافراگم.  
23. ملاقات با کبد (LR14).  
24. ورود به کیسه صفرا.  
25. نزول در امتداد انتهای آزاد دنده‌ها (GB24، LR13).  
26. خروج از ناحیه کشاله ران (ST30).  
27. چرخش در اطراف موهای شرمگاهی.  
28. حرکت عرضی و ورود به ناحیه باسن (GB30).  
29. شاخه مستقیم،  
30. نزول در امتداد خط زیر بغل (ST12، GB22).  
31. در امتداد قفسه سینه (GB23، PC1، GB24).  
32. عبور از ناحیه زیر دنده‌ای (GB25).  
33. نزول و ادغام (با شاخه ذکر شده قبلی) در ناحیه باسن (GB26، GB27، GB28، GB29، BL31، BL32، BL33، BL34، GB30).  
34. نزول در امتداد سمت خارجی ران (GB31، GB32).  
35. خروج از لبه خارجی کشکک زانو (GB33).  
36. خروج از جلوی سر استخوان نازک‌نی.  
37. نزول مستقیم (GB34، GB35، GB36، GB37).  
38. چرخش در اطراف استخوان شکسته (هیون‌جونگ) (GB38، GB39).  
39. نزول و خروج از جلوی قوزک خارجی (GB40).  
40. در امتداد پشت پا (GB41، GB42، GB43).  
41. خروج از بین انگشت چهارم و پنجم پا (GB44).  
42. شاخه دیگر،  
43. جدا شدن به‌صورت متفاوت از پشت پا (GB41).  
44. ورود بین انگشت اول و دوم پا.  
45. در امتداد داخل استخوان اول کف پا.  
46. خروج از انتهای آن.  
47. بازگشت و نفوذ به پاشنه.  
48. خروج از سه موی انگشت اول پا (LR1).



مسیر انشعاب مریدین کیسه صفرا به شرح زیر است:

1. انشعاب مریدین کیسه صفرا،  
2. چرخش در اطراف استخوان ران.  
3. ورود به ناحیه موهای شرمگاهی.  
4. یکی شدن با انشعاب مریدین کبد.  
5. شاخه‌ای که از اینجا جدا می‌شود،  
6. حرکت به سمت ناحیه زیر دنده‌ای (هیپوکندریاک).  
7. در امتداد سمت داخلی قفسه سینه.  
8. ترکیب با کیسه صفرا.  
9. پراکنده شدن در کبد.  
10. صعود و نفوذ به قلب.  
11. صعود و حرکت در امتداد حلق و حنجره.  
12. ظهور از این ناحیه.  
13. پراکندگی در صورت.  
14. اتصال به خط مریدین بینایی.  
15. یکی شدن با مریدین کیسه صفرا در گوشه خارجی چشم.

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
  category: "GB",
  Enname: "",
  faname: "",
  meridian: "",
  Fameridian: "",
  id: "",
  name: "",
  description: "",
  location: "",
  pressureAngle: "",
  pressureAmount: "",
  repetitions: "",
  time: "",
  extra: "",
  imageUrl: "",
  desc: `
میگرن:

GB41 + GB20 + LI4

اختلالات بینایی:

GB37 + BL1 + GB1

دردهای قاعدگی:

GB41 + SP6 + LV3
سنگ کیسه صفرا:

GB24 + GB34 + LR3

سیاتیک:

GB30 + BL40 + GB34

ترشحات واژینال:

GB26 + SP6 + CV4
میگرن:

GB5 + GB8 + GB20

اضطراب:

GB13 + HT7 + Yintang

فلج بل:

GB14 + ST4 + LI4
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
  category: "GB",
  id: "GB1",
  name: "GB1 Tongziliao تونگ زی لیائو",
  Enname: "Tongziliao",
  faname: "حفره مردمک",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "اولین نقطه مریدین کیسه صفرا + نقطه شروع مریدین",
  location: "۰.۵ سون خارج از گوشه خارجی چشم، در فرورفتگی استخوانی",
  pressureAngle: "مایل به سمت استخوان (۱۰ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲-۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای قرمزی چشم، سردردهای شقیقه و تاری دید",
  imageUrl: "assets/images/gb/gb1.jpg",
  desc: `
التهاب ملتحمه  
سردردهای تمپورال  
پرش پلک
`,
  descrip: "نقطه کلیدی برای اختلالات چشم و سر",
  descExtra: "در طب سوزنی با سوزن‌های بسیار نازک کار می‌شود",
  supplementary: "با TE23 و BL2 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gb1.png",
      main: "نقطه آغازین مریدین کیسه صفرا"
},
{
  category: "GB",
  id: "GB2",
  name: "GB2 Tinghui تینگ هوی",
  Enname: "Tinghui",
  faname: "گردهمایی شنوایی",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "دومین نقطه مریدین کیسه صفرا",
  location: "جلوی تراگوس گوش، در فرورفتگی وقتی دهان باز است",
  pressureAngle: "مایل به سمت گوش (۱۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای وزوز گوش، کاهش شنوایی و دندان‌درد",
  imageUrl: "assets/images/gb/gb2.jpg",
  desc: `
کاهش صدای زنگ گوش  
دردهای فک و دندان  
عفونت گوش
`,
  descrip: "نقطه اصلی برای اختلالات گوش",
  descExtra: "برای سرگیجه همراه با تهوع نیز مؤثر است",
  supplementary: "با SI19 و TE21 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gb2.png",
      main: "نقطه موضعی گوش و فک"
},
{
  category: "GB",
  id: "GB3",
  name: "GB3 Shangguan شانگ گوان",
  Enname: "Shangguan",
  faname: "دروازه بالایی",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سومین نقطه مریدین کیسه صفرا",
  location: "بالای زائده زیگوماتیک، در فرورفتگی جلوی گوش",
  pressureAngle: "مایل به سمت استخوان (۲۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای میگرن، فلج بل و دندان‌قروچه",
  imageUrl: "assets/images/gb/gb3.jpg",
  desc: `
سردردهای شقیقه‌ای  
اسپاسم عضلات فک  
فلج صورت
`,
  descrip: "نقطه آرام‌بخش عضلات فک و صورت",
  descExtra: "برای TMJ (اختلال مفصل فکی-گیجگاهی) استفاده می‌شود",
  supplementary: "با GB20 و ST6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای سر و فک"
},
{
  category: "GB",
  id: "GB4",
  name: "GB4 Hanyan هان یان",
  Enname: "Hanyan",
  faname: "کناره سر",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "چهارمین نقطه مریدین کیسه صفرا",
  location: "در خط موی شقیقه، بین GB3 و GB5",
  pressureAngle: "مایل به سمت پوست (۱۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرگیجه و سردردهای یک طرفه",
  imageUrl: "assets/images/gb/gb4.jpg",
  desc: `
میگرن یک طرفه  
سرگیجه چرخشی  
تهوع عصبی
`,
  descrip: "نقطه تنظیم‌کننده انرژی سر",
  descExtra: "برای سندروم منییر (Meniere's disease) مفید است",
  supplementary: "با GB20 و PC6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص سرگیجه و میگرن"
},
{
  category: "GB",
  id: "GB5",
  name: "GB5 Xuanlu شوان لو",
  Enname: "Xuanlu",
  faname: "تعلیق سر",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "پنجمین نقطه مریدین کیسه صفرا",
  location: "در خط موی شقیقه، بین GB4 و GB6",
  pressureAngle: "مایل به سمت پوست (۱۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای میگرن و سرگیجه همراه با تهوع",
  imageUrl: "assets/images/gb/gb5.jpg",
  desc: `
سردرد یک طرفه  
تهوع ناشی از میگرن  
سرگیجه چرخشی
`,
  descrip: "نقطه آرام‌بخش سر و معده",
  descExtra: "برای سندروم حرکت (Motion Sickness) مفید است",
  supplementary: "با PC6 و GB20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص میگرن با تهوع"
},
{
  category: "GB",
  id: "GB6",
  name: "GB6 Xuanli شوان لی",
  Enname: "Xuanli",
  faname: "تعلیق کناره",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "ششمین نقطه مریدین کیسه صفرا",
  location: "در خط موی شقیقه، بین GB5 و GB7",
  pressureAngle: "مایل به سمت پوست (۱۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای وزوز گوش و سردردهای ضربان‌دار",
  imageUrl: "assets/images/gb/gb6.jpg",
  desc: `
صدای زنگ گوش  
سردردهای شقیقه‌ای  
تحریک‌پذیری عصبی
`,
  descrip: "نقطه تنظیم‌کننده انرژی سر و گوش",
  descExtra: "برای نورالژی عصب سه‌قلو نیز استفاده می‌شود",
  supplementary: "با GB2 و TE21 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای گوش و شقیقه"
},
{
  category: "GB",
  id: "GB7",
  name: "GB7 Qubin چو بین",
  Enname: "Qubin",
  faname: "انحنای شقیقه",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "هفتمین نقطه مریدین کیسه صفرا",
  location: "بالای گوش، در انحنای خط موی شقیقه",
  pressureAngle: "مایل به سمت پوست (۱۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سفتی گردن و اسپاسم عضلات سر",
  imageUrl: "assets/images/gb/gb7.jpg",
  desc: `
گرفتگی عضلات گردن  
سردردهای پس‌سری  
سرگیجه
`,
  descrip: "نقطه آزادکننده تنش عضلات سر و گردن",
  descExtra: "برای TMJ (مشکلات مفصل فکی-گیجگاهی) مؤثر است",
  supplementary: "با GB20 و BL10 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای گردن و سر"
},
{
  category: "GB",
  id: "GB8",
  name: "GB8 Shuaigu شوای گو",
  Enname: "Shuaigu",
  faname: "دره لرزان",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "هشتمین نقطه مریدین کیسه صفرا",
  location: "۴.۵ سون بالای گوش، در خط موی سر",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردردهای یک طرفه و استفراغ صفراوی",
  imageUrl: "assets/images/gb/gb8.jpg",
  desc: `
سردردهای تمپورال  
تهوع با طعم تلخ در دهان  
سرگیجه
`,
  descrip: "نقطه پاک‌کننده گرمای کیسه صفرا",
  descExtra: "برای میگرن با تهوع شدید استفاده می‌شود",
  supplementary: "با GB34 و PC6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص سردردهای صفراوی"
},
{
  category: "GB",
  id: "GB9",
  name: "GB9 Tianchong تیان چونگ",
  Enname: "Tianchong",
  faname: "فوران آسمانی",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "نهمین نقطه مریدین کیسه صفرا",
  location: "پشت گوش، در خط موی پشت سر",
  pressureAngle: "مایل به سمت استخوان (۲۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای وزوز گوش و ترس از صداهای بلند",
  imageUrl: "assets/images/gb/gb9.jpg",
  desc: `
حساسیت به صدا  
وزوز گوش  
سردردهای پشت سری
`,
  descrip: "نقطه آرام‌بخش سیستم شنوایی",
  descExtra: "برای اختلالات عصبی ناشی از استرس مؤثر است",
  supplementary: "با GB2 و SI19 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای گوش و اعصاب"
},
{
  category: "GB",
  id: "GB10",
  name: "GB10 Fubai فو بای",
  Enname: "Fubai",
  faname: "سفیدگر پنهان",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "دهمین نقطه مریدین کیسه صفرا",
  location: "پشت گوش، در بالای زائده ماستوئید",
  pressureAngle: "مایل به سمت استخوان (۲۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سنگینی سر و اختلالات شنوایی",
  imageUrl: "assets/images/gb/gb10.jpg",
  desc: `
سنگینی سر  
کاهش شنوایی  
ترشحات گوش
`,
  descrip: "نقطه پاک‌کننده رطوبت از سر و گوش",
  descExtra: "برای اوتیت میانی (عفونت گوش میانی) استفاده می‌شود",
  supplementary: "با GB2 و TE17 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای گوش و سر"
},
{
  category: "GB",
  id: "GB11",
  name: "GB11 Touqiaoyin تو چیائو یین",
  Enname: "Touqiaoyin",
  faname: "ورودی یین سر",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "یازدهمین نقطه مریدین کیسه صفرا",
  location: "پشت گوش، در فرورفتگی بالای GB10",
  pressureAngle: "مایل به سمت استخوان (۲۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردردهای پشت سری و خشکی چشم",
  imageUrl: "assets/images/gb/gb11.jpg",
  desc: `
سردردهای پس‌سری  
خشکی چشم  
گردن درد
`,
  descrip: "نقطه تغذیه‌کننده چشم و سر",
  descExtra: "برای سندروم خشکی چشم مؤثر است",
  supplementary: "با BL2 و GB20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص خشکی چشم و سر"
},
{
  category: "GB",
  id: "GB12",
  name: "GB12 Wangu وان گو",
  Enname: "Wangu",
  faname: "استخوان کامل",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "دوازدهمین نقطه مریدین کیسه صفرا",
  location: "پشت گوش، در فرورفتگی زیر استخوان پس‌سری",
  pressureAngle: "مایل به سمت استخوان (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرگیجه و سفتی عضلات گردن",
  imageUrl: "assets/images/gb/gb12.jpg",
  desc: `
سرگیجه  
گرفتگی گردن  
سردردهای پس‌سری
`,
  descrip: "نقطه آرام‌بخش گردن و سر",
  descExtra: "برای سرگیجه ناشی از فشار خون بالا مؤثر است",
  supplementary: "با GB20 و BL10 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای گردن و تعادل"
},
{
  category: "GB",
  id: "GB13",
  name: "GB13 Benshen بن شن",
  Enname: "Benshen",
  faname: "ریشه روح",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سیزدهمین نقطه مریدین کیسه صفرا + نقطه روان‌درمانی",
  location: "۱.۵ سون داخل خط موی پیشانی (بالای شقیقه)",
  pressureAngle: "مایل به سمت پایین (۱۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اضطراب، وسواس و کابوس‌های شبانه",
  imageUrl: "assets/images/gb/gb13.jpg",
  desc: `
اختلالات اضطرابی  
وسواس فکری  
کابوس‌های مکرر
`,
  descrip: "یکی از مهم‌ترین نقاط روان‌درمانی در طب چینی",
  descExtra: "برای اسکیزوفرنی و روان‌پریشی نیز استفاده می‌شود",
  supplementary: "با HT7 و Yintang ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای اختلالات روان‌تنی"
},
{
  category: "GB",
  id: "GB14",
  name: "GB14 Yangbai یانگ بای",
  Enname: "Yangbai",
  faname: "سفیدی یانگ",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "چهاردهمین نقطه مریدین کیسه صفرا",
  location: "۱ سون بالوی ابرو، در خط وسط مردمک چشم",
  pressureAngle: "مایل به سمت استخوان (۱۰ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲-۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای فلج بل، پرش پلک و سردرد پیشانی",
  imageUrl: "assets/images/gb/gb14.jpg",
  desc: `
فلج عصب صورت (Bell's Palsy)  
پرش پلک  
سردرد پیشانی
`,
  descrip: "نقطه کلیدی برای اختلالات عصب صورت",
  descExtra: "در طب سوزنی با الکتروآکوپانکچر استفاده می‌شود",
  supplementary: "با ST4 و LI4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gb14.png",
      main: "نقطه اصلی برای فلج بل"
},
{
  category: "GB",
  id: "GB15",
  name: "GB15 Toulinqi تو لین چی",
  Enname: "Toulinqi",
  faname: "باران سر",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "پانزدهمین نقطه مریدین کیسه صفرا",
  location: "۱.۵ سون پشت GB14، در خط موی پیشانی",
  pressureAngle: "مایل به سمت پوست (۱۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سینوزیت پیشانی و آبریزش چشم",
  imageUrl: "assets/images/gb/gb15.jpg",
  desc: `
سینوزیت پیشانی  
آبریزش چشم  
سردردهای سینوسی
`,
  descrip: "نقطه پاک‌کننده رطوبت از سر و سینوس‌ها",
  descExtra: "برای آلرژی‌های فصلی با آبریزش بینی مؤثر است",
  supplementary: "با BL2 و LI20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص سینوزیت و آلرژی"
},
{
  category: "GB",
  id: "GB16",
  name: "GB16 Muchuang مو چوانگ",
  Enname: "Muchuang",
  faname: "پنجره چشم",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "شانزدهمین نقطه مریدین کیسه صفرا",
  location: "۲.۵ سون پشت GB15، در خط موی پیشانی",
  pressureAngle: "مایل به سمت پوست (۱۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تاری دید و خستگی چشم",
  imageUrl: "assets/images/gb/gb16.jpg",
  desc: `
خستگی چشم  
تاری دید  
سردردهای چشمی
`,
  descrip: "نقطه تغذیه‌کننده چشم و عصب بینایی",
  descExtra: "برای گلوکوم (آب سیاه) همراه با BL1 استفاده می‌شود",
  supplementary: "با GB1 و BL2 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات بینایی"
},
{
  category: "GB",
  id: "GB17",
  name: "GB17 Zhengying ژنگ یینگ",
  Enname: "Zhengying",
  faname: "تعادل تغذیه",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "هفدهمین نقطه مریدین کیسه صفرا",
  location: "۳.۵ سون پشت GB16، در خط موی سر",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای استفراغ صفراوی و سردردهای شدید",
  imageUrl: "assets/images/gb/gb17.jpg",
  desc: `
تهوع با طعم تلخ  
سردردهای صفراوی  
تحریک‌پذیری عصبی
`,
  descrip: "نقطه پاک‌کننده گرمای کیسه صفرا",
  descExtra: "برای هپاتیت حاد با یرقان مؤثر است",
  supplementary: "با GB34 و LR3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات صفراوی"
},
{
  category: "GB",
  id: "GB18",
  name: "GB18 Chengling چنگ لینگ",
  Enname: "Chengling",
  faname: "دریافت روح",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "هجدهمین نقطه مریدین کیسه صفرا",
  location: "۴.۵ سون پشت GB17، در خط موی سر",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرگیجه و وزوز گوش",
  imageUrl: "assets/images/gb/gb18.jpg",
  desc: `
سرگیجه  
وزوز گوش  
کاهش شنوایی
`,
  descrip: "نقطه آرام‌بخش گوش و سر",
  descExtra: "برای بیماری منییر (Meniere's Disease) مؤثر است",
  supplementary: "با GB2 و GB20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات تعادل"
},
{
  category: "GB",
  id: "GB19",
  name: "GB19 Naokong نائو کونگ",
  Enname: "Naokong",
  faname: "حفره مغز",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "نوزدهمین نقطه مریدین کیسه صفرا",
  location: "۵.۵ سون پشت GB18، در خط موی سر",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردردهای شدید و تشنج",
  imageUrl: "assets/images/gb/gb19.jpg",
  desc: `
سردردهای میگرنی  
تشنج  
اضطراب شدید
`,
  descrip: "نقطه آرام‌بخش اعصاب مرکزی",
  descExtra: "برای صرع همراه با GV20 استفاده می‌شود",
  supplementary: "با GV20 و GB20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات عصبی شدید"
},


{
  category: "GB",
  id: "GB20",
  name: "GB20 Fengchi فنگ چی",
  Enname: "Fengchi",
  faname: "استخر باد",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "بیستمین نقطه مریدین کیسه صفرا + نقطه تلاقی با یانگ وی",
  location: "فرورفتگی بین عضلات استرنوکلیدوماستوئید و تراپزیوس، زیر استخوان پس‌سری",
  pressureAngle: "مایل به سمت بینی (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردرد، سرگیجه، فشار خون و سرماخوردگی",
  imageUrl: "assets/images/gb/gb20.jpg",
  desc: `
سردرد تنشی  
سرگیجه  
فشار خون بالا  
سرماخوردگی با تب
نفخ شکمی را بطرف کرده
جریان انرژی Liver کبد  (LR Liv LV) را آرام کرده
انرژی راکد را در سر توزیع میکند
درمان سردرد
سرماخوردگی
سینوزیت
تنش و احتقان سر مورد استفاده قرار میگیرد
`,
  descrip: "یکی از مهم‌ترین نقاط بدن برای اختلالات سر و گردن",
  descExtra: "فشار عمیق ممکن است باعث سرگیجه موقت شود",
  supplementary: "با LI4 و GB21 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gb20.png",
      main: "نقطه اصلی برای تمام اختلالات سر"
},
{
  category: "GB",
  id: "GB21",
  name: "GB21 Jianjing جیان جینگ",
  Enname: "Jianjing",
  faname: "چاه شانه",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "بیست‌ویکمین نقطه مریدین کیسه صفرا",
  location: "وسط شانه، بین نقطه بالای شانه و مهره C7",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "فشار 10",
  repetitions: "۲-۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سفتی گردن، استرس و زایمان تسهیلی",
  imageUrl: "assets/images/gb/gb21.jpg",
  desc: `
رفع سفتی گردن  
کاهش استرس و اضطراب  
تسهیل زایمان (در بارداری ممنوع!)
`,
  descrip: "نقطه خطرناک ولی مؤثر برای شانه و گردن",
  descExtra: "در بارداری به هیچ‌وجه فشار داده نشود (ریسک سقط)",
  supplementary: "با BL60 برای تسهیل زایمان ترکیب شود",
  
      boss:"رئیسه",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gb21.png",
      main: "نقطه ممنوعه در بارداری + ریلکس‌کننده قوی"
},
{
  category: "GB",
  id: "GB22",
  name: "GB22 Yuanye یوان یه",
  Enname: "Yuanye",
  faname: "بادگیر فراموش‌شده",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "بیست‌ودومین نقطه مریدین کیسه صفرا",
  location: "در خط زیربغلی، بین دنده‌های چهارم و پنجم",
  pressureAngle: "مایل به سمت دنده (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای قفسه سینه و سرفه‌های خشک",
  imageUrl: "assets/images/gb/gb22.jpg",
  desc: `
دردهای بین‌دنده‌ای  
سرفه‌های عصبی  
تنگی نفس
`,
  descrip: "نقطه آرام‌بخش قفسه سینه",
  descExtra: "برای پلورزی (درد جناغ) مؤثر است",
  supplementary: "با CV17 و LU1 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای قفسه سینه"
},
{
  category: "GB",
  id: "GB23",
  name: "GB23 Zhejin ژه جین",
  Enname: "Zhejin",
  faname: "تاندون جمع‌شده",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "بیست‌وسومین نقطه مریدین کیسه صفرا",
  location: "۱ سون جلوتر از GB22، بین دنده‌های چهارم و پنجم",
  pressureAngle: "مایل به سمت دنده (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای استفراغ صفراوی و دردهای هیپوکندریوم",
  imageUrl: "assets/images/gb/gb23.jpg",
  desc: `
تهوع با طعم تلخ  
درد زیر دنده‌ها  
سوءهاضمه صفراوی
`,
  descrip: "نقطه پاک‌کننده گرمای کیسه صفرا",
  descExtra: "برای کوله‌سیستیت (التهاب کیسه صفرا) مؤثر است",
  supplementary: "با GB34 و LR3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات کیسه صفرا"
},
{
  category: "GB",
  id: "GB24",
  name: "GB24 Riyue ری یو",
  Enname: "Riyue",
  faname: "خورشید و ماه",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "بیست‌وچهارمین نقطه مریدین کیسه صفرا + نقطه اتصال کیسه صفرا (Front Mu Point)",
  location: "زیر نوک پستان، در فضای بین‌دنده‌ای هفتم و هشتم",
  pressureAngle: "مایل به سمت دنده (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سنگ کیسه صفرا و زردی (یرقان)",
  imageUrl: "assets/images/gb/gb24.jpg",
  desc: `
سنگ کیسه صفرا  
یرقان (زردی پوست)  
دردهای هیپوکندریوم راست
`,
  descrip: "مهم‌ترین نقطه برای اختلالات کیسه صفرا",
  descExtra: "در طب سوزنی برای دفع سنگ کیسه صفرا استفاده می‌شود",
  supplementary: "با GB34 و LR14 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اتصال کیسه صفرا (Front Mu Point)"
},
{
  category: "GB",
  id: "GB25",
  name: "GB25 Jingmen جینگ من",
  Enname: "Jingmen",
  faname: "دروازه پایتخت",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "بیست‌وپنجمین نقطه مریدین کیسه صفرا + نقطه اتصال کلیه (Front Mu Point)",
  location: "انتهای دنده شناور (دنده دوازدهم)، در خط زیربغلی",
  pressureAngle: "مایل به سمت داخل (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای کمر، تکرر ادرار و نفخ",
  imageUrl: "assets/images/gb/gb25.jpg",
  desc: `
دردهای کلیوی  
تکرر ادرار  
نفخ شکم
`,
  descrip: "نقطه اتصال کلیه (با وجود قرارگیری روی مریدین کیسه صفرا)",
  descExtra: "برای عفونت‌های ادراری همراه با KI3 استفاده می‌شود",
  supplementary: "با BL23 و KI3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اتصال کلیه (Front Mu Point)"
},
{
  category: "GB",
  id: "GB26",
  name: "GB26 Daimai دای مای",
  Enname: "Daimai",
  faname: "کمربند مریدین",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "بیست‌وششمین نقطه مریدین کیسه صفرا + نقطه تلاقی با Dai Mai (مریدین کمربندی)",
  location: "در سطح ناف، در خط زیربغلی",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای ترشحات واژینال و دردهای قاعدگی",
  imageUrl: "assets/images/gb/gb26.jpg",
  desc: `
ترشحات سفید واژن  
دردهای قاعدگی  
نفخ شکم
`,
  descrip: "نقطه اصلی برای اختلالات سیستم تناسلی زنان",
  descExtra: "برای اندومتریوز همراه با SP6 استفاده می‌شود",
  supplementary: "با SP8 و CV4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه کلیدی برای سلامت زنان"
},
{
  category: "GB",
  id: "GB27",
  name: "GB27 Wushu وو شو",
  Enname: "Wushu",
  faname: "محور پنجم",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "بیست‌وهفتمین نقطه مریدین کیسه صفرا",
  location: "۲ سون پایین‌تر و جلوی GB26، روی لگن",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای فتق اینگوینال و دردهای لگنی",
  imageUrl: "assets/images/gb/gb27.jpg",
  desc: `
فتق کشاله ران  
دردهای لگنی  
ناباروری
`,
  descrip: "نقطه تقویت‌کننده انرژی لگن",
  descExtra: "برای پروستاتیت همراه با CV4 استفاده می‌شود",
  supplementary: "با GB26 و CV6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه مخصوص اختلالات لگنی"
},
{
  category: "GB",
  id: "GB28",
  name: "GB28 Weidao وی دائو",
  Enname: "Weidao",
  faname: "مسیر ارتباطی",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "بیست‌وهشتمین نقطه مریدین کیسه صفرا",
  location: "۱.۵ سون پایین‌تر و جلوی GB27، روی لگن",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای سیاتیک و بی‌اختیاری ادرار",
  imageUrl: "assets/images/gb/gb28.jpg",
  desc: `
سیاتیک  
بی‌اختیاری ادرار  
دردهای ران
`,
  descrip: "نقطه ارتباطی مریدین کیسه صفرا با لگن",
  descExtra: "برای نورالژی عصب سیاتیک مؤثر است",
  supplementary: "با GB30 و BL40 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای سیاتیک"
},
{
  category: "GB",
  id: "GB29",
  name: "GB29 Juliao جو لیائو",
  Enname: "Juliao",
  faname: "حفره استخوان نشیمنگاه",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "بیست‌ونهمین نقطه مریدین کیسه صفرا",
  location: "در جلوی برجستگی استخوان لگن (ASIS)، در فرورفتگی",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای مفصل ران و لنگش",
  imageUrl: "assets/images/gb/gb29.jpg",
  desc: `
آرتروز مفصل ران  
لنگش  
دردهای کشاله ران
`,
  descrip: "نقطه موضعی برای مفصل ران",
  descExtra: "برای کوکسارتروز (ساییدگی مفصل ران) مؤثر است",
  supplementary: "با GB30 و ST31 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای دردهای مفصل ران"
},
{
  category: "GB",
  id: "GB30",
  name: "GB30 Huantiao هوان تیائو",
  Enname: "Huantiao",
  faname: "پرش دایره‌ای",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سی‌امین نقطه مریدین کیسه صفرا + نقطه تلاقی با مریدین مثانه",
  location: "یک‌سوم خارجی خط بین برجستگی استخوان لگن (ASIS) و استخوان دنبالچه",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۴ (قوی)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سیاتیک، دردهای باسن و فلج اندام تحتانی",
  imageUrl: "assets/images/gb/gb30.jpg",
  desc: `
سیاتیک  
دردهای باسن  
فلج پا
`,
  descrip: "مهم‌ترین نقطه برای سیاتیک و دردهای لگنی",
  descExtra: "در طب سوزنی با سوزن‌گذاری عمیق استفاده می‌شود",
  supplementary: "با BL40 و GB34 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه طلایی برای درمان سیاتیک"
},
{
  category: "GB",
  id: "GB31",
  name: "GB31 Fengshi فنگ شی",
  Enname: "Fengshi",
  faname: "بازار باد",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سی‌ویکمین نقطه مریدین کیسه صفرا",
  location: "۷ سون بالای زانو، در خط خارجی ران",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای خارش پوست، کهیر و آرتروز زانو",
  imageUrl: "assets/images/gb/gb31.jpg",
  desc: `
خارش پوست  
کهیر  
دردهای ران و زانو
`,
  descrip: "نقطه مخصوص بیماری‌های پوستی با منشأ کبدی",
  descExtra: "برای اگزما همراه با SP10 استفاده می‌شود",
  supplementary: "با LI11 و SP10 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای پوست و ران"
},
{
  category: "GB",
  id: "GB32",
  name: "GB32 Zhongdu ژونگ دو",
  Enname: "Zhongdu",
  faname: "پایتخت میانی",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سی‌ودومین نقطه مریدین کیسه صفرا",
  location: "۵ سون بالای زانو، در خط خارجی ران",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای ران و بی‌حسی اندام تحتانی",
  imageUrl: "assets/images/gb/gb32.jpg",
  desc: `
دردهای ران  
بی‌حسی پاها  
اسپاسم عضلات ران
`,
  descrip: "نقطه موضعی برای ران و عصب فمورال",
  descExtra: "برای نوروپاتی دیابتی همراه با GB34 مؤثر است",
  supplementary: "با GB34 و ST36 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص دردهای ران"
},
{
  category: "GB",
  id: "GB33",
  name: "GB33 Xiyangguan شی یانگ گوان",
  Enname: "Xiyangguan",
  faname: "دروازه زانو",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سی‌وسومین نقطه مریدین کیسه صفرا",
  location: "در فرورفتگی بالای کندیل خارجی استخوان ران (بالای زانو)",
  pressureAngle: "مایل به سمت زانو (۴۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آرتروز زانو و خشکی مفصل",
  imageUrl: "assets/images/gb/gb33.jpg",
  desc: `
آرتروز زانو  
خشکی مفصل زانو  
دردهای طرفی زانو
`,
  descrip: "نقطه موضعی برای زانو",
  descExtra: "برای پارگی مینیسک همراه با GB34 استفاده می‌شود",
  supplementary: "با GB34 و ST35 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص آرتروز زانو"
},
{
  category: "GB",
  id: "GB34",
  name: "GB34 Yanglingquan یانگ لینگ چوان",
  Enname: "Yanglingquan",
  faname: "چشمه تپه یانگ",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سی‌وچهارمین نقطه مریدین کیسه صفرا + نقطه اتصال تاندون‌ها",
  location: "فرورفتگی جلو و زیر سر استخوان فیبولا (زیر زانو)",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۴ (قوی)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای عضلانی، آرتروز و اسپاسم",
  imageUrl: "assets/images/gb/gb34.jpg",
  desc: `
درد زانو  
اسپاسم عضلات ساق پا  
تنظیم کیسه صفرا
`,
  descrip: "مهم‌ترین نقطه برای اختلالات تاندون‌ها و عضلات",
  descExtra: "در طب چینی به عنوان «پانادول بدن» شناخته می‌شود!",
  supplementary: "با GB30 و BL60 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gb34.png",
      main: "نقطه اصلی برای دردهای عضلانی-تاندونی"
},
{
  category: "GB",
  id: "GB35",
  name: "GB35 Yangjiao یانگ جیائو",
  Enname: "Yangjiao",
  faname: "تقاطع یانگ",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سی‌وپنجمین نقطه مریدین کیسه صفرا + نقطه تلاقی با یانگ وی",
  location: "۷ سون بالای قوزک خارجی، در فرورفتگی پشت استخوان فیبولا",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اضطراب، بی‌خوابی و دردهای ساق پا",
  imageUrl: "assets/images/gb/gb35.jpg",
  desc: `
بی‌خوابی  
اضطراب  
دردهای ساق پا
`,
  descrip: "نقطه آرام‌بخش اعصاب و عضلات",
  descExtra: "برای سندروم پای بی‌قرار مؤثر است",
  supplementary: "با GB34 و SP6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات عصبی-عضلانی"
},
{
  category: "GB",
  id: "GB36",
  name: "GB36 Waiqiu وای چیو",
  Enname: "Waiqiu",
  faname: "تپه خارجی",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سی‌وششمین نقطه مریدین کیسه صفرا + نقطه شکاف (Cleft Point)",
  location: "۷ سون بالای قوزک خارجی، در فرورفتگی جلوی استخوان فیبولا",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای حاد ساق پا و فلج اندام تحتانی",
  imageUrl: "assets/images/gb/gb36.jpg",
  desc: `
دردهای ناگهانی ساق پا  
فلج پا  
اسپاسم عضلات
`,
  descrip: "نقطه مخصوص شرایط حاد و درد ناگهانی",
  descExtra: "برای سیاتیک حاد همراه با GB30 استفاده می‌شود",
  supplementary: "با GB34 و BL57 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه شکاف (Cleft Point) مریدین کیسه صفرا"
},
{
  category: "GB",
  id: "GB37",
  name: "GB37 Guangming گوانگ مینگ",
  Enname: "Guangming",
  faname: "نور درخشان",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سی‌وهفتمین نقطه مریدین کیسه صفرا + نقطه ارتباطی (Luo Point)",
  location: "۵ سون بالای قوزک خارجی، در لبه جلویی استخوان فیبولا",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات بینایی و تاری دید",
  imageUrl: "assets/images/gb/gb37.jpg",
  desc: `
تاری دید  
کاهش دید شبانه  
التهاب چشم
`,
  descrip: "نقطه اصلی برای اختلالات بینایی در مریدین کیسه صفرا",
  descExtra: "برای گلوکوم (آب سیاه) همراه با BL1 استفاده می‌شود",
  supplementary: "با BL1 و GB1 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gb37.png",
      main: "نقطه ارتباطی (Luo Point) مریدین کیسه صفرا"
},
{
  category: "GB",
  id: "GB38",
  name: "GB38 Yangfu یانگ فو",
  Enname: "Yangfu",
  faname: "کناره یانگ",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سی‌وهشتمین نقطه مریدین کیسه صفرا + نقطه رودخانه (River Point)",
  location: "۴ سون بالای قوزک خارجی، در فرورفتگی جلوی استخوان فیبولا",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای وزوز گوش و سردردهای شقیقه‌ای",
  imageUrl: "assets/images/gb/gb38.jpg",
  desc: `
وزوز گوش  
سردردهای یک طرفه  
دردهای شقیقه
`,
  descrip: "نقطه پاک‌کننده گرمای کیسه صفرا",
  descExtra: "برای میگرن همراه با GB20 مؤثر است",
  supplementary: "با GB2 و GB20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه رودخانه (River Point) مریدین کیسه صفرا"
},
{
  category: "GB",
  id: "GB39",
  name: "GB39 Xuanzhong شوان ژونگ",
  Enname: "Xuanzhong",
  faname: "آویز مرکزی",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "سی‌ونهمین نقطه مریدین کیسه صفرا + نقطه کلیدی برای مغز استخوان",
  location: "۳ سون بالای قوزک خارجی، در فرورفتگی پشت استخوان فیبولا",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تقویت مغز استخوان، آرتروز و درد مچ پا",
  imageUrl: "assets/images/gb/gb39.jpg",
  desc: `
آرتروز  
درد مچ پا  
ضعف عمومی
`,
  descrip: "نقطه اصلی برای تغذیه مغز استخوان در طب چینی",
  descExtra: "برای پوکی استخوان همراه با BL11 استفاده می‌شود",
  supplementary: "با BL11 و GB34 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای استخوان‌ها و مغز استخوان"
},
{
  category: "GB",
  id: "GB40",
  name: "GB40 Qiuxu چیو شو",
  Enname: "Qiuxu",
  faname: "تپه ویرانه",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "چهلمین نقطه مریدین کیسه صفرا + نقطه منبع (Source Point)",
  location: "جلوی قوزک خارجی، در فرورفتگی کنار تاندون اکستانسور",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای درد مچ پا، التهاب و اختلالات کیسه صفرا",
  imageUrl: "assets/images/gb/gb40.jpg",
  desc: `
تنظیم عملکرد کیسه صفرا  
درد مچ پا  
سردردهای شقیقه‌ای
`,
  descrip: "نقطه منبع مریدین کیسه صفرا",
  descExtra: "برای سنگ کیسه صفرا همراه با GB34 استفاده می‌شود",
  supplementary: "با LR3 و GB34 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gb40.png",
      main: "نقطه منبع (Source Point) مریدین کیسه صفرا"
},
{
  category: "GB",
  id: "GB41",
  name: "GB41 Zulinqi زو لین چی",
  Enname: "Zulinqi",
  faname: "نهر اشک‌آور پا",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "چهل‌ویکمین نقطه مریدین کیسه صفرا + نقطه شروع مریدین Dai Mai",
  location: "در فرورفتگی بین استخوان‌های چهارم و پنجم پا، جلوی مفصل",
  pressureAngle: "مایل به سمت انگشتان (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای میگرن، دردهای قاعدگی و اختلالات مریدین کمربندی",
  imageUrl: "assets/images/gb/gb41.jpg",
  desc: `
میگرن  
دردهای قاعدگی  
تنگی کمر
`,
  descrip: "نقطه کلیدی برای مریدین کمربندی (Dai Mai)",
  descExtra: "برای سندروم پیش از قاعدگی (PMS) مؤثر است",
  supplementary: "با GB26 و LV3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه شروع مریدین Dai Mai"
},
{
  category: "GB",
  id: "GB42",
  name: "GB42 Diwuhui دی وو هوی",
  Enname: "Diwuhui",
  faname: "گردهمایی پنجمین زمین",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "چهل‌ودومین نقطه مریدین کیسه صفرا",
  location: "بین استخوان‌های چهارم و پنجم پا، پشت GB41",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای وزوز گوش و دردهای پا",
  imageUrl: "assets/images/gb/gb42.jpg",
  desc: `
وزوز گوش  
دردهای پا  
التهاب مفاصل پا
`,
  descrip: "نقطه کمکی برای اختلالات گوش و پا",
  descExtra: "برای آرتروز مفاصل کوچک پا مؤثر است",
  supplementary: "با GB2 و GB43 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه موضعی برای مفاصل پا"
},
{
  category: "GB",
  id: "GB43",
  name: "GB43 Xiaxi شیائو شی",
  Enname: "Xiaxi",
  faname: "دره باریک",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "چهل‌وسومین نقطه مریدین کیسه صفرا + نقطه چشمه (Spring Point)",
  location: "بین انگشتان چهارم و پنجم پا، در فرورفتگی نزدیک وب",
  pressureAngle: "مایل به سمت بالا (۴۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردردهای شقیقه‌ای و التهاب چشم",
  imageUrl: "assets/images/gb/gb43.jpg",
  desc: `
سردردهای شقیقه‌ای  
قرمزی چشم  
تحریک‌پذیری عصبی
`,
  descrip: "نقطه پاک‌کننده گرمای کبد و کیسه صفرا",
  descExtra: "برای فشار خون بالا همراه با GB20 مؤثر است",
  supplementary: "با GB20 و LR2 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه چشمه (Spring Point) مریدین کیسه صفرا"
},
{
  category: "GB",
  id: "GB44",
  name: "GB44 Zuqiaoyin زو چیائو یین",
  Enname: "Zuqiaoyin",
  faname: "ورودی یین پا",
  meridian: "Gallbladder Meridian (GB)",
  Fameridian: "مریدین کیسه صفرا",
  description: "چهل‌وچهارمین نقطه مریدین کیسه صفرا + نقطه چاه (Well Point)",
  location: "۰.۱ سون از گوشه ناخن انگشت چهارم پا (سمت خارجی)",
  pressureAngle: "مایل به سمت مرکز انگشت (۱۰ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای بی‌خوابی، کابوس و گرمای زیاد کبد",
  imageUrl: "assets/images/gb/gb44.jpg",
  desc: `
بی‌خوابی شبانه  
کابوس‌های مکرر  
گرگرفتگی و تعریق شبانه
`,
  descrip: "آخرین نقطه مریدین کیسه صفرا + نقطه چاه",
  descExtra: "برای دفع انرژی اضافی کبد و کیسه صفرا استفاده می‌شود",
  supplementary: "با HT7 و KI1 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه پایانی مریدین کیسه صفرا"
},

// ==============================================  GV   ===============================================

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "GV",
  Enname: "",
  faname: "",
  meridian: "",
  Fameridian: "",
  id: "",
  name: "",
  description: "",
  location: "",
  pressureAngle: "",
  pressureAmount: "",
  repetitions: "",
  time: "",
  extra: "",
  imageUrl: "",
  desc: `
تقویت سیستم ایمنی:

GV14 + LI4 + ST36

کمردرد:

GV4 + BL23 + GB30

افسردگی:

GV20 + Yintang + HT7

آسم:

GV12 + BL13 + LU1

صرع:

GV17 + GV20 + GB20

سینوزیت:

GV23 + LI20 + BL2

اضطراب شدید:

GV24 + HT7 + Yintang
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "GV",
  id: "GV1",
  name: "GV1 Changqiang چانگ چیانگ",
  Enname: "Changqiang",
  faname: "دیواره بلند",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "اولین نقطه مریدین حاکم + نقطه تلاقی با مریدین کلیه",
  location: "بین نوک دنبالچه و مقعد، در فرورفتگی",
  pressureAngle: "مایل به سمت بالا (۳۰ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای هموروئید، اسپاسم عضلات پرینه و اختلالات روانی",
  imageUrl: "assets/images/gv/gv1.jpg",
  desc: `
هموروئید  
بی‌اختیاری ادرار  
اضطراب شدید
`,
  descrip: "نقطه آغازین مریدین حاکم",
  descExtra: "در طب سوزنی برای اختلالات روان‌پزشکی استفاده می‌شود",
  supplementary: "با BL35 و CV1 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه پایه برای اختلالات پرینه و روان‌تنی"
},
{
  category: "GV",
  id: "GV2",
  name: "GV2 Yaoshu یائو شو",
  Enname: "Yaoshu",
  faname: "درخت کمر",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "دومین نقطه مریدین حاکم",
  location: "در فرورفتگی زیر مهره L2 (زیر کمر)",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای کمردردهای مزمن و ضعف کلیه",
  imageUrl: "assets/images/gv/gv2.jpg",
  desc: `
کمردرد  
ضعف کمر  
ناتوانی جنسی
`,
  descrip: "نقطه حمایت‌کننده کمر و کلیه",
  descExtra: "برای آرتروز ستون فقرات کمری مؤثر است",
  supplementary: "با BL23 و GV4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه کلیدی برای کمردرد"
},
{
  category: "GV",
  id: "GV3",
  name: "GV3 Yaoyangguan یائو یانگ گوان",
  Enname: "Yaoyangguan",
  faname: "دروازه یانگ کمر",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "سومین نقطه مریدین حاکم + نقطه کلیدی برای دردهای کمر",
  location: "بین مهره‌های L4 و L5",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سیاتیک، دردهای شدید کمر و اختلالات مثانه",
  imageUrl: "assets/images/gv/gv3.jpg",
  desc: `
سیاتیک  
کمردرد حاد  
بی‌اختیاری ادرار
`,
  descrip: "نقطه موضعی برای ستون فقرات کمری",
  descExtra: "برای فتق دیسک کمر همراه با BL40 مؤثر است",
  supplementary: "با BL23 و GB30 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اصلی برای سیاتیک و کمردرد"
},
{
  category: "GV",
  id: "GV4",
  name: "GV4 Mingmen مینگ من",
  Enname: "Mingmen",
  faname: "دروازه زندگی",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "چهارمین نقطه مریدین حاکم + نقطه حیاتی برای انرژی یانگ کلیه",
  location: "بین مهره‌های L2 و L3",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تقویت یانگ کلیه، خستگی مزمن و ناباروری",
  imageUrl: "assets/images/gv/gv4.jpg",
  desc: `
خستگی مزمن  
ناباروری  
کمردرد سرد
`,
  descrip: "مهم‌ترین نقطه برای تقویت یانگ کلیه",
  descExtra: "در طب چینی به عنوان «باتری بدن» شناخته می‌شود",
  supplementary: "با BL23 و KI3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه حیاتی برای انرژی کلیه"
},
{
  category: "GV",
  id: "GV5",
  name: "GV5 Xuanshu شوان شو",
  Enname: "Xuanshu",
  faname: "محور معلق",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "پنجمین نقطه مریدین حاکم",
  location: "بین مهره‌های L1 و L2",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اسهال مزمن و دردهای شکمی",
  imageUrl: "assets/images/gv/gv5.jpg",
  desc: `
اسهال مزمن  
دردهای شکمی  
ضعف طحال
`,
  descrip: "نقطه تنظیم‌کننده عملکرد روده‌ها",
  descExtra: "برای سندروم روده تحریک‌پذیر (IBS) مؤثر است",
  supplementary: "با ST25 و SP6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات گوارشی"
},
{
  category: "GV",
  id: "GV6",
  name: "GV6 Jizhong جی ژونگ",
  Enname: "Jizhong",
  faname: "مرکز ستون",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "ششمین نقطه مریدین حاکم",
  location: "بین مهره‌های T11 و T12",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای خستگی مزمن و ضعف عمومی",
  imageUrl: "assets/images/gv/gv6.jpg",
  desc: `
خستگی مزمن  
ضعف عضلانی  
ناتوانی جنسی
`,
  descrip: "نقطه تقویت‌کننده انرژی مرکزی بدن",
  descExtra: "برای سندروم خستگی مزمن (CFS) مؤثر است",
  supplementary: "با GV4 و ST36 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص ضعف عمومی"
},
{
  category: "GV",
  id: "GV7",
  name: "GV7 Zhongshu ژونگ شو",
  Enname: "Zhongshu",
  faname: "محور میانی",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "هفتمین نقطه مریدین حاکم",
  location: "بین مهره‌های T10 و T11",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای معده و سوءهاضمه",
  imageUrl: "assets/images/gv/gv7.jpg",
  desc: `
سوءهاضمه  
درد معده  
تهوع
`,
  descrip: "نقطه تنظیم‌کننده معده و طحال",
  descExtra: "برای ریفلاکس معده مؤثر است",
  supplementary: "با CV12 و ST36 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات معده"
},
{
  category: "GV",
  id: "GV8",
  name: "GV8 Jinsuo جین سوئو",
  Enname: "Jinsuo",
  faname: "طناب عضلانی",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "هشتمین نقطه مریدین حاکم",
  location: "بین مهره‌های T9 و T10",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اسپاسم عضلات پشت و تشنج",
  imageUrl: "assets/images/gv/gv8.jpg",
  desc: `
اسپاسم عضلات پشت  
تشنج  
گرفتگی عضلانی
`,
  descrip: "نقطه آرام‌بخش عضلات و اعصاب",
  descExtra: "برای ام‌اس (MS) همراه با GB34 مؤثر است",
  supplementary: "با BL18 و GB34 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اسپاسم عضلانی"
},
{
  category: "GV",
  id: "GV9",
  name: "GV9 Zhiyang ژی یانگ",
  Enname: "Zhiyang",
  faname: "تا یانگ",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "نهمین نقطه مریدین حاکم",
  location: "بین مهره‌های T7 و T8",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای قلبی و تنگی نفس",
  imageUrl: "assets/images/gv/gv9.jpg",
  desc: `
درد قلبی  
تنگی نفس  
اضطراب
`,
  descrip: "نقطه موضعی برای قلب و ریه",
  descExtra: "برای آنژین صدری همراه با PC6 مؤثر است",
  supplementary: "با CV17 و HT7 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات قلبی"
},
{
  category: "GV",
  id: "GV10",
  name: "GV10 Lingtai لینگ تای",
  Enname: "Lingtai",
  faname: "سکوی روح",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "دهمین نقطه مریدین حاکم",
  location: "بین مهره‌های T6 و T7",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرفه و آسم",
  imageUrl: "assets/images/gv/gv10.jpg",
  desc: `
سرفه مزمن  
آسم  
عفونت ریه
`,
  descrip: "نقطه پاک‌کننده ریه",
  descExtra: "برای برونشیت همراه با LU7 مؤثر است",
  supplementary: "با BL13 و LU1 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات تنفسی"
},
{
  category: "GV",
  id: "GV11",
  name: "GV11 Shendao شن دائو",
  Enname: "Shendao",
  faname: "مسیر روح",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "یازدهمین نقطه مریدین حاکم",
  location: "بین مهره‌های T5 و T6",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای خستگی روحی و افسردگی",
  imageUrl: "assets/images/gv/gv11.jpg",
  desc: `
افسردگی  
خستگی روحی  
بی‌خوابی
`,
  descrip: "نقطه آرام‌بخش روان",
  descExtra: "برای اختلالات خواب همراه با HT7 مؤثر است",
  supplementary: "با GV20 و Yintang ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات روان‌تنی"
},
{
  category: "GV",
  id: "GV12",
  name: "GV12 Shenzhu شن ژو",
  Enname: "Shenzhu",
  faname: "ستون روح",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "دوازدهمین نقطه مریدین حاکم",
  location: "بین مهره‌های T3 و T4",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آسم و آلرژی",
  imageUrl: "assets/images/gv/gv12.jpg",
  desc: `
آسم  
آلرژی فصلی  
سینوزیت
`,
  descrip: "نقطه تقویت‌کننده سیستم تنفسی",
  descExtra: "برای رینیت آلرژیک همراه با LI20 مؤثر است",
  supplementary: "با BL13 و LU9 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص آلرژی و آسم"
},
{
  category: "GV",
  id: "GV13",
  name: "GV13 Taodao تائو دائو",
  Enname: "Taodao",
  faname: "مسیر کوره",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "سیزدهمین نقطه مریدین حاکم",
  location: "بین مهره‌های T1 و T2",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تب و لرز",
  imageUrl: "assets/images/gv/gv13.jpg",
  desc: `
تب  
لرز  
سرماخوردگی
`,
  descrip: "نقطه دفع گرمای بیماری‌زا",
  descExtra: "برای آنفولانزا همراه با LI4 مؤثر است",
  supplementary: "با GV14 و LI11 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص تب و عفونت"
},
{
  category: "GV",
  id: "GV14",
  name: "GV14 Dazhui دا ژوئی",
  Enname: "Dazhui",
  faname: "مهره بزرگ",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "چهاردهمین نقطه مریدین حاکم + نقطه تلاقی با تمام مریدین‌های یانگ",
  location: "بین مهره‌های C7 و T1",
  pressureAngle: "مایل به سمت پایین (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تقویت سیستم ایمنی، تب و گردن درد",
  imageUrl: "assets/images/gv/gv14.jpg",
  desc: `
تب  
سرماخوردگی  
گردن درد
`,
  descrip: "نقطه کلیدی برای تقویت سیستم ایمنی",
  descExtra: "در طب سوزنی برای آلرژی‌ها استفاده می‌شود",
  supplementary: "با LI4 و LI11 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gv14.png",
      main: "نقطه اصلی برای دفع گرمای بیماری‌زا"
},
{
  category: "GV",
  id: "GV15",
  name: "GV15 Yamen یا من",
  Enname: "Yamen",
  faname: "دروازه خاموشی",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "پانزدهمین نقطه مریدین حاکم (با احتیاط - نقطه خطرناک)",
  location: "بین مهره‌های C1 و C2، در فرورفتگی زیر استخوان پس‌سری",
  pressureAngle: "مایل به سمت بینی (۱۰ درجه)",
  pressureAmount: "۱ (بسیار ملایم - خطرناک)",
  repetitions: "۱ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات گفتاری، سکته مغزی و صرع",
  imageUrl: "assets/images/gv/gv15.jpg",
  desc: `
لکنت زبان  
عوارض سکته مغزی  
تشنج
`,
  descrip: "نقطه خطرناک ولی مؤثر برای اختلالات عصبی",
  descExtra: "در طب سوزنی فقط توسط متخصصین استفاده شود",
  supplementary: "با GV20 و HT5 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه ممنوعه برای فشار عمیق"
},
{
  category: "GV",
  id: "GV16",
  name: "GV16 Fengfu فنگ فو",
  Enname: "Fengfu",
  faname: "قصر باد",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "شانزدهمین نقطه مریدین حاکم + نقطه تلاقی با یانگ وی",
  location: "در فرورفتگی زیر استخوان پس‌سری، بالای GV15",
  pressureAngle: "مایل به سمت چانه (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردرد، سرگیجه و اختلالات مغزی",
  imageUrl: "assets/images/gv/gv16.jpg",
  desc: `
سردردهای پس‌سری  
سرگیجه  
بی‌خوابی
`,
  descrip: "نقطه کلیدی برای اختلالات سر و مغز",
  descExtra: "برای بیماری منییر (Meniere's Disease) مؤثر است",
  supplementary: "با GB20 و GV20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه آرام‌بخش مغز"
},
{
  category: "GV",
  id: "GV17",
  name: "GV17 Naohu نائو هو",
  Enname: "Naohu",
  faname: "درگاه مغز",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "هفدهمین نقطه مریدین حاکم + نقطه تلاقی با مثانه",
  location: "۱.۵ سون بالای GV16، در فرورفتگی زیر استخوان پس‌سری",
  pressureAngle: "مایل به سمت پایین (۱۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سردردهای شدید، سرگیجه و تشنج",
  imageUrl: "assets/images/gv/gv17.jpg",
  desc: `
سردردهای ضربان‌دار  
صرع  
سرگیجه شدید
`,
  descrip: "نقطه کلیدی برای اختلالات عصبی شدید",
  descExtra: "برای میگرن همراه با GB20 مؤثر است",
  supplementary: "با GB20 و GV20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص سردردهای عصبی"
},
{
  category: "GV",
  id: "GV18",
  name: "GV18 Qiangjian چیانگ جیان",
  Enname: "Qiangjian",
  faname: "قدرتمند و محکم",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "هیجدهمین نقطه مریدین حاکم",
  location: "۳.۵ سون بالای GV17، روی خط وسط سر",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای فشار خون بالا و وزوز گوش",
  imageUrl: "assets/images/gv/gv18.jpg",
  desc: `
فشار خون بالا  
وزوز گوش  
اضطراب
`,
  descrip: "نقطه آرام‌بخش اعصاب و فشار خون",
  descExtra: "برای تینیتوس همراه با GB2 مؤثر است",
  supplementary: "با GB20 و KI3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص فشار خون و گوش"
},
{
  category: "GV",
  id: "GV19",
  name: "GV19 Houding هو دینگ",
  Enname: "Houding",
  faname: "تاج خلفی",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "نوزدهمین نقطه مریدین حاکم",
  location: "۵.۵ سون بالای GV17، روی خط وسط سر",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای بی‌خوابی و کابوس‌های شبانه",
  imageUrl: "assets/images/gv/gv19.jpg",
  desc: `
بی‌خوابی  
کابوس‌های مکرر  
اضطراب شبانه
`,
  descrip: "نقطه آرام‌بخش روان و خواب",
  descExtra: "برای پاراسومنیا (اختلالات خواب) مؤثر است",
  supplementary: "با HT7 و Yintang ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات خواب"
},
{
  category: "GV",
  id: "GV20",
  name: "GV20 Baihui بای هوی",
  Enname: "Baihui",
  faname: "صدتقاطع",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "بیستمین نقطه مریدین حاکم + نقطه تلاقی با تمام مریدین‌های یانگ",
  location: "در بالای سر، روی خط وسط، ۷ سون بالای خط رویش مو",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تقویت مغز، افتادگی اعضا و افسردگی",
  imageUrl: "assets/images/gv/gv20.jpg",
  desc: `
افسردگی  
فراموشی  
پرولاپس رحم/مثانه
`,
  descrip: "مهم‌ترین نقطه برای تقویت انرژی صعودی بدن",
  descExtra: "در طب سوزنی برای درمان فلج استفاده می‌شود",
  supplementary: "با GV26 و ST36 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gv20.png",
      main: "نقطه کلیدی برای انرژی مغز و اعصاب"
},
{
  category: "GV",
  id: "GV21",
  name: "GV21 Qianding چیان دینگ",
  Enname: "Qianding",
  faname: "تاج پیشین",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "بیست‌ویکمین نقطه مریدین حاکم",
  location: "۳.۵ سون جلوی GV20، روی خط وسط سر",
  pressureAngle: "مایل به سمت پشت (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرگیجه و سردردهای پیشانی",
  imageUrl: "assets/images/gv/gv21.jpg",
  desc: `
سرگیجه  
سردرد پیشانی  
تهوع
`,
  descrip: "نقطه آرام‌بخش سر و معده",
  descExtra: "برای میگرن همراه با GB14 مؤثر است",
  supplementary: "با GB8 و PC6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص سرگیجه و میگرن"
},
{
  category: "GV",
  id: "GV22",
  name: "GV22 Xinhui شین هوی",
  Enname: "Xinhui",
  faname: "ملاقات فونتانل",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "بیست‌ودومین نقطه مریدین حاکم",
  location: "۲ سون جلوی GV21، روی خط وسط سر",
  pressureAngle: "مایل به سمت پشت (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرگیجه در کودکان و اختلالات رشد",
  imageUrl: "assets/images/gv/gv22.jpg",
  desc: `
تاخیر رشد کودکان  
سرگیجه  
تشنج کودکان
`,
  descrip: "نقطه مخصوص اختلالات کودکان",
  descExtra: "برای اوتیسم همراه با GV20 مؤثر است",
  supplementary: "با GV20 و SP6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص طب اطفال"
},
{
  category: "GV",
  id: "GV23",
  name: "GV23 Shangxing شانگ شینگ",
  Enname: "Shangxing",
  faname: "ستاره بالایی",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "بیست‌وسومین نقطه مریدین حاکم",
  location: "۱ سون پشت خط موی پیشانی، روی خط وسط",
  pressureAngle: "مایل به سمت پایین (۱۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سینوزیت و خونریزی بینی",
  imageUrl: "assets/images/gv/gv23.jpg",
  desc: `
سینوزیت  
خونریزی بینی  
سردرد سینوسی
`,
  descrip: "نقطه پاک‌کننده سینوس‌ها",
  descExtra: "برای رینیت آلرژیک همراه با LI20 مؤثر است",
  supplementary: "با BL2 و LI4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص سینوزیت"
},
{
  category: "GV",
  id: "GV24",
  name: "GV24 Shenting شن تینگ",
  Enname: "Shenting",
  faname: "سالن روح",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "بیست‌وچهارمین نقطه مریدین حاکم + نقطه تلاقی با مثانه",
  location: "۰.۵ سون پشت خط موی پیشانی، روی خط وسط",
  pressureAngle: "مایل به سمت پایین (۱۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اضطراب، بی‌خوابی و روان‌پریشی",
  imageUrl: "assets/images/gv/gv24.jpg",
  desc: `
اضطراب شدید  
روان‌پریشی  
بی‌خوابی
`,
  descrip: "نقطه آرام‌بخش روان و اعصاب",
  descExtra: "برای اسکیزوفرنی همراه با GV20 مؤثر است",
  supplementary: "با HT7 و Yintang ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات روانی"
},
{
  category: "GV",
  id: "GV25",
  name: "GV25 Suliao سو لیائو",
  Enname: "Suliao",
  faname: "استخوان بینی",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "بیست‌وپنجمین نقطه مریدین حاکم",
  location: "در نوک بینی",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای شوک، بیهوشی و احیای قلبی",
  imageUrl: "assets/images/gv/gv25.jpg",
  desc: `
احیای قلبی  
شوک  
سنکوپ
`,
  descrip: "نقطه اورژانسی برای احیای قلبی-ریوی",
  descExtra: "برای CPR همراه با GV26 استفاده می‌شود",
  supplementary: "با GV26 و PC6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه اورژانسی برای احیای قلبی"
},
{
  category: "GV",
  id: "GV26",
  name: "GV26 Renzhong رن ژونگ",
  Enname: "Renzhong",
  faname: "مرکز انسان",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "بیست‌وششمین نقطه مریدین حاکم + نقطه اورژانسی برای بیهوشی",
  location: "در فرورفتگی زیر بینی، بالای لب بالا",
  pressureAngle: "مایل به سمت بالا (۴۵ درجه)",
  pressureAmount: "۴ (فشار قوی - برای موارد اورژانسی)",
  repetitions: "تا برگشت هوشیاری",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای احیای هوشیاری، شوک و فالج صورت",
  imageUrl: "assets/images/gv/gv26.jpg",
  desc: `
احیای هوشیاری  
شوک  
فلج بل (Bell's Palsy)
`,
  descrip: "مهم‌ترین نقطه اورژانسی در طب چینی",
  descExtra: "با فشار ناخن یا سوزن‌های بسیار نازک استفاده می‌شود",
  supplementary: "با PC8 و GV20 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/gv26.png",
      main: "نقطه اورژانسی برای احیای هوشیاری"
},
{
  category: "GV",
  id: "GV27",
  name: "GV27 Duiduan دوی دوآن",
  Enname: "Duiduan",
  faname: "انتهای لب",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "بیست‌وهفتمین نقطه مریدین حاکم",
  location: "در محل اتصال فرنولوم لب بالا به لثه",
  pressureAngle: "مایل به سمت بالا (۱۵ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تشنج، خونریزی لثه و اختلالات گفتاری",
  imageUrl: "assets/images/gv/gv27.jpg",
  desc: `
تشنج  
لکنت زبان  
التهاب لثه
`,
  descrip: "نقطه موثر بر سیستم عصبی و دهان",
  descExtra: "در طب سوزنی برای اختلالات گفتاری استفاده می‌شود",
  supplementary: "با GV26 و HT5 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات عصبی-کلامی"
},
{
  category: "GV",
  id: "GV28",
  name: "GV28 Yinjiao یین جیائو",
  Enname: "Yinjiao",
  faname: "تقاطع یین",
  meridian: "Governor Vessel (GV)",
  Fameridian: "مریدین حاکم",
  description: "بیست‌وهشتمین نقطه مریدین حاکم + نقطه پایانی",
  location: "بین لثه بالا و فرنولوم لب بالا",
  pressureAngle: "مایل به سمت لثه (۱۵ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای خونریزی لثه و اختلالات روانی",
  imageUrl: "assets/images/gv/gv28.jpg",
  desc: `
خونریزی لثه  
هیستری  
اضطراب شدید
`,
  descrip: "آخرین نقطه مریدین حاکم",
  descExtra: "در طب سوزنی برای اختلالات روان‌پزشکی استفاده می‌شود",
  supplementary: "با GV20 و HT7 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه پایانی مریدین حاکم"
},

// ==============================================  CV   ===============================================

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

{
category: "",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "CV",
  Enname: "",
  faname: "",
  meridian: "",
  Fameridian: "",
  id: "",
  name: "",
  description: "",
  location: "",
  pressureAngle: "",
  pressureAmount: "",
  repetitions: "",
  time: "",
  extra: "",
  imageUrl: "",
  desc: `
ناباروری:

CV4 + BL23 + SP6

سوءهاضمه:

CV12 + ST36 + PC6

استرس:

CV17 + HT7 + GV20

ادم (ورم بدن):

CV5 + SP9 + BL22

سوءهاضمه:

CV10 + CV12 + ST36

ریفلاکس معده:

CV11 + PC6 + ST25

درد قلبی: CV14 + PC6 + HT7

آسم: CV20 + LU7 + BL13

لکنت زبان: CV23 + GV15 + HT5
  `,
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
{
  category: "CV",
  id: "CV1",
  name: "CV1 Huiyin هوی یین",
  Enname: "Huiyin",
  faname: "ملاقات یین",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "اولین نقطه مریدین محوری + نقطه تلاقی با مریدین حاکم",
  location: "بین مقعد و دستگاه تناسلی",
  pressureAngle: "مایل به سمت بالا (۳۰ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات ادراری-تناسلی و هموروئید",
  imageUrl: "assets/images/cv/cv1.jpg",
  desc: `
هموروئید  
بی‌اختیاری ادرار  
اختلالات جنسی
`,
  descrip: "نقطه آغازین مریدین محوری",
  descExtra: "در طب سوزنی برای اختلالات پرینه استفاده می‌شود",
  supplementary: "با GV1 و SP6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه پایه برای اختلالات ادراری-تناسلی"
},
{
  category: "CV",
  id: "CV2",
  name: "CV2 Qugu چو گو",
  Enname: "Qugu",
  faname: "استخوان خمیده",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "دومین نقطه مریدین محوری",
  location: "در بالای استخوان شرمگاهی، در فرورفتگی",
  pressureAngle: "مایل به سمت پایین (۱۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات ادراری و ناباروری",
  imageUrl: "assets/images/cv/cv2.jpg",
  desc: `
مشکلات ادراری  
ناباروری  
دردهای لگنی
`,
  descrip: "نقطه موثر بر سیستم ادراری-تناسلی",
  descExtra: "برای پروستاتیت همراه با BL32 مؤثر است",
  supplementary: "با CV3 و BL23 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/cv2.png",
      main: "نقطه مخصوص اختلالات لگنی"
},
{
  category: "CV",
  id: "CV3",
  name: "CV3 Zhongji ژونگ جی",
  Enname: "Zhongji",
  faname: "حداکثر مرکز",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "سومین نقطه مریدین محوری + نقطه اتصال مثانه",
  location: "۴ سون زیر ناف",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای عفونت‌های ادراری و اختلالات قاعدگی",
  imageUrl: "assets/images/cv/cv3.jpg",
  desc: `
عفونت مثانه  
قاعدگی دردناک  
ناباروری
`,
  descrip: "نقطه اصلی برای سلامت مثانه",
  descExtra: "برای سیستیت همراه با BL28 مؤثر است",
  supplementary: "با SP6 و BL32 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/cv3.png",
      main: "نقطه اتصال مثانه (Mu Point)"
},
{
  category: "CV",
  id: "CV4",
  name: "CV4 Guanyuan گوان یوان",
  Enname: "Guanyuan",
  faname: "درگاه اصلی",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "چهارمین نقطه مریدین محوری + نقطه حیاتی برای انرژی یین",
  location: "۳ سون زیر ناف",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تقویت کلیه، ناباروری و خستگی مزمن",
  imageUrl: "assets/images/cv/cv4.jpg",
  desc: `
ناباروری  
خستگی مزمن  
بی‌اختیاری ادرار
`,
  descrip: "مهم‌ترین نقطه برای تقویت یین کلیه",
  descExtra: "در طب چینی به عنوان «ذخیره انرژی» شناخته می‌شود",
  supplementary: "با BL23 و KI3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/cv4.png",
      main: "نقطه حیاتی برای انرژی کلیه"
},
{
  category: "CV",
  id: "CV5",
  name: "CV5 Shimen شی من",
  Enname: "Shimen",
  faname: "دروازه سنگ",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "پنجمین نقطه مریدین محوری + نقطه اتصال سه‌گرم‌کننده",
  location: "۲ سون زیر ناف",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای ادم (ورم بدن)، اختلالات ادراری و ناباروری زنان",
  imageUrl: "assets/images/cv/cv5.jpg",
  desc: `
ادم (احتباس مایعات)  
اختلالات قاعدگی  
ناباروری زنان
`,
  descrip: "نقطه موثر بر سیستم لنفاوی و تولیدمثل زنان",
  descExtra: "برای سندروم تخمدان پلی‌کیستیک همراه با SP6 مؤثر است",
  supplementary: "با SP9 و BL22 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/cv5.png",
      main: "نقطه اتصال سه‌گرم‌کننده (Mu Point)"
},
{
  category: "CV",
  id: "CV6",
  name: "CV6 Qihai چی های",
  Enname: "Qihai",
  faname: "دریای انرژی",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "ششمین نقطه مریدین محوری",
  location: "۱.۵ سون زیر ناف",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تقویت انرژی حیاتی و نفخ شکم",
  imageUrl: "assets/images/cv/cv6.jpg",
  desc: `
نفخ شکم  
خستگی  
ضعف عمومی
`,
  descrip: "نقطه اصلی برای تقویت Qi",
  descExtra: "برای سندروم خستگی مزمن مؤثر است",
  supplementary: "با ST36 و GV4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/cv6.png",
      main: "نقطه کلیدی برای انرژی حیاتی"
},
{
  category: "CV",
  id: "CV7",
  name: "CV7 Yinjiao یین جیائو",
  Enname: "Yinjiao",
  faname: "تقاطع یین",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "هفتمین نقطه مریدین محوری",
  location: "۱ سون زیر ناف",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات جنسی و بی‌اختیاری ادرار",
  imageUrl: "assets/images/cv/cv7.jpg",
  desc: `
ناتوانی جنسی  
بی‌اختیاری ادرار  
خارش ناحیه تناسلی
`,
  descrip: "نقطه تنظیم‌کننده یین بدن",
  descExtra: "برای پروستاتیت همراه با BL33 مؤثر است",
  supplementary: "با CV4 و KI3 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه مخصوص اختلالات سیستم تناسلی"
},
{
  category: "CV",
  id: "CV8",
  name: "CV8 Shenque شن چیو",
  Enname: "Shenque",
  faname: "کاخ روح",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "هشتمین نقطه مریدین محوری (ممنوع برای سوزن‌گذاری)",
  location: "در ناف",
  pressureAngle: "عدم فشار مستقیم",
  pressureAmount: "۰ (فقط ماساژ حلقوی)",
  repetitions: "۳۰ دور ماساژ",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تقویت سیستم ایمنی و اختلالات گوارشی",
  imageUrl: "assets/images/cv/cv8.jpg",
  desc: `
تقویت سیستم ایمنی  
اسهال مزمن  
نفخ شکم
`,
  descrip: "نقطه حیاتی برای انرژی مرکزی بدن",
  descExtra: "فقط با ماساژ یا موکسا استفاده می‌شود (ممنوع برای سوزن)",
  supplementary: "با ST25 و ST36 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/p.jpg",
      main: "نقطه مخصوص ماساژ و موکسا"
},
{
  category: "CV",
  id: "CV9",
  name: "CV9 Shuifen شوی فن",
  Enname: "Shuifen",
  faname: "جدایی آب",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "نهمین نقطه مریدین محوری",
  location: "۱ سون بالای ناف",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای ادم (ورم) و احتباس مایعات",
  imageUrl: "assets/images/cv/cv9.jpg",
  desc: `
ادم (ورم بدن)  
آسیت (تجمع مایع در شکم)  
ادمای اندام تحتانی
`,
  descrip: "نقطه اصلی برای تنظیم مایعات بدن",
  descExtra: "برای نفریت همراه با BL22 مؤثر است",
  supplementary: "با SP9 و KI7 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/cv9.png",
      main: "نقطه مخصوص اختلالات آب و الکترولیت"
},
{
  category: "CV",
  id: "CV10",
  name: "CV10 Xiawan شیائو وان",
  Enname: "Xiawan",
  faname: "گودال پایینی",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "دهمین نقطه مریدین محوری",
  location: "۲ سون بالای ناف",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سوءهاضمه و احساس پری شکم",
  imageUrl: "assets/images/cv/cv10.jpg",
  desc: `
سوءهاضمه  
احساس پری بعد از غذا  
تهوع
`,
  descrip: "نقطه تنظیم‌کننده معده و روده کوچک",
  descExtra: "برای گاستروپارزی همراه با ST36 مؤثر است",
  supplementary: "با CV12 و PC6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات گوارشی فوقانی"
},
{
  category: "CV",
  id: "CV11",
  name: "CV11 Jianli جیان لی",
  Enname: "Jianli",
  faname: "ساختار سالم",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "یازدهمین نقطه مریدین محوری",
  location: "۳ سون بالای ناف",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای ریفلاکس معده و سوزش سر دل",
  imageUrl: "assets/images/cv/cv11.jpg",
  desc: `
ریفلاکس اسید  
سوزش سر دل  
آروغ زدن مکرر
`,
  descrip: "نقطه محافظ معده",
  descExtra: "برای فتق هیاتال همراه با PC6 مؤثر است",
  supplementary: "با ST36 و CV12 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص ریفلاکس و سوزش معده"
},
{
  category: "CV",
  id: "CV12",
  name: "CV12 Zhongwan ژونگ وان",
  Enname: "Zhongwan",
  faname: "مرکز میانی",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "دوازدهمین نقطه مریدین محوری + نقطه اتصال معده",
  location: "۴ سون بالای ناف",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سوءهاضمه، ریفلاکس و نفخ",
  imageUrl: "assets/images/cv/cv12.jpg",
  desc: `
سوءهاضمه  
ریفلاکس معده  
نفخ شکم
`,
  descrip: "مهم‌ترین نقطه برای اختلالات معده",
  descExtra: "برای گاستریت همراه با ST36 مؤثر است",
  supplementary: "با PC6 و ST25 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/cv12.png",
      main: "نقطه اتصال معده (Mu Point)"
},
{
  category: "CV",
  id: "CV13",
  name: "CV13 Shangwan شانگ وان",
  Enname: "Shangwan",
  faname: "گودال بالایی",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "سیزدهمین نقطه مریدین محوری",
  location: "5 سون بالای ناف",
  pressureAngle: "عمودی (90 درجه)",
  pressureAmount: "3 (متوسط)",
  repetitions: "3 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تهوع، استفراغ و سوءهاضمه",
  imageUrl: "assets/images/cv/cv13.jpg",
  desc: `تهوع صبحگاهی
استفراغ
سوءهاضمه`,
  descrip: "نقطه آرام بخش معده",
  descExtra: "برای بارداری همراه با PC6 مؤثر است",
  supplementary: "با ST36 و PC6 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات معده فوقانی"
},
{
  category: "CV",
  id: "CV14",
  name: "CV14 Juque جو چیو",
  Enname: "Juque",
  faname: "قلعه بزرگ",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "چهاردهمین نقطه + نقطه Mu قلب",
  location: "6 سون بالای ناف",
  pressureAngle: "مایل به پایین (30 درجه)",
  pressureAmount: "2 (ملایم)",
  repetitions: "3 بار", 
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای درد قلبی و اضطراب",
  imageUrl: "assets/images/cv/cv14.jpg",
  desc: `درد قلبی
تپش قلب
اضطراب`,
  descrip: "نقطه اتصال قلب",
  descExtra: "برای آنژین صدری مؤثر است",
  supplementary: "با PC6 و HT7 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه Mu قلب"
},
{
  category: "CV",
  id: "CV15",
  name: "CV15 Jiuwei جیو وی",
  Enname: "Jiuwei",
  faname: "دم کبوتر",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "پانزدهمین نقطه + نقطه Luo پریکارد",
  location: "1 سون زیر زائده گوارشی",
  pressureAngle: "مایل به پایین (15 درجه)",
  pressureAmount: "2 (ملایم)",
  repetitions: "3 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اضطراب و بیقراری",
  imageUrl: "assets/images/cv/cv15.jpg",
  desc: `اضطراب
بیقراری
بیخوابی`,
  descrip: "نقطه آرامبخش روان",
  descExtra: "برای اختلالات عصبی مؤثر است",
  supplementary: "با HT7 و Yintang ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات روانتنی"
},
{
  category: "CV",
  id: "CV16",
  name: "CV16 Zhongting ژونگ تینگ",
  Enname: "Zhongting",
  faname: "سالن مرکزی",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "شانزدهمین نقطه",
  location: "وسط استخوان جناغ، بین دنده‌ها",
  pressureAngle: "عمودی (90 درجه)",
  pressureAmount: "2 (ملایم)",
  repetitions: "3 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای درد قفسه سینه و تنگی نفس",
  imageUrl: "assets/images/cv/cv16.jpg",
  desc: `درد جناغ
تنگی نفس
سرفه`,
  descrip: "نقطه موضعی قفسه سینه",
  descExtra: "برای برونشیت مؤثر است",
  supplementary: "با CV17 و LU1 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات تنفسی"
},
{
  category: "CV",
  id: "CV17",
  name: "CV17 Shanzhong شان ژونگ",
  Enname: "Shanzhong",
  faname: "مرکز قفسه سینه",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "هفدهمین نقطه مریدین محوری + نقطه اتصال پریکارد",
  location: "در خط وسط قفسه سینه، بین نوک پستان‌ها",
  pressureAngle: "مایل به سمت پایین (۳۰ درجه)",
  pressureAmount: "فشار 2 تا 10",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای استرس، درد قلبی و تنگی نفس",
  imageUrl: "assets/images/cv/cv17.jpg",
  desc: `
استرس  
درد قلبی  
تنگی نفس
`,
  descrip: "نقطه آرام‌بخش قلب و روان",
  descExtra: "برای افسردگی همراه با HT7 مؤثر است",
  supplementary: "با PC6 و GV20 ترکیب شود",
  
      boss:"رئیسه",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/cv17.png",
      main: "نقطه اتصال پریکارد (Mu Point)"
},
{
  category: "CV",
  id: "CV18",
  name: "CV18 Yutang یو تانگ",
  Enname: "Yutang",
  faname: "سالن یشم",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "هیجدهمین نقطه",
  location: "در خط وسط، بین دنده‌های سوم و چهارم",
  pressureAngle: "مایل به پایین (30 درجه)",
  pressureAmount: "2 (ملایم)",
  repetitions: "3 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرفه و آسم",
  imageUrl: "assets/images/cv/cv18.jpg",
  desc: `سرفه خشک
آسم
درد قفسه سینه`,
  descrip: "نقطه پاک کننده ریه",
  descExtra: "برای برونشیت مزمن مؤثر است",
  supplementary: "با LU7 و BL13 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات ریوی"
},
{
  category: "CV",
  id: "CV19",
  name: "CV19 Zigong زی گونگ",
  Enname: "Zigong",
  faname: "کاخ بنفش",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "نوزدهمین نقطه",
  location: "در خط وسط، بین دنده‌های دوم و سوم",
  pressureAngle: "مایل به پایین (30 درجه)",
  pressureAmount: "2 (ملایم)",
  repetitions: "3 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سکسکه و تهوع",
  imageUrl: "assets/images/cv/cv19.jpg",
  desc: `سکسکه مداوم
تهوع
استفراغ`,
  descrip: "نقطه آرامبخش دیافراگم",
  descExtra: "برای سکسکه مقاوم مؤثر است",
  supplementary: "با PC6 و CV12 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص سکسکه"
},
{
  category: "CV",
  id: "CV20",
  name: "CV20 Huagai هوا گای",
  Enname: "Huagai",
  faname: "سایبان گل",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "بیستمین نقطه",
  location: "در خط وسط، بین دنده‌های اول و دوم",
  pressureAngle: "مایل به پایین (30 درجه)",
  pressureAmount: "2 (ملایم)",
  repetitions: "3 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آسم و تنگی نفس",
  imageUrl: "assets/images/cv/cv20.jpg",
  desc: `آسم
تنگی نفس
درد قفسه سینه`,
  descrip: "نقطه گشایش دهنده ریه",
  descExtra: "برای COPD مؤثر است",
  supplementary: "با LU9 و BL13 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص بیماری‌های انسدادی ریه"
},
{
  category: "CV",
  id: "CV21",
  name: "CV21 Xuanji شوان جی",
  Enname: "Xuanji",
  faname: "ستاره درخشان",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "بیست و یکمین نقطه",
  location: "در خط وسط، زیر گودی گردن",
  pressureAngle: "مایل به پایین (15 درجه)",
  pressureAmount: "1 (بسیار ملایم)",
  repetitions: "2 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای گلودرد و سرفه",
  imageUrl: "assets/images/cv/cv21.jpg",
  desc: `گلودرد
سرفه خشک
خشونت صدا`,
  descrip: "نقطه موضعی گلو",
  descExtra: "برای لارنژیت مؤثر است",
  supplementary: "با LU7 و LI4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات حنجره"
},
{
  category: "CV",
  id: "CV22",
  name: "CV22 Tiantu تیان تو",
  Enname: "Tiantu",
  faname: "چاه آسمانی",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "بیست‌ودومین نقطه مریدین محوری",
  location: "در فرورفتگی بالای استخوان جناغ",
  pressureAngle: "مایل به سمت پایین (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای سرفه، آسم و احساس گیر کردن گلو",
  imageUrl: "assets/images/cv/cv22.jpg",
  desc: `
سرفه مزمن  
آسم  
احساس گلوبوس (گره در گلو)
`,
  descrip: "نقطه موثر بر گلو و ریه",
  descExtra: "برای تیروئید همراه با LI18 مؤثر است",
  supplementary: "با LU7 و LI4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/cv22.png",
      main: "نقطه مخصوص اختلالات تنفسی و گلو"
},
{
  category: "CV",
  id: "CV23",
  name: "CV23 Lianquan لیان چیوان",
  Enname: "Lianquan",
  faname: "چشمه ناودان",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "بیست و سومین نقطه",
  location: "در فرورفتگی بالای سیب آدم",
  pressureAngle: "مایل به بالا (45 درجه)",
  pressureAmount: "2 (ملایم)",
  repetitions: "3 بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای لکنت زبان و اختلالات بلع",
  imageUrl: "assets/images/cv/cv23.jpg",
  desc: `لکنت زبان
دیسفاژی (اختلال بلع)
خشونت صدا`,
  descrip: "نقطه موثر بر گفتار و بلع",
  descExtra: "برای سکته مغزی مؤثر است",
  supplementary: "با GV15 و HT5 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه مخصوص اختلالات گفتاری"
},
{
  category: "CV",
  id: "CV24",
  name: "CV24 Chengjiang چنگ جیانگ",
  Enname: "Chengjiang",
  faname: "استخر اشک",
  meridian: "Conception Vessel (CV)",
  Fameridian: "مریدین محوری قدامی",
  description: "بیست‌وچهارمین نقطه مریدین محوری + نقطه پایانی",
  location: "در فرورفتگی وسط چانه، زیر لب پایین",
  pressureAngle: "مایل به سمت بالا (۴۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای فلج بل، تیک صورت و اختلالات گفتاری",
  imageUrl: "assets/images/cv/cv24.jpg",
  desc: `
فلج بل (Bell's Palsy)  
تیک صورت  
لکنت زبان
`,
  descrip: "آخرین نقطه مریدین محوری",
  descExtra: "برای اختلالات عصبی صورت مؤثر است",
  supplementary: "با GV26 و ST4 ترکیب شود",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "نقطه پایانی مریدین محوری"
},


// ==============================================  8ex-YinLink   ===============================================

{
category: "8ex-YinLink",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "8exYinLink",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر رگ ارتباطی یین به شرح زیر است:

1. مسیر رگ ارتباطی یین از نقطه تلاقی تمام مریدین‌های یین آغاز می‌شود.  
2. شروع از چوکین (KI9) در مریدین کلیه.  
3. (KI9) به‌عنوان نقطه خی-شکاف رگ ارتباطی یین.  
4. واقع در بین استخوان و عضلات.  
5. پنجسونبالاتر از برجستگی قوزک داخلی.  
6. صعود در امتداد سطح داخلی ران.  
7. ورود به ناحیه زیرشکمی.  
8. ترکیب با مریدین‌های طحال، کبد، کلیه و معده در نقطه بوسا (SP13).  
9. تلاقی با مریدین طحال در نقاط بوگائه (SP16) و دائهونگ (SP15).  
10. حرکت در امتداد عضلات بین‌دنده‌ای.  
11. ادغام با مریدین کلیه در نقطه گیمون (SP11).  
12. صعود، نفوذ به دیافراگم و بالا رفتن.  
13. حرکت در امتداد حلق.  
14. تلاقی با مریدین CV در نقاط چون‌دول (CV22) و یوم‌چئون (CV23).  
15. صعود، رسیدن به نقطه قدامی برجستگی پیشانی و پایان در آنجا.  
16. در مجموع، 14 نقطه طب سوزنی. (در برخی منابع دیگر، با افزودن SP12، در مجموع 16 نقطه برای رگ ارتباطی یین ذکر شده است.)


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

// ==============================================  8ex-YangLink   ===============================================

{
category: "8ex-YangLink",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "8exYangLink",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر رگ ارتباطی یانگ به شرح زیر است:

1. مسیر رگ ارتباطی یانگ از نقطه تلاقی تمام مریدین‌های یانگ آغاز می‌شود.  
2. شروع از گوم‌مون (BL63) در مریدین مثانه.  
3. واقع در پنجسونپایین‌تر از قوزک خارجی.  
4. صعود به سمت هفتسونبالاتر از قوزک خارجی و ادغام با مریدین کیسه صفرا در نقطه یانگ‌گیو (GB35).  
5. (GB35) به‌عنوان نقطه خی-شکاف رگ ارتباطی یانگ.  
6. حرکت در امتداد لبه خارجی کشکک زانو.  
7. صعود به ناحیه باسن.  
8. رسیدن به سطح خارجی ناحیه زیرشکمی.  
9. تلاقی با مریدین کیسه صفرا در نقطه گوریو (GB23).  
10. حرکت در امتداد عضلات بین‌دنده‌ای.  
11. صعود مورب به ناحیه آرنج.  
12. ترکیب با مریدین‌های روده بزرگ، روده کوچک و مثانه در ساعد.  
13. عبور از سطح قدامی شانه.  
14. تلاقی با مریدین سه‌گانه انرژی‌زا در نقاط نوسو (SI10) و چون‌لیو (TE15).  
15. بازگشت و اتحاد با مریدین‌های سه‌گانه انرژی‌زا، کیسه صفرا و معده در نقطه گیون‌جونگ (GB21).  
16. ورود به سطح خلفی شانه.  
17. ترکیب با مریدین روده کوچک و رگ پاشنه یانگ در نقطه نوسو (SI10).  
18. حرکت در امتداد ناحیه پشت‌گوشی.  
19. تلاقی با مریدین‌های سه‌گانه انرژی‌زا و کیسه صفرا در نقطه پونگ‌جی (GB20).  
20. صعود در امتداد نقاط نوگونگ (GB19)، سونگ‌نیئونگ (GB18)، جونگ‌یئونگ (GB17)، موک‌چانگ (GB16) و دویموپ (GB15).  
21. نزول به سمت پیشانی.  
22. تلاقی با مریدین‌های سه‌گانه انرژی‌زا، کیسه صفرا، روده بزرگ و معده در نقطه یانگ‌بائک (GB14).  
23. حرکت در امتداد سر.  
24. ورود به گوش.  
25. صعود، رسیدن به بون‌سین (GB13) و پایان در آنجا.  
26. در مجموع، 32 نقطه طب سوزنی. (در برخی منابع دیگر، نقاط LI14، ST8، GV15 و GV16 به رگ ارتباطی یانگ اضافه شده‌اند و شامل TE15 و GB23 نیز می‌شوند.)

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

// ==============================================  8ex-YangHeel   ===============================================

{
category: "8ex-YangHeel",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "8exYangHeel",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر رگ پاشنه یانگ به شرح زیر است:

1. رگ پاشنه یانگ،  
2. رگ ارتباطی است که از مریدین مثانه جدا می‌شود.  
3. شروع از مرکز پاشنه.  
4. خروج از قوزک خارجی.  
5. نزول به سمت سین‌مائک (BL62) از مریدین مثانه.  
6. عبور از سطح خلفی پاشنه.  
7. چرخش در اطراف پاشنه، نقطه بوک‌سام (BL61) به‌عنوان نقطه ریشه‌ای رگ پاشنه یانگ.  
8. صعود به سمت سهسونبالاتر از قوزک خارجی.  
9. بو‌یانگ (BL59) به‌عنوان نقطه خی-شکاف رگ پاشنه یانگ.  
10. صعود مستقیم.  
11. حرکت در امتداد لبه خارجی ران.  
12. حرکت در امتداد کتف در پشت استخوان‌های دنده‌ای.  
13. صعود و ترکیب با مریدین روده کوچک و رگ ارتباطی یانگ.  
14. صعود به سمت لبه خارجی شانه.  
15. تلاقی با مریدین روده بزرگ در نقطه گوگول (LI16).  
16. اتحاد با مریدین‌های روده بزرگ و سه‌گانه انرژی‌زا در نقطه گیونو (LI15).  
17. صعود به این‌یئونگ (ST9).  
18. حرکت در امتداد لب.  
19. ادغام با مریدین‌های روده بزرگ، معده و CV در نقطه جی‌چانگ (ST4).  
20. صعود همراه با مریدین معده و عبور از کنار سوراخ بینی.  
21. تلاقی دوباره با مریدین CV در نقطه سونگ‌ئوپ (ST1).  
22. رسیدن به گوشه داخلی چشم.  
23. همراه با مریدین‌های روده کوچک، مثانه، معده و رگ پاشنه یین.  
24. تمام پنج رگ در نقطه جونگ‌میئونگ (BL1) به هم می‌رسند.  
25. صعود مشترک از آنجا.  
26. ورود به خط موی قدامی.  
27. نزول در امتداد ناحیه پشت‌گوشی.  
28. ورود به پونگ‌جی (GB20).  
29. در مجموع، 22 نقطه طب سوزنی. (در برخی منابع دیگر، نقاط GB29 و GV16 به رگ پاشنه یانگ اضافه شده‌اند، بنابراین در مجموع 26 نقطه).

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

// ==============================================  8ex-YinHeel   ===============================================

{
category: "8ex-YinHeel",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "8exYinHeel",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر رگ پاشنه یین به شرح زیر است:

1. رگ پاشنه یین،  
2. رگ ارتباطی است که از مریدین کلیه جدا می‌شود.  
3. شروع از مرکز پاشنه.  
4. در سطح خلفی یونگ‌اوک (KI2) از مریدین کلیه.  
5. همراه با مریدین کلیه در امتداد جوهای (KI6) که در زیر قوزک داخلی قرار دارد.  
6. صعود به سمت دوسونبالاتر از قوزک داخلی.  
7. گیوشین (KI8) به‌عنوان نقطه خی-شکاف رگ پاشنه یین.  
8. صعود مستقیم.  
9. حرکت در امتداد سطح داخلی ران.  
10. ورود به ناحیه شرمگاهی.  
11. صعود و سپس حرکت در امتداد سمت داخلی قفسه سینه.  
12. ورود به حفره بزرگ بالای ترقوه.  
13. صعود و خروج از سطح قدامی این‌یئونگ.  
14. رسیدن به حلق و گلو.  
15. تلاقی با رگ چونگ و نفوذ به آن.  
16. ورود به لبه داخلی زائده خنجری.  
17. صعود.  
18. ورود به گوشه داخلی چشم.  
19. همراه با مریدین‌های روده کوچک، مثانه، معده و رگ پاشنه یانگ.  
20. هر پنج رگ در نقطه جونگ‌میئونگ (BL1) ترکیب شده و سپس با هم صعود می‌کنند.  
21. در مجموع، 8 نقطه طب سوزنی. (در برخی منابع دیگر، نقاط KI3، ST12 و ST9 به رگ پاشنه یین اضافه شده‌اند، بنابراین در مجموع 14 نقطه).


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

// ==============================================  8ex-cv   ===============================================

{
category: "8ex-cv",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "8excv",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر مریدین CV (رگ مفهومی) به شرح زیر است:

1. شروع از ناحیه پرینه (CV1) که در زیر نقطه جونگ‌گوک (CV3) قرار دارد.  
2. صعود و رسیدن به شیار در لبه فوقانی موهای شرمگاهی (CV2).  
3. حرکت در امتداد سمت داخلی شکم.  
4. صعود و عبور از گوان‌وون (CV3، CV4).  
5. رسیدن به حلق و حنجره (CV5، CV6، CV7، CV8، CV9، CV10، CV11، CV12، CV13، CV14، CV15، CV16، CV17، CV18، CV19، CV20، CV21، CV22، CV23).  
6. صعود به فک پایین (CV24 و GV28).  
7. حرکت در امتداد صورت.  
8. ورود به چشم (ST1).  
9. شاخه جدا شده دیگر مریدین CV و رگ چونگ (رگ کامل)،  
10. همگی از اندام‌های تناسلی داخلی خارج می‌شوند.  
11. صعود در امتداد سمت داخلی پشت.  
12. (هر دو مریدین به‌عنوان دریای مریدین‌ها شناخته می‌شوند).  
13. مریدینی که شناور شده و خارج می‌شود،  
14. در امتداد ناحیه زیرشکمی حرکت می‌کند.  
15. صعود مستقیم به سمت بالا.  
16. ادغام در حلق و حنجره.  
17. این دو مریدین به‌صورت جداگانه حرکت کرده و در آنجا به پایان می‌رسند.

`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

// ==============================================  8ex-gv   ===============================================

{
category: "8ex-gv",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "8exgv",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر مریدین GV (رگ حاکم) به شرح زیر است:

1. مسیر اصلی (اولیه) مریدین GV،  
2. شروع از وسط اندام‌های تناسلی زیر کلیه.  
3. صعود در زیر مهره‌های ستون فقرات.  
4. رسیدن به پونگ‌بو (GV16).  
5. ارتباط با مغز.  
6. صعود دوباره به بائک‌هوئی (GV20).  
7. نزول به پیشانی.  
8. حرکت به سمت پایین به پل بینی.  
9. رسیدن به اونگ‌یو (GV28) (نقاط GV1 تا GV28).  
   (اندام‌های تناسلی داخلی → ناحیه شرمگاهی → GV16 → ارتباط با مغز → GV28).  
10. شروع از مرز دو استخوان شرمگاهی در زیر ناحیه زیرشکمی. در زنان، با مجرای ادرار مرتبط است و مجرا انتهای حالب است.  
11. رگ ارتباطی مریدین، در امتداد اندام‌های تناسلی.  
12. یکی شدن در وسط لابیوم (لب‌های فرج) (CV1).  
13. دوباره چرخش در اطراف CV1 در پشت اندام‌های تناسلی (GV1).  
14. به‌صورت متفاوت، چرخش در اطراف ناحیه باسن.  
15. تلاقی با رگ ارتباطی مریدین کلیه و مریدین مثانه.  
16. رگ ارتباطی جدا شده که با مریدین کلیه یکی می‌شود.  
17. حرکت در امتداد سطح داخلی ران.  
18. نفوذ به مهره‌های ستون فقرات.  
19. اتصال به کلیه (نقطه BL23).  
   (انتهای حالب (مجرای ادرار) → ناحیه شرمگاهی → یکی شدن با مریدین کلیه → اتصال به کلیه (BL23)).  
20. همراه با مریدین مثانه، شروع از گوشه داخلی چشم (جونگ‌میئونگ BL1).  
21. صعود به پیشانی.  
22. تلاقی با مریدین کبد در نقطه بائک‌هوئی (GV20).  
23. ورود و ارتباط با مغز.  
24. چرخش در اطراف مغز و ظهور.  
25. صعود متفاوت در امتداد ناحیه پس‌گردنی.  
26. حرکت در امتداد سطح داخلی استخوان کتف.  
27. حرکت در امتداد مهره‌های ستون فقرات.  
28. رسیدن به ناحیه کمری.  
29. ورود دوباره در امتداد ستون فقرات.  
30. ارتباط با کلیه.  
31. در مردان، نزول در امتداد آلت تناسلی و رسیدن به اندام‌های تناسلی، مشابه زنان، رسیدن به ناحیه شرمگاهی.  
   (جونگ‌میئونگ (BL1، گوشه داخلی چشم) → GV29 → ورود و ارتباط با مغز → اتصال به کلیه (BL23): یکی شدن با مریدین مثانه).  
32. در ناحیه زیرشکمی، صعود مستقیم به سمت بالا.  
33. نفوذ به مرکز ناف.  
34. صعود و نفوذ به قلب.  
35. ورود به حلق.  
36. صعود به سمت گونه.  
37. چرخش در اطراف لب.  
38. صعود و اتصال به نقاط درست زیر مردمک‌های چشم.  
   (ناحیه شرمگاهی → یوم‌چئون (CV23) → سونگ‌جانگ (CV24) → اونگ‌یو (GV28) → زیر هر دو مردمک: یکی شدن با مریدین CV).


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

// ==============================================  8ex-bv   ===============================================

{
category: "8ex-bv",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "8exbv",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر رگ کمری به شرح زیر است:

1. رگ کمری،  
2. شروع از جانگ‌مون (LR13) در مریدین کبد، که در انتهای دنده یازدهم قرار دارد.  
3. همراه با مریدین کیسه صفرا در امتداد دائمائک (GB26) که در انتهای دنده یازدهم واقع است.  
4. چرخش در اطراف ناحیه کمری.  
5. مانند کمربندی که ناحیه کمری را محکم می‌کند.  
6. همچنین تلاقی با مریدین کیسه صفرا در نقاط اوچو (GB27) و یودو (GB28).  
7. در مجموع، 8 نقطه طب سوزنی. (در برخی منابع دیگر، LR13 حذف شده است، بنابراین در مجموع 6 نقطه).


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},

// ==============================================  8ex-tv   ===============================================

{
category: "8ex-tv",
Enname: "",
faname: "",
meridian: "",
Fameridian: "",
id: "8extv",
name: "",
description: "",
location: "",
pressureAngle: "",
pressureAmount: "",
repetitions: "",
time: "",
extra: "",
imageUrl: "",
desc: `
مسیر رگ کامل (Thoroughfare Vessel یا Chong Mai) به شرح زیر است:

1. رگ کامل، از اندام‌های زیر کلیه شروع می‌شود.  
2. از وسط اندام‌های تناسلی آغاز شده و همراه با مریدین CV از سطح ناحیه کشاله ران (ST30) خارج می‌شود.  
3. جریان همراه با مریدین کلیه (KI12، KI13، KI14، KI15).  
4. حرکت در امتداد ناف (KI16).  
5. صعود و پراکندگی در مرکز قفسه سینه (KI17، KI18، KI19، KI20، KI21)، تجمع در گلو و ورود به لب‌ها.  
   (اندام‌های تناسلی داخلی → ناحیه کشاله ران (ST30) → قفسه سینه → گلو → لب‌ها: ترکیب با مریدین‌های کلیه، معده و CV، در مجموع 24 نقطه).  
   (مسیر اول رگ کامل)  
6. رگ ارتباطی دوم مریدین رگ کامل از وسط اندام‌های تناسلی زیر کلیه همراه با مریدین CV شروع می‌شود.  
7. صعود به مهره‌های ستون فقرات واقع در پشت حفره شکمی (سمت مقابل مهره‌های حفره شکمی و قفسه سینه).  
8. تلاقی با مریدین GV.  
   (قفسه سینه → دیواره پشتی حفره شکمی [پریتونئال] → مهره‌ها → پشت: ادغام با مریدین GV).  
   (مسیر دوم رگ کامل)  
9. رگ کامل به‌عنوان دریای 12 مریدین شناخته می‌شود.  
10. رگ ارتباطی سوم مریدین رگ کامل از وسط اندام‌های تناسلی زیر کلیه همراه با رگ ارتباطی اصلی مریدین کلیه شروع می‌شود.  
11. خروج از سطح ناحیه کشاله ران (ST30).  
12. نزول به سمت داخلی ران.  
13. ورود با خط مورب.  
14. نزول به سمت داخلی استخوان درشت‌نی.  
15. حرکت به سمت پایین به کف پا، عبور از لبه خلفی قوزک داخلی همراه با مریدین کلیه.  
16. شاخه‌ای که از لبه خلفی قوزک داخلی جدا می‌شود، به‌صورت مورب به قوزک نفوذ می‌کند.  
17. خروج از بالای پا و حرکت بین انگشت اول و دوم (مریدین کبد).  
18. جریان در تمام رگ‌های ارتباطی، گرم کردن پا و ایجاد نبض در پا.  
   (اندام‌های تناسلی داخلی → کف پا، بالای پا: ترکیب با مریدین‌های معده، کلیه و کبد).  
   (مسیر سوم رگ کامل)


`,
descrip: "",
descExtra: "",
supplementary: "",

      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main: "",
},
// ==============================================  EXTRA POINT   ===============================================

{
  category: "EXTRAPOINT",
  Enname:"Yintang",
  faname:"چشم سوم",
  meridian:"Third Eye Chakra Ajna",
  Fameridian:"چاکرای چشم سوم / پیشانی",
  id:"Ex1",
  name:"Ex1 Yintang چشم سوم اکسترا پوینت",
  description:"چاکراه چشم سوم",
  location:"محل نقطه: بین ابرو در پیشونی",
  pressureAngle:"",
  pressureAmount:" بین 3 تا 5",
  repetitions:" بین یک تا سه بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra:"شهود، درک، بصیرت",
  imageUrl:"",
  desc: "",
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/eye.jpg",
      main:"",
},
{
  category: "EXTRAPOINT",
  Enname:"",
  faname:"DD1",
  meridian:"",
  Fameridian:"",
  id:"DD1",
  name:"DD1",
  description:"پشت ساق پا",
  location:"محل نقطه:پشت پا از بی ال 57 چهار سون پایین تر و از مچ پا 4 سون بالاتر    ",
  pressureAngle:"",
  pressureAmount:" بین 7 تا 10",
  repetitions:" بین یک تا سه بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra:"",
  imageUrl:"",
  desc: "",
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
},
{
  category: "EXTRAPOINT",
  Enname: "DD2",
  faname: "",
  meridian: "",
  Fameridian: "",
  id: "DD2",
  name: "DD2",
  description: "",
  location: "محل نقطه: بالای گوش وسط",
  pressureAngle: "",
  pressureAmount: "فشار بین 5 تا 10",
  repetitions: "بین یک تا سه بار",
  time: "",
  extra: "",
  imageUrl: "assets/images/ddl.jpg",
  desc: "",
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ddl.jpg",
      main: "",
},
{
  category: "EXTRAPOINT",
  Enname: "DD3",
  faname: "",
  meridian: "",
  Fameridian: "",
  id: "DD3",
  name: "DD3",
  description: "",
  location: "محل نقطه: یک سوم بالایی قسمت لبه گوش",
  pressureAngle: "",
  pressureAmount: "فشار بین 5 تا 10",
  repetitions: "بین یک تا سه بار",
  time: "",
  extra: "",
  imageUrl: "assets/images/ddl.jpg",
  desc: "",
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ddl.jpg",
      main: "",
},
{
  category: "EXTRAPOINT",
  Enname: "DD4",
  faname: "",
  meridian: "",
  Fameridian: "",
  id: "DD4",
  name: "DD4",
  description: "",
  location: "محل نقطه: یک سوم پایینی قسمت لبه گوش",
  pressureAngle: "",
  pressureAmount: "فشار بین 5 تا 10",
  repetitions: "بین یک تا سه بار",
  time: "",
  extra: "",
  imageUrl: "assets/images/ddl.jpg",
  desc: "",
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ddl.jpg",
      main: "",
},
{
  category: "EXTRAPOINT",
  Enname: "DD5",
  faname: "",
  meridian: "",
  Fameridian: "",
  id: "DD5",
  name: "DD5",
  description: "",
  location: "محل نقطه: لاله گوش پایین وسط",
  pressureAngle: "",
  pressureAmount: "فشار بین 5 تا 10",
  repetitions: "بین یک تا سه بار",
  time: "",
  extra: "",
  imageUrl: "assets/images/ddl.jpg",
  desc: "",
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ddl.jpg",
      main: "",
},
{
  category: "EXTRAPOINT",
  Enname:"",
  faname:"هدینگ",
  meridian:"",
  Fameridian:"",
  id:"EX31",
  name:"EX31 هدینگ",
  description:"بالای کشکک زانو",
  location:"محل نقطه: بالا کشکک زانو روی کشکک فشار وارد نکنید  ",
  pressureAngle:"",
  pressureAmount:" بین 5 تا 10",
  repetitions:" بین یک تا سه بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra:"",
  imageUrl:"",
  desc: "",
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ex31.png",
      main:"",
},
{
  category: "EXTRAPOINT",
  Enname:"",
  faname:"ژیان",
  meridian:"",
  Fameridian:"",
  id:"EX32",
  name:"EX32 ژیان",
  description:"دو نقطه زیر کشکک زانو",
  location:"محل نقطه: دابی اس تی 35 و گودی داخلی پا زیر کشکک زانو هر دو با هم گرفته شود   ",
  pressureAngle:"",
  pressureAmount:" بین 5 تا 10",
  repetitions:" بین یک تا سه بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra:"",
  imageUrl:"",
  desc: "",
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ex32.png",
      main:"",
},
{
  category: "EXTRAPOINT",
  Enname: "Ear point appetite control",
  faname: "مثلث گوش یا دایره گوش",
  meridian: "",
  Fameridian: "",
  id: "EarAppetiteControl",
  name: "Ear point appetite control",
  description: "صورت",
  location: "محل نقطه: فشار روی غضروف گوش",
  pressureAngle: "",
  pressureAmount: "فشار 7-10",
  repetitions: "",
  time: "",
  extra: "",
  imageUrl: "assets/images/ear.jpg",
  desc: "اصلاح گوارش، بازتاب گوارش، بازتاب اعصاب و روان، بازتاب سردرد",
  descrip: "",
  descExtra: "",
  supplementary: "",
  
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/ear.jpg",
      main: "",
},



// ==============================================  بازتاب درمانی   ===============================================
//بازتاب درمانی

    {
      category: "reflexoloy",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"reflexoloyIntro1",
      name:"مقدمه بازتاب درمانی",
      description:``,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: `
      
طب فشاری یا بازتاب درمانی
در بدن نقاط زیادی وجود دارند که با آشنای این نقاط و تحریکشان باعث بهبودی خیلی از بیماریها و مشکلات می شویم
این نقاط را میتوان با تحریک کردن یا فشار دادن 
از طریق دست
چوب 
یا سوزن انجام داد

در طب چینی ما دارای دو مفهوم یین و یانگ هستیم
که پایین تر راجع به یین و یانگ اطلاعاتی را میدهیم
یین = زمین، سردی، پذیرش، آرامش
یانگ = خورشید، گرما، انرژی، فعالیت

در مریدین های که وابسته به یین و یانگ هستند
شماره گذاری یین از سمت زمین هست
شماره گذاری یانگ از سمت آسمان

در بدن
دوازده مریدین اصلی (رگ‌های انرژی) وجود دارد
 که هرکدام با یکی از ارگان‌های اصلی بدن مرتبط است.

1	Lung Meridian (LU)	مریدین ریه	یین
2	Large Intestine Meridian (LI)	مریدین روده بزرگ	یانگ
3	Stomach Meridian (ST)	مریدین معده	یانگ
4	Spleen Meridian (SP)	مریدین طحال	یین
5	Heart Meridian (HT)	مریدین قلب	یین
6	Small Intestine Meridian (SI)	مریدین روده کوچک	یانگ
7	Bladder Meridian (BL)	مریدین مثانه	یانگ
8	Kidney Meridian (KI)	مریدین کلیه	یین
9	Pericardium Meridian (PC)	مریدین پریکارد (تامیانه قلب)	یین
10	Triple Energizer (TE / SJ)	مریدین سه‌گانه یا سه‌گرم‌کننده	یانگ
11	Gall Bladder Meridian (GB)	مریدین کیسه صفرا	یانگ
12	Liver Meridian (LR)	مریدین کبد	یین

و دو مریدین مکمل (غیراعضایی)
نام انگلیسی	معادل فارسی	توضیح
Conception Vessel (CV / REN)	مریدین محوری قدامی یا رِن	مسیر جلویی بدن، مرتبط با یین
Governor Vessel (GV / DU)	مریدین حاکم یا دو	مسیر پشتی بدن، مرتبط با یانگ

البته در بازتاب درمانی یکسری نقاط بیشتر هم مانند دی دی ال ها که مرتبط با مریدین ها نیستند استفاده می شوند

در مجموع ما یک سری بازتاب داریم که مجموعه نقاطی از مریدین های مختلف هستند که باعث بهبود در بعضی از بیماری های می باشند که به آنها میپردازیم

فاصله در بازتاب درمانی با واحد سان می باشد
که هر بند انگشت یک سان یا سون می باشد
طبق عکس
      `,
      descrip: "",
      descExtra: "",
      supplementary: "",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/SUN.jpg",
      main:"",
    },
    {
      category: "reflexoloy",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"Yin",
      name:"یین (Yin)",
      description:``,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: `
      
مونث  🧘‍♂️
تاریکی 🌑	
زمین 🌍	
سرما ❄️	
شب 🌙	
درون 🌀	
سکون 🛌	
پذیرنده 🤲	
نرم 🧖‍♀️	


🧘‍♀️ در بدن انسان:
اگر یین زیاد شود: احساس خستگی، سرما، افسردگی، بی‌حالی...


یین = زمین، سردی، پذیرش، آرامش

زمستان	یین ❄️	سرد، تاریک، ساکن
استراحت و خواب	یین 😴	آرامش، بازسازی
کلیه‌ها (ذخیره انرژی)	یین 🧊	خنک‌کننده، پایدار
      `,
      descrip: "",
      descExtra: "",
      supplementary: "",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "reflexoloy",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"Yang",
      name:"یانگ (Yang)",
      description:``,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: `
      
مذکر 🧘‍♂️
روشنایی ☀️
آسمان ☁️
گرما 🔥
روز 🌞
بیرون 🌪️
حرکت 🏃‍♂️
فعال 💪
سخت 🪨


🧘‍♀️ در بدن انسان:
اگر یانگ زیاد شود: بی‌خوابی، عصبانیت، گر گرفتگی، التهاب...

یانگ = خورشید، گرما، انرژی، فعالیت

تابستان	یانگ ☀️	گرم، روشن، فعال
ورزش شدید	یانگ 🏋️	حرکت، قدرت
قلب (فعال)	یانگ ❤️	تپش، حرکت خون

      `,
      descrip: "",
      descExtra: "",
      supplementary: "",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },



// ==============================================  تکمیلی   ===============================================


  
    {
      category: "digestive",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"digestive",
      name:"تکمیلی",
      description:`
تکمیلی بازتاب گوارش: بعد اتمام نقاط شکمی در ناف مقداری روغن سیاه دانه می ریزیم و محکم دور ناف را در مدت هفت تا هشت دقیقه در جهت ساعتگرد میچرخانیم فشار در ناحیه ساعت 3 تا ساعت 6 را بیشتر وارد میکنیم
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "digestive",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"digestive1",
      name:"تکمیلی",
      description:`
تکمیلی بازتاب گوارش: 
•	کلیه فشار ها در ناحیه شکمی بین 3 تا 6 می باشد و با زاویه مستقیم
•	اعداد فرد در ناحیه شکمی مهمتر می باشد
•	اگه نقاط خطوط مریدین را میگیرید. نقاط را از اعداد کوچکتر به بزرگتر به ترتیب بگیرید
•	در ناحیه شکمی ردیف سی وی 12 و نقاط افقی این خط مثل نقاط اس تی 21 خیلی مهم هستند
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "FrozenShoulder",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"FrozenShoulder",
      name:"تکمیلی",
      description:`
تکمیلی کتف : نقاط دور کتف رو بگیرید جایی که درد داره محکمتر فشار بدین
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "NeckWaistKneesAnkles",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"NeckWaistKneesAnkles",
      name:"تکمیلی",
      description:`
تکمیلی کتف : نقاط دور کتف رو بگیرید جایی که درد داره محکمتر فشار بدین
نقاط تکمیلی کمر:
محل امپول زدن باسن رو بگیرید فشار 10
از پشت گردن یه سون یه سون BL ها رو تا کف پا برین
چرخش پا برای جا انداختن لگن را انجام دهید
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"assets/images/waist.jpg",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/waist.jpg",
      main:"",
    },
    {
      category: "fever",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"fever",
      name:"تکمیلی",
      description:`
تکمیلی بازتاب تب شدید:
1 – پیاز رنده کنید و شب تا صبح کف پا بگذارید یا حنا با سرکه بجای اب درست کنید و 20 دقیقه کف پا بگذارید
2- خیار رنده کنید و به بدن بمالید
3- گل ختمی بنفشه یا گل بنفشه دم کنید ولرم شد بخورد – آب سیب میل کند
4- هر 15 دقیقه یک بار بازتاب تب شدید را بگیرید
5- تل گیری هم نشد این کار رو انجام بدهید آب داخل دهان نگه دارد و زیر گلو را ماساژ دهید به پایین

      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "addiction",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"addiction",
      name:"تکمیلی",
      description:`
ازتاب ترک سیگار، مواد مخدر، الکل و ولع مغز 
30 درصد بازتاب 70 درصد همت شخص معتاد

      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "toothache",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"toothache",
      name:"تکمیلی",
      description:`
تکمیلی دندان درد : روغن حنظل با نخ روغنی کند در سوارخ دندان بمالدو یک قطره داخل گوش بریزید
یک پیمانه سرکه و 5 پیمانه گلاب یا آب (یا سه پیمانه آب) دهان شوییه کنید برای آفت هم مناسب می باشد
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"assets/images/toothache.jpg",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"assets/images/toothache.jpg",
      main:"",
    },
    {
      category: "diabetes",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"diabetes",
      name:"تکمیلی",
      description:`
تکمیلی دیابت: روغن  حنظل رو کف پا ماساژ بدهید
دیابت بارداری کدو س بخورید
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "headache",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"headache",
      name:"تکمیلی",
      description:`
تکمیلی بازتاب سردرد:
1- اصلاح گوارش
2- بازتاب گوارش 
3- بازتاب اعصاب و روان 
4- بازتاب سردرد
درمان سینوزیت:
1-	سه بار داخل دهان و دماغ رو با اب نمک یا اب بشویید
2-	شب ها روغن بنفشه داخل دماغ بریزید
3-	لیمو تازه هفته ای یک بار - در روز سه بار چند قطره داخل هر دو سوراخ دماغ بریزید
4-	از حمام بیرون می آیید تا مچ پا را با اب سرد حمام آب بگیرید
5-	لباس مناسب بعد حمام بپوشید و سرتان را بپوشید در غیر این صورت روی پیشانی را یک لایه روغن زیتون بمالید

      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "slimming",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"slimming",
      name:"تکمیلی",
      description:`
تکمیلی بازتاب کاهش وزن:
پنج بار بازتاب کاهش وزندر روز انجام شود 
1- حذف ناهار 
2- پیاده روی حداقل یک ساعت و تا دو ساعت بعد از پیاده روی خوردن ممنوع می باشد چون جذب میشود هرآنچه میل شود 
قبل از غذا خوردن کاهو میل کنید
جویدن غذا
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },


// ==============================================  درمان   ===============================================

    {
      category: "nerves",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"nervesTreatment",
      name:"درمان بازتاب اعصاب رو ان",
      description:`
اضطراب
استرس
تنش روانی
پرخاشگری
وسواس فکری
افسردگی
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "digestive",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"digestiveTreatment",
      name:"درمان بازتاب گوارش",
      description:`
ترش کردن
ورم مخاط روده بزرگ
یبوست
نفخ شکم
هموروئید
اسهال
اسهال خونی
یرقان
مشکلات کبدی
تهوع و استفراق
زخم معده
کرم روده
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "FrozenShoulder",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"FrozenShoulderTreatment",
      name:"درمان بازتاب دست و کتف",
      description:`
مچ درد
آرنج درد
کتف درد
درد شانه
کتف یخ زده
درد بازوها
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "NeckWaistKneesAnkles",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"NeckWaistKneesAnklesTreatment",
      name:"درمان بازتاب پا و کمر",
      description:`
گردن درد
کمر درد
درد پاشنه پا
درد مفصل ران
درد زانو
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },
    {
      category: "hypertension",
      Enname:"",
      faname:"",
      meridian:"",
      Fameridian:"",
      id:"hypertensionTreatment",
      name:"درمان بازتاب فشار خون و قلب",
      description:`
تنظیم فشار خون 
گردش نامناسب خون در دست و پا
بیماری های قلبی
تپش قلب
      `,
      location:"",
      pressureAngle:"",
      pressureAmount:"",
      repetitions:"",
      time: "",
      extra:"",
      imageUrl:"",
      desc: "",
      descrip: "",
      descExtra: "",
      supplementary: "1",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
      main:"",
    },

// ==============================================  N-HN-54 Anmian (آن میان)   ===============================================

{
  category: "N-HN-54",
  id: "Anmian",
  name: "N-HN-54 Anmian آن میان",
  Enname: "Anmian",
  faname: "آرامش خواب",
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "پنجاه و چهارمین نقطه خارج از مریدین در سیستم نام‌گذاری چینی + نقطه اختصاصی خواب",
  location: "پشت گوش، بین points TE17 و GB20، در فرورفتگی استخوان پشت گوش",
  pressureAngle: "مایل به سمت جلو (۴۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای بی‌خوابی، کابوس و اضطراب شبانه",
  imageUrl: "assets/images/dd/Anmian.jpg",
  desc: `
بی‌خوابی  
کابوس‌های شبانه  
اضطراب و بیقراری
📍 آناتومی دقیق:

در فرورفتگی پشت لاله گوش

بین processus mastoideus و استخوان occipital

روی عضله sternocleidomastoideus

🩺 موارد بالینی:

بی‌خوابی اولیه و ثانویه

کابوس‌های مکرر

خواب‌آلودگی روزانه

اختلالات ریتم خواب

🔗 ترکیبات درمانی:

بی‌خوابی شدید: N-HN-54 + HT7 + SP6

کابوس‌های شبانه: N-HN-54 + PC6 + GV20

اضطراب خواب: N-HN-54 + Yintang + LV3

⚠️ نکات مهم:

فشار باید ملایم و آرام‌بخش باشد

بهتر است قبل از خواب استفاده شود

می‌توان با روغن اسطوخودوس ماساژ داد

📚 خواص ویژه در طب چینی:

آرام‌کننده Shen (روح)

متعادل‌کننده Heart و Liver

کاهش‌دهنده اضطراب و تنش

💡 تکنیک‌های کاربردی:

ماساژ ملایم دایره‌ای با انگشت وسط

فشار همراه با تنفس عمیق و آرام

استفاده از روغن‌های آرام‌بخش مانند اسطوخودوس

🌙 پروتکل خواب:

فشار ملایم روی نقطه به مدت ۱ دقیقه

تنفس عمیق از بینی (۴ ثانیه)

حبس نفس (۲ ثانیه)

بازدم آرام از دهان (۶ ثانیه)

تکرار ۵-۷ بار قبل از خواب


`,
  descrip: "نقطه طلایی برای درمان اختلالات خواب",
  descExtra: "برای پاراسومنیا (اختلالات خواب) بسیار مؤثر است",
  supplementary: "با HT7 و Yintang ترکیب شود",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای آرامش و خواب"
},

// ==============================================  M-LE-34 Baichongwo (بای چونگ وو)   ===============================================

{
  category: "M-LE-34",
  id: "Baichongwo",
  name: "M-LE-34 Baichongwo بای چونگ وو",
  Enname: "Baichongwo",
  faname: "لانه صد حشره",
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "سی و چهارمین نقطه خارج از مریدین در سیستم M-LE + نقطه اختصاصی بیماری‌های پوستی و خارش",
  location: "۱ سانتی‌متر بالای لبه فوقانی کشکک زانو (بالای SP10)، روی ران",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای کهیر، اگزما، خارش پوستی و آلرژی",
  imageUrl: "assets/images/dd/Baichongwo.jpg",
  desc: `
کهیر و اگزما  
خارش عمومی پوست  
واکنش‌های آلرژیک
📍 آناتومی دقیق:

در قسمت داخلی ران

۱ سانتی‌متر بالای نقطه SP10 (Xuehai)

روی عضله vastus medialis

🩺 موارد بالینی:

کهیر (Urticaria)

اگزما (Eczema)

درماتیت آتوپیک

خارش پوستی (Pruritus)

واکنش‌های آلرژیک پوستی

🔗 ترکیبات درمانی:

کهیر شدید: M-LE-34 + SP10 + LI11

اگزما: M-LE-34 + LI11 + SP6

خارش عمومی: M-LE-34 + GB31 + LV3

⚠️ نکات مهم:

فشار می‌تواند نسبتاً قوی باشد

در موارد حاد می‌توان روزانه ۲-۳ بار استفاده کرد

می‌توان با کرم‌های ضدخارش موضعی ترکیب شود

📚 خواص ویژه در طب چینی:

پاک‌کننده Wind-Heat از پوست

کاهش‌دهنده خارش و التهاب

تصفیه‌کننده خون از توکسی‌نیته

💡 تکنیک‌های کاربردی:

فشار ثابت با انگشت شست به مدت ۱-۲ دقیقه

ماساژ دایره‌ای در جهت عقربه‌های ساعت

استفاده از روغن نعناع برای افزایش اثر ضدخارش

🌿 پروتکل درمانی پوست:

فشار روی نقطه به مدت ۲ دقیقه

ماساژ ناحیه آسیب‌دیده پوست

تکرار ۳ بار در روز

ترکیب با نقاط LI11 و SP10

✅ موارد احتیاط:

در بارداری با احتیاط استفاده شود

در پوست‌های بسیار ملتهب فشار ملایم‌تر شود

در صورت عفونت پوستی از فشار مستقیم خودداری شود


`,
  descrip: "نقطه طلایی برای درمان بیماری‌های پوستی و خارش",
  descExtra: "برای درماتیت آتوپیک و کهیر مزمن بسیار مؤثر است",
  supplementary: "با SP10 و LI11 ترکیب شود",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای پاکسازی Heat و رفع خارش"
},


// ==============================================  M-HN-30 Bailao (بای لائو)   ===============================================
{
  category: "Bailao M-HN-30",
  id: "Bailao",
  name: "M-HN-30 Bailao بای لائو",
  Enname: "Bailao",
  faname: "صد زحمت",
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "سی‌امین نقطه خارج از مریدین در سیستم M-HN + نقطه اختصاصی درمان خستگی و درد گردن",
  location: "۲ سانتی‌متر بالای مهره هفتم گردنی (C7)، ۱ سانتی‌متر خارج از خط وسط",
  pressureAngle: "مایل به سمت مرکز (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای درد گردن، خستگی مزمن و سفتی شانه‌ها",
  imageUrl: "assets/images/dd/Bailao.jpg",
  desc: `
درد مزمن گردن  
خستگی عمومی  
سفتی شانه‌ها  
سردردهای گردنی

 آناتومی دقیق:

در ناحیه پس‌سری (Occipital region)

بین عضله تراپزیوس و عضله لواتور اسکاپولا

روی نقطه BL10 (Tianzhu)

🩺 موارد بالینی:

درد مزمن گردن (Cervical spondylosis)

سردردهای تنشی (Tension headaches)

خستگی عمومی و ضعف

استرس و اضطراب

فیبرومیالژی

🔗 ترکیبات درمانی:

درد گردن: M-HN-30 + GB20 + SI15

خستگی عمومی: M-HN-30 + ST36 + GV4

سردرد تنشی: M-HN-30 + GB20 + GV20

⚠️ نکات مهم:

فشار باید عمیق و پایدار باشد

بهتر است همزمان با چرخش آرام گردن استفاده شود

در موارد حاد می‌توان روزانه چندین بار استفاده کرد

📚 خواص ویژه در طب چینی:

تقویت‌کننده Qi و Blood

ریلکس‌کننده عضلات و تاندون‌ها

کاهش‌دهنده استرس و تنش

💡 تکنیک‌های کاربردی:

فشار عمیق با انگشت شست به مدت ۱-۲ دقیقه

ماساژ دایره‌ای در جهت عقربه‌های ساعت

استفاده از گرمای موضعی برای افزایش اثرگذاری

🌿 پروتکل درمانی گردن:

فشار روی نقطه به مدت ۲ دقیقه

چرخش آرام گردن به چپ و راست

تکرار ۳ بار در روز

ترکیب با نقاط GB20 و SI15

✅ موارد احتیاط:

در موارد فتق دیسک گردن با احتیاط استفاده شود

از فشار خیلی شدید خودداری شود

در صورت سرگیجه فشار ملایم‌تر شود


`,
  descrip: "نقطه کلیدی برای رفع خستگی و دردهای گردنی",
  descExtra: "برای سندروم خستگی مزمن و فیبرومیالژی بسیار مؤثر است",
  supplementary: "با GB20 و GB21 ترکیب شود",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای ریلکس کردن عضلات گردن و شانه"
},
// ==============================================  M-UE-22 Baxie (با شی)   ===============================================
{
  category: "N-HN-54",
  id: "Baxie",
  name: "M-UE-22 Baxie با شی",
  Enname: "Baxie",
  faname: "هشت عامل بیماری‌زا",
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "بیست و دومین نقطه خارج از مریدین در سیستم M-UE + مجموعه نقاط بین پنجه‌ای دست",
  location: "در چهار فرورفتگی بین پنجه‌های دست (بین استخوان‌های متاکارپال)، در پشت دست",
  pressureAngle: "مایل به سمت استخوان (۴۵ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آرتریت دست، تورم و درد مفاصل انگشتان",
  imageUrl: "assets/images/dd/Baxie.jpg",
  desc: `
آرتریت روماتوئید  
تورم مفاصل انگشتان  
درد و سفتی دست  
نوروپاتی محیطی
📍 آناتومی دقیق:

بین استخوان‌های متاکارپال اول و دوم (بین شست و سبابه)

بین متاکارپال دوم و سوم

بین متاکارپال سوم و چهارم

بین متاکارپال چهارم و پنجم

روی عضلات interosseous dorsales

🩺 موارد بالینی:

آرتریت روماتوئید (Rheumatoid arthritis)

استئوآرتریت (Osteoarthritis)

سندروم تونل کارپال (Carpal tunnel syndrome)

تاندونیت دست (Tendonitis)

نوروپاتی دیابتی

🔗 ترکیبات درمانی:

آرتریت دست: M-UE-22 + LI4 + SI3

تورم مفاصل: M-UE-22 + SP9 + LI11

دست درد: M-UE-22 + TE5 + LU7

⚠️ نکات مهم:

فشار باید ملایم و کنترل‌شده باشد

در موارد التهاب حاد فشار بسیار ملایم شود

می‌توان از ماساژ با روغن زنجبیل استفاده کرد

📚 خواص ویژه در طب چینی:

پاک‌کننده Wind-Damp از مفاصل

کاهش‌دهنده تورم و التهاب

بهبود دهنده گردش خون موضعی

💡 تکنیک‌های کاربردی:

فشار متناوب با انگشت شست

ماساژ دایره‌ای در هر فرورفتگی

استفاده از کمپرس گرم برای افزایش اثرگذاری

🌿 پروتکل درمانی دست:

فشار روی هر نقطه به مدت ۳۰ ثانیه

ماساژ کل دست به سمت نوک انگشتان

تکرار ۲ بار در روز

ترکیب با حرکات کششی دست

✅ موارد احتیاط:

در موارد التهاب بسیار شدید مفاصل

در پوست‌های آسیب‌دیده یا زخم‌دار

در بیماران با اختلالات انعقادی


`,
  descrip: "نقاط کلیدی برای اختلالات مفاصل دست و انگشتان",
  descExtra: "برای سندروم تونل کارپال و آرتروز مؤثر است",
  supplementary: "با LI4 و TE5 ترکیب شود",
      
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "مجموعه نقاط مخصوص درمان دست و انگشتان"
},
// ============================================== M-HN-14 Bitong (بی تونگ)   ===============================================
{
  category: "M-HN-14",
  id: "Bitong",
  name: "M-HN-14 Bitong بی تونگ",
  Enname: "Bitong",
  faname: "بینی بازکن",
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "چهاردهمین نقطه خارج از مریدین در سیستم M-HN + نقطه اختصاصی بینی و سینوس‌ها",
  location: "در انتهای چین بینی و گونه، در فرورفتگی کنار سوراخ بینی",
  pressureAngle: "مایل به سمت بالا و داخل (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳-۵ بار", 
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای گرفتگی بینی، سینوزیت و رینیت آلرژیک",
  imageUrl: "assets/images/dd/Bitong.jpg",
  desc: `
گرفتگی بینی  
سینوزیت  
رینیت آلرژیک  
پولیپ بینی

📍 آناتومی دقیق:

در ناحیه nasolabial fold (چین بینی و لب)

بین عضله levator labii superioris و استخوان بینی

در کنار سوراخ بینی (nostril)

🩺 موارد بالینی:

رینیت آلرژیک (Allergic rhinitis)

سینوزیت حاد و مزمن (Sinusitis)

پولیپ بینی (Nasal polyps)

سرماخوردگی با گرفتگی بینی

از دست دادن حس بویایی (Anosmia)

🔗 ترکیبات درمانی:

سینوزیت: M-HN-14 + LI20 + GB20

رینیت آلرژیک: M-HN-14 + LI4 + LI11

گرفتگی بینی: M-HN-14 + BL2 + GV23

⚠️ نکات مهم:

فشار باید بسیار ملایم باشد (ناحیه حساس)

از فشار مستقیم روی غضروف بینی خودداری شود

در موارد التهاب حاد فشار ملایم‌تر شود

📚 خواص ویژه در طب چینی:

پاک‌کننده Wind-Heat از بینی

بازکننده مجاری بینی (Nasal passages)

کاهش‌دهنده ترشحات بینی

💡 تکنیک‌های کاربردی:

فشار ملایم با نوک انگشت اشاره

ماساژ رو به بالا و بیرون

تنفس عمیق همزمان با فشار

🌿 پروتکل درمانی بینی:

فشار ملایم به مدت ۳۰ ثانیه

ماساژ از پایین به بالا вдuring بینی

تکرار ۳-۴ بار در روز

استفاده از بخور اکالیپتوس

✅ موارد احتیاط:

پس از جراحی بینی

در صورت جوش یا التهاب پوستی در ناحیه

در موارد خونریزی بینی فعال

🌱 درمان‌های کمکی:

استنشاق بخور نعناع

شستشوی بینی با آب نمک

کمپرس گرم روی سینوس‌ها
`,
  descrip: "نقطه طلایی برای باز کردن مجاری بینی",
  descExtra: "برای احتقان بینی و سردردهای سینوسی بسیار مؤثر است",
  supplementary: "با LI20 و BL2 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای اختلالات بینی و سینوس"
},
// ==============================================  M-LE-23 Dannangxue (دان دانگ شو)   ===============================================
{
  category: "M-LE-23",
  id: "Dannangxue",
  name: "M-LE-23 Dannangxue دان دانگ شو",
  Enname: "Dannangxue",
  faname: "نقطه کیسه صفرا", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "بیست و سومین نقطه خارج از مریدین در سیستم M-LE + نقطه اختصاصی کیسه صفرا",
  location: "۲-۳ سانتی‌متر زیر GB34 (یانگ لینگ چوان)، در فرورفتگی زیر سر نازک نی (فیبولا)",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای کوله‌سیستیت، سنگ کیسه صفرا و درد هیپوکندریوم راست",
  imageUrl: "assets/images/dd/Dannangxue.jpg",
  desc: `
سنگ کیسه صفرا  
کوله‌سیستیت  
درد زیر دنده سمت راست  
سوءهاضمه صفراوی
📍 آناتومی دقیق:

در قسمت فوقانی ساق پا

۲-۳ سانتی‌متر پایین‌تر از GB34

بین استخوان درشت‌نی (تیبیا) و نازک‌نی (فیبولا)

روی عضله پرونئوس لونگوس

🩺 موارد بالینی:

کوله‌لیتیازیس (سنگ کیسه صفرا)

کوله‌سیستیت (التهاب کیسه صفرا)

دیس کینزی صفراوی (اختلال حرکت کیسه صفرا)

یرقان انسدادی (زردی)

سوءهاضمه صفراوی

🔗 ترکیبات درمانی:

سنگ کیسه صفرا: M-LE-23 + GB34 + LR3

کوله‌سیستیت: M-LE-23 + GB24 + ST36

درد صفراوی: M-LE-23 + PC6 + CV12

⚠️ نکات مهم:

فشار می‌تواند نسبتاً قوی باشد

در موارد حاد ممکن است نقطه بسیار حساس باشد

بهتر است پس از غذا استفاده نشود

📚 خواص ویژه در طب چینی:

پاک‌کننده Damp-Heat از کبد و کیسه صفرا

تنظیم‌کننده عملکرد صفرا

کاهش‌دهنده درد و التهاب

💡 تکنیک‌های کاربردی:

فشار عمیق با انگشت شست به مدت ۱-۲ دقیقه

ماساژ عمودی به سمت پایین

استفاده همزمان با تنفس عمیق

🌿 پروتکل درمانی صفرا:

فشار روی نقطه به مدت ۲ دقیقه

ماساژ ناحیه هیپوکندریوم راست

تکرار ۳ بار در روز

ترکیب با رژیم کم چربی

✅ موارد احتیاط:

در موارد انسداد کامل مجاری صفراوی

پس از جراحی کیسه صفرا

در التهاب حاد با تب بالا

🔍 ارزش تشخیصی:

حساسیت این نقطه می‌تواند نشان‌دهنده مشکلات کیسه صفرا باشد

در معاینه، حساسیت به لمس ارزش کلینیکی دارد


`,
  descrip: "نقطه اختصاصی برای تشخیص و درمان بیماری‌های کیسه صفرا",
  descExtra: "حساسیت این نقطه نشان‌دهنده مشکلات کیسه صفرا است",
  supplementary: "با GB34 و LR14 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای درمان بیماری‌های کیسه صفرا"
},
// ==============================================  M-BW-1 Dingchuan (دینگ چوان)   ===============================================
{
  category: "M-BW-1",
  id: "Dingchuan",
  name: "M-BW-1 Dingchuan دینگ چوان",
  Enname: "Dingchuan",
  faname: "توقف آسم", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "اولین نقطه خارج از مریدین در سیستم M-BW + نقطه اختصاصی آسم و تنگی نفس",
  location: "۰.۵ سانتی‌متر خارج از مهره‌های T1-T2 (بین مهره اول و دوم سینه‌ای)",
  pressureAngle: "مایل به سمت داخل (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آسم، برونشیت، سرفه و آلرژی‌های تنفسی",
  imageUrl: "assets/images/dd/Dingchuan.jpg",
  desc: `
آسم و تنگی نفس  
برونشیت مزمن  
سرفه‌های آلرژیک  
آمفیزم
📍 آناتومی دقیق:

در سطح مهره‌های T1-T2 (بین اولین و دومین مهره سینه‌ای)

۰.۵ تا ۱ سانتی‌متر خارج از خط وسط (پاراورتبرال)

روی عضله ذوزنقه‌ای (Trapezius) و عضله راست‌کننده ستون فقرات

در مجاورت نقطه BL11 (Dazhu)

🩺 موارد بالینی:

آسم برونشیال (Bronchial asthma)

برونشیت حاد و مزمن

آمفیزم (Emphysema)

سرفه‌های آلرژیک و تحریکی

COPD (بیماری انسدادی مزمن ریه)

🔗 ترکیبات درمانی:

حملات آسم: M-BW-1 + LU7 + CV17

برونشیت مزمن: M-BW-1 + BL13 + ST40

تنگی نفس: M-BW-1 + CV6 + KI3

⚠️ نکات مهم:

فشار باید کنترل‌شده و عمیق باشد

در هنگام حمله آسم می‌توان فشار قوی‌تر اعمال کرد

بهتر است بیمار در حالت نشسته باشد

📚 خواص ویژه در طب چینی:

متوقف‌کننده Wheezing (خس خس سینه)

پاک‌کننده Lung Heat

تنظیم‌کننده Qi ریه

💡 تکنیک‌های کاربردی:

فشار دوطرفه همزمان با هر دو دست

ماساژ عمقی به سمت پایین

همزمانی فشار با بازدم بیمار

🌿 پروتکل درمانی تنفسی:

فشار عمیق به مدت ۱-۲ دقیقه

ماساژ ناحیه بین کتف‌ها

تکرار هر ۴ ساعت در موارد حاد

ترکیب با تمرینات تنفسی

✅ موارد احتیاط:

در موارد پوکی استخوان شدید

پس از جراحی قفسه سینه

در بیماران با ضعف شدید

🚑 اورژانس تنفسی:

این نقطه در حملات حاد آسم می‌تواند زندگی‌بخش باشد

فشار قوی تا رسیدن به مرکز درمانی

ترکیب با نقاط LU5 و LU9
`,
  descrip: "نقطه طلایی برای کنترل و توقف حملات آسم",
  descExtra: "برای COPD و بیماری‌های انسدادی ریه بسیار مؤثر است",
  supplementary: "با LU1 و BL13 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای بیماری‌های تنفسی و آسم"
},
// ==============================================  M-UE-29 Erbai (ار بای)   ===============================================
{
  category: "M-UE-29",
  id: "Erbai",
  name: "M-UE-29 Erbai ار بای",
  Enname: "Erbai",
  faname: "دو سفیدی", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "بیست و نهمین نقطه خارج از مریدین در سیستم M-UE + نقطه اختصاصی هموروئید و پرولاپس رکتوم",
  location: "۴ سانتی‌متر بالای چین مچ دست، بین تاندون‌های عضلات flexor carpi radialis و palmaris longus",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای هموروئید، پرولاپس رکتوم و اختلالات مقعد",
  imageUrl: "assets/images/dd/Erbai.jpg",
  desc: `
هموروئید داخلی و خارجی  
پرولاپس رکتوم  
خونریزی مقعدی  
خارش ناحیه مقعد
📍 آناتومی دقیق:

در ساعد داخلی (قسمت قدامی)

بین تاندون عضله خم‌کننده مچ دستی radialis و تاندون کف‌دستی دراز

روی عضله flexor digitorum superficialis

در مجاورت نقطه PC5 (Jianshi)

🩺 موارد بالینی:

هموروئید داخلی و خارجی (Hemorrhoids)

پرولاپس رکتوم (Rectal prolapse)

شقاق مقعدی (Anal fissure)

خونریزی مقعدی (Rectal bleeding)

خارش مقعد (Pruritus ani)

🔗 ترکیبات درمانی:

هموروئید حاد: M-UE-29 + BL57 + GV1

پرولاپس رکتوم: M-UE-29 + DU20 + ST36

خونریزی مقعد: M-UE-29 + SP1 + SP6

⚠️ نکات مهم:

فشار باید عمیق و پایدار باشد

در موارد خونریزی فعال فشار ملایم‌تر

بهتر است هنگام دفع فشار اعمال نشود

📚 خواص ویژه در طب چینی:

بالا برنده Qi برای پرولاپس

قطع‌کننده خونریزی

کاهش‌دهنده تورم و التهاب

💡 تکنیک‌های کاربردی:

فشار عمیق با انگشت شست به مدت ۱-۲ دقیقه

ماساژ دایره‌ای در جهت عقربه‌های ساعت

استفاده از فشار متناوب (۵ ثانیه فشار، ۲ ثانیه استراحت)

🌿 پروتکل درمانی هموروئید:

فشار روی نقطه به مدت ۲ دقیقه

تکرار ۳ بار در روز

ترکیب با حمام سیتز (نشیمن)

رژیم غذایی پر فیبر

✅ موارد احتیاط:

در بارداری با احتیاط استفاده شود

در موارد ترومبوز هموروئید

پس از جراحی مقعد

🔍 ارزش تشخیصی:

حساسیت این نقطه می‌تواند نشان‌دهنده مشکلات مقعدی باشد

در معاینه، درد به لمس ارزش کلینیکی دارد

🌱 درمان‌های کمکی:

مصرف فیبر کافی

نوشیدن آب زیاد

پرهیز از زور زدن هنگام دفع
`,
  descrip: "نقطه اختصاصی برای درمان بیماری‌های مقعد و راست روده",
  descExtra: "برای شقاق مقعدی و فیستول نیز مؤثر است",
  supplementary: "با BL57 و BL35 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای هموروئید و پرولاپس"
},
// ==============================================  M-HN-10 Erijian (اری جیان)   ===============================================
{
  category: "M-HN-10",
  id: "Erijian",
  name: "M-HN-10 Erijian اری جیان",
  Enname: "Erijian",
  faname: "نوک گوش", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "دهمین نقطه خارج از مریدین در سیستم M-HN + نقطه اختصاصی تب و التهاب",
  location: "در بالای لاله گوش، وقتی گوش به سمت جلو تا شود، در راس گوش",
  pressureAngle: "مایل به سمت پایین (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۲-۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای تب، التهاب، فشار خون بالا و چشم‌درد",
  imageUrl: "assets/images/dd/Erijian.jpg",
  desc: `
تب و التهاب  
فشار خون بالا  
قرمزی و درد چشم  
سردرد
📍 آناتومی دقیق:

در بالاترین نقطه لاله گوش (Apex of auricle)

وقتی گوش به سمت جلو تا شود، در راس گوش قرار می‌گیرد

در محل اتصال غضروف گوش

🩺 موارد بالینی:

تب و عفونت‌های حاد

التهاب ملتحمه (Conjunctivitis)

فشار خون بالا

سردردهای شدید

آبسیسه و عفونت‌های موضعی

🔗 ترکیبات درمانی:

تب بالا: M-HN-10 + LI11 + GV14

التهاب چشم: M-HN-10 + GB1 + BL2

فشار خون: M-HN-10 + LR3 + GB20

⚠️ نکات مهم:

فشار باید بسیار ملایم باشد

می‌توان از خونگیری با لانست استریل استفاده کرد

در موارد تب بسیار بالا مؤثر است

📚 خواص ویژه در طب چینی:

پاک‌کننده Heat از خون

کاهش‌دهنده تب و التهاب

پایین‌آورنده فشار خون

💡 تکنیک‌های کاربردی:

فشار ملایم با نوک انگشت

ماساژ بسیار آرام

امکان خونگیری با لانست (توسط متخصص)

🌿 پروتکل درمانی تب:

فشار ملایم به مدت ۱ دقیقه

تکرار هر ۳۰ دقیقه در تب‌های بالا

ترکیب با کمپرس سرد پیشانی

مصرف مایعات فراوان

✅ موارد احتیاط:

از فشار شدید خودداری شود

در موارد اختلالات انعقادی

در بیماران با نقص ایمنی

🔍 تکنیک خونگیری:

فقط توسط متخصص انجام شود

استفاده از لانست استریل

فشار ملایم برای خارج شدن چند قطره خون

🌱 درمان‌های کمکی:

مصرف مایعات خنک

استراحت کافی

پاشویه با آب ولرم
`,
  descrip: "نقطه طلایی برای کاهش تب و التهاب",
  descExtra: "برای خونریزی‌های کوچک و فوریته استفاده می‌شود",
  supplementary: "با LI11 و GV14 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای پاکسازی Heat و کاهش تب"
},
// ==============================================  M-HN-37 Haiquan (های چیوان)   ===============================================
{
  category: "M-HN-37",
  id: "Haiquan",
  name: "M-HN-37 Haiquan های چیوان",
  Enname: "Haiquan",
  faname: "چشمه دریا", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "سی و هفتمین نقطه خارج از مریدین در سیستم M-HN + نقطه اختصاصی زبان و گفتار",
  location: "در زیر زبان، روی فرنولوم (بند زیرین زبان)، در نقطه اتصال به کف دهان",
  pressureAngle: "مایل به سمت بالا (۱۵ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲-۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای لکنت زبان، اختلالات گفتاری و خشکی دهان",
  imageUrl: "assets/images/dd/Haiquan.jpg",
  desc: `
لکنت زبان  
اختلالات تکلم  
خشکی دهان  
دیسفاژی (اختلال بلع)
📍 آناتومی دقیق:

روی فرنولوم زبانی (Lingual frenulum)

در نقطه اتصال زبان به کف دهان

در مجاورت غدد زیرزبانی

🩺 موارد بالینی:

لکنت زبان (Stuttering)

آفازی (Aphasia) پس از سکته مغزی

دیسارتری (Dysarthria)

خشکی دهان (Xerostomia)

اختلالات بلع (Dysphagia)

🔗 ترکیبات درمانی:

لکنت زبان: M-HN-37 + CV23 + HT5

آفازی: M-HN-37 + GV15 + GB13

خشکی دهان: M-HN-37 + KI6 + CV24

⚠️ نکات مهم:

فشار باید بسیار بسیار ملایم باشد

از فشار مستقیم و شدید خودداری شود

بهتر است توسط متخصص انجام شود

📚 خواص ویژه در طب چینی:

بازکننده مجاری زبان

تنظیم‌کننده Qi در مریدین قلب

مرطوب‌کننده دهان و گلو

💡 تکنیک‌های کاربردی:

فشار بسیار ملایم با نوک انگشت

ماساژ آرام به سمت نوک زبان

استفاده همزمان با حرکات زبان

🌿 پروتکل درمانی گفتار:

فشار ملایم به مدت ۱۰-۱۵ ثانیه

حرکات کششی زبان

تکرار ۲ بار در روز

ترکیب با تمرینات گفتاردرمانی

✅ موارد احتیاط:

از خونریزی خودداری شود (ناحیه پرعروق)

در موارد التهاب حاد دهان

پس از جراحی زبان

🔍 تکنیک‌های ویژه:

استفاده از آب گرم برای شستشو

ماساژ با عسل برای خشکی دهان

تمرینات تلفظ همزمان با فشار

🌱 درمان‌های کمکی:

مصرف مایعات کافی

جویدن آدامس بدون قند

تمرینات منظم گفتاری
`,
  descrip: "نقطه طلایی برای درمان اختلالات زبان و گفتار",
  descExtra: "برای آفازی (از دست دادن قدرت تکلم) پس از سکته مغزی مؤثر است",
  supplementary: "با CV23 و HT5 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای بیماری‌های زبان و گفتار"
},
// ==============================================  M-LE-27 Heding (هدینگ)   ===============================================
{
  category: "M-LE-27",
  id: "Heding",
  name: "M-LE-27 Heding هدینگ",
  Enname: "Heding",
  faname: "تاج درنا", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "بیست و هفتمین نقطه خارج از مریدین در سیستم M-LE + نقطه اختصاصی زانو",
  location: "در بالای کشکک زانو، در فرورفتگی فوقانی وقتی زانو خم شده است",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آرتروز زانو، درد و تورم مفصل زانو",
  imageUrl: "assets/images/dd/Heding.jpg",
  desc: `
آرتروز زانو  
درد مزمن زانو  
تورم مفصل زانو  
خشکی زانو
`,
  descrip: "نقطه طلایی برای درمان بیماری‌های مفصل زانو",
  descExtra: "برای پارگی مینیسک و آسیب‌های ورزشی زانو مؤثر است",
  supplementary: "با ST35 و GB34 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای آرتروز و درد زانو"
},
// ==============================================  MN-LE-16 Xiayan (شی یان)   ===============================================
{
  category: "MN-LE-16",
  id: "Xiayan",
  name: "MN-LE-16 Xiayan شی یان",
  Enname: "Xiayan",
  faname: "چشمه زانو", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "شانزدهمین نقطه خارج از مریدین در سیستم MN-LE + نقطه اختصاصی زانو (به صورت جفت داخلی و خارجی)",
  location: "در دو طرف زانو: خارجی (در فرورفتگی کنار خارجی تاندون پاتلا) و داخلی (در فرورفتگی کنار داخلی تاندون پاتلا) وقتی زانو خم شده است",
  pressureAngle: "مایل به سمت مرکز زانو (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آرتروز زانو، درد و تورم مفصل زانو، آسیب‌های ورزشی",
  imageUrl: "assets/images/dd/Xiayan.jpg",
  desc: `
آرتروز زانو  
آسیب منیسک  
تاندونیت زانو  
آب آوردن زانو
📍 آناتومی دقیق:

Xiayan خارجی: در فرورفتگی lateral به تاندون پاتلا، بین تاندون پاتلا و سر استخوان فیبولا

Xiayan داخلی: در فرورفتگی medial به تاندون پاتلا، بین تاندون پاتلا و کندیل داخلی تیبیا

روی کپسول مفصلی زانو

در مجاورت نقاط ST35 (Dubi) و SP10 (Xuehai)

🩺 موارد بالینی:

استئوآرتریت زانو (Osteoarthritis)

پارگی مینیسک (Meniscus tear)

تاندونیت پاتلا (Patellar tendinitis)

بورسیت زانو (Knee bursitis)

آسیب‌های ورزشی زانو

🔗 ترکیبات درمانی:

آرتروز زانو: MN-LE-16 + ST35 + GB34

آسیب مینیسک: MN-LE-16 + SP10 + BL40

تورم زانو: MN-LE-16 + SP9 + LV8

⚠️ نکات مهم:

فشار باید عمیق و دقیق باشد

در موارد التهاب حاد فشار ملایم‌تر شود

بهتر است زانو در حالت خمیده ۹۰ درجه باشد

📚 خواص ویژه در طب چینی:

فعال‌کننده Qi و Blood در مفصل زانو

کاهش‌دهنده تورم و درد

ترمیم‌کننده تاندون‌ها و لیگامان‌ها

💡 تکنیک‌های کاربردی:

فشار عمیق با انگشت شست به مدت ۱-۲ دقیقه

ماساژ دایره‌ای همزمان در هر دو نقطه

استفاده از گرمای موضعی همزمان

🌿 پروتکل درمانی زانو:

فشار روی هر نقطه به مدت ۲ دقیقه

حرکات خم و راست کردن آرام زانو

تکرار ۳ بار در روز

ترکیب با تمرینات تقویتی چهارسر

✅ موارد احتیاط:

پس از جراحی زانو

در موارد عفونت مفصل

در ناپایداری شدید زانو

🔍 ارزش تشخیصی:

حساسیت این نقاط نشان‌دهنده مشکلات داخلی زانو است

تورم در این ناحیه می‌تواند نشان‌دهنده افیوژن مفصل باشد

🌱 درمان‌های کمکی:

کمپرس گرم یا سرد (بسته به شرایط)

تمرینات دامنه حرکتی

استفاده از زانوبند در موارد لازم
`,
  descrip: "نقاط طلایی برای درمان بیماری‌های مفصل زانو",
  descExtra: "برای پارگی مینیسک و آسیب‌های لیگامانی زانو مؤثر است",
  supplementary: "با ST35 و GB34 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقاط اصلی برای آرتروز و درد زانو"
},
// ==============================================  M-BW-6 Huanmen (هوان من)   ===============================================
{
  category: "M-BW-6",
  id: "Huanmen",
  name: "M-BW-6 Huanmen هوان من",
  Enname: "Huanmen",
  faname: "دروازه حلقه", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "ششمین نقطه خارج از مریدین در سیستم M-BW + نقطه اختصاصی اختلالات گوارشی و درد شکم",
  location: "۳ سانتی‌متر خارج از مهره‌های T12-L1 (بین مهره دوازدهم سینه‌ای و اول کمری)",
  pressureAngle: "مایل به سمت داخل (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای نفخ شکم، درد معده، اسپاسم عضلات شکم و سوءهاضمه",
  imageUrl: "assets/images/dd/Huanmen.jpg",
  desc: `
نفخ شکم  
درد معده  
اسپاسم عضلات شکم  
سوءهاضمه
📍 آناتومی دقیق:

در ناحیه کمری-سینه‌ای (Thoracolumbar junction)

۳ سانتی‌متر خارج از خط وسط (پاراورتبرال)

بین مهره T12 و L1

روی عضله راست‌کننده ستون فقرات (Erector spinae)

در مجاورت نقطه BL20 (Pishu) و BL21 (Weishu)

🩺 موارد بالینی:

نفخ و گاز معده (Flatulence)

سندروم روده تحریک‌پذیر (IBS)

دیسپپسی (سوءهاضمه)

اسپاسم عضلات شکم

دردهای عملکردی شکم

🔗 ترکیبات درمانی:

نفخ شکم: M-BW-6 + CV12 + ST25

سندروم روده تحریک‌پذیر: M-BW-6 + ST36 + SP6

درد معده: M-BW-6 + PC6 + CV13

⚠️ نکات مهم:

فشار باید عمیق ولی کنترل‌شده باشد

بهتر است بیمار در حالت درازکش باشد

پس از غذا فشار اعمال نشود

📚 خواص ویژه در طب چینی:

تنظیم‌کننده Qi معده و روده

کاهش‌دهنده نفخ و گاز

آرام‌کننده اسپاسم عضلات

💡 تکنیک‌های کاربردی:

فشار عمیق با انگشت شست به مدت ۱-۲ دقیقه

ماساژ دایره‌ای در جهت عقربه‌های ساعت

استفاده از گرمای موضعی همزمان

🌿 پروتکل درمانی گوارش:

فشار روی نقطه به مدت ۲ دقیقه
2- ماساژ clockwise شکم

تکرار ۳ بار در روز

ترکیب با رژیم غذایی مناسب

✅ موارد احتیاط:

در بارداری

پس از جراحی شکم

در موارد انسداد روده

🔍 ارزش تشخیصی:

حساسیت این نقطه می‌تواند نشان‌دهنده اختلالات گوارشی باشد

سفتی عضلات این ناحیه نشان‌دهنده استرس گوارشی است

🌱 درمان‌های کمکی:

مصرف چای نعناع

پرهیز از غذاهای نفاخ

مدیریت استرس
`,
  descrip: "نقطه طلایی برای تنظیم عملکرد معده و روده",
  descExtra: "برای سندروم روده تحریک‌پذیر (IBS) بسیار مؤثر است",
  supplementary: "با CV12 و ST36 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای اختلالات گوارشی و دردهای شکمی"
},
// ==============================================  M-HN-18 Jiachenjiang (جیا چنگ جیانگ)   ===============================================
{
  category: "M-HN-18",
  id: "Jiachenjiang",
  name: "M-HN-18 Jiachenjiang جیا چنگ جیانگ",
  Enname: "Jiachenjiang",
  faname: "نگهدارنده استخر اشک", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "هیجدهمین نقطه خارج از مریدین در سیستم M-HN + نقطه اختصاصی صورت و فک",
  location: "در چانه، ۱ سانتی‌متر خارج از نقطه CV24 (Chengjiang)، در فرورفتگی استخوان فک پایین",
  pressureAngle: "مایل به سمت مرکز (۳۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دندان‌درد، فلج بل، و تیک‌های صورت",
  imageUrl: "assets/images/dd/Jiachenjiang.jpg",
  desc: `
دندان‌درد فک پایین  
فلج بل (Bell's Palsy)  
تیک صورت  
اسپاسم عضلات فک
 آناتومی دقیق:

در ناحیه چانه (Mental region)

۱ سانتی‌متر lateral به نقطه CV24 (Chengjiang)

روی استخوان مندیبل (آرواره پایین)

در مجاورت عصب منتال (Mental nerve)

روی عضله mentalis

🩺 موارد بالینی:

دندان‌درد فک پایین

فلج عصب صورت (Bell's Palsy)

اختلال مفصل فکی-گیجگاهی (TMJ)

تیک‌های صورت (Facial tics)

نورالژی عصب سه‌قلو (Trigeminal neuralgia)

🔗 ترکیبات درمانی:

دندان‌درد: M-HN-18 + LI4 + ST6

فلج بل: M-HN-18 + ST4 + GB14

اختلال TMJ: M-HN-18 + SI18 + GB2

⚠️ نکات مهم:

فشار باید ملایم و کنترل‌شده باشد

از فشار مستقیم روی عصب منتال خودداری شود

در موارد التهاب حاد فشار ملایم‌تر شود

📚 خواص ویژه در طب چینی:

فعال‌کننده Qi و Blood در صورت

کاهش‌دهنده درد و اسپاسم

تنظیم‌کننده مریدین معده و روده بزرگ

💡 تکنیک‌های کاربردی:

فشار ملایم با نوک انگشت اشاره

ماساژ دایره‌ای کوچک

استفاده همزمان با حرکات آرام فک

🌿 پروتکل درمانی صورت:

فشار روی نقطه به مدت ۱ دقیقه

ماساژ ناحیه فک پایین

تکرار ۳ بار در روز

ترکیب با کمپرس گرم

✅ موارد احتیاط:

پس از جراحی فک

در موارد عفونت دندان

در بیماران با پیس میکر (با احتیاط)

🔍 ارزش تشخیصی:

حساسیت این نقطه می‌تواند نشان‌دهنده مشکلات دندانی باشد

درد به لمس می‌تواند مشکلات فکی را نشان دهد

🌱 درمان‌های کمکی:

کمپرس گرم برای آرامش عضلات

تمرینات آرام‌بخش فک

پرهیز از غذاهای سفت
`,
  descrip: "نقطه طلایی برای اختلالات فک پایین و صورت",
  descExtra: "برای اختلالات مفصل فکی-گیجگاهی (TMJ) مؤثر است",
  supplementary: "با ST6 و SI18 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای دردهای فک و صورت"
},
// ==============================================  M-UE-48 Jianqian (جیان چیان)   ===============================================
{
  category: "M-UE-48",
  id: "Jianqian",
  name: "M-UE-48 Jianqian جیان چیان",
  Enname: "Jianqian",
  faname: "قسمت قدامی شانه", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "چهل و هشتمین نقطه خارج از مریدین در سیستم M-UE + نقطه اختصاصی شانه",
  location: "در قسمت قدامی شانه، بین سر استخوان بازو و زائده آکرومیون، در فرورفتگی وقتی بازو به طرفین بالا می‌آید",
  pressureAngle: "مایل به سمت عقب (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای درد شانه، یخ زدگی شانه و بورسیت",
  imageUrl: "assets/images/dd/Jianqian.jpg",
  desc: `
درد قدامی شانه  
شانه یخ‌زده (Frozen shoulder)  
بورسیت شانه  
تاندونیت شانه

📍 آناتومی دقیق:

در ناحیه قدامی شانه (Anterior shoulder)

بین سر استخوان بازو (Humeral head) و زائده آکرومیون

در فرورفتگی زیر زائده آکرومیون

روی کپسول مفصلی شانه

در مجاورت تاندون عضله دو سر بازویی (Biceps tendon)

🩺 موارد بالینی:

شانه یخ‌زده (Frozen shoulder/Adhesive capsulitis)

تاندونیت دو سر بازویی (Biceps tendinitis)

بورسیت زیرآکرومیال (Subacromial bursitis)

سندروم ایمپینجمنت شانه

آرتروز شانه (Glenohumeral arthritis)

🔗 ترکیبات درمانی:

شانه یخ‌زده: M-UE-48 + LI15 + SI9

تاندونیت دو سر: M-UE-48 + LU5 + PC3

درد شانه: M-UE-48 + TE14 + GB21

⚠️ نکات مهم:

فشار باید عمیق ولی کنترل‌شده باشد

بهتر است بازو در حالت استراحت باشد

در موارد التهاب حاد فشار ملایم‌تر شود

📚 خواص ویژه در طب چینی:

فعال‌کننده Qi و Blood در شانه

کاهش‌دهنده درد و التهاب

بهبود دهنده دامنه حرکتی

💡 تکنیک‌های کاربردی:

فشار عمیق با انگشت شست به مدت ۱-۲ دقیقه

ماساژ دایره‌ای در جهت عقربه‌های ساعت

استفاده همزمان با حرکات passive شانه

🌿 پروتکل درمانی شانه:

فشار روی نقطه به مدت ۲ دقیقه

حرکات pendulum شانه

تکرار ۳ بار در روز

ترکیب با تمرینات کششی

✅ موارد احتیاط:

پس از جراحی شانه

در موارد دررفتگی شانه

در پوکی استخوان شدید

🔍 ارزش تشخیصی:

حساسیت این نقطه نشان‌دهنده مشکلات قدامی شانه است

محدودیت حرکتی همراه با درد ارزش کلینیکی دارد

🌱 درمان‌های کمکی:

کمپرس گرم

تمرینات دامنه حرکتی

فیزیوتراپی تخصصی
`,
  descrip: "نقطه طلایی برای درمان دردهای قدامی شانه",
  descExtra: "برای پارگی روتاتور کاف و آسیب‌های ورزشی شانه مؤثر است",
  supplementary: "با LI15 و TE14 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای اختلالات مفصل شانه"
},
// ==============================================  M-LE-13 Lanweixue (لان وی شو)   ===============================================
{
  category: "M-LE-13",
  id: "Lanweixue",
  name: "M-LE-13 Lanweixue لان وی شو",
  Enname: "Lanweixue",
  faname: "نقطه آپاندیس", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "سیزدهمین نقطه خارج از مریدین در سیستم M-LE + نقطه اختصاصی آپاندیس و درد شکم",
  location: "۲ سانتی‌متر زیر ST36 (Zusanli)، روی ساق پا",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای آپاندیسیت، درد شکم و التهاب روده",
  imageUrl: "assets/images/dd/Lanweixue.jpg",
  desc: `
آپاندیسیت  
درد右下 شکم  
التهاب روده  
سوءهاضمه
📍 آناتومی دقیق:

در قسمت قدامی-خارجی ساق پا

۲ سانتی‌متر پایین‌تر از ST36 (Zusanli)

بین استخوان درشت‌نی (تیبیا) و نازک‌نی (فیبولا)

روی عضله تیبیالیس قدامی (Tibialis anterior)

در مجاورت عصب پرونئال عمقی (Deep peroneal nerve)

🩺 موارد بالینی:

آپاندیسیت حاد و مزمن (Appendicitis)

درد右下 شکم (Right lower quadrant pain)

التهاب روده (Enteritis)

سوءهاضمه (Dyspepsia)

اختلالات گوارشی عملکردی

🔗 ترکیبات درمانی:

آپاندیسیت: M-LE-13 + ST25 + SP6

درد شکم: M-LE-13 + CV12 + PC6

التهاب روده: M-LE-13 + ST37 + BL25

⚠️ نکات مهم:

فشار باید عمیق و پایدار باشد

در موارد حاد ممکن است نقطه بسیار حساس باشد

در آپاندیسیت حاد فوراً به پزشک مراجعه شود

📚 خواص ویژه در طب چینی:

پاک‌کننده Heat و Toxin از روده

کاهش‌دهنده التهاب و درد

تنظیم‌کننده Qi روده

💡 تکنیک‌های کاربردی:

فشار عمیق با انگشت شست به مدت ۱-۲ دقیقه

ماساژ عمودی به سمت پایین

استفاده همزمان با تنفس عمیق

🌿 پروتکل درمانی:

فشار روی نقطه به مدت ۲ دقیقه

تکرار هر ۴ ساعت در موارد حاد

ترکیب با رژیم غذایی سبک

استراحت کافی

✅ موارد احتیاط:

در آپاندیسیت حاد (اورژانس پزشکی)

پس از جراحی شکم

در موارد انسداد روده

🔍 ارزش تشخیصی:

حساسیت این نقطه می‌تواند نشان‌دهنده آپاندیسیت باشد

در معاینه، درد به لمس ارزش کلینیکی دارد

🌱 درمان‌های کمکی:

رژیم غذایی مایع در موارد حاد

پرهیز از غذاهای سنگین

استراحت مطلق در موارد التهاب حاد
`,
  descrip: "نقطه طلایی برای تشخیص و درمان آپاندیسیت",
  descExtra: "حساسیت این نقطه می‌تواند نشان‌دهنده آپاندیسیت باشد",
  supplementary: "با ST25 و SP6 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای بیماری‌های آپاندیس و روده"
},
// ==============================================  M-UE-24 Luozhen (لو ژن)   ===============================================
{
  category: "M-UE-24",
  id: "Luozhen",
  name: "M-UE-24 Luozhen لو ژن",
  Enname: "Luozhen",
  faname: "گردن افتاده", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "بیست و چهارمین نقطه خارج از مریدین در سیستم M-UE + نقطه اختصاصی گردن درد و تورتیکولی",
  location: "بر روی پشت دست، بین استخوان‌های دوم و سوم متاکارپال، حدود ۰.۵ سانتی‌متر پشت مفصل متاکارپوفالانژیال",
  pressureAngle: "مایل به سمت استخوان (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای گردن درد حاد، تورتیکولی و سفتی گردن",
  imageUrl: "assets/images/dd/Luozhen.jpg",
  desc: `
گردن درد حاد  
تورتیکولی (کجی گردن)  
سفتی گردن  
اسپاسم عضلات گردن
📍 آناتومی دقیق:

بر روی پشت دست (Dorsum of hand)

بین استخوان‌های متاکارپال دوم و سوم

حدود ۰.۵-۱ سانتی‌متر پروگزیمال از مفصل MCP (متاکارپوفالانژیال)

روی عضلات interosseous dorsales

در مجاورت نقطه LI3 (Sanjian)

🩺 موارد بالینی:

تورتیکولی حاد (Acute torticollis)

گردن درد ناگهانی (Acute neck pain)

اسپاسم عضلات گردن (Neck muscle spasm)

سفتی گردن (Neck stiffness)

آسیب‌های گردن ناشی از خوابیدن در وضعیت نامناسب

🔗 ترکیبات درمانی:

تورتیکولی حاد: M-UE-24 + GB20 + SI15

گردن درد: M-UE-24 + BL10 + GV14

اسپاسم گردن: M-UE-24 + GB21 + TE5

⚠️ نکات مهم:

فشار باید قوی و عمیق باشد

بهتر است همزمان با چرخش آرام گردن استفاده شود

در موارد حاد می‌توان هر ۲ ساعت تکرار کرد

📚 خواص ویژه در طب چینی:

آرام‌کننده عضلات و تاندون‌ها

کاهش‌دهنده اسپاسم و درد

بهبود دهنده دامنه حرکتی گردن

💡 تکنیک‌های کاربردی:

فشار قوی با انگشت شست به مدت ۱-۲ دقیقه

ماساژ دایره‌ای همزمان با حرکت دادن گردن

استفاده از فشار متناوب (۵ ثانیه فشار، ۲ ثانیه استراحت)

🌿 پروتکل درمانی فوری:

فشار قوی روی نقطه به مدت ۲ دقیقه

چرخش آرام گردن به چپ و راست

تکرار هر ۲ ساعت در موارد حاد

ترکیب با کمپرس گرم

✅ موارد احتیاط:

در موارد فتق دیسک گردن

پس از جراحی گردن

در آسیب‌های نخاعی

🔍 ارزش تشخیصی:

حساسیت این نقطه می‌تواند نشان‌دهنده مشکلات گردن باشد

در معاینه، درد به لمس ارزش کلینیکی دارد

🌱 درمان‌های کمکی:

کمپرس گرم روی گردن

تمرینات کششی آرام

پرهیز از حرکات ناگهانی


`,
  descrip: "نقطه طلایی برای درمان فوری گردن درد و تورتیکولی",
  descExtra: "برای خوابیدن در وضعیت نامناسب و سرماخوردگی گردن بسیار مؤثر است",
  supplementary: "با GB20 و SI15 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای گردن درد حاد و تورتیکولی"
},
// ==============================================  M-HN-8 Qiuhou (چیو هو)   ===============================================
{
  category: "M-HN-8",
  id: "Qiuhou",
  name: "M-HN-8 Qiuhou چیو هو",
  Enname: "Qiuhou",
  faname: "پشت کره چشم", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "هشتمین نقطه خارج از مریدین در سیستم M-HN + نقطه اختصاصی چشم و بینایی",
  location: "در فرورفتگی بین کاسه چشم و کره چشم، در ربع تحتانی خارجی orbit",
  pressureAngle: "مایل به سمت داخل و بالا (۳۰ درجه)",
  pressureAmount: "۱ (بسیار ملایم)",
  repetitions: "۲-۳ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای بیماری‌های چشم، آب سیاه و تاری دید",
  imageUrl: "assets/images/dd/Qiuhou.jpg",
  desc: `
گلوکوم (آب سیاه)  
آب مروارید  
تاری دید  
التهاب چشم
📍 آناتومی دقیق:

در ناحیه periorbital (اطراف چشم)

در ربع تحتانی خارجی orbit چشم

بین کاسه چشم و کره چشم

روی رباط پلکی lateral (Lateral canthal ligament)

در مجاورت غدد اشکی

🩺 موارد بالینی:

گلوکوم (Glaucoma)

آب مروارید (Cataract)

رتینوپاتی دیابتی (Diabetic retinopathy)

دژنراسیون ماکولا (Macular degeneration)

میوپیا (نزدیک‌بینی) و هایپروپیا (دوربینی)

🔗 ترکیبات درمانی:

گلوکوم: M-HN-8 + BL1 + GB20

آب مروارید: M-HN-8 + ST2 + LI4

تاری دید: M-HN-8 + BL2 + GV20

⚠️ نکات مهم:

فشار باید بسیار بسیار ملایم باشد

از فشار مستقیم روی eyeball خودداری شود

بهتر است توسط متخصص انجام شود

📚 خواص ویژه در طب چینی:

پاک‌کننده Heat از چشم

بهبود دهنده گردش خون چشم

تغذیه‌کننده Yin چشم

💡 تکنیک‌های کاربردی:

فشار بسیار ملایم با نوک انگشت اشاره

ماساژ آرام به سمت خارج

استفاده همزمان با بستن چشم

🌿 پروتکل درمانی چشم:

فشار ملایم به مدت ۳۰ ثانیه

ماساژ آرام اطراف چشم

تکرار ۲ بار در روز

ترکیب با استراحت چشم

✅ موارد احتیاط:

پس از جراحی چشم

در موارد عفونت چشم

در جداشدگی شبکیه

🔍 تکنیک‌های ویژه:

استفاده از کمپرس گرم قبل از فشار

تمرینات حرکتی چشم

پرهیز از فشار مستقیم

🌱 درمان‌های کمکی:

مصرف ویتامین A و C

استراحت منظم چشم

محافظت از چشم در برابر نور شدید
`,
  descrip: "نقطه طلایی برای درمان بیماری‌های چشمی و بهبود بینایی",
  descExtra: "برای رتینوپاتی دیابتی و دژنراسیون ماکولا مؤثر است",
  supplementary: "با BL1 و GB1 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای اختلالات چشم و بینایی"
},
// ==============================================  M-CA-23 Sanjiaojiu (سان جیائو جیو)   ===============================================
{
  category: "M-CA-23",
  id: "Sanjiaojiu",
  name: "M-CA-23 Sanjiaojiu سان جیائو جیو",
  Enname: "Sanjiaojiu",
  faname: "مُکسای سه‌گوش", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "بیست و سومین نقطه خارج از مریدین در سیستم M-CA + نقطه اختصاصی مُکسا درمانی",
  location: "در ناحیه زیر ناف، به صورت مثلثی بین نقاط CV4 (Guanyuan) و دو نقطه در سطح ST26 (Wailing)",
  pressureAngle: "عمودی (۹۰ درجه) - برای مُکسا",
  pressureAmount: "مخصوص مُکسا (فشار مستقیم ندارد)",
  repetitions: "۵-۷ دانه مُکسا",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای دردهای شکمی، نفخ و اختلالات گوارشی",
  imageUrl: "assets/images/dd/Sanjiaojiu.jpg",
  desc: `
نفخ شکم  
دردهای شکمی  
اسهال مزمن  
قاعدگی دردناک
📍 آناتومی دقیق:

در ناحیه هیپوگاستریک (زیر ناف)

به شکل مثلث بین سه نقطه:

رأس: CV4 (Guanyuan) - 3 سانتی‌متر زیر ناف

قاعده: دو نقطه در سطح ST26 (Wailing) - 2 سانتی‌متر پایین‌تر و lateral به CV4

روی عضله rectus abdominis

در مجاورت عصب ایلیوهایپوگاستریک

🩺 موارد بالینی:

نفخ و گاز معده (Flatulence)

دردهای عملکردی شکم

اسهال مزمن (Chronic diarrhea)

دیسمنوره (قاعدگی دردناک)

سندروم روده تحریک‌پذیر (IBS)

🔗 ترکیبات درمانی:

نفخ شکم: M-CA-23 + CV12 + ST36

قاعدگی دردناک: M-CA-23 + SP6 + SP8

اسهال مزمن: M-CA-23 + ST25 + BL25

⚠️ نکات مهم:

فقط برای مُکسا استفاده می‌شود (فشار مستقیم ندارد)

از گرمای بیش از حد خودداری شود

در التهاب حاد شکم استفاده نشود

📚 خواص ویژه در طب چینی:

گرم‌کننده Yang شکم

کاهش‌دهنده Cold و Damp از روده

تنظیم‌کننده Qi معده و روده

💡 تکنیک‌های کاربردی:

استفاده از مُکسا مستقیم یا غیرمستقیم

مدت زمان: ۱۵-۲۰ دقیقه

تکرار: ۳-۴ بار در هفته

بهترین زمان: صبح ناشتا

🌿 پروتکل درمانی:

قرار دادن ۵-۷ دانه مُکسا

گرم کردن تا احساس گرمای ملایم

تکرار ۳ بار در هفته

ترکیب با رژیم غذایی گرم

✅ موارد احتیاط:

در بارداری

در تب و التهاب حاد

در پوست حساس یا آسیب‌دیده

🔍 ارزش تشخیصی:

سردی این ناحیه نشان‌دهنده Cold در شکم است

درد با فشار ملایم نشانه Deficiency Cold است

🌱 درمان‌های کمکی:

پرهیز از غذاهای سرد

استفاده از زنجبیل و دارچین

کمپرس گرم شکم
`,
  descrip: "نقطه طلایی برای مُکسا درمانی و گرم‌کردن شکم",
  descExtra: "برای سندروم روده تحریک‌پذیر و دردهای قاعدگی بسیار مؤثر است",
  supplementary: "با CV6 و ST25 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای مُکسا درمانی شکم"
},
// ==============================================  M-UE-1 Shixuan (شی شوان)   ===============================================
{
  category: "M-UE-1",
  id: "Shixuan",
  name: "M-UE-1 Shixuan شی شوان",
  Enname: "Shixuan",
  faname: "ده انتشار", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "اولین نقطه خارج از مریدین در سیستم M-UE + مجموعه نقاط انتهای ده انگشت دست",
  location: "در نوک هر ده انگشت دست، حدود ۰.۱ سانتی‌متر از ناخن (سمت کف دست)",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۱-۲ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای بیهوشی، شوک، تب بالا و اضطراب شدید",
  imageUrl: "assets/images/dd/Shixuan.jpg",
  desc: `
احیای هوشیاری  
شوک و غش  
تب بالا  
تشنج
📍 آناتومی دقیق:

در نوک هر ده انگشت دست

حدود ۰.۱ سانتی‌متر از پایه ناخن (سمت کف دست)

روی بستر ناخن (Nail bed)

در مجاورت عصب انتهایی انگشتان

دارای شبکه مویرگی بسیار غنی

🩺 موارد بالینی:

سنکوپ و بیهوشی (Syncope)

شوک (Shock)

تب بسیار بالا (Hyperpyrexia)

تشنج (Seizures)

سکته مغزی (Stroke)

🔗 ترکیبات درمانی:

بیهوشی: M-UE-1 + GV26 + PC9

تب بالا: M-UE-1 + LI11 + GV14

تشنج: M-UE-1 + GV20 + GB20

⚠️ نکات مهم:

فشار باید سریع و قوی باشد (در موارد اورژانسی)

می‌توان از خونگیری با لانست استفاده کرد

در موارد حاد هر ۵ دقیقه تکرار شود

📚 خواص ویژه در طب چینی:

بازکننده Orifices (باز کردن روزنه‌های روح)

پاک‌کننده Heat از خون

آرام‌کننده Shen (روح)

💡 تکنیک‌های کاربردی:

فشار قوی با ناخن انگشت شست

خونگیری با لانست استریل (توسط متخصص)

ماساژ سریع نوک انگشتان

🌿 پروتکل درمانی اورژانس:

فشار قوی روی هر نقطه به مدت ۱۰ ثانیه

تکرار تا برگشت هوشیاری

در تب‌های بالا خونگیری از نقاط

ترکیب با کمپرس سرد

✅ موارد احتیاط:

در بیماران با اختلالات انعقادی

در موارد عفونت موضعی

در کودکان با احتیاط فراوان

🔍 تکنیک خونگیری:

فقط توسط متخصص انجام شود

استفاده از لانست استریل

خروج ۲-۳ قطره خون از هر نقطه

🌱 درمان‌های کمکی:

حفظ airway بیمار

قرار دادن در وضعیت recovery

مراجعه فوری به پزشک
`,
  descrip: "نقاط اورژانسی برای احیای هوشیاری و کاهش تب",
  descExtra: "برای سکته مغزی و حملات صرعی نیز مؤثر است",
  supplementary: "با GV26 و PC9 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقاط اصلی برای موارد اورژانسی و تب‌های بالا"
},
// ==============================================  M-UE-9 Sifeng (سی فنگ)   ===============================================
{
  category: "M-UE-9",
  id: "Sifeng",
  name: "M-UE-9 Sifeng سی فنگ",
  Enname: "Sifeng",
  faname: "چهار درز", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "نهمین نقطه خارج از مریدین در سیستم M-UE + مجموعه نقاط بین بندهای انگشتان",
  location: "در کف دست، در چین‌های بین بندهای پروگزیمال چهار انگشت (به جز شست)",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات گوارشی کودکان، سوءتغذیه و کرم روده",
  imageUrl: "assets/images/dd/Sifeng.jpg",
  desc: `
سوءتغذیه کودکان  
کرم روده  
بی‌اشتهایی  
اختلالات گوارشی
📍 آناتومی دقیق:

در کف دست (Palmar surface)

در چین‌های transverse کف دستی

بین بندهای پروگزیمال انگشتان دوم تا پنجم

روی تاندون‌های flexor digitorum profundus

در مجاورت اعصاب دیجیتال

🩺 موارد بالینی:

سوءتغذیه کودکان (Malnutrition)

کرم‌های روده (Intestinal worms)

بی‌اشتهایی (Anorexia)

سندروم عدم تحمل غذا (Food intolerance)

اختلالات هضم در کودکان

🔗 ترکیبات درمانی:

سوءتغذیه: M-UE-9 + ST36 + SP3

کرم روده: M-UE-9 + ST25 + SP4

بی‌اشتهایی: M-UE-9 + CV12 + PC6

⚠️ نکات مهم:

فشار باید ملایم و کنترل‌شده باشد

در کودکان بسیار ملایم فشار داده شود

می‌توان از خونگیری با لانست استفاده کرد

📚 خواص ویژه در طب چینی:

تنظیم‌کننده Qi معده و روده

دافع کرم‌های روده

تقویت‌کننده سیستم گوارش

💡 تکنیک‌های کاربردی:

فشار ملایم با نوک انگشت شست

ماساژ دایره‌ای در هر نقطه

خونگیری با لانست (برای دفع کرم)

🌿 پروتکل درمانی کودکان:

فشار روی هر نقطه به مدت ۳۰ ثانیه

تکرار ۲ بار در روز

ترکیب با رژیم غذایی مناسب

ماساژ شکم clockwise

✅ موارد احتیاط:

در نوزادان زیر ۱ سال

در موارد عفونت پوستی

با احتیاط در کودکان ضعیف

🔍 ارزش تشخیصی:

تورم این نقاط نشان‌دهنده اختلالات گوارشی است

درد به لمس می‌تواند نشانه کرم روده باشد

🌱 درمان‌های کمکی:

رژیم غذایی مقوی

مصرف پروبیوتیک

بهداشت مناسب دست


`,
  descrip: "نقاط طلایی برای درمان اختلالات گوارشی در کودکان",
  descExtra: "برای سندروم عدم تحمل غذا در کودکان بسیار مؤثر است",
  supplementary: "با ST36 و SP6 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقاط اصلی برای بیماری‌های کودکان و گوارش"
},
// ============================================== M-UE-1 Sishencong (چهار نقطه در اطراف Baihui)   ===============================================
{
  category: "M-UE-1",
  id: "Sishencong",
  name: "Sishencong سی شن کونگ",
  Enname: "Sishencong",
  faname: "چهار هوش الهی", 
  meridian: "Extra Points (غیر مریدین)",
  Fameridian: "نقاط خارج از مریدین",
  description: "چهار نقطه در اطراف نقطه GV20 (Baihui) به فاصله ۱ سانتی‌متر در چهار جهت",
  location: "۱ سانتی‌متر جلو، عقب، چپ و راست نقطه GV20 (Baihui)",
  pressureAngle: "عمودی (۹۰ درجه)",
  pressureAmount: "۲ (ملایم)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای اختلالات مغزی، تقویت حافظه و بیماری‌های روانی",
  imageUrl: "assets/images/dd/Sishencong.jpg",
  desc: `
تقویت حافظه  
آلزایمر  
سکته مغزی  
صرع و تشنج
📍 آناتومی دقیق چهار نقطه:

Sishencong قدامی: ۱ سانتی‌متر anterior به GV20

Sishencong خلفی: ۱ سانتی‌متر posterior به GV20

Sishencong چپ: ۱ سانتی‌متر left به GV20

Sishencong راست: ۱ سانتی‌متر right به GV20

روی galea aponeurotica (بافت پیوندی سر)

در مجاورت شاخه‌های عصب occipital

🩺 موارد بالینی ترکیبی:

بیماری آلزایمر و دمانس

سکته مغزی و عوارض آن

صرع و تشنج‌های کنترل‌نشده

اختلال کمبود توجه (ADHD)

اوتیسم Spectrum Disorders

🔗 ترکیبات درمانی:

آلزایمر: Sishencong + GV20 + KI3

سکته مغزی: Sishencong + GB20 + LI4

صرع: Sishencong + GV26 + PC6

⚠️ نکات مهم:

فشار باید ملایم و یکنواخت روی تمام نقاط باشد

بهتر است به صورت متقارن فشار داده شود

در کودکان با احتیاط استفاده شود

📚 خواص ویژه در طب چینی:

تقویت‌کننده Marrow مغز

آرام‌کننده Shen (روح)

بهبود دهنده هوش و تمرکز

💡 تکنیک‌های کاربردی:

فشار همزمان با چهار انگشت

ماساژ دایره‌ای clockwise

استفاده از روغن رزماری برای افزایش اثر

🌿 پروتکل درمانی:

فشار روی هر نقطه به مدت ۱ دقیقه

ماساژ کل scalp به سمت پایین

تکرار ۲ بار در روز

ترکیب با تمرینات ذهنی

✅ موارد احتیاط:

پس از جراحی جمجمه

در fractures جمجمه

در تومورهای مغزی
`,
  descrip: "نقاط طلایی برای تقویت عملکرد مغز و سیستم عصبی",
  descExtra: "برای اوتیسم و اختلالات تکاملی در کودکان بسیار مؤثر است",
  supplementary: "با GV20 و HT7 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقاط اصلی برای بیماری‌های مغز و اعصاب"
},
// ============================================== Taiyang (M-HN-9) (تای یانگ)   ===============================================
{
category: "M-HN-9",
id: "Taiyang",
name: "Taiyang تای یانگ",
Enname: "Taiyang",
faname: "خورشید",
meridian: "Extra Point (Not on a specific meridian)",
Fameridian: "نقطه خارج مریدین (اضافی)",
description: "یکی از معروف‌ترین نقاط اضافی برای تسکین سردرد و میگرن",
location: "در فرورفتگی بین انتهای خارجی ابرو و گوشه خارجی چشم (حدود ۱ سانتی‌متر پایین‌تر از خط موقتی)",
pressureAngle: "مایل به سمت استخوان (۳۰ درجه) یا عمود با فشار ملایم",
pressureAmount: "۲-۳ (ملایم تا متوسط)",
repetitions: "۵-۱۰ بار (با حرکات دایره‌ای)",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "برای سردردهای تنشی، میگرن و خستگی چشم",
imageUrl: "assets/images/dd/Taiyang.jpg",
desc: `
سردرد تنشی
میگرن
خستگی چشم
استرس 
فشار چشم 
`,
descrip: "آرام‌بخش سیستم عصبی و کاهش‌دهنده درد سر",
descExtra: "فشار قوی روی این نقطه ممکن است باعث کبودی شود (با احتیاط فشار دهید)",
supplementary: "با GB20 (Fengchi) و LI4 (Hegu) ترکیب شود برای اثر قوی‌تر",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
main: "نقطه طلایی برای تسکین فوری سردرد"
},
// ==============================================  N-CA-4 Tituo (تی توا)   ===============================================
{
category: "N-CA-4",
id: "Tituo",
name: "Tituo تی توا",
Enname: "Tituo",
faname: "بالابر بیضه",
meridian: "Extra Point (Not on a specific meridian)",
Fameridian: "نقطه خارج مریدین (اضافی)",
description: "نقطه موثر برای درمان افتادگی بیضه و مشکلات مربوطه",
location: "در قسمت فوقانی بیضه، در محل خروج طناب اسپرماتیک از کانال اینگوینال",
pressureAngle: "عمودی (۹۰ درجه) با فشار بسیار ملایم",
pressureAmount: "۱-۲ (بسیار ملایم)",
repetitions: "۳-۵ بار فشار کوتاه",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "برای افتادگی بیضه، درد بیضه و مشکلات تولیدمثل",
imageUrl: "assets/images/dd/Tituo.jpg",
desc: `
افتادگی بیضه
درد بیضه
ناباروری مردان
التهاب بیضه
`,
descrip: "تقویت کننده بیضه و بهبود عملکرد تولیدمثل",
descExtra: "این نقطه باید با احتیاط بسیار زیاد فشار داده شود",
supplementary: "با CV4 (Guanyuan) و CV6 (Qihai) ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
main: "نقطه تخصصی برای مشکلات بیضه و تولیدمثل مردان"
},
// ==============================================  M-BW-12 Weiguanxiashu (وی گوان زیا شو)   ===============================================
{
category: "M-BW-12",
id: "Weiguanxiashu",
name: "Weiguanxiashu وی گوان زیا شو",
Enname: "Weiguanxiashu",
faname: "حفاظت از دیافراگم",
meridian: "Bladder Meridian",
Fameridian: "مریدین مثانه",
description: "نقطه موثر برای مشکلات معده و دیافراگم",
location: "۱.۵ سانتی‌متر کنار مهره هشتم پشتی (T8)",
pressureAngle: "عمودی (۹۰ درجه) به سمت داخل",
pressureAmount: "۳-۴ (متوسط تا قوی)",
repetitions: "۳-۵ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "برای سکسکه، درد معده و مشکلات تنفسی",
imageUrl: "assets/images/dd/Weiguanxiashu.jpg",
desc:`
سکسکه مقاوم
درد معده
سوء هاضمه 
مشکلات تنفسی 
درد قفسه سینه
این نقطه به طور خاص برای سکسکه‌های مداوم و مقاوم به درمان بسیار مفید است

فشار روی این نقطه باید به صورت عمقی و با شدت متوسط اعمال شود

بهتر است این نقطه در حالت درازکش به پشت یا نشسته فشار داده شود

برای اثر بخشی بیشتر، همزمان با فشار این نقطه، نفس‌های عمیق و آرام کشیده شود
`,
descrip: "تنظیم کننده عملکرد معده و دیافراگم",
descExtra: "این نقطه برای سکسکه های طولانی مدت بسیار موثر است",
supplementary: "با CV12 (Zhongwan) و ST36 (Zusanli) ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
main: "نقطه اصلی برای درمان سکسکه و مشکلات گوارشی"
},
// ==============================================  N-UE-19 Yaotongxue (یائو تونگ شو)   ===============================================
{
  category: "N-UE-19",
  id: "Yaotongxue",
  name: "N-UE-19 Yaotongxue یائو تونگ شو",
  Enname: "Yaotongxue",
  faname: "نقطه درد کمر", 
  meridian: "Extra Point (غیر مریدین)",
  Fameridian: "نقطه خارج از مریدین",
  description: "نوزدهمین نقطه خارج از مریدین در سیستم N-UE + نقطه اختصاصی کمردرد",
  location: "بر روی پشت دست، بین استخوان‌های دوم و سوم متاکارپال و سوم و چهارم متاکارپال، در نیمه پروگزیمال دست",
  pressureAngle: "مایل به سمت استخوان (۴۵ درجه)",
  pressureAmount: "۳ (متوسط)",
  repetitions: "۳-۵ بار",
  time: "بین 30 ثانیه تا 3 دقیقه",
  extra: "برای کمردرد حاد، سیاتیک و گرفتگی عضلات کمر",
  imageUrl: "assets/images/dd/Yaotongxue.jpg",
  desc: `
کمردرد حاد  
سیاتیک  
گرفتگی عضلات کمر  
دیسک کمر
📍 آناتومی دقیق:

بر روی پشت دست (Dorsum of hand)

بین استخوان‌های متاکارپال دوم و سوم

و بین استخوان‌های متاکارپال سوم و چهارم

در نیمه پروگزیمال دست (نزدیک مچ)

روی عضلات interosseous dorsales

در مجاورت عصب رادیال

🩺 موارد بالینی:

کمردرد حاد (Acute low back pain)

سیاتیک (Sciatica)

دیسک کمر (Herniated disc)

اسپاسم عضلات کمر (Back muscle spasm)

آرتروز کمر (Lumbar arthritis)

🔗 ترکیبات درمانی:

کمردرد حاد: N-UE-19 + BL40 + GV3

سیاتیک: N-UE-19 + GB30 + BL57

دیسک کمر: N-UE-19 + BL23 + BL25

⚠️ نکات مهم:

فشار باید قوی و عمیق باشد

بهتر است همزمان با حرکت دادن کمر استفاده شود

در موارد حاد می‌توان هر ۲ ساعت تکرار کرد

📚 خواص ویژه در طب چینی:

آرام‌کننده عضلات و تاندون‌ها

کاهش‌دهنده درد و اسپاسم

بهبود دهنده جریان Qi و Blood در کمر

💡 تکنیک‌های کاربردی:

فشار قوی با انگشت شست به مدت ۱-۲ دقیقه

ماساژ دایره‌ای همزمان با خم و راست کردن کمر

استفاده از فشار متناوب (۵ ثانیه فشار، ۲ ثانیه استراحت)

🌿 پروتکل درمانی فوری:

فشار قوی روی نقطه به مدت ۲ دقیقه

حرکت آرام کمر به چپ و راست

تکرار هر ۲ ساعت در موارد حاد

ترکیب با کمپرس گرم

✅ موارد احتیاط:

در موارد فتق دیسک شدید

پس از جراحی کمر

در پوکی استخوان پیشرفته

🔍 ارزش تشخیصی:

حساسیت این نقطه می‌تواند نشان‌دهنده مشکلات کمر باشد

در معاینه، درد به لمس ارزش کلینیکی دارد

🌱 درمان‌های کمکی:

کمپرس گرم روی کمر

تمرینات کششی آرام

پرهیز از بلند کردن اجسام سنگین
`,
  descrip: "نقطه طلایی برای درمان فوری کمردرد و سیاتیک",
  descExtra: "برای اسپاسم عضلات کمر و دردهای ناگهانی بسیار مؤثر است",
  supplementary: "با BL40 و GV3 ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
  main: "نقطه اصلی برای کمردردهای حاد و مزمن"
},
// ==============================================  M-BW-24 Yaoyan (یائو یان)   ===============================================
{
category: "M-BW-24",
id: "Yaoyan",
name: "Yaoyan یائو یان",
Enname: "Yaoyan",
faname: "چشم کمر",
meridian: "Bladder Meridian",
Fameridian: "مریدین مثانه",
description: "نقطه مؤثر برای دردهای ناحیه کمر و لگن",
location: "در گودی زیر مهره چهارم کمری (L4)، حدود ۳-۴ سانتی‌متر از خط وسط ستون فقرات",
pressureAngle: "عمودی (۹۰ درجه) یا مایل به سمت ستون فقرات",
pressureAmount: "۳-۴ (متوسط تا قوی)",
repetitions: "۵-۷ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "برای کمردرد، سیاتیک و دردهای لگنی",
imageUrl: "assets/images/dd/Yaoyan.jpg",
desc:`
کمردرد حاد و مزمن سیاتیک
گرفتگی عضلات کمر
دردهای لگنی
اختلالات قاعدگی
این نقطه به عنوان "چشم کمر" شناخته می‌شود و برای انواع دردهای کمری بسیار مؤثر است

فشار باید به صورت عمقی و با شدت متوسط اعمال شود تا به عمق عضلات ناحیه کمر نفوذ کند

برای بهترین نتیجه، همزمان با فشار این نقطه، حرکات کششی ملایم کمر انجام شود

در موارد سیاتیک، فشار این نقطه می‌تواند به کاهش درد و التهاب کمک signiﬁcantی کند

این نقطه همچنین برای اختلالات قاعدگی و دردهای لگنی مرتبط با مشکلات زنانه مفید است
`,
descrip: "تسکین دهنده دردهای ناحیه کمر و لگن",
descExtra: "فشار این نقطه در دوران قاعدگی برای کاهش درد بسیار مؤثر است",
supplementary: "با GB30 (Huantiao) و BL40 (Weizhong) ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
main: "نقطه طلایی برای درمان کمردرد و سیاتیک"
},
// ==============================================  Yaoyangguan M-BW-25 (دو مای)   ===============================================
{
category: "M-BW-25",
id: "Yaoyangguan",
name: "Yaoyangguan یائو یانگ گوان",
Enname: "Yaoyangguan",
faname: "دروازه انرژی کمر",
meridian: "Governor Vessel (Du Mai)",
Fameridian: "مریدین فرمانروی (دو مای)",
description: "نقطه اصلی برای تقویت و درمان ناحیه کمر",
location: "بین مهره چهارم و پنجم کمری (L4-L5)، در خط وسط ستون فقرات",
pressureAngle: "عمودی (۹۰ درجه) با فشار ملایم",
pressureAmount: "۲-۳ (ملایم تا متوسط)",
repetitions: "۳-۵ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "برای کمردرد، ضعف کمر و مشکلات کلیوی",
imageUrl: "assets/images/dd/Yaoyangguan.jpg",
desc:`
کمردرد مزمن 
ضعف ناحیه کمر
ناتوانی جنسی
مشکلات کلیوی 
درد سیاتیک
این نقطه به عنوان "دروازه انرژی کمر" شناخته می‌شود و برای تقویت بنیه کمر بسیار مؤثر است

فشار باید ملایم و عمقی باشد تا انرژی در ناحیه کمر جریان یابد

برای کمردردهای ناشی از کمبود انرژی کلیه بسیار مناسب است

گرم کردن این نقطه با موکسا می‌تواند اثرات درمانی آن را significantly افزایش دهد

در موارد ناتوانی جنسی و ضعف قوای بدن، این نقطه می‌تواند بسیار مفید باشد
`,
descrip: "تقویت کننده انرژی کلیه و کمر",
descExtra: "این نقطه برای گرم کردن و تقویت ناحیه کمر بسیار مؤثر است",
supplementary: "با BL23 (Shenshu) و GV4 (Mingmen) ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
main: "نقطه اصلی برای تقویت ساختار کمر و انرژی کلیه"
},
// ==============================================  Yintang M-HN-3 (یین تانگ)   ===============================================
{
category: "M-HN-3",
id: "Yintang",
name: "Yintang یین تانگ",
Enname: "Yintang",
faname: "تمبر نقره‌ای",
meridian: "Extra Point (Not on a specific meridian)",
Fameridian: "نقطه خارج مریدین (اضافی)",
description: "نقطه معروف برای آرامش ذهن و کاهش استرس",
location: "بین دو ابرو، در نقطه وسط خط اتصال دو ابرو",
pressureAngle: "عمودی (۹۰ درجه) با فشار ملایم",
pressureAmount: "۱-۲ (بسیار ملایم)",
repetitions: "۵-۱۰ بار فشار دایره‌ای",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "برای استرس، بی‌خوابی و سردرد",
imageUrl: "assets/images/dd/Yintang.jpg",
desc:`
استرس و اضطراب
بی‌خوابی
سردرد تنشی
سرگیجه
احتقان بینی
این نقطه به عنوان "چشم سوم" نیز شناخته می‌شود و برای مدیتیشن بسیار استفاده می‌شود

فشار بسیار ملایم با نوک انگشت میانی یا اشاره کافی است

برای بهترین نتیجه، همزمان با فشار این نقطه، چشمان را بسته و نفس‌های عمیق بکشید

در موارد احتقان بینی و سینوزیت، ماساژ این نقطه می‌تواند به باز شدن مجاری بینی کمک کند

این نقطه یکی از مؤثرترین نقاط برای کاهش فوری اضطراب و تنش‌های روزمره است
 آناتومی دقیق:

در ناحیه glabella (بین دو ابرو)

روی استخوان پیشانی (Frontal bone)

بین عضلات frontalis و procerus

در مجاورت عصب supraorbital

روی شریان supratrochlear

🩺 موارد بالینی:

اختلالات اضطرابی (Anxiety disorders)

سردردهای تنشی (Tension headaches)

بی‌خوابی (Insomnia)

سینوزیت frontal (Frontal sinusitis)

فشار خون بالا (Hypertension)

🔗 ترکیبات درمانی:

اضطراب: M-HN-3 + HT7 + PC6

سردرد: M-HN-3 + GB20 + LI4

بی‌خوابی: M-HN-3 + SP6 + ANMIAN

⚠️ نکات مهم:

فشار باید بسیار ملایم و آرام‌بخش باشد

از فشار شدید خودداری شود

بهتر است با چشم‌های بسته فشار داده شود

📚 خواص ویژه در طب چینی:

آرام‌کننده Shen (روح)

پاک‌کننده Wind از سر

تنظیم‌کننده Qi معکوس

💡 تکنیک‌های کاربردی:

فشار ملایم با نوک انگشت وسط

ماساژ آرام به سمت خارج

تنفس عمیق همزمان با فشار

🌿 پروتکل درمانی آرامش:

فشار ملایم به مدت ۱ دقیقه

تنفس عمیق از بینی

تکرار ۳ بار در روز

ترکیب با مدیتیشن

✅ موارد احتیاط:

پس از جراحی بینی

در موارد التهاب پوستی

در فشار چشم بالا (Glaucoma)

🔍 ارزش تشخیصی:

تنش در این نقطه نشان‌دهنده استرس است

درد به لمس می‌تواند نشانه سینوزیت باشد

🌱 درمان‌های کمکی:

رایحه‌درمانی با اسطوخودوس

تمرینات تنفسی

کاهش استرس
`,
descrip: "آرام‌بخش ذهن و روان، متعادل‌کننده انرژی",
descExtra: "فشار ملایم و مداوم این نقطه تأثیر عمیقی بر آرامش سیستم عصبی دارد",
supplementary: "با GV20 (Baihui) و HT7 (Shenmen) ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
main: "نقطه طلایی برای آرامش فوری و کاهش استرس"
},
// ==============================================  Yuyao M-HN-6 (یو یائو)   ===============================================
{
category: "M-HN-6",
id: "Yuyao",
name: "Yuyao یو یائو",
Enname: "Yuyao",
faname: "ماهیچه کمر",
meridian: "Extra Point (Not on a specific meridian)",
Fameridian: "نقطه خارج مریدین (اضافی)",
description: "نقطه مؤثر برای مشکلات چشم و آرامش عضلات صورت",
location: "در وسط ابرو، مستقیماً بالای مردمک چشم وقتی به جلو نگاه می‌کنید",
pressureAngle: "عمودی (۹۰ درجه) یا مایل به سمت بالا",
pressureAmount: "۱-۲ (بسیار ملایم)",
repetitions: "۳-۵ بار فشار دایره‌ای",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "برای خستگی چشم، فشار چشم و مشکلات بینایی",
imageUrl: "assets/images/dd/Yuyao.jpg",
desc:`
خستگی چشم
فشار چشم
آستیگماتیسم
میگرن چشمی
پرش پلک
این نقطه مستقیماً بر روی عضلات اطراف چشم تأثیر می‌گذارد

فشار باید بسیار ملایم باشد زیرا ناحیه حساسی است

برای افرادی که با کامپیوتر کار می‌کنند بسیار مفید است

ماساژ این نقطه می‌تواند به بهبود بینایی و کاهش پف چشم کمک کند

در موارد سردردهای مرتبط با خستگی چشم، این نقطه بسیار مؤثر است
`,
descrip: "آرام‌بخش عضلات چشم و بهبود گردش خون ناحیه",
descExtra: "فشار ملایم این نقطه می‌تواند به کاهش تنش و خستگی چشم کمک کند",
supplementary: "با Taiyang (EX-HN5) و BL2 (Zanzhu) ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
main: "نقطه اصلی برای رفع خستگی و مشکلات چشم"
},
// ==============================================  Yuye Jinjin M-HN-20 (یو یه جین جین)   ===============================================
{
category: "M-HN-20",
id: "YuyeJinjin",
name: "Yuye Jinjin یو یه جین جین",
Enname: "Yuye Jinjin",
faname: "مروارید زیر زبان",
meridian: "Extra Point (Not on a specific meridian)",
Fameridian: "نقطه خارج مریدین (اضافی)",
description: "نقطه مؤثر برای مشکلات دهان و گلو و کاهش تشنگی",
location: "در زیر زبان، روی دو رگ فرنولوم (زیرزبانی) در دو طرف",
pressureAngle: "مایل (۴۵ درجه) به سمت بالا",
pressureAmount: "۱-۲ (بسیار ملایم)",
repetitions: "۳-۵ بار فشار ملایم",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "برای خشکی دهان، گلو درد و مشکلات گفتاری",
imageUrl: "assets/images/dd/YuyeJinjin.jpg",
desc:`
خشکی دهان و گلو
تشنگی بیش از حد
گلو درد
لکنت زبان
افزایش بزاق
این نقطه بر روی دو رگ اصلی زیر زبان قرار دارد و باید با احتیاط بسیار فشار داده شود

فشار باید بسیار ملایم باشد تا از آسیب به رگ‌های خونی جلوگیری شود

برای بیماران مبتلا به دیابت که خشکی دهان دارند بسیار مفید است

ماساژ این نقطه می‌تواند به بهبود تلفظ و کاهش لکنت زبان کمک کند

در موارد تب و کم‌آبی بدن، تحریک این نقطه می‌تواند تشنگی را کاهش دهد
`,
descrip: "مرطوب کننده دهان و گلو، تسکین دهنده تشنگی",
descExtra: "این نقطه برای تحریک ترشح بزاق و رفع خشکی دهان بسیار مؤثر است",
supplementary: "با CV23 (Lianquan) و LU11 (Shaoshang) ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
main: "نقطه اصلی برای درمان خشکی دهان و مشکلات گلو"
},
// ============================================== M-UE-46 Zhoujian ژو جیان   ===============================================
{
category: "M-UE-46",
id: "Zhoujian",
name: "Zhoujian ژو جیان",
Enname: "Zhoujian",
faname: "نقطه آرنج",
meridian: "Extra Point (Not on a specific meridian)",
Fameridian: "نقطه خارج مریدین (اضافی)",
description: "نقطه مؤثر برای دردهای ناحیه آرنج و اختلالات حرکتی",
location: "در چین آرنج، هنگامی که آرنج خم شده است، در انتهای خارجی چین آرنج",
pressureAngle: "مایل (۴۵ درجه) به سمت داخل مفصل",
pressureAmount: "۳-۴ (متوسط تا قوی)",
repetitions: "۵-۷ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "برای آرنج تنیس‌بازان، آرنج گلف‌بازان و دردهای مفصل آرنج",
imageUrl: "assets/images/dd/Zhoujian.jpg",
desc:`
آرنج تنیس‌بازان (Tennis Elbow) 
آرنج گلف‌بازان (Golfer's Elbow)
درد مفصل آرنج
التهاب اپی‌کوندیل
اختلالات حرکتی آرنج
این نقطه به طور خاص برای درمان انواع دردهای ناحیه آرنج طراحی شده است

فشار باید عمقی و با شدت متوسط اعمال شود تا به تاندون‌ها و عضلات ناحیه آرنج برسد

برای بهترین نتیجه، همزمان با فشار این نقطه، حرکات کششی ملایم آرنج انجام شود

در موارد التهاب اپی‌کوندیل (آرنج تنیس‌بازان)، این نقطه می‌تواند significantly درد را کاهش دهد

این نقطه برای افرادی که فعالیت‌های تکراری با دست انجام می‌دهند بسیار مفید است
`,
descrip: "تسکین دهنده درد و التهاب ناحیه آرنج",
descExtra: "فشار این نقطه باید به صورت عمقی اعمال شود تا به بافت‌های عمقی آرنج نفوذ کند",
supplementary: "با LI11 (Quchi) و LI10 (Shousanli) ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
main: "نقطه تخصصی برای درمان دردهای مزمن آرنج"
},
// ==============================================  M-CA-18 Zigong (زی گونگ)   ===============================================
{
category: "M-CA-18",
id: "Zigong",
name: "Zigong زی گونگ",
Enname: "Zigong",
faname: "کاخ فرزند",
meridian: "Extra Point (Not on a specific meridian)",
Fameridian: "نقطه خارج مریدین (اضافی)",
description: "نقطه مؤثر برای سلامت رحم و باروری زنان",
location: "۳ سانتی‌متر پایین‌تر از نقطه CV4 (Guanyuan)، ۱ سانتی‌متر خارج از خط وسط شکم",
pressureAngle: "عمودی (۹۰ درجه) با فشار ملایم",
pressureAmount: "۲-۳ (ملایم تا متوسط)",
repetitions: "۳-۵ بار",
time: "بین 30 ثانیه تا 3 دقیقه",
extra: "برای مشکلات رحمی، ناباروری و قاعدگی",
imageUrl: "assets/images/dd/Zigong.jpg",
desc:`
ناباروری زنان
اختلالات قاعدگی
فیبروم رحمی
افتادگی رحم
دردهای مزمن لگنی
این نقطه مستقیماً بر سلامت رحم و عملکرد تولیدمثل زنان تأثیر می‌گذارد

فشار باید ملایم و عمقی باشد تا انرژی به ناحیه رحم برسد

برای اختلالات قاعدگی و مشکلات هورمونی بسیار مناسب است

گرم کردن این نقطه با موکسا می‌تواند اثرات درمانی آن را به طور قابل توجهی افزایش دهد

در موارد ناباروری و ضعف سیستم تولیدمثل، این نقطه می‌تواند بسیار مفید باشد
`,
descrip: "تقویت کننده رحم و بهبود عملکرد تولیدمثل زنان",
descExtra: "این نقطه برای گرم کردن و تقویت ناحیه رحم بسیار مؤثر است",
supplementary: "با CV4 (Guanyuan) و SP6 (Sanyinjiao) ترکیب شود",
      boss:"",
      ex:"",
      yinyang:"",
      des:"",
      imageUrls:"",
main: "نقطه اصلی برای درمان مشکلات زنان و باروری"
}
// ==============================================     ===============================================


  ];




  // در کلاس کامپوننت (مثل home.page.ts)
  private categories: Category[] = [
    {
      title: "reflection",
      titleFa: "بازتاب",
      desc: "گروه‌های مرتبط با درمان‌های بازتابی و تحریک نقاط برای اندام‌ها یا بیماری‌ها",
      subgroups: [
        {
          title: "reflexology",
          ids: ["reflexoloyIntro1", "Yin", "Yang"],
          desc: ''
        },
        // نقاط رئیسه
        {
          title: "BossPoint",
          ids: ["LI4", "HT7", "PC6", "LI11", "GB21", "CV17", "ST36", "SP6", "ST44"],
          desc: ''
        },
        // اعصاب روان
        {
          title: "nerves",
          ids: ["nervesTreatment","LI4", "HT7", "PC6", "LI11", "EX1", "BL2", "ST8", "GV23", "GV20", "GV19", "GB20", "GB21", "KI27", "CV17", "ST36", "BL56", "SP6", "BL62", "ST44"],
          desc: ''
        },
        // گوارش
        {
          title: "digestive",
          ids: ["digestiveTreatment","LI4", "HT7", "PC6", "LI11", "TE6", "SP15", "CV6", "CV12", "ST21", "ST36", "SP6", "BL62", "GB20", "LR3", "ST44", "digestive", "digestive1","CV5","CV6","CV7","CV8","CV9","CV10","CV11","CV12","CV13","CV14","KI14","KI15","KI16","KI17","KI18","KI19","KI20","KI21","ST19","ST20","ST21","ST22","ST23","ST24","ST25","ST26","ST27"],
          desc: ''
        },
        // مچ دست کتف یخ زده
        {
          title: "FrozenShoulder",
          ids: ["FrozenShoulderTreatment","LI4", "LI5", "LU9", "LU8", "PC4", "PC5", "PC6", "PC7", "HT4", "HT5", "HT6", "HT7", "SI5", "TE4", "LI11", "LI12", "HT3", "PC3", "LU5", "LI14", "LI15", "TE14", "SI9", "SI10", "GB21", "ST44", "FrozenShoulder"],
          desc: ''
        },
        // گردن کمر زانو مچ پا
        {
          title: "NeckWaistKneesAnkles",
          ids: ["NeckWaistKneesAnklesTreatment","LI4", "HT7", "SI6", "LI11", "GB20", "GB21", "SI9", "SI10", "GV14", "BL23", "BL25", "BL36", "BL37", "ST35", "EX31", "EX32", "ST36", "BL40", "BL56", "BL57", "DD1", "SP6", "KI3", "BL62", "GB40", "ST44","NeckWaistKneesAnkles"],
          desc: ''
        },
        // فشار خون
        {
          title: "hypertension",
          ids: ["hypertensionTreatment","LI4", "LU9", "PC6", "LI11", "TE23", "GV20", "CV21", "CV17", "SP9", "ST36", "SP6", "KI3", "BL62", "LR3", "ST44", "HT1", "HT2", "HT3", "HT4", "HT5", "HT6", "HT7", "HT8", "HT9"],
          desc: ''
        },
        // بینی
        {
          title: "nose",
          ids: ["LI4", "LU7", "LI20", "ST3", "ST44"],
          desc: ''
        },
        // چشم
        {
          title: "eye",
          ids: ["LI4", "EX1", "BL1", "GB1", "ST1", "ST2", "ST3", "GB37", "LR3", "ST44"],
          desc: ''
        },
        // دهان
        {
          title: "mouth",
          ids: ["LI4", "HT5", "LU9", "SI18", "ST4", "ST44"],
          desc: ''
        },
        // گوش
        {
          title: "ear",
          ids: ["LI4", "TE21", "SI19", "GB2", "DD2", "DD3", "DD4", "DD5", "KI3", "ST44"],
          desc: ''
        },
        // تب شدید
        {
          title: "fever",
          ids: ["LI4", "HT7", "PC6", "LI11", "GV14", "ST36", "SP6", "ST44", "fever"],
          desc: ''
        },
        // بازتاب ترک سیگار، مواد مخدر، الکل و ولع مغز
        {
          title: "addiction",
          ids: ["LI4", "HT7", "LU7", "GB20", "SP6", "LR3", "ST44", "addiction"],
          desc: ''
        },
        // بازتاب دندان درد
        {
          title: "toothache",
          ids: ["LI4", "ST3", "ST4", "ST6", "SI18", "ST44", "toothache"],
          desc: ''
        },
        // بازتاب دیابت
        {
          title: "diabetes",
          ids: ["LI18", "ST21", "GB21", "ST36", "SP6", "SP3", "ST44", "diabetes"],
          desc: ''
        },
        // بازتاب سردرد
        {
          title: "headache",
          ids: ["LI4", "HT7", "TE23", "GB14", "ST44","headache"],
          desc: ''
        },
        //  بازتاب لاغری
        {
          title: "slimming",
          ids: ["EarAppetiteControl","LI4", "HT7", "PC6", "LI11", "GV20", "ST36", "SP6", "BL62", "LR3", "ST44", "slimming"],
          desc: ''
        },
        //  بازتاب درد قاعدگی
        {
          title: "menstrualpain",
          ids: ["CV2","CV3", "CV4", "CV5", "CV6", "CV7", "KI11", "KI12", "KI13", "KI14", "KI15", "ST26", "ST27", "ST28", "ST29", "ST30"],
          desc: ''
        },
      ]
    },
    {
      title: "meridian",
      titleFa: "مریدین",
      desc: "12 مریدین اصلی که کانال‌های اصلی انرژی (Qi) هستن",
      subgroups: [
        
        { title: "LI", ids: this.generateMeridianIds("LI", 1, 20), desc: "Large Intestine Meridian" },
        { title: "ST", ids: this.generateMeridianIds("ST", 1, 45), desc: "Stomach Meridian" },
        { title: "SP", ids: this.generateMeridianIds("SP", 1, 21), desc: "Spleen Meridian" },
        { title: "HT", ids: this.generateMeridianIds("HT", 1, 9), desc: "Heart Meridian" },
        { title: "SI", ids: this.generateMeridianIds("SI", 1, 19), desc: "Small Intestine Meridian" },
        { title: "BL", ids: this.generateMeridianIds("BL", 1, 67), desc: "Bladder Meridian" },
        { title: "KI", ids: this.generateMeridianIds("KI", 1, 27), desc: "Kidney Meridian" },
        { title: "PC", ids: this.generateMeridianIds("PC", 1, 9), desc: "Pericardium Meridian" },
        { title: "TE", ids: this.generateMeridianIds("TE", 1, 23), desc: "Triple Energizer Meridian" },
        { title: "GB", ids: this.generateMeridianIds("GB", 1, 44), desc: "Gall Bladder Meridian" },
        { title: "LR", ids: this.generateMeridianIds("LR", 1, 14), desc: "Liver Meridian" },
        { title: "LU", ids: this.generateMeridianIds("LU", 1, 11), desc: "Lung Meridian" },
        { title: "CV", ids: this.generateMeridianIds("CV", 1, 24), desc: "Conception Vessel" },
        { title: "GV", ids: this.generateMeridianIds("GV", 1, 28), desc: "Governing Vessel" },
  
      ]
    },
    {
      title: "channels",
      titleFa: "کانال ها",
      desc: "کانال‌های فوق‌العاده که ذخیره Qi رو مدیریت می‌کنن",
      subgroups: [
        {
          title: "8exYinLink",
          ids: ["8exYinLink","KI9", "SP11", "SP12", "SP13", "SP15", "SP16", "KI11", "KI12", "KI13", "KI14", "KI15", "KI16", "CV22", "CV23"],
          desc: ''
        },
        {
          title: "8exYangLink",
          ids: ["8exYangLink","CV2", "CV3", "CV4", "CV5", "CV6", "CV7", "CV10", "CV12", "CV13", "CV17", "CV22", "CV23", "KI12", "KI13", "KI14", "KI15", "KI16", "KI17", "KI18", "KI19", "KI20", "KI21", "ST30", "LR1"],
          desc: ''
        },
        {
          title: "8exYangHeel",
          ids: ["8exYangHeel","BL1", "BL61", "BL62", "BL59", "SI10", "LI15", "LI16", "ST1", "ST4", "ST9", "GB14", "GB15", "GB16", "GB17", "GB18", "GB19", "GB20", "GB21", "GB35", "TE15", "CV22", "CV23"],
          desc: ''
        },
        {
          title: "8exYinHeel",
          ids: ["8exYinHeel","KI2", "KI3", "KI6", "KI8", "KI16", "ST9", "ST12", "CV15", "CV17", "CV22", "CV23", "BL1"],
          desc: ''
        },
        {
          title: "8excv",
          ids: ["8excv","CV1", "CV2", "CV3", "CV4", "CV5", "CV6", "CV7", "CV8", "CV9", "CV10", "CV11", "CV12", "CV13", "CV14", "CV15", "CV16", "CV17", "CV18", "CV19", "CV20", "CV21", "CV22", "CV23", "CV24", "GV28", "ST1"],
          desc: ''
        },
        {
          title: "8exgv",
          ids: ["8exgv", "GV1", "GV2", "GV3", "GV4", "GV5", "GV6", "GV7", "GV8", "GV9", "GV10", "GV11", "GV12", "GV13", "GV14", "GV15", "GV16", "GV17", "GV18", "GV19", "GV20", "GV21", "GV22", "GV23", "GV24", "GV25", "GV26", "GV27", "GV28", "CV1", "CV23", "CV24", "BL1", "BL23", "ST1"],
          desc: ''
        },
        {
          title: "8exbv",
          ids: ["8exbv", "LR13", "GB26", "GB27", "GB28", "GV4", "GV5", "GV6", "BL23"],
          desc: ''
        },
        {
          title: "8extv",
          ids: ["8extv","CV2", "CV3", "CV4", "CV5", "CV6", "CV7", "CV10", "CV12", "CV13", "CV17", "CV22", "CV23", "KI12", "KI13", "KI14", "KI15", "KI16", "KI17", "KI18", "KI19", "KI20", "KI21", "ST30", "LR1"],
          desc: ''
        },
      ]
    },
    {
      title: "keypoints",
      titleFa: "نقاط کلیدی",
      desc: "نقاط ویژه مثل فرمان، منبع، و غیره که در درمان‌های خاص استفاده می‌شن",
      subgroups: [
        {
          title: "menstrualpain",
          ids: ["CV2","CV3", "CV4", "CV5", "CV6", "CV7", "KI11", "KI12", "KI13", "KI14", "KI15", "ST26", "ST27", "ST28", "ST29", "ST30"],
          desc: ''
        },
        {
          title: "AlarmPoint",
          ids: ["LU1", "ST25", "CV12", "LR13", "CV14", "CV4", "CV3", "GB25", "CV17", "CV5", "GB24", "LR14"],
          desc: ''
        },
        {
          title: "WellPoint",
          ids: ["LU11", "LI1", "ST45", "SP1", "HT9", "SI1", "BL67", "KI1", "PC9", "TE1", "GB44", "LR1"],
          desc: ''
        },
        {
          title: "WaterPoint",
          ids: ["LU5", "LI2", "ST44", "SP9", "HT3", "SI2", "BL66", "KI10", "PC3", "TE2", "GB43", "LR8"],
          desc: ''
        },
        {
          title: "SourcePoint",
          ids: ["LU9", "LI4", "ST42", "SP3", "HT7", "SI4", "BL64", "KI3", "PC7", "TE4", "GB40", "LR3"],
          desc: ''
        },
        {
          title: "ConnectingPoint",
          ids: ["LU7", "LI6", "ST40", "SP4", "SP21", "HT5", "SI7", "BL58", "KI4", "PC6", "TE5", "GB37", "LR5"],
          desc: ''
        },
        {
          title: "CleftPoint",
          ids: ["LU6", "LI7", "ST34", "SP8", "HT6", "SI6", "BL63", "KI5", "PC4", "TE7", "GB36", "LR6"],
          desc: ''
        },
        {
          title: "EntryPoint",
          ids: ["LU1", "LI1", "ST1", "SP1", "HT1", "SI1", "BL1", "KI1", "PC1", "TE1", "GB1", "LR1"],
          desc: ''
        },
        {
          title: "ExitPoint",
          ids: ["LU11", "LI20", "ST45", "SP21", "HT9", "SI19", "BL67", "KI27", "PC9", "TE23", "GB44", "LR14"],
          desc: ''
        },
        {
          title: "TonificationPoint",
          ids: ["LU9", "LI11", "ST41", "SP2", "HT9", "SI3", "BL67", "KI7", "PC9", "TE3", "GB43", "LR8"],
          desc: ''
        },
        {
          title: "SedationPoint",
          ids: ["LU5", "LI2", "ST45", "SP5", "HT7", "SI8", "BL65", "KI1", "PC7", "TE10", "GB38", "LR2"],
          desc: ''
        },
        {
          title: "TransportPoint",
          ids: ["BL13", "BL25", "BL21", "BL20", "BL15", "BL27", "BL28", "BL23", "BL14", "BL22", "BL19", "BL18"],
          desc: ''
        },
        {
          title: "BrookPoint",
          ids: ["LU10", "LI2", "ST44", "SP2", "HT8", "SI2", "BL66", "KI2", "PC8", "TE2", "GB43", "LR2"],
          desc: ''
        },
        {
          title: "TwoCommandPoint",
          ids: ["SP6", "LI4"],
          desc: ''
        },
        {
          title: "FourCommandPoint",
          ids: ["LU7", "LI4", "ST36", "BL40"],
          desc: ''
        },
        {
          title: "SixCommandPoint",
          ids: ["LU7", "LI4", "ST36", "BL40", "PC6", "TE6"],
          desc: ''
        },
        {
          title: "LowerSeaPointsOfTheSixBowelsPoint",
          ids: ["ST36", "ST37", "ST39", "BL40", "BL39", "GB34"],
          desc: ''
        },
        {
          title: "EightMeetingPoint",
          ids: ["BL11", "BL17", "GB34", "GB39", "LR13", "LU9", "CV12", "CV17"],
          desc: ''
        },
        {
          title: "ConfluencePointsOfTheEightVesselsPoint",
          ids: ["BL62", "GB41", "KI6", "LU7", "PC6", "SI3", "SP4"],
          desc: ''
        },
        {
          title: "SevenPointForCVAPoint",
          ids: ["GV20", "GB21", "LI11", "GB31", "ST36", "GB39", "GB7"],
          desc: ''
        },
        {
          title: "8PointsForBeriberi",
          ids: ["GB31", "ST32", "ST35", "ST36", "ST37", "ST39", "GB39"],
          desc: ''
        },
        {
          title: "NinePointsForRecoveryYang",
          ids: ["GV15", "PC8", "LI4", "CV12", "GB30", "ST36", "SP6", "KI3", "KI1"],
          desc: ''
        },
        {
          title: "WindowsOfHeavenPoint",
          ids: ["BL10", "SI17", "SI16", "ST9", "LI18", "TE16", "CV22", "GV16", "LU3"],
          desc: ''
        },
        {
          title: "StreamPoint",
          ids: ["LU9", "LI3", "ST43", "SP3", "HT7", "SI3", "BL65", "KI3", "PC7", "TE3", "GB43", "LR3"],
          desc: ''
        },
        {
          title: "MaDanYangTwelveHeavenlyStarPoint",
          ids: ["LU7", "LI4", "LI11", "ST36", "ST44", "HT5", "BL40", "BL57", "BL60", "GB30", "GB34", "LR3"],
          desc: ''
        },
        {
          title: "13GhostPoint",
          ids: ["LU11", "LI11", "SP1", "SP1", "ST6", "PC8", "PC7", "GV23", "GV26", "CV24", "BL62", "GV16", "CV1"],
          desc: ''
        },
        {
          title: "ThreeJiaoProblems",
          ids: ["SP21", "ST25", "SP8"],
          desc: ''
        },
        {
          title: "ThreeSubstancesPoint",
          ids: ["GV20", "CV21", "KI1"],
          desc: ''
        },
        {
          title: "4GatePoint",
          ids: ["LI4", "LR3"],
          desc: ''
        },
        {
          title: "PointsOfTheFourSeasSeaOfQi",
          ids: ["ST9", "CV17", "GV14", "GV15"],
          desc: ''
        },
        {
          title: "PointsOfTheFourSeasSeaOfBlood",
          ids: ["BL11", "ST37", "ST39"],
          desc: ''
        },
        {
          title: "PointsOfTheFourSeasSeaOfWater&Grain",
          ids: ["ST30", "ST36"],
          desc: ''
        },
        {
          title: "PointsOfTheFourSeasSeaOfMarrow",
          ids: ["GV20", "GV16"],
          desc: ''
        },
        {
          title: "RiverPoint",
          ids: ["LU8", "LI5", "ST41", "SP5", "HT4", "SI5", "BL60", "KI7", "PC5", "TE6", "GB38", "LR4"],
          desc: ''
        },
        {
          title: "SeaPoint",
          ids: ["LU5", "LI11", "ST36", "SP9", "HT3", "SI8", "BL40", "KI10", "PC3", "TE10", "GB34", "LR8"],
          desc: ''
        },
        {
          title: "WoodPoint",
          ids: ["LU11", "LI3", "ST43", "SP1", "HT9", "SI3", "BL65", "KI1", "PC9", "TE3", "GB41", "LR1"],
          desc: ''
        },
        {
          title: "FirePoint",
          ids: ["LU10", "LI5", "ST41", "SP2", "HT8", "SI5", "BL60", "KI2", "PC8", "TE6", "GB38", "LR2"],
          desc: ''
        },
        {
          title: "EarthPoint",
          ids: ["LU9", "LI11", "ST36", "SP3", "HT7", "SI8", "BL40", "KI3", "PC7", "TE10", "GB34", "LR3"],
          desc: ''
        },
        {
          title: "MetalPoint",
          ids: ["LU18", "LI1", "ST45", "SP5", "HT4", "SI1", "BL67", "KI17", "PC5", "TE1", "GB44", "LR4"],
          desc: ''
        },
        {
          title: "FrontMuPoints",
          ids: ["CV3", "CV4", "CV5", "CV12", "ST25", "GB24", "LR13", "LU1"],
          desc: ''
        },
        {
          title: "DD",
          ids: ["Anmian","Baichongwo","Bailao","Baxie","Bitong","Dannangxue","Dingchuan","Erbai","Erijian","Haiquan","Heding","Xiayan","Huanmen","Jiachenjiang","Jianqian","Lanweixue","Luozhen","Qiuhou","Sanjiaojiu","Shixuan","Sifeng","Sishencong","Taiyang","Tituo","Weiguanxiashu","Yaotongxue","Yaoyan","Yaoyangguan","Yintang","Yuyao","YuyeJinjin","Zhoujian","Zigong",],
          desc: ''
        },
      ]
    },
  ];
  getAllByCategoriessubgroups(title: string): PointGroup[] {
    const category = this.categories.find(p => p.title === title);
    return category ? category.subgroups : [];
  }

  getAllByCategories(title: string): Category[] {
    return this.categories.filter(p => p.title === title);
  }

  getAllByCategoriess(): Category[] {
    return this.categories;
  }

  private groups: PointGroup[] = [
    // مقدمه بازتات درمانی
    {
      title: "reflexology",
      ids: ["reflexoloyIntro1", "Yin", "Yang"],
      desc: ''
    },
    // نقاط رئیسه
    {
      title: "BossPoint",
      ids: ["LI4", "HT7", "PC6", "LI11", "GB21", "CV17", "ST36", "SP6", "ST44"],
      desc: ''
    },
    // اعصاب روان
    {
      title: "nerves",
      ids: ["nervesTreatment","LI4", "HT7", "PC6", "LI11", "EX1", "BL2", "ST8", "GV23", "GV20", "GV19", "GB20", "GB21", "KI27", "CV17", "ST36", "BL56", "SP6", "BL62", "ST44"],
      desc: ''
    },
    // گوارش
    {
      title: "digestive",
      ids: ["digestiveTreatment","LI4", "HT7", "PC6", "LI11", "TE6", "SP15", "CV6", "CV12", "ST21", "ST36", "SP6", "BL62", "GB20", "LR3", "ST44", "digestive", "digestive1","CV5","CV6","CV7","CV8","CV9","CV10","CV11","CV12","CV13","CV14","KI14","KI15","KI16","KI17","KI18","KI19","KI20","KI21","ST19","ST20","ST21","ST22","ST23","ST24","ST25","ST26","ST27"],
      desc: ''
    },
    // مچ دست کتف یخ زده
    {
      title: "FrozenShoulder",
      ids: ["FrozenShoulderTreatment","LI4", "LI5", "LU9", "LU8", "PC4", "PC5", "PC6", "PC7", "HT4", "HT5", "HT6", "HT7", "SI5", "TE4", "LI11", "LI12", "HT3", "PC3", "LU5", "LI14", "LI15", "TE14", "SI9", "SI10", "GB21", "ST44", "FrozenShoulder"],
      desc: ''
    },
    // گردن کمر زانو مچ پا
    {
      title: "NeckWaistKneesAnkles",
      ids: ["NeckWaistKneesAnklesTreatment","LI4", "HT7", "SI6", "LI11", "GB20", "GB21", "SI9", "SI10", "GV14", "BL23", "BL25", "BL36", "BL37", "ST35", "EX31", "EX32", "ST36", "BL40", "BL56", "BL57", "DD1", "SP6", "KI3", "BL62", "GB40", "ST44","NeckWaistKneesAnkles"],
      desc: ''
    },
    // فشار خون
    {
      title: "hypertension",
      ids: ["hypertensionTreatment","LI4", "LU9", "PC6", "LI11", "TE23", "GV20", "CV21", "CV17", "SP9", "ST36", "SP6", "KI3", "BL62", "LR3", "ST44", "HT1", "HT2", "HT3", "HT4", "HT5", "HT6", "HT7", "HT8", "HT9"],
      desc: ''
    },
    // بینی
    {
      title: "nose",
      ids: ["LI4", "LU7", "LI20", "ST3", "ST44"],
      desc: ''
    },
    // چشم
    {
      title: "eye",
      ids: ["LI4", "EX1", "BL1", "GB1", "ST1", "ST2", "ST3", "GB37", "LR3", "ST44"],
      desc: ''
    },
    // دهان
    {
      title: "mouth",
      ids: ["LI4", "HT5", "LU9", "SI18", "ST4", "ST44"],
      desc: ''
    },
    // گوش
    {
      title: "ear",
      ids: ["LI4", "TE21", "SI19", "GB2", "DD2", "DD3", "DD4", "DD5", "KI3", "ST44"],
      desc: ''
    },
    // تب شدید
    {
      title: "fever",
      ids: ["LI4", "HT7", "PC6", "LI11", "GV14", "ST36", "SP6", "ST44", "fever"],
      desc: ''
    },
    // بازتاب ترک سیگار، مواد مخدر، الکل و ولع مغز
    {
      title: "addiction",
      ids: ["LI4", "HT7", "LU7", "GB20", "SP6", "LR3", "ST44", "addiction"],
      desc: ''
    },
    // بازتاب دندان درد
    {
      title: "toothache",
      ids: ["LI4", "ST3", "ST4", "ST6", "SI18", "ST44", "toothache"],
      desc: ''
    },
    // بازتاب دیابت
    {
      title: "diabetes",
      ids: ["LI18", "ST21", "GB21", "ST36", "SP6", "SP3", "ST44", "diabetes"],
      desc: ''
    },
    // بازتاب سردرد
    {
      title: "headache",
      ids: ["LI4", "HT7", "TE23", "GB14", "ST44","headache"],
      desc: ''
    },
    //  بازتاب لاغری
    {
      title: "slimming",
      ids: ["EarAppetiteControl","LI4", "HT7", "PC6", "LI11", "GV20", "ST36", "SP6", "BL62", "LR3", "ST44", "slimming"],
      desc: ''
    },
    //  بازتاب درد قاعدگی
    {
      title: "menstrualpain",
      ids: ["CV2","CV3", "CV4", "CV5", "CV6", "CV7", "KI11", "KI12", "KI13", "KI14", "KI15", "ST26", "ST27", "ST28", "ST29", "ST30"],
      desc: ''
    },
    {
      title: "AlarmPoint",
      ids: ["LU1", "ST25", "CV12", "LR13", "CV14", "CV4", "CV3", "GB25", "CV17", "CV5", "GB24", "LR14"],
      desc: ''
    },
    {
      title: "WellPoint",
      ids: ["LU11", "LI1", "ST45", "SP1", "HT9", "SI1", "BL67", "KI1", "PC9", "TE1", "GB44", "LR1"],
      desc: ''
    },
    {
      title: "WaterPoint",
      ids: ["LU5", "LI2", "ST44", "SP9", "HT3", "SI2", "BL66", "KI10", "PC3", "TE2", "GB43", "LR8"],
      desc: ''
    },
    {
      title: "SourcePoint",
      ids: ["LU9", "LI4", "ST42", "SP3", "HT7", "SI4", "BL64", "KI3", "PC7", "TE4", "GB40", "LR3"],
      desc: ''
    },
    {
      title: "ConnectingPoint",
      ids: ["LU7", "LI6", "ST40", "SP4", "SP21", "HT5", "SI7", "BL58", "KI4", "PC6", "TE5", "GB37", "LR5"],
      desc: ''
    },
    {
      title: "CleftPoint",
      ids: ["LU6", "LI7", "ST34", "SP8", "HT6", "SI6", "BL63", "KI5", "PC4", "TE7", "GB36", "LR6"],
      desc: ''
    },
    {
      title: "EntryPoint",
      ids: ["LU1", "LI1", "ST1", "SP1", "HT1", "SI1", "BL1", "KI1", "PC1", "TE1", "GB1", "LR1"],
      desc: ''
    },
    {
      title: "ExitPoint",
      ids: ["LU11", "LI20", "ST45", "SP21", "HT9", "SI19", "BL67", "KI27", "PC9", "TE23", "GB44", "LR14"],
      desc: ''
    },
    {
      title: "TonificationPoint",
      ids: ["LU9", "LI11", "ST41", "SP2", "HT9", "SI3", "BL67", "KI7", "PC9", "TE3", "GB43", "LR8"],
      desc: ''
    },
    {
      title: "SedationPoint",
      ids: ["LU5", "LI2", "ST45", "SP5", "HT7", "SI8", "BL65", "KI1", "PC7", "TE10", "GB38", "LR2"],
      desc: ''
    },
    {
      title: "TransportPoint",
      ids: ["BL13", "BL25", "BL21", "BL20", "BL15", "BL27", "BL28", "BL23", "BL14", "BL22", "BL19", "BL18"],
      desc: ''
    },
    {
      title: "BrookPoint",
      ids: ["LU10", "LI2", "ST44", "SP2", "HT8", "SI2", "BL66", "KI2", "PC8", "TE2", "GB43", "LR2"],
      desc: ''
    },
    {
      title: "TwoCommandPoint",
      ids: ["SP6", "LI4"],
      desc: ''
    },
    {
      title: "FourCommandPoint",
      ids: ["LU7", "LI4", "ST36", "BL40"],
      desc: ''
    },
    {
      title: "SixCommandPoint",
      ids: ["LU7", "LI4", "ST36", "BL40", "PC6", "TE6"],
      desc: ''
    },
    {
      title: "LowerSeaPointsOfTheSixBowelsPoint",
      ids: ["ST36", "ST37", "ST39", "BL40", "BL39", "GB34"],
      desc: ''
    },
    {
      title: "EightMeetingPoint",
      ids: ["BL11", "BL17", "GB34", "GB39", "LR13", "LU9", "CV12", "CV17"],
      desc: ''
    },
    {
      title: "ConfluencePointsOfTheEightVesselsPoint",
      ids: ["BL62", "GB41", "KI6", "LU7", "PC6", "SI3", "SP4"],
      desc: ''
    },
    {
      title: "SevenPointForCVAPoint",
      ids: ["GV20", "GB21", "LI11", "GB31", "ST36", "GB39", "GB7"],
      desc: ''
    },
    {
      title: "8PointsForBeriberi",
      ids: ["GB31", "ST32", "ST35", "ST36", "ST37", "ST39", "GB39"],
      desc: ''
    },
    {
      title: "NinePointsForRecoveryYang",
      ids: ["GV15", "PC8", "LI4", "CV12", "GB30", "ST36", "SP6", "KI3", "KI1"],
      desc: ''
    },
    {
      title: "WindowsOfHeavenPoint",
      ids: ["BL10", "SI17", "SI16", "ST9", "LI18", "TE16", "CV22", "GV16", "LU3"],
      desc: ''
    },
    {
      title: "StreamPoint",
      ids: ["LU9", "LI3", "ST43", "SP3", "HT7", "SI3", "BL65", "KI3", "PC7", "TE3", "GB43", "LR3"],
      desc: ''
    },
    {
      title: "MaDanYangTwelveHeavenlyStarPoint",
      ids: ["LU7", "LI4", "LI11", "ST36", "ST44", "HT5", "BL40", "BL57", "BL60", "GB30", "GB34", "LR3"],
      desc: ''
    },
    {
      title: "13GhostPoint",
      ids: ["LU11", "LI11", "SP1", "SP1", "ST6", "PC8", "PC7", "GV23", "GV26", "CV24", "BL62", "GV16", "CV1"],
      desc: ''
    },
    {
      title: "ThreeJiaoProblems",
      ids: ["SP21", "ST25", "SP8"],
      desc: ''
    },
    {
      title: "ThreeSubstancesPoint",
      ids: ["GV20", "CV21", "KI1"],
      desc: ''
    },
    {
      title: "4GatePoint",
      ids: ["LI4", "LR3"],
      desc: ''
    },
    {
      title: "PointsOfTheFourSeasSeaOfQi",
      ids: ["ST9", "CV17", "GV14", "GV15"],
      desc: ''
    },
    {
      title: "PointsOfTheFourSeasSeaOfBlood",
      ids: ["BL11", "ST37", "ST39"],
      desc: ''
    },
    {
      title: "PointsOfTheFourSeasSeaOfWater&Grain",
      ids: ["ST30", "ST36"],
      desc: ''
    },
    {
      title: "PointsOfTheFourSeasSeaOfMarrow",
      ids: ["GV20", "GV16"],
      desc: ''
    },
    {
      title: "RiverPoint",
      ids: ["LU8", "LI5", "ST41", "SP5", "HT4", "SI5", "BL60", "KI7", "PC5", "TE6", "GB38", "LR4"],
      desc: ''
    },
    {
      title: "SeaPoint",
      ids: ["LU5", "LI11", "ST36", "SP9", "HT3", "SI8", "BL40", "KI10", "PC3", "TE10", "GB34", "LR8"],
      desc: ''
    },
    {
      title: "WoodPoint",
      ids: ["LU11", "LI3", "ST43", "SP1", "HT9", "SI3", "BL65", "KI1", "PC9", "TE3", "GB41", "LR1"],
      desc: ''
    },
    {
      title: "FirePoint",
      ids: ["LU10", "LI5", "ST41", "SP2", "HT8", "SI5", "BL60", "KI2", "PC8", "TE6", "GB38", "LR2"],
      desc: ''
    },
    {
      title: "EarthPoint",
      ids: ["LU9", "LI11", "ST36", "SP3", "HT7", "SI8", "BL40", "KI3", "PC7", "TE10", "GB34", "LR3"],
      desc: ''
    },
    {
      title: "MetalPoint",
      ids: ["LU18", "LI1", "ST45", "SP5", "HT4", "SI1", "BL67", "KI17", "PC5", "TE1", "GB44", "LR4"],
      desc: ''
    },
    {
      title: "FrontMuPoints",
      ids: ["CV3", "CV4", "CV5", "CV12", "ST25", "GB24", "LR13", "LU1"],
      desc: ''
    }, 
    {
      title: "8exYinLink",
      ids: ["8exYinLink","KI9", "SP11", "SP12", "SP13", "SP15", "SP16", "KI11", "KI12", "KI13", "KI14", "KI15", "KI16", "CV22", "CV23"],
      desc: ''
    },
    {
      title: "8exYangLink",
      ids: ["8exYangLink","CV2", "CV3", "CV4", "CV5", "CV6", "CV7", "CV10", "CV12", "CV13", "CV17", "CV22", "CV23", "KI12", "KI13", "KI14", "KI15", "KI16", "KI17", "KI18", "KI19", "KI20", "KI21", "ST30", "LR1"],
      desc: ''
    },
    {
      title: "8exYangHeel",
      ids: ["8exYangHeel","BL1", "BL61", "BL62", "BL59", "SI10", "LI15", "LI16", "ST1", "ST4", "ST9", "GB14", "GB15", "GB16", "GB17", "GB18", "GB19", "GB20", "GB21", "GB35", "TE15", "CV22", "CV23"],
      desc: ''
    },
    {
      title: "8exYinHeel",
      ids: ["8exYinHeel","KI2", "KI3", "KI6", "KI8", "KI16", "ST9", "ST12", "CV15", "CV17", "CV22", "CV23", "BL1"],
      desc: ''
    },
    {
      title: "8excv",
      ids: ["8excv","CV1", "CV2", "CV3", "CV4", "CV5", "CV6", "CV7", "CV8", "CV9", "CV10", "CV11", "CV12", "CV13", "CV14", "CV15", "CV16", "CV17", "CV18", "CV19", "CV20", "CV21", "CV22", "CV23", "CV24", "GV28", "ST1"],
      desc: ''
    },
    {
      title: "8exgv",
      ids: ["8exgv", "GV1", "GV2", "GV3", "GV4", "GV5", "GV6", "GV7", "GV8", "GV9", "GV10", "GV11", "GV12", "GV13", "GV14", "GV15", "GV16", "GV17", "GV18", "GV19", "GV20", "GV21", "GV22", "GV23", "GV24", "GV25", "GV26", "GV27", "GV28", "CV1", "CV23", "CV24", "BL1", "BL23", "ST1"],
      desc: ''
    },
    {
      title: "8exbv",
      ids: ["8exbv", "LR13", "GB26", "GB27", "GB28", "GV4", "GV5", "GV6", "BL23"],
      desc: ''
    },
    {
      title: "8extv",
      ids: ["8extv","CV2", "CV3", "CV4", "CV5", "CV6", "CV7", "CV10", "CV12", "CV13", "CV17", "CV22", "CV23", "KI12", "KI13", "KI14", "KI15", "KI16", "KI17", "KI18", "KI19", "KI20", "KI21", "ST30", "LR1"],
      desc: ''
    },
    
  { title: "LI", ids: this.generateMeridianIds("LI", 1, 20), desc: "Large Intestine Meridian" },
  { title: "ST", ids: this.generateMeridianIds("ST", 1, 45), desc: "Stomach Meridian" },
  { title: "SP", ids: this.generateMeridianIds("SP", 1, 21), desc: "Spleen Meridian" },
  { title: "HT", ids: this.generateMeridianIds("HT", 1, 9), desc: "Heart Meridian" },
  { title: "SI", ids: this.generateMeridianIds("SI", 1, 19), desc: "Small Intestine Meridian" },
  { title: "BL", ids: this.generateMeridianIds("BL", 1, 67), desc: "Bladder Meridian" },
  { title: "KI", ids: this.generateMeridianIds("KI", 1, 27), desc: "Kidney Meridian" },
  { title: "PC", ids: this.generateMeridianIds("PC", 1, 9), desc: "Pericardium Meridian" },
  { title: "TE", ids: this.generateMeridianIds("TE", 1, 23), desc: "Triple Energizer Meridian" },
  { title: "GB", ids: this.generateMeridianIds("GB", 1, 44), desc: "Gall Bladder Meridian" },
  { title: "LR", ids: this.generateMeridianIds("LR", 1, 14), desc: "Liver Meridian" },
  { title: "LU", ids: this.generateMeridianIds("LU", 1, 11), desc: "Lung Meridian" },
  { title: "CV", ids: this.generateMeridianIds("CV", 1, 24), desc: "Conception Vessel" },
  { title: "GV", ids: this.generateMeridianIds("GV", 1, 28), desc: "Governing Vessel" },
  
    {
      title: "DD",
      ids: ["Anmian","Baichongwo","Bailao","Baxie","Bitong","Dannangxue","Dingchuan","Erbai","Erijian","Haiquan","Heding","Xiayan","Huanmen","Jiachenjiang","Jianqian","Lanweixue","Luozhen","Qiuhou","Sanjiaojiu","Shixuan","Sifeng","Sishencong","Taiyang","Tituo","Weiguanxiashu","Yaotongxue","Yaoyan","Yaoyangguan","Yintang","Yuyao","YuyeJinjin","Zhoujian","Zigong",],
      desc: ''
    },
    // هر گروه جدید رو اینجا تعریف کن
  ];
  

  // تابع کمکی برای ساختن لیست id ها
 generateMeridianIds(prefix: string, start: number, end: number): string[] {
  const ids: string[] = [];
  for (let i = start; i <= end; i++) {
    ids.push(prefix + i);
  }
  return ids;
}

      constructor() { }

  // 🔹 گرفتن نقاط بر اساس گروه سفارشی
  getAllByGroup(title: string): PointsModel[] {
    // const group = this.groups.find(g => g.title === title);
    // if (!group) return [];

    // return this.points.filter(p => group.ids.includes(p.id));
    const group = this.groups.find(g => g.title === title);
    if (!group) return [];

    // فقط آیتم‌های داخل گروه رو می‌گیری
    const filtered = this.points.filter(p => group.ids.includes(p.id));

    // حالا مرتب‌سازی بر اساس ترتیب ids در group
    return filtered.sort((a, b) => {
      return group.ids.indexOf(a.id) - group.ids.indexOf(b.id);
    });
 }
  getGroups(): PointGroup[] {
    return this.groups;
  }
      
  getAllPoints(): PointsModel[] {
    return this.points;
  }
  getAllShufflePoints(): PointsModel[] {
    return this.shuffle(this.points);
  }
  //برای اینکه هر سری باز میشه نظرات متفاوت باشند جابجا باشند در نمایش
  private shuffle(array: PointsModel[]): PointsModel[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  searchPoints(term: string): PointsModel[] {
    const lowerTerm = term.toLowerCase();
    return this.points.filter(c =>
      c.name.toLowerCase().includes(lowerTerm) ||
      c.description.toLowerCase().includes(lowerTerm) ||
      c.location.toLowerCase().includes(lowerTerm) ||
      c.pressureAngle.toLowerCase().includes(lowerTerm) ||
      c.pressureAmount.toLowerCase().includes(lowerTerm) ||
      c.repetitions.toLowerCase().includes(lowerTerm) ||
      c.time.toLowerCase().includes(lowerTerm) ||
      c.extra.toLowerCase().includes(lowerTerm)
    );
  }
  searchNamePoints(term: string): PointsModel[] {
    const lowerTerm = term.toLowerCase();
    return this.points.filter(c =>
      c.name.toLowerCase().includes(lowerTerm)
    );
  }

  getAllByCategory(category: string): PointsModel[] {
    return this.points.filter(p => p.category === category);
  }

  /** سرچ در یک دسته */
  searchCategory(category: string, term: string): PointsModel[] {
    const lower = term.toLowerCase();
    // گرفتن همه آیتم‌های گروه
    const groupPoints = this.getAllByGroup(category);

    // فیلتر بر اساس term
    return groupPoints.filter(p =>
      p.id.toLowerCase().includes(lower) ||
      p.name.toLowerCase().includes(lower) ||
      p.Enname.toLowerCase().includes(lower) ||
      p.location.toLowerCase().includes(lower) ||
      p.pressureAngle.toLowerCase().includes(lower) ||
      p.pressureAmount.toLowerCase().includes(lower) ||
      p.repetitions.toLowerCase().includes(lower) ||
      p.time.toLowerCase().includes(lower) ||
      p.extra.toLowerCase().includes(lower) ||
      p.desc.toLowerCase().includes(lower) ||
      p.descrip.toLowerCase().includes(lower) ||
      p.supplementary.toLowerCase().includes(lower) ||
      p.boss.toLowerCase().includes(lower) ||
      p.extra.toLowerCase().includes(lower)
    );
  }
  
    
  /** سرچ در یک دسته */
  searchCategoryName(category: string, term: string): PointsModel[] {
    const lower = term.toLowerCase();
    return this.getAllByCategory(category).filter(p =>
      p.name.toLowerCase().includes(lower) 
    );
  }

  /** shuffle یک دسته */
  shuffleCategory(category: string): PointsModel[] {
    const arr = [...this.getAllByCategory(category)];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
}
