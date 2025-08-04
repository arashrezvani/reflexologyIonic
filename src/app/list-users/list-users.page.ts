import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { DbinprojectService } from '../services/dataBase/dbinproject.service';
import { User } from '../services/dataBase/InterFaceDb'; // مسیر به فایل اینترفیس
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {
  searchTerm: string = '';
  searchTermMob: string = '';
  searchTermFam: string = '';
  searchTermCost: string = '';
  searchTermId : number=0;
  searchTermCity: string = '';
  searchTermJob: string = '';
  searchTermPackage: string = '';
  users: User[] = [];
  usersID: User[] = [];
  filteredUsers: User[] = [];

  constructor(
    private dbSer:DbinprojectService, 
    private router: Router,
    private platform: Platform) { }

  ngOnInit() {
    this.users = this.dbSer.getuser().filter(user => user.Username !== '2443424434'); // حذف کاربران با یوزرنیم مشخص;
    this.usersID = this.dbSer.getuser();
    this.filteredUsers = this.users;
  }

  // تابع جستجو
  searchUsers() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.Username.toLowerCase().includes(term)
    );
  }

  searchUsersByMob() {
    const term = this.searchTermMob.trim().toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.Mobile.toLowerCase().includes(term)
    );
  }

  searchUsersByFam() {
    const term = this.searchTermFam.trim().toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.LastName.toLowerCase().includes(term) 
    );
  }
  searchUsersByCity() {
    console.log("1111   "+this.searchTermCity);
    const term = this.searchTermCity.trim().toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.City.toLowerCase().includes(term) 
    );
  }
  searchUsersByJob() {
    const term = this.searchTermJob.trim().toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.Job.toLowerCase().includes(term) 
    );
  }

  searchUsersByCost() {
    const term = this.searchTermCost.trim().toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.Cost.toLowerCase().includes(term)
    );
  }
  searchUsersByPackage() {
    const term = this.searchTermPackage.trim().toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.Package.toLowerCase().includes(term) 
    );
  } 

  searchUsersById() {
    const term = this.searchTermId;
    this.filteredUsers = this.usersID.filter(user =>
      user.id == term 
    );
  }

  editUser(user: User) {
    console.log("editUser");
    this.router.navigate(['/edit-users', user.id]); // به صفحه ویرایش کاربر بروید
  }

  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }



  openEitaa(username: string) {
    // حذف علامت @ از نام کاربری
    const cleanedUsername = username.replace('@', '');
    const eitaaUrl = `https://eitaa.com/${cleanedUsername}`; // لینک Eitaa بدون @
    if (this.platform.is('capacitor')) {
      // برای اپلیکیشن‌های Capacitor
      window.open(eitaaUrl, '_system');
    } else {
      // برای اپلیکیشن‌های وب
      window.open(eitaaUrl, '_blank');
    }
  }

  openTelegram(username: string){
    // حذف علامت @ از نام کاربری
    const cleanedUsername = username.replace('@', '');
    const eitaaUrl = `https://t.me/${cleanedUsername}`; // لینک Telegram بدون @
    if (this.platform.is('capacitor')) {
      // برای اپلیکیشن‌های Capacitor
      window.open(eitaaUrl, '_system');
    } else {
      // برای اپلیکیشن‌های وب
      window.open(eitaaUrl, '_blank');
    }
  }
}
