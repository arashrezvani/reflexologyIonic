import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { NervesModel, NervesService } from 'src/app/services/acupressure/nerves/nerves.service';
import { Share } from '@capacitor/share';//for share npm install @capacitor/share npx cap sync
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reflexology',
  templateUrl: './reflexology.page.html',
  styleUrls: ['./reflexology.page.scss'],
})
export class ReflexologyPage implements OnInit {
 nerves : NervesModel[]=[];
  searchTerm: string = '';
  searchTermSubject: string = '';
  category!: string;


  constructor(
    private route: ActivatedRoute,private nervesService : NervesService) {
  }

  onSearch() {
    this.nerves = this.nervesService.searchCategory(this.category, this.searchTerm);
  }
  onSearchSubject(){
    this.nerves = this.nervesService.searchCategoryName(this.category, this.searchTermSubject);
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    this.nerves=this.nervesService.getAllByCategory(this.category);
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

  openedId: string | null = null;
  toggleAccordion(event: any, id: string) {
    this.openedId = this.openedId === id ? null : id;
  }
}