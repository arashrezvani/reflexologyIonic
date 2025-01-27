import { Injectable } from '@angular/core';
import { DbinprojectService } from '../dataBase/dbinproject.service';

@Injectable({
  providedIn: 'root'
})


export class CalServicService {
  separatedNumbersKabir: number[] = [];
  private analyzedData: MyDataObject | null = null; // متغیری از نوع MyDataObject
  private analyzedDataMoon : MyDataMoonObj | null = null;

  db_DTTS: Array<{dayName: string, day: number, time: number, type: string, star: string, timeCal: string}>=[];
  ABJADTemp: Array<{W: string, Saghir: number, Kabir: number, NumW:number , type:string}>=[];

  ResultAbjad: Array<{Name: string, Saghir: number, Kabir: number, Angel:string , type:string}>=[];
  constructor(private dbSer:DbinprojectService) { }


  Cal1(s : string ,h : any ,m : any ,d : string){

    this.db_DTTS.splice(0,this.db_DTTS.length); //پاک کردن داده های ارایه
    var c=this.dbSer.getData();
    console.log("day ======= "+d);
    console.log("day ======= "+d);
      for(let i of c){
        console.log("i.dayName ======= "+i.dayName);
        if(i.type == s && i.day == parseInt(d)){
          var iiii= Number(h)+Number(m);
          var temph=0;
          var temphsh =0;
          var tempmsh =0;
          temph=i.time;
          console.log("temph ======= "+temph);
          console.log("h ======= "+h);
          temphsh = Number(temph) + Number(h);
          console.log("temphsh ======= "+temphsh);
          if(temphsh==24){
            temphsh = 0;
          }
          if(temphsh>24){
            temphsh = Number(temphsh) - 24;
            console.log("--------------"+temphsh);
          }
          console.log("++++++++++++++++++++ "+temphsh);
          if( temphsh == 0){
            i.timeCal = m + " : " + "23" +"  تا  " + m + " : " + temphsh;
          }else{
            i.timeCal = m + " : " + (Number(temphsh)-1) + "  تا  " + m + " : " + temphsh;
          }
          this.db_DTTS.push(i);
          //this.db_DTTS=i.day;
          //console.log(i.time);
          //console.log(i.day);
          //console.log(this.db_DTTS);
        }
      }
     return this.db_DTTS;
  }

  Cal(s : string ,h : any ,m : any ,d : string){
   
    this.db_DTTS.splice(0,this.db_DTTS.length); //پاک کردن داده های ارایه
    var c=this.dbSer.getData();
    console.log("day ======= "+d);
    console.log("day ======= "+d);
      for(let i of c){
        console.log("i.dayName ======= "+i.dayName);
        if(i.type == s && i.dayName == d){
          var iiii= Number(h)+Number(m);
          var temph=0;
          var temphsh =0;
          var tempmsh =0;
          temph=i.time;
          console.log("temph ======= "+temph);
          console.log("h ======= "+h);
          temphsh = Number(temph) + Number(h);
          console.log("temphsh ======= "+temphsh);
          if(temphsh==24){
            temphsh = 0;
          }
          if(temphsh>24){
            temphsh = Number(temphsh) - 24;
            console.log("--------------"+temphsh);
          }
          console.log("++++++++++++++++++++ "+temphsh);
          if( temphsh == 0){
            i.timeCal = m + " : " + "23" +"  تا  " + m + " : " + temphsh;
          }else{
            i.timeCal = m + " : " + (Number(temphsh)-1) + "  تا  " + m + " : " + temphsh;
          }
          this.db_DTTS.push(i);
          //this.db_DTTS=i.day;
          //console.log(i.time);
          //console.log(i.day);
          //console.log(this.db_DTTS);
        }
      }
     return this.db_DTTS;
  }

