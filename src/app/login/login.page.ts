import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { NavController } from '@ionic/angular';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';
import { StorageService } from '../services/storage/storage.service';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  token: string='';
  username: string='';
  password: string='';
  constructor(
    private storage : StorageService,
    private dbSer:DbinprojectService,
    private dbLogin: LoginService,
    private navCtrl: NavController,
  ) {

  }

  ngOnInit() {
  }


  
  onLogin() {
    if (this.username != '' && this.password != '') {
      let logintest = this.dbLogin.login(this.username,this.password);
      if(logintest != ''){
        //alert(logintest);
        this.navCtrl.navigateForward('/home');
      }else{
        //alert('invalid username or password');
      }
    } else {
      //alert('Invalid credentials');
    }
  }

  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }

}
