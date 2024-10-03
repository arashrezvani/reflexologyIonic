import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';
import { CalServicService } from '../services/calService/cal-servic.service';

@Component({
  selector: 'app-relationship-people',
  templateUrl: './relationship-people.page.html',
  styleUrls: ['./relationship-people.page.scss'],
})
export class RelationshipPeoplePage implements OnInit {


  analyzedData: any; // داده‌هایی که قرار است نمایش داده شوند

  blockData1:any;

  nameInput: string = '';   // ورودی نام
  MomnameInput:string='';
  
  nameInput1: string = '';   // ورودی نام
  MomnameInput1:string='';


  
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
  featuretemperament:string ='';
  Calc: number =0;
  NameState: string ='';
  quality: string ='';


  constructor(
    private calSer: CalServicService,
    private dbSer:DbinprojectService) { }

  ngOnInit() {
  }


  
    //===================================================
    submitForm() {
      //this.analyzedData= '';
      if (this.nameInput.trim() !== '' && this.nameInput1.trim() !== '' && this.MomnameInput.trim() !== '' && this.MomnameInput1.trim() !== '') {

        this.blockData1=this.calSer.CalcRelationshipPeople(this.nameInput,this.MomnameInput,this.nameInput1,this.MomnameInput1);


        // اشتراک به داده‌های تحلیل شده و دریافت داده‌ها
        
      // اشتراک به داده‌های تحلیل شده و دریافت داده‌ها
      this.dbSer.getAnalyzedData().subscribe((data) => {
        if (data) {
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
          this.Calc = this.analyzedData.Calc;
          this.NameState = this.analyzedData.NameState;
          this.quality = this.analyzedData.quality;
        }
      });
      }
      

    }

    resetData() {
      // اینجا مقادیر ورودی و خروجی را پاک می‌کنیم
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
      this.nameInput = '';
      this.MomnameInput = '';
      this.nameInput1 = '';
      this.MomnameInput1 = '';
      this.Calc =0;
      this.NameState ='';
      this.quality ='';
    }
    exitApp() {
      console.log("exitApp");
      App.exitApp();
    }

}
