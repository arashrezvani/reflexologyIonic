import { Injectable } from '@angular/core';
export interface StudyModel {
  title: string;
  content: string;
}
@Injectable({
  providedIn: 'root'
})
export class StudyService {

  private studys: StudyModel[] = [

    { 
      title: '', 
      content: `

      ` 
    },
  ];

  private studyData = [

    { title: '', content: '' },
    { title: '', content: '' },
    // تا ۳۰ عنوان دلخواه اضافه کن
  ];
  constructor() { }
  getAllNotes() {
    return this.studyData;
  }
  searchNotes(query: string) {
    return this.studyData.filter(note =>
      note.title.includes(query) || note.content.includes(query)
    );
  }

  
  getAllStudys(): StudyModel[] {
    //return this.shuffle(this.studys);
    return this.studys;
  }
  //برای اینکه هر سری باز میشه نظرات متفاوت باشند جابجا باشند در نمایش
  private shuffle(array: StudyModel[]): StudyModel[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  searchStudys(term: string): StudyModel[] {
    const lowerTerm = term.toLowerCase();
    return this.studys.filter(c =>
      c.title.toLowerCase().includes(lowerTerm) ||
      c.content.toLowerCase().includes(lowerTerm)
    );
  }
  searchStudysSubject(term: string): StudyModel[] {
    const lowerTerm = term.toLowerCase();
    return this.studys.filter(c =>
      c.title.toLowerCase().includes(lowerTerm)
    );
  }

}
