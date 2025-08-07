import { Component, OnInit } from '@angular/core';
import { StudyModel, StudyService } from '../../services/study/study.service';
import { Share } from '@capacitor/share';//for share npm install @capacitor/share npx cap sync
import { App } from '@capacitor/app';

@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})
export class StudyPage implements OnInit {

  
  study: StudyModel[] = [];
  searchTerm: string = '';

  notes: any[] = [];
  allNotes: any[] = [];

  constructor(private studyService: StudyService) { 
    
    this.study = this.studyService.getAllStudys();
  }

  ngOnInit() {
    this.allNotes = this.studyService.getAllNotes();
    this.notes = this.allNotes;
  }

  onSearch(event: any) {
    const query = event.detail.value.toLowerCase();
    this.notes = this.allNotes.filter(note =>
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query)
    );
  }

  
  onSearch1() {
    this.study = this.studyService.searchStudys(this.searchTerm);
  }
  onSearchSubject(){
    this.study = this.studyService.searchStudysSubject(this.searchTerm);
  }


  async sharePrescription(study: StudyModel) {
    const shareText = ` مطلب ${study.title} :\n\n"${study.content}"`;

    await Share.share({
      title: 'مطلب',
      text: shareText,
      dialogTitle: 'اشتراک‌ گذاری نسخه',
    });
  }


  
  // متغیر اندازه فونت
  fontSize = 16; // اندازه پیش‌فرض

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
