import { Component, OnInit } from '@angular/core';
import { PrescriptionModel, PrescriptionService } from 'src/app/services/prescription/prescription.service';
import { Share } from '@capacitor/share';//for share npm install @capacitor/share npx cap sync
import { App } from '@capacitor/app';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-perscriptiongeneral',
  templateUrl: './perscriptiongeneral.page.html',
  styleUrls: ['./perscriptiongeneral.page.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('300ms ease-in')),
    ]),
  ],
})
export class PerscriptiongeneralPage implements OnInit {

  prescriptions: PrescriptionModel[] = [];
  searchTerm: string = '';
  searchTermSubject: string = '';
  category!: string;
  state: string = 'void';
  constructor(private route: ActivatedRoute,
      private navCtrl: NavController,private prescriptionService : PrescriptionService) { }


  onSearch() {
    this.prescriptions = this.prescriptionService.searchCategory(this.category, this.searchTerm);
  }
  onSearchSubject(){
    this.prescriptions = this.prescriptionService.searchCategoryName(this.category, this.searchTermSubject);
  }

  ngOnInit() {
    this.state = 'active'; // فعال کردن انیمیشن بعد از لود
    this.category = this.route.snapshot.paramMap.get('category') || '';
    this.prescriptions=this.prescriptionService.getAllByCategory(this.category);
  }


  onSearch1() {
    this.prescriptions = this.prescriptionService.searchPrescriptions(this.searchTerm);
  }
  onSearchSubject1(){
    this.prescriptions = this.prescriptionService.searchPrescriptionsSubject(this.searchTermSubject);
  }
  async sharePrescription(prescription: PrescriptionModel) {
    const shareText = ` نسخه ${prescription.type} ( برای بیماری ${prescription.subject} به دستور ${prescription.prescriptoin}):\n\n"${prescription.comment}"`;

    await Share.share({
      title: 'نسخه',
      text: shareText,
      dialogTitle: 'اشتراک‌ گذاری نسخه',
    });
  }

  // متغیر اندازه فونت

  fontSize = 14; // اندازه پیش‌فرض

  // تابع برای افزایش اندازه فونت
  increaseFontSize() {
    this.fontSize += 2; // افزایش اندازه فونت
  }

  // تابع برای کاهش اندازه فونت
  decreaseFontSize() {
    if (this.fontSize > 8) { // حداقل اندازه فونت
      this.fontSize -= 2; // کاهش اندازه فونت
    }
  }
  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }


  // بررسی اینکه آیا هیچ پیجی پر شده یا نه
  hasAnyPage(item: any): boolean {
    console.log("item.page1 :",item.page1);
    return [item.page1, item.page2, item.page3, item.page4, item.page5, item.page6, item.page7]
      .some(p => p && p.trim() !== '');
  }

  // گرفتن لیست صفحات پر شده
  getPages(item: any): string[] {
    console.log("getPages item.page1 :",item.page1);
    return [item.page1, item.page2, item.page3, item.page4, item.page5, item.page6, item.page7]
      .filter(p => p && p.trim() !== '');
  }

  // باز کردن صفحه مربوطه
  openPage(pageName: string) {
    this.navCtrl.navigateForward(`/reflexology/${pageName}`);
  }

  // برگرداندن عنوان فارسی صفحه
  getPageTitle(pageName: string): string {
    const titles: any = {
      nerves: 'اعصاب و روان',
      FrozenShoulder: 'کتف و شانه یخ‌زده',
      // اینجا بقیه صفحات رو هم اضافه کن
    };
    return titles[pageName] || pageName;
  }



}