  CalcRelationshipPeople(StrName : string, StrMomName : string, StrName1 : string, StrMomName1 : string){

    let NumSaghir: number=0;
    let NumKabir: number=0;
    let NumSaghirMom: number=0;
    let NumKabirMom: number=0;
    let NumSaghirSelfMom: number=0;
    let NumMoon: number=0;
    let NumMoon1: number=0;
    let result: number=0;
    let NumC: number=0;
    let NumD: number=0;
    NumMoon=this.functionCal(StrName,StrMomName);
    NumMoon1=this.functionCal(StrName1,StrMomName1);
    let i:number=0;
    
    console.log("************************************  num1: "+NumMoon);
    
    console.log("************************************  num2: "+NumMoon1);

    result = Math.abs(NumMoon - NumMoon1);
    console.log("************************************  result: "+result);
    if (result > 6) {
      if(NumMoon>NumMoon1){NumC=NumMoon;NumD=NumMoon1;}else{NumC=NumMoon1;NumD=NumMoon;}
      for (let index = NumC; index <= 12; index++) {
        
        i=i+1;
      }
      for (let index = 1; index < NumD; index++) {
        
        i=i+1;
      }
      result=i;
      console.log("************************************  i: "+i);
    }

    if (!this.analyzedData) {
      this.analyzedData = { NumSaghir: 0, NumKabir: 0, NumSaghirMom: 0, NumKabirMom: 0, NumSaghirSelfMom:0,NumMoon:0,SignNameNum:0,
        SignName:'',
        Element: '',
        temperament:'',temperamentName:'',Star:'',
        Entity: '',
        GemetricShapM: '',
        GemetricShapD: '',
        PrimaryStoneM: '',
        SecondaryStoneD: '',
        Direction:'',
        tw1: '',
        tw2: '',
        tw3: '',
        job1: '',
        job2: '',
        job3: '',
        mean:[],
        angel:'',
        angel1:'',
        oliM:'',
        oliD:'',
        feature:'',
        DayDarman:'',
        friendStar:'',
        enemyStar:'',
        mediatorStar:'',
        featureStar:'',
        featuretemperament:'',
        SexStar:'',
        NameState:'',
        quality:'',
        herz:'',
        MF:'',
        PF:'',
        NF:'',
        Calc:0,
        Date: new Date() }; // مقادیر پیش‌فرض
    }
    
    var zodiacRelationships = this.dbSer.getzodiacRelationships();
    const foundWordzodiacRelationships = zodiacRelationships.find(item => item.Calc == result);
    if(foundWordzodiacRelationships){
      this.analyzedData.NameState=foundWordzodiacRelationships.NameState;
      this.analyzedData.quality=foundWordzodiacRelationships.quality;
      this.analyzedData.Calc=foundWordzodiacRelationships.Calc;
    }
    this.CalAbjadSaghir(StrName ,StrMomName);
    this.dbSer.setAnalyzedData(this.analyzedData);
    console.log("************************************  i: "+this.analyzedData);
  }

  functionCal(StrName : string,StrMomName : string){
    
    let NumSaghir: number=0;
    let NumKabir: number=0;
    let NumSaghirMom: number=0;
    let NumKabirMom: number=0;
    let NumSaghirSelfMom: number=0;
    let NumMoon: number=0;
    var calC=this.dbSer.getDataABJAD();


    let letters=StrName.split("");
    let lettersMom=StrMomName.split("");
    for (let j = 0; j < lettersMom.length; j++) {

      const foundWord = calC.find(item => item.W == lettersMom[j]);
      if(foundWord){
        NumSaghirMom = NumSaghirMom + foundWord.Saghir;
        NumKabirMom = NumKabirMom + foundWord.Kabir;
      }
    }
    for (let i = 0; i < letters.length; i++) {
      if (i==0) {
        var calCDirection=this.dbSer.getDirectionABJAD();
        calCDirection.forEach(element => {
          console.log("************************************ "+element.WordAbjad);
          console.log("************************************ "+letters[i]);
          
        });
      }
      console.log("+++++++++++++++++++++++    "+letters[i]);

      const foundWord = calC.find(item => item.W == letters[i]);
      if(foundWord){
        console.log("+++++++++++++++++++++++    "+foundWord.Kabir);
        NumSaghir = NumSaghir + foundWord.Saghir;
        NumKabir = NumKabir + foundWord.Kabir;
      }
    }
    NumSaghirSelfMom=NumSaghir+NumSaghirMom;
    NumMoon = NumSaghirSelfMom % 12;
    if(NumMoon==0) NumMoon=12;
    return NumMoon;
  }

