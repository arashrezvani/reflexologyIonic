import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { CalServicService } from '../services/calService/cal-servic.service';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';
//import { File } from '@ionic-native/file/ngx';  // برای دسترسی به فایل‌ها در ionic



const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
import * as pdfMake from 'pdfmake/build/pdfmake';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-info-darman-abjad',
  templateUrl: './info-darman-abjad.page.html',
  styleUrls: ['./info-darman-abjad.page.scss'],
})
export class InfoDarmanAbjadPage implements OnInit {


  

  analyzedData: any; // داده‌هایی که قرار است نمایش داده شوند
  Asma_Array: Array<{id: string, name: string, meaning: string, abjadkabir: string, desc: string}>=[];
  //=========================================

  nameInput: string = '';   // ورودی نام
  MomnameInput:string='';
  namesList: string[] = []; // لیست برای نمایش نام‌ها
  blockData:any;
  blockData1:any;

  m: number = 0;
  
  NumSaghir: number =0;
  NumKabir: number =0;
  NumSaghirMom: number =0;
  NumKabirMom: number =0;
  NumSaghirSelfMom:number =0;
  NumMoon: number =0;
  SignNameNum: number =0;
  SignName: string ='';
  Element: string ='';
  temperament: string ='';
  temperamentName: string ='';
  Star: string ='';
  Entity: string ='';
  GemetricShapM: string ='';
  GemetricShapD: string ='';
  PrimaryStoneM: string ='';
  SecondaryStoneD: string ='';
  oliM: string ='';
  oliD: string ='';
  Direction: string ='';
  angel: string ='';
  angel1: string ='';
  feature: string ='';
  DayDarman: string ='';
  friendStar: string ='';
  enemyStar: string ='';
  mediatorStar: string ='';
  featureStar:string ='';
  SexStar:string ='';
  herz:string ='';
  
  MF:string=''; 
  PF:string='';
  NF:string='';
  
  tw1: string='';
  tw2: string='';
  tw3: string='';
  job1: string='';
  job2: string='';
  job3: string='';
  mean: string[]=[];
  featuretemperament:string ='';
  IsHosna : boolean = false;


  //=========================================
  constructor(
    private calSer: CalServicService,
    private storage : StorageService,
    private dbSer:DbinprojectService) {
    
  }
  async checkAsmaHosna() {
    console.log("asmaHosna   b  ", this.IsHosna);
    try {
      const cal = await this.storage.getItem('Obj_Opt'); // منتظر می‌مانیم تا Promise رفع شود
      console.log("cal   b  ", cal);
      this.IsHosna = cal ? cal.includes('asmaHosna') : false;
      console.log("asmaHosna    a     ", this.IsHosna);
    } catch (error) {
      console.error("خطا در دریافت داده از storage: ", error);
      this.IsHosna = false; // در صورت خطا، مقدار پیش‌فرض
    }
  }
  ngOnInit() {
    this.checkAsmaHosna();
    
    //const AsmaHosna =  calCArrayAsma ? calCArrayAsma.includes('سلام') : false;
   
    
    // اضافه کردن فونت فارسی به VFS
    // const loadFonts = async () => {
    //   const fontPath = 'assets/fonts/iransans/IRANSans.ttf'; // مسیر فونت در پروژه
    //   //const fontData = await this.file.readAsDataURL(this.file.applicationDirectory, fontPath);
    //   //const base64Font = fontData.split(',')[1]; // جدا کردن داده base64 از URL

    //   // بارگذاری فونت به VFS
    //   pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
    //   pdfMakeX.vfs['IRANSans.ttf'] = base64Font;  // اضافه کردن فونت به vfs
    // };


    // pdfMakeX.fonts = {
    //   IRANSans: {
    //     normal: `${window.location.origin}/assets/fonts/iransans/IRANSans.ttf`,
    //   }
    // };
    
    pdfMakeX.fonts = {
      IRANSans: {
        normal: `${window.location.origin}/assets/fonts/iransans/IRANSans.ttf`,
        bold: `${window.location.origin}/assets/fonts/iransans/IRANSans-Bold.ttf`,
        italics: `${window.location.origin}/assets/fonts/iransans/IRANSans-Italic.ttf`,
        bolditalics: `${window.location.origin}/assets/fonts/iransans/IRANSans-BoldItalic.ttf`
      }
    };
  }


