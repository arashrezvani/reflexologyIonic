import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { Device } from '@awesome-cordova-plugins/device/ngx';

import * as crypto from 'crypto-js';
import { NavController } from '@ionic/angular';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';
import { StorageService } from '../services/storage/storage.service';
import { RegisterService } from '../services/register/register.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  password: string='';
  tokenRegister: string = '';
  token: string = '';
  deviceUUID: string = '';
  secretKey : string = 'koohi';
  activationCode : string = '';
  username: string = '';
  UUIDdevice: string = '';
  registerCode: string = '';
  registerCodeTemp: string = '';
  codeMelli: string='';
  mobile: string='';
  mainCode: string='';
  constructor(
    private storage : StorageService,
    private dbreg : RegisterService,
    private dbSer:DbinprojectService,
    private navCtrl: NavController,
    public translate: TranslateService,
    private device: Device) 
  { 
    this.deviceUUID = this.device.uuid;
    //this.activationCode = crypto.SHA256(this.deviceUUID + this.secretKey).toString();
    //this.activationCode = dbreg.convertStringToAsciiString(this.deviceUUID,this.codeMelli,this.mobile);
    this.UUIDdevice=this.device.uuid;
    this.GetUserPass();
    this.registerCodeTemp = this.activationCode;
    //this.navCtrl.navigateRoot('/home');
  }

  ngOnInit() {
    
    //this.navCtrl.navigateRoot('/home');
  }
  async GetUserPass() {
    try {
      const calcodeMelli = await this.storage.getItem('UserName'); // منتظر می‌مانیم تا Promise رفع شود
      this.codeMelli=calcodeMelli;
      
      console.log("codeMelli: ", this.codeMelli);
      
      const calPassword = await this.storage.getItem('PassWord'); // منتظر می‌مانیم تا Promise رفع شود
      this.password=calPassword;
      
      
      console.log("password: ", this.password);


      this.activationCode = await this.dbreg.convertStringToAsciiString(this.deviceUUID,this.codeMelli,this.password);

    } catch (error) {
      console.error("خطا در دریافت داده از storage: ", error);
    }
  }

  onRegister() {
    
    this.mainCode = this.UUIDdevice + this.secretKey + this.codeMelli + this.password;
      console.log("mainCode: ", this.mainCode);
    //this.token = crypto.SHA256(this.deviceUUID + this.registerCode).toString();
    //alert('activationCode  :'+this.activationCode);
    //alert('registerCode  :'+this.registerCode);
    //alert('secretKey  :'+this.secretKey);
    //alert('deviceUUID  :'+this.deviceUUID);
    //this.navCtrl.navigateRoot('/home');
    //if(this.activationCode.trim().includes(this.registerCode.trim())){
    if(this.activationCode.trim() === this.registerCode.trim()){
      this.storage.setItem('tokenRegister',this.registerCode);
      this.dbSer.settokenRegister(this.registerCode);
      //this.initializeApp();
      this.navCtrl.navigateRoot('/home'); // صفحه جدید به عنوان root تنظیم می‌شود
      //this.navCtrl.navigateRoot('/login'); // صفحه جدید به عنوان root تنظیم می‌شود
    }else{
        alert(this.translate.instant('invalid register'));
    }

    //برای نسخه ادمین
    // if(this.UUIDdevice=='Koohi' && this.registerCode=='Khanom Moallem'){
      
    //   this.storage.setItem('tokenRegister',this.registerCode);
    //   this.dbSer.settokenRegister(this.registerCode);
    //   this.navCtrl.navigateRoot('/home');
    // }
  }


  
  async initializeApp() {
    this.tokenRegister = await this.storage.getItem('tokenRegister') || '';  // انتظار برای دریافت مقدار
    //alert('tokenRegister :'+ this.tokenRegister);
    if(this.tokenRegister == ''){
      this.navCtrl.navigateRoot('/login'); // صفحه جدید به عنوان root تنظیم می‌شود
    }else{
      //this.navCtrl.navigateRoot('/register');
      this.navCtrl.navigateRoot('/home');
    }
  }

  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
}
