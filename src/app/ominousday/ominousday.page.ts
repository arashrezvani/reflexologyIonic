import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-ominousday',
  templateUrl: './ominousday.page.html',
  styleUrls: ['./ominousday.page.scss'],
})
export class OminousdayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
}
