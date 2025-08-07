import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';//for share npm install @capacitor/share npx cap sync
import { App } from '@capacitor/app';
import { PrescriptionultraModel, PrescriptionultraService } from 'src/app/services/prescriptionultra/prescriptionultra.service';

@Component({
  selector: 'app-prescriptionultra',
  templateUrl: './prescriptionultra.page.html',
  styleUrls: ['./prescriptionultra.page.scss'],
})
export class PrescriptionultraPage implements OnInit {

  prescriptions: PrescriptionultraModel[] = [];
  searchTerm: string = '';
  
  constructor(private prescriptionService: PrescriptionultraService) {
    this.prescriptions = this.prescriptionService.getAllPrescriptions();
  }
  
  onSearch() {
    this.prescriptions = this.prescriptionService.searchPrescriptions(this.searchTerm);
  }
  onSearchSubject(){
    this.prescriptions = this.prescriptionService.searchPrescriptionsSubject(this.searchTerm);
  }

  ngOnInit() {
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
