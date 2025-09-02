import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { NervesModel, NervesService } from 'src/app/services/acupressure/nerves/nerves.service';
import { Share } from '@capacitor/share';//for share npm install @capacitor/share npx cap sync
import { ActivatedRoute, Router } from '@angular/router';
import { PointsModel, PonitsService } from 'src/app/services/acupressure/ponits/ponits.service';


@Component({
  selector: 'app-reflex',
  templateUrl: './reflex.page.html',
  styleUrls: ['./reflex.page.scss'],
})
export class ReflexPage implements OnInit {
  nerves : NervesModel[]=[];
  points : PointsModel[]=[];
  searchTerm: string = '';
  searchTermSubject: string = '';
  category!: string;
  public isDescExpanded: boolean = false;

  constructor(private router: Router,    private route: ActivatedRoute,private nervesService : NervesService,private pointsService : PonitsService) {
  }

  onSearch() {
    this.points = this.pointsService.searchCategory(this.category, this.searchTerm);
    console.log(this.points);
  }
  onSearchSubject(){
    this.points = this.pointsService.searchCategoryName(this.category, this.searchTermSubject);
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    this.points=this.pointsService.getAllByGroup(this.category);
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

  navigateToImageViewer(images: string ) {
    
    const cleanImage = encodeURIComponent(images.trim());
    const currentUrl = this.router.url; // آدرس صفحه فعلی (مثل /reflex/BossPoint)

    this.router.navigate([`/imageviewer/${cleanImage}`], {
      queryParams: { from: currentUrl }
    });
  }
}