    //===================================================
    submitForm() {
      
    if(this.analyzedData != null ) this.resetData();
      //this.analyzedData= '';
      if (this.nameInput.trim() !== '' && this.MomnameInput.trim() !== '' ) {
        this.m=this.nameInput.length;
        this.blockData1=this.calSer.CalAbjadSaghir(this.nameInput,this.MomnameInput);


      // اشتراک به داده‌های تحلیل شده و دریافت داده‌ها
      this.dbSer.getAnalyzedData().subscribe((data) => {
        if (data) {
          this.Asma_Array = []; // ریست آرایه قبلی
          this.analyzedData = data;
          console.log('Analyzed Data:', this.analyzedData);
          this.NumSaghir = this.analyzedData.NumSaghir;
          this.NumKabir = this.analyzedData.NumKabir;
          this.NumSaghirMom = this.analyzedData.NumSaghirMom;
          this.NumKabirMom = this.analyzedData.NumKabirMom;
          this.NumSaghirSelfMom = this.analyzedData.NumSaghirSelfMom;
          this.NumMoon = this.analyzedData.NumMoon;
          this.SignNameNum = this.analyzedData.SignNameNum;
          this.SignName = this.analyzedData.SignName;
          this.Element = this.analyzedData.Element;
          this.temperament = this.analyzedData.temperament;
          this.temperamentName = this.analyzedData.temperamentName;
          this.Star = this.analyzedData.Star;
          this.herz = this.analyzedData.herz;
          this.MF = this.analyzedData.MF;
          this.PF = this.analyzedData.PF;
          this.NF = this.analyzedData.NF;
          this.tw1 = this.analyzedData.tw1;
          this.tw2 = this.analyzedData.tw2;
          this.tw3 = this.analyzedData.tw3;
          this.job1 = this.analyzedData.job1;
          this.job2 = this.analyzedData.job2;
          this.job3 = this.analyzedData.job3;
          this.mean = this.analyzedData.mean;
          this.Entity = this.analyzedData.Entity;
          this.GemetricShapM = this.analyzedData.GemetricShapM;
          this.GemetricShapD = this.analyzedData.GemetricShapD;
          this.PrimaryStoneM = this.analyzedData.PrimaryStoneM;
          this.SecondaryStoneD = this.analyzedData.SecondaryStoneD;
          this.oliM = this.analyzedData.oliM;
          this.oliD = this.analyzedData.oliD;
          this.Direction = this.analyzedData.Direction;
          this.angel = this.analyzedData.angel;
          this.angel1 = this.analyzedData.angel1;
          this.feature = this.analyzedData.feature;
          this.DayDarman = this.analyzedData.DayDarman;
          this.friendStar = this.analyzedData.friendStar;
          this.enemyStar = this.analyzedData.enemyStar;
          this.mediatorStar = this.analyzedData.mediatorStar;
          this.featureStar = this.analyzedData.featureStar;
          this.featuretemperament = this.analyzedData.featuretemperament;
          this.SexStar = this.analyzedData.SexStar;
          this.Asma_Array= this.analyzedData.Asma_Array;
        }
      });

        //this.nameInput = ''; // پاک کردن ورودی پس از ارسال
        //this.MomnameInput = ''; // پاک کردن ورودی پس از ارسال
      }
      

    }
    objectKeys(obj: any): string[] {
      return Object.keys(obj);
    }
      //===================================================

  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
  // generatePdf() {
  //   console.log("nameInput",this.nameInput);
  //   const docDefinition: any = {
  //     content: [
  //       { text: this.reverseText(' اپلیکیشن طب ماورا گروه بازتاب درمانی استاد  41'), style: 'header' , alignment: 'right' },
  //       { text: this.reverseText(' نتایج تحلیل ابجد : '), style: 'header'   },
  //       { text: this.reverseText(`نام :  ${this.nameInput || 'N/A'}`)   },
  //       { text: this.reverseText(`نام مادر :  ${this.MomnameInput || 'N/A'}`)   },
  //       { text: this.reverseText(`ابجد کبیر :  ${this.NumKabir || 'N/A'}`)   },
  //       { text: this.reverseText(`ابجد صغیر :  ${this.NumSaghir || 'N/A'}` )  },
  //       { text: this.reverseText(`برج فلکی :  ${this.SignName || 'N/A'}`)   },
  //       { text: this.reverseText(`روز درمان :  ${this.DayDarman || 'N/A'}`)   },
  //       { text: this.reverseText(`سنگ موافق صحه :  ${this.PrimaryStoneM || 'N/A'}` )  },
  //       { text: this.reverseText(`سنگ درمان :  ${this.SecondaryStoneD || 'N/A'}`)  },
  //       { text: this.reverseText(`روغن موافق صحه :  ${this.oliM || 'N/A'}` )  },
  //       { text: this.reverseText(`نام فرشته :  ${this.angel1 || 'N/A'}`) },
  //       { text: this.reverseText('اپلیکیشن طب ماورا گروه بازتاب درمانی استاد 41'), dir:'ltr' },
  //       // ادامه اطلاعات دیگر از کارت‌ها و داده‌ها
  //     ],
  //     styles: {
  //       header: { font: 'IRANSans', fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
  //       bodyText: { font: 'IRANSans', fontSize: 12 }
  //     },
  //     defaultStyle: {
  //       font: 'IRANSans',
  //       alignment: 'right'
  //     }
  //   };

  //   pdfMakeX.createPdf(docDefinition).download('abjad-analysis.pdf');
  // }
  // reverseText(text: string): string {
  //   return text.split(' ').reverse().join(' ');
  // }

  resetData() {
    // اینجا مقادیر ورودی و خروجی را پاک می‌کنیم
    this.m=0;
    this.nameInput = '';
    this.MomnameInput = '';
    this.analyzedData = null;
    this.NumSaghir = 0;
    this.NumKabir = 0;
    this.NumSaghirMom = 0;
    this.NumKabirMom = 0;
    this.SignName = '';
    this.temperamentName = '';
    this.Star = '';
    this.herz = '';
    this.MF = '';
    this.PF = '';
    this.NF = '';
    this.tw1='';
    this.tw2='';
    this.tw3='';
    this.job1='';
    this.job2='';
    this.job3='';
    this.mean=[];
    this.GemetricShapM = '';
    this.GemetricShapD = '';
    this.PrimaryStoneM = '';
    this.SecondaryStoneD = '';
    this.Direction = '';
    this.angel1 = '';
    this.angel = '';
    this.oliM = '';
    this.oliD = '';
    this.DayDarman = '';
    this.Asma_Array=[];
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
