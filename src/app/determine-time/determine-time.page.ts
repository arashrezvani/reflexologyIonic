import { Component, OnInit } from '@angular/core';
import { CalServicService } from '../services/calService/cal-servic.service';
import { App } from '@capacitor/app';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-determine-time',
  templateUrl: './determine-time.page.html',
  styleUrls: ['./determine-time.page.scss'],
})
export class DetermineTimePage implements OnInit {

  search:string="";
  flag:boolean=true;



  
  H:number=0;
  M:number=0;


  blockData:any;

  
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


  constructor(
    private calSer: CalServicService,
    private AppComp:AppComponent) { }

  ngOnInit() {
  }



  
  ClickH(e : any){
    this.H=e.value;
    console.log(this.H);
  }
  ClickM(e : any){
    this.M=e.value;
    console.log(this.M);
  }



  
  onOptionChange(event:any) {
    this.blockData=[];
    this.selectedOption2="";
    console.log('گزینه انتخاب شده:', event.detail.value);
  }
  onOptionChangeEnd(event:any) {
    this.blockData=this.calSer.Cal1(event.detail.value,this.H,this.M,this.selectedOption); // for ion-select
    console.log(this.blockData);
    console.log('گزینه انتخاب شده:', event.detail.value);
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
}
