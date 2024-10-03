import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
}