  CalAbjadSaghir(StrName : string,StrMomName : string){
    console.log("+++++++++++++++++++++++    "+StrName);
    console.log("+++++++++++++++++++++++    "+StrMomName);
    let NumSaghir: number=0;
    let NumKabir: number=0;
    let NumSaghirMom: number=0;
    let NumKabirMom: number=0;
    let NumSaghirSelfMom: number=0;
    let NumMoon: number=0;
    let Direction:string='';

    
    if (!this.analyzedData) {
      this.analyzedData = { NumSaghir: 0, NumKabir: 0, NumSaghirMom: 0, NumKabirMom: 0, NumSaghirSelfMom:0,NumMoon:0,SignNameNum:0,
        SignName:'',
        Element: '',
        temperament:'',temperamentName:'',Star:'',
        Entity: '',
        GemetricShapM: '',
        GemetricShapD: '',
        PrimaryStoneM: '',
        SecondaryStoneD: '',
        Direction:'',
        tw1: '',
        tw2: '',
        tw3: '',
        job1: '',
        job2: '',
        job3: '',
        mean:[],
        angel:'',
        angel1:'',
        oliM:'',
        oliD:'',
        feature:'',
        DayDarman:'',
        friendStar:'',
        enemyStar:'',
        mediatorStar:'',
        featureStar:'',
        featuretemperament:'',
        SexStar:'',
        herz:'',
        MF:'',
        PF:'',
        NF:'',
        NameState:'',
        quality:'',
        Calc:0,
        Date: new Date() }; // مقادیر پیش‌فرض
    }

    var calC=this.dbSer.getDataABJAD();


    let letters=StrName.split("");
    let lettersMom=StrMomName.split("");
    for (let j = 0; j < lettersMom.length; j++) {

      const foundWord = calC.find(item => item.W == lettersMom[j]);
      if(foundWord){
        NumSaghirMom = NumSaghirMom + foundWord.Saghir;
        NumKabirMom = NumKabirMom + foundWord.Kabir;
      }
    }
    for (let i = 0; i < letters.length; i++) {
      if (i==0) {

        calC.forEach(element =>{
          
          if(element.W.includes(letters[i])){
            if (this.analyzedData) {
              console.log("eeeeeeeeeeeeeeeeeeeee w :"+element.W);
              console.log("eeeeeeeeeeeeeeeeeeeee tw1 :"+element.tw1);
              console.log("eeeeeeeeeeeeeeeeeeeee tw2 :"+element.tw2);
              console.log("eeeeeeeeeeeeeeeeeeeee tw2 :"+element.tw2);
              console.log("eeeeeeeeeeeeeeeeeeeee tw3 :"+element.tw3);
              console.log("eeeeeeeeeeeeeeeeeeeee job1 :"+element.jab1);
              console.log("eeeeeeeeeeeeeeeeeeeee job2 :"+element.jab2);
              console.log("eeeeeeeeeeeeeeeeeeeee job3 :"+element.jab3);
              console.log("eeeeeeeeeeeeeeeeeeeee :"+letters[i]);
              
              this.analyzedData.tw1 = element.tw1;
              this.analyzedData.tw2 = element.tw2;
              this.analyzedData.tw3 = element.tw3;
              this.analyzedData.job1 = element.jab1;
              this.analyzedData.job2 = element.jab2;
              this.analyzedData.job3 = element.jab3;
            }
          }
        });

        var calCDirection=this.dbSer.getDirectionABJAD();
        calCDirection.forEach(element => {
          //console.log("************************************ "+element.WordAbjad);
          //console.log("************************************ "+letters[i]);
          if (element.WordAbjad.includes(letters[i])) {
            //console.log("************************************ "+element.Direction);
            Direction=element.Direction;
          }
        });
      }
      console.log("+++++++++++++++++++++++ قبل از حلقه  letters[i]  "+letters[i]);
      console.log("+++++++++++++++++++++++  i  "+i);
      calC.forEach(element =>{
        
      console.log("------------------- داخل حلقه  letters[i]  "+letters[i]);
        if(element.W.includes(letters[i])){
          if (this.analyzedData) {
            console.log("+++++++++++++++++++++++ قبل از مقدار گرفتن   "+element.mean);
            this.analyzedData.mean[i] = element.mean;
            
            console.log("+++++++++++++++++++++++ بعد از مقدار گرفتن   "+element.mean);
          }
        }
      });
      
      console.log("+++++++++++++++++++++++ بعد از حلقه letters[i]  "+letters[i]); 

      const foundWord = calC.find(item => item.W == letters[i]);
      if(foundWord){
        console.log("+++++++++++++++++++++++    "+foundWord.Kabir);
        NumSaghir = NumSaghir + foundWord.Saghir;
        NumKabir = NumKabir + foundWord.Kabir;
      }
    }
    NumSaghirSelfMom=NumSaghir+NumSaghirMom;
    NumMoon = NumSaghirSelfMom % 12;
    if(NumMoon==0) NumMoon=12;
    this.analyzedData.NumSaghir = NumSaghir;
    this.analyzedData.NumKabir = NumKabir; 
    this.analyzedData.NumSaghirMom = NumSaghirMom;
    this.analyzedData.NumKabirMom = NumKabirMom; 
    this.analyzedData.NumSaghirSelfMom = NumSaghirSelfMom; 
    this.analyzedData.NumMoon = NumMoon;


    let angelStr="";
    let angelStr1="";
    let angelStr2="";

    this.separatedNumbersKabir=this.separateNumber(NumKabir);
     console.log("+++++++++++++++++++++++*************************************  separatedNumbersKabir  "+this.separatedNumbersKabir);
    for (let index = 0; index < this.separatedNumbersKabir.length; index++) {
      const element = this.separatedNumbersKabir[index];
       console.log("+++++++++++++++++++++++*************************************  element  "+element);
      
      
      const foundWordAngel = calC.find(c=>c.Kabir==element);
      if(foundWordAngel){
         console.log("+++++++++++++++++++++++************************************* foundWordAngel   "+foundWordAngel.W);
        angelStr=angelStr+foundWordAngel.W;
        
      }

    }
    angelStr1=angelStr+"ایل"
    angelStr2=angelStr+"ئیل"
    this.analyzedData.angel=angelStr1;
    this.analyzedData.angel1=angelStr2;
    // console.log("+++++++++++++++++++++++*************************************    "+angelStr1);
    // console.log("+++++++++++++++++++++++*************************************    "+angelStr2);



    var calCZodiac=this.dbSer.getDatazodiac();
    const foundWordZodiac = calCZodiac.find(item => item.SignNameNum == NumMoon);
    if(foundWordZodiac){
      this.analyzedData.SignNameNum =  foundWordZodiac.SignNameNum;
      this.analyzedData.SignName =  foundWordZodiac.SignName;
      this.analyzedData.Element =  foundWordZodiac.Element;
      this.analyzedData.temperament =  foundWordZodiac.temperament;
      this.analyzedData.temperamentName =  foundWordZodiac.temperamentName;
      this.analyzedData.Star =  foundWordZodiac.Star;
      this.analyzedData.herz = foundWordZodiac.herz;
      this.analyzedData.MF = foundWordZodiac.MF;
      this.analyzedData.PF = foundWordZodiac.PF;
      this.analyzedData.NF =foundWordZodiac.NF;
    }

    var tn=this.analyzedData.temperamentName;
    var calcOil = this.dbSer.gettemperament();
    const foundWordOil = calcOil.find(item => item.temperamentName == tn);
    if(foundWordOil){
      this.analyzedData.oliM=foundWordOil.oilM;
      this.analyzedData.oliD=foundWordOil.oilD;
      this.analyzedData.feature=foundWordOil.feature;
      this.analyzedData.featuretemperament=foundWordOil.feature;
    }


    var StarN=this.analyzedData.Star;
    var calcDayD = this.dbSer.getzodiacStar();
    const foundWordStarDay = calcDayD.find(item => item.StarName == StarN);
    if(foundWordStarDay){
      this.analyzedData.DayDarman=foundWordStarDay.day;
      this.analyzedData.featureStar=foundWordStarDay.feature;
      this.analyzedData.SexStar=foundWordStarDay.sex;
    }

    var calcRelationshipsStar = this.dbSer.getRelationshipsStar();
    const foundWordRelationshipsStar = calcRelationshipsStar.find(item => item.StarName == StarN);
    if(foundWordRelationshipsStar){
      this.analyzedData.friendStar=foundWordRelationshipsStar.friendStar;
      this.analyzedData.enemyStar=foundWordRelationshipsStar.enemyStar;
      this.analyzedData.mediatorStar=foundWordRelationshipsStar.mediatorStar;
    }

    


    


    let strtemperamentName='';
    strtemperamentName= this.analyzedData.temperamentName;
    var zodiacGeometry=this.dbSer.getZodiacGeometry();
    const foundWordZodiacGeometry = zodiacGeometry.find(item => item.temperamentName == strtemperamentName);
    if(foundWordZodiacGeometry){
      this.analyzedData.Entity =  foundWordZodiacGeometry.Entity;
      this.analyzedData.GemetricShapM =  foundWordZodiacGeometry.GemetricShapM;
      this.analyzedData.GemetricShapD =  foundWordZodiacGeometry.GemetricShapD;
      this.analyzedData.PrimaryStoneM =  foundWordZodiacGeometry.PrimaryStoneM;
      this.analyzedData.SecondaryStoneD =  foundWordZodiacGeometry.SecondaryStoneD;
    }
    this.analyzedData.Direction=Direction;
    this.dbSer.setAnalyzedData(this.analyzedData);
    console.log("+++++++++++++++++++++++    "+NumSaghir);
    console.log("+++++++++++++++++++++++    "+NumKabir);
    this.ResultAbjad.push({Name:StrName,Saghir:NumSaghir,Kabir:NumKabir,Angel:'',type:''});
    console.log("+++++++++++++++++++++++    "+this.ResultAbjad.keys);
    return this.ResultAbjad;
  }


