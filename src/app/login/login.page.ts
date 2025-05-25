import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { NavController } from '@ionic/angular';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';
import { StorageService } from '../services/storage/storage.service';
import { LoginService } from '../services/login/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  token: string='';
  username: string='';
  password: string='';
  tokenRegister: string = '';
  constructor(
    private storage : StorageService,
    private dbSer:DbinprojectService,
    private dbLogin: LoginService,
    private navCtrl: NavController,
    public translate: TranslateService,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
  }


  
  onLogin() {
    console.log("onLogin");
    if (this.username != '' && this.password != '') {
      let logintest = this.dbLogin.login(this.username,this.password);
    console.log("logintest logintest :",logintest);
      if(logintest != ''){
        //alert(logintest);
        this.initializeApp1();
        //this.navCtrl.navigateForward('/home');
      }else{
        alert(this.translate.instant('invalid username'));
      }
    } else {
      //alert('Invalid credentials');
    }
  }

  async initializeApp() {
    console.log("initializeApp");
    this.tokenRegister = await this.storage.getItem('tokenRegister') || '';  // انتظار برای دریافت مقدار
    
    console.log("initializeApp tokenRegister :",this.tokenRegister);
    //alert('tokenRegister :'+ this.tokenRegister);
    if(this.tokenRegister == ''){
      //this.navCtrl.navigateRoot('/register'); // صفحه جدید به عنوان root تنظیم می‌شود
    }
  }
  async initializeApp1() {
    this.tokenRegister = await this.storage.getItem('tokenRegister') || '';  // انتظار برای دریافت مقدار
    //alert('tokenRegister :'+ this.tokenRegister);
    if(this.tokenRegister == ''){
      this.navCtrl.navigateRoot('/register');
      //this.navCtrl.navigateRoot('/register'); // صفحه جدید به عنوان root تنظیم می‌شود
    }else{
      this.navCtrl.navigateRoot('/register');
      //this.navCtrl.navigateRoot('/home');
    }
  }
  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }

}
