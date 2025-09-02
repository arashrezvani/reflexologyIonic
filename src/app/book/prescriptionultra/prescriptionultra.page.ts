import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';//for share npm install @capacitor/share npx cap sync
import { App } from '@capacitor/app';
import { PrescriptionultraModel, PrescriptionultraService } from 'src/app/services/prescriptionultra/prescriptionultra.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-prescriptionultra',
  templateUrl: './prescriptionultra.page.html',
  styleUrls: ['./prescriptionultra.page.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('300ms ease-in')),
    ]),
  ],
})
export class PrescriptionultraPage implements OnInit {

  prescriptions: PrescriptionultraModel[] = [];
  searchTerm: string = '';
  searchTermSubject: string = '';
  state: string = 'void'; // برای انیمیشن
  
  constructor(private prescriptionService: PrescriptionultraService) {
    this.prescriptions = this.prescriptionService.getAllPrescriptions();
  }
  
  onSearch() {
    this.prescriptions = this.prescriptionService.searchPrescriptions(this.searchTerm);
  }
  onSearchSubject(){
    this.prescriptions = this.prescriptionService.searchPrescriptionsSubject(this.searchTermSubject);
  }

  ngOnInit() {
    this.state = 'active'; // فعال کردن انیمیشن بعد از لود
  }

  async sharePrescription(prescription: PrescriptionultraModel) {
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
}