  separateNumber(num: number): number[]{
    const numStr = num.toString();
    const separatedNumbers: number[] = [];
    //console.log("+++++++++++++++++++++++++++ numStr angel :",numStr);

    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr[i]);
      //console.log("+++++++++++++++++++++++++++ digit angel :",digit," ++++ ",numStr.length);
      const placeValue = digit * Math.pow(10, numStr.length - i - 1);
      //console.log("+++++++++++++++++++++++++++ placeValue angel :",placeValue ," +++++ i :",i);
      separatedNumbers.push(placeValue);
    }
    for (let index = 0; index < separatedNumbers.length; index++) {
      const element = separatedNumbers[index];
      
    }
    return separatedNumbers;
  }


  result!: number;
  x2!: number;
  x25!: number;
  resultKhN!: number;
  BaghiMande!: number;
  strMessageE:string='';
  CalcMoon(MS: number, DS: number, MG : number, DG: number){

    
    // محاسبه قمر در عقرب
    this.x2 = (DG * 2);
    this.x25 = this.x2 + 5;
    this.result = this.x25 / 5;
    this.resultKhN = this.x25 / 5;
    this.BaghiMande =  this.x25 % 5;
    //this.result =Number(this.result);
    console.log(" +++++++++++++  result ",this.result);
    this.result = Math.floor(this.result);
    //this.result = Math.round(this.result);
    if(this.BaghiMande > 0)  this.resultKhN = this.result + 1;
    if(this.resultKhN != this.result){
      this.strMessageE=" احتياط 56 تا 60 ساعت. توجه در ماه قمری 29 روزه 28ام محاق می باشد.";
    }else this.strMessageE="توجه در ماه قمری 29 روزه 28ام محاق می باشد.";

    // T = تعداد عددی که باید از ماه شمسی بره جلو
    if (!this.analyzedDataMoon) {
      this.analyzedDataMoon = { 
        SignName:'',
        temperament:'',
        temperamentName:'',
        Star:'',
        DayNahs:'',
        DayMahgh:'',
        MessageE:'',
        SignNameKhN: '',
        temperamentKhN: '',
        temperamentNameKhN: '',
        StarKhN: '',
        DayNahsKhN: '',
        DayMahghKhN : '',
        herz:'',
        MF:'',
        PF:'',
        NF:'',
      }
    }
    console.log(" +++++++++++++  result ",this.result);
    console.log(" +++++++++++++  resultKhN ",this.resultKhN);
    let MoonZodNum: number=0;
    let StrMoon: string='';
    MoonZodNum =MS+this.result;
    MoonZodNum=MoonZodNum;

    if(MoonZodNum>12){
      MoonZodNum=MoonZodNum-13;
    }
    console.log(" +++++++++++++  MoonZodNum ",MoonZodNum);
    
    let MoonZodNumKhN: number=0;
    let StrMoonKhN: string='';
    MoonZodNumKhN =MS+this.resultKhN;
    MoonZodNumKhN=MoonZodNumKhN;
    if(MoonZodNumKhN>12){
      MoonZodNumKhN=MoonZodNumKhN-13;
    }
    console.log(" +++++++++++++  MoonZodNumKhN ",MoonZodNumKhN);

    var calNehsDayYears=this.dbSer.getNehsDayYears();
    const foundNehsDayYears = calNehsDayYears.find(item => item.MonthNumber == MG && item.Day == DG);
    if(foundNehsDayYears){
      this.analyzedDataMoon.DayNahs=foundNehsDayYears.Nahs;
    }

    console.log("------------------ this.dg "+DG);
    if(DG == 1 || DG == 29 || DG == 30){
      this.analyzedDataMoon.DayMahgh = 'محاق';
    }

    var calCZodiac=this.dbSer.getDatazodiac();
    const foundWordZodiac = calCZodiac.find(item => item.SignNameNum == MoonZodNum);
    if(foundWordZodiac){
      console.log(" +++++++++++++  foundWordZodiac ",foundWordZodiac);
      StrMoon =  foundWordZodiac.SignName;
      this.analyzedDataMoon.SignName = foundWordZodiac.SignName;
      this.analyzedDataMoon.temperament = foundWordZodiac.temperament;
      this.analyzedDataMoon.temperamentName = foundWordZodiac.temperamentName;
      this.analyzedDataMoon.Star = foundWordZodiac.Star;
      this.analyzedDataMoon.herz = foundWordZodiac.herz;
      this.analyzedDataMoon.MF = foundWordZodiac.MF;
      this.analyzedDataMoon.PF = foundWordZodiac.PF;
      this.analyzedDataMoon.NF =foundWordZodiac.NF;
      this.analyzedDataMoon.MessageE = this.strMessageE;
    }

    var calCZodiac1=this.dbSer.getDatazodiac();
    const foundWordZodiacKhN = calCZodiac1.find(item => item.SignNameNum == MoonZodNumKhN);
    if(foundWordZodiacKhN){
      console.log(" +++++++++++++  foundWordZodiacKhN ",foundWordZodiacKhN);
      this.analyzedDataMoon.SignNameKhN = foundWordZodiacKhN.SignName;
      this.analyzedDataMoon.temperamentKhN = foundWordZodiacKhN.temperament;
      this.analyzedDataMoon.temperamentNameKhN = foundWordZodiacKhN.temperamentName;
      this.analyzedDataMoon.StarKhN = foundWordZodiacKhN.Star;
    }


    console.log(" +++++++++++++  analyzedDataMoon ",this.analyzedDataMoon);
    this.dbSer.setAnalyzedData(this.analyzedDataMoon);
    return StrMoon;
  }

}


