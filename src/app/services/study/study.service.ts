import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudyService {


  private studyData = [
    { title: 'حوقله سبعه', content: `بسم الله الرحمن الرحیم
      لا حَولَ وَ لا قُوَّهَ الاّ بِاللهِ اُفرِّجُ بِها کُلِّ کُربَهِ
      لا حَولَ و لا قُوَّهِ الاّ بِالله اُحِلُّ بِها کُلِّ عُقدَهِ
      لا حَولَ و لا قُوَّهَ الاّ بِالله اَجلو بها کلّ ظلمه
      لا حول و لا قُوَّهَ اِلاّ بِالله؛ اَفتَحُ بِها کُلِّ باب
      لا حَولَ و لا قُوَّهِ الاّ بالله اَستَعینُ بِها عَلى کُلِّ شِدَّهِ و مُصیبَهِ
      لا حَولَ و لا قُوَّهِ الاّ بِالله اَستَعینُ بِها عَلى کُلِّ اَمرِ یَنزُلُ بی
      لا حَولَ و لا قُوَّهِ الاّ بِالله اَعتَصِمُ بِها مِن کُلِّ مَحذُور اَحاذِرهُ
      اَسئَلُکَ یا رَبِّ اَن تُصَلِّیَ عَلى محمّد و آل محمد و أهلِ بَیتِهِ الطّاهِرین
      بِخَفیِّ لُطفِکَ یا ذاالجَلالَ و الاِکرام
      آمین آمین یا ربّ العالمین` },
    { title: '', content: '' },
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
}
