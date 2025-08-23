import { Component, OnInit } from '@angular/core';
import { PrescriptionModel, PrescriptionService } from 'src/app/services/prescription/prescription.service';
import { Share } from '@capacitor/share';//for share npm install @capacitor/share npx cap sync
import { App } from '@capacitor/app';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.page.html',
  styleUrls: ['./prescription.page.scss'],
})
export class PrescriptionPage implements OnInit {

  prescriptions: PrescriptionModel[] = [];
  searchTerm: string = '';
  searchTermSubject: string = '';
  
  constructor(private prescriptionService: PrescriptionService) {
    this.prescriptions = this.prescriptionService.getAllPrescriptions();
  }
  
  onSearch() {
    this.prescriptions = this.prescriptionService.searchPrescriptions(this.searchTerm);
  }
  onSearchSubject(){
    this.prescriptions = this.prescriptionService.searchPrescriptionsSubject(this.searchTermSubject);
  }
  ngOnInit() {
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

}
