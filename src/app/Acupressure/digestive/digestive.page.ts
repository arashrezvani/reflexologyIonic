import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { NervesModel, NervesService } from 'src/app/services/acupressure/nerves/nerves.service';
import { Share } from '@capacitor/share';//for share npm install @capacitor/share npx cap sync


@Component({
  selector: 'app-digestive',
  templateUrl: './digestive.page.html',
  styleUrls: ['./digestive.page.scss'],
})
export class DigestivePage implements OnInit {

  nerves : NervesModel[]=[];
  searchTerm: string = '';


  constructor(private nervesService : NervesService) {
    this.nerves=nervesService.getAllByCategory('digestive');
  }

  onSearch() {
    this.nerves = this.nervesService.searchCategory('digestive', this.searchTerm);
  }
  onSearchSubject(){
    this.nerves = this.nervesService.searchCategoryName('digestive', this.searchTerm);
  }

  ngOnInit() {
  }

  async shareNerves(nerves: NervesModel) {
    const shareText = ` نقطه ${nerves.name} محل نقطه:\n\n"${nerves.location}"`;

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

  isModalOpen = false;
  selectedImageUrl = '';
  // باز کردن Modal
  openImageModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.isModalOpen = true;
  }

  // بستن Modal
  closeImageModal() {
    this.isModalOpen = false;
    this.selectedImageUrl = '';
  }
  exitApp() {
    console.log("exitApp");
    App.exitApp();
  }
}
