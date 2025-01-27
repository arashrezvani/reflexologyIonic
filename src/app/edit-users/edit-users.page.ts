import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { User } from '../services/dataBase/InterFaceDb'; // مسیر به فایل اینترفیس
import { DbinprojectService } from '../services/dataBase/dbinproject.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.page.html',
  styleUrls: ['./edit-users.page.scss'],
})
export class EditUsersPage implements OnInit {
  

  user: User | null = {
    Username: '',
    Mobile: '',
    Mobile1: '',
    Password: '',
    City: '',
    Package: '',
    Cost: '',
    Costopt: '',
    Gender: '',
    etiaa: '',
    telegram: '',
    FirstName: '',
    LastName: '',
    Name: '',
    id: 0,
  };

  constructor(
    private route: ActivatedRoute, 
    private dbSer:DbinprojectService,
    private router: Router) { }

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadUser(userId);
  }
  loadUser(id: number) {
    const users = this.dbSer.getuser();
    this.user = users.find(user => user.id === id) || {
      Username: '',
      Mobile: '',
      Mobile1: '',
      Password: '',
      City: '',
      Package: '',
      Cost: '',
      Costopt: '',
      Gender: '',
      etiaa: '',
      telegram: '',
      FirstName: '',
      LastName: '',
      Name: '',
      id: 0,
    };
  }

  saveUser() {
    if (this.user) {
      this.dbSer.updateUser(this.user); // به‌روزرسانی اطلاعات کاربر در سرویس
      this.router.navigate(['/list-users']); // بازگشت به صفحه لیست کاربران
    }
  }



  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }

}
