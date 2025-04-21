import { Component, OnInit } from '@angular/core';
import { StudyService } from '../services/study/study.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})
export class StudyPage implements OnInit {
  notes: any[] = [];
  allNotes: any[] = [];

  constructor(private studyService: StudyService) { }

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
}
