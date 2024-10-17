import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { Device } from '@awesome-cordova-plugins/device/ngx';

import * as crypto from 'crypto-js';
import { NavController } from '@ionic/angular';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';
import { StorageService } from '../services/storage/storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  token: string = '';
  deviceUUID: string = '';
  secretKey : string = 'koohi';
  activationCode : string = '';
  username: string = '';
  UUIDdevice: string = '';
  registerCode: string = '';
  registerCodeTemp: string = '';
  constructor(
    private storage : StorageService,
    private dbSer:DbinprojectService,
    private navCtrl: NavController,
    private device: Device) 
  { 
    this.deviceUUID = this.device.uuid;
    this.activationCode = crypto.SHA256(this.deviceUUID + this.secretKey).toString();
    this.UUIDdevice=this.device.uuid;
    this.registerCodeTemp = this.activationCode;
  }

  ngOnInit() {
  }


  onRegister() {
    this.token = crypto.SHA256(this.deviceUUID + this.registerCode).toString();
    if(this.activationCode == this.registerCode){
      this.storage.setItem('tokenRegister',this.registerCode);
      this.dbSer.settokenRegister(this.registerCode);
      this.navCtrl.navigateRoot('/home'); // صفحه جدید به عنوان root تنظیم می‌شود
    }

    //برای نسخه ادمین
    // if(this.UUIDdevice=='Koohi' && this.registerCode=='Khanom Moallem'){
      
    //   this.storage.setItem('tokenRegister',this.registerCode);
    //   this.dbSer.settokenRegister(this.registerCode);
    //   this.navCtrl.navigateRoot('/home');
    // }
  }

  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
}