type MyDataMoonObj = {
  SignName: string;
  temperament: string;
  temperamentName: string;
  Star: string;
  DayNahs: string;
  DayMahgh : string;
  SignNameKhN: string;
  temperamentKhN: string;
  temperamentNameKhN: string;
  StarKhN: string;
  DayNahsKhN: string;
  DayMahghKhN : string;
  MessageE : string;
  herz:string;
  MF:string;
  PF:string;
  NF:string;
};


type MyDataObject = {
  NumSaghir: number;
  NumKabir: number;
  NumSaghirMom: number;
  NumKabirMom: number;
  NumSaghirSelfMom:number;
  NumMoon: number;
  SignNameNum: number;
  SignName: string;
  Element: string;
  temperament: string;
  temperamentName: string;
  Star: string;
  Entity: string;
  GemetricShapM: string;
  GemetricShapD: string;
  PrimaryStoneM: string;
  SecondaryStoneD: string;
  oliM:string;
  oliD:string;
  Direction: string;
  tw1: string;
  tw2: string;
  tw3: string;
  job1: string;
  job2: string;
  job3: string;
  mean: string[];
  angel:string;
  angel1:string;
  feature:string;
  DayDarman:string;
  friendStar:string;
  enemyStar:string;
  mediatorStar:string;
  featureStar:string;
  SexStar:string;
  featuretemperament:string;
  herz:string;
  MF:string;
  PF:string;
  NF:string;
  NameState: string;
  quality: string;
  Calc: number;
  // key5: number;
  // key7: boolean;
  // key8: number[];
  // key9: { nestedKey: string };
  Date: Date;
};
