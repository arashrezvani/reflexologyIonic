import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { User } from '../services/dataBase/InterFaceDb'; // مسیر به فایل اینترفیس

import * as crypto from 'crypto-js';
import { NavController } from '@ionic/angular';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';
import { StorageService } from '../services/storage/storage.service';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-generateregistercode',
  templateUrl: './generateregistercode.page.html',
  styleUrls: ['./generateregistercode.page.scss'],
})
export class GenerateregistercodePage implements OnInit {

  searchTerm: string = '';
  searchTermMob: string = '';
  searchTermFam: string = '';
  searchTermCost: string = '';
  users: User[] = [];
  usersID: User[] = [];
  filteredUsers: User[] = [];

  token: string = '';
  deviceUUID: string = '';
  secretKey : string = 'koohi';
  activationCode : string = '';
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
    private device: Device) 
  { 

  }

  ngOnInit() {
  }


  onRegister() {
    this.mainCode = this.UUIDdevice + this.secretKey + this.codeMelli + this.mobile;
    //this.registerCode = crypto.SHA256(this.deviceUUID + this.secretKey).toString();
    console.log("++++++++++++++++this.deviceUUID :",this.UUIDdevice)
    this.registerCode = this.dbreg.convertStringToAsciiString(this.UUIDdevice,this.codeMelli,this.mobile);
  }
  
  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
}
