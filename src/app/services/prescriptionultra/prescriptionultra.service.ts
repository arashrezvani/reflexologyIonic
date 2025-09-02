import { Injectable } from '@angular/core';
export interface PrescriptionultraModel {
  name: string;
  type: string;
  subject: string;
  prescriptoin: string;
  comment: string;
  Symptoms: string;
  Causes: string;
  Effects: string;
  Hashtag: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrescriptionultraService {
private prescriptions: PrescriptionultraModel[] = [

    {
      name: 'پروفسور داودی نژاد',
      type: 'طب ماورا',
      subject: 'نسخه  ',
      prescriptoin: `

      `,
      comment: `
      
      `,
      Symptoms: `
      
      `,
      Causes: `
      
      `,
      Effects: `
      
      `,
      Hashtag: `
      
      `
    },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
    // {
    //   name: 'پروفسور داودی نژاد',
    //   type: 'طب ماورا',
    //   subject: 'نسخه  ',
    //   prescriptoin: `

    //   `,
    //   comment: `
      
    //   `,
    //   Symptoms: `
      
    //   `,
    //   Causes: `
      
    //   `,
    //   Effects: `
      
    //   `,
    //   Hashtag: `
      
    //   `
    // },
  ]
    constructor() { }
      getAllPrescriptions(): PrescriptionultraModel[] {
        //return this.shuffle(this.prescriptions);
        return this.prescriptions;
      }
      //برای اینکه هر سری باز میشه نظرات متفاوت باشند جابجا باشند در نمایش
      private shuffle(array: PrescriptionultraModel[]): PrescriptionultraModel[] {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      }
      searchPrescriptions(term: string): PrescriptionultraModel[] {
        const lowerTerm = term.toLowerCase();
        return this.prescriptions.filter(c =>
          c.name.toLowerCase().includes(lowerTerm) ||
          c.type.toLowerCase().includes(lowerTerm) ||
          c.subject.toLowerCase().includes(lowerTerm) ||
          c.prescriptoin.toLowerCase().includes(lowerTerm) ||
          c.comment.toLowerCase().includes(lowerTerm)
        );
      }
      searchPrescriptionsSubject(term: string): PrescriptionultraModel[] {
        const lowerTerm = term.toLowerCase();
        return this.prescriptions.filter(c =>
          c.subject.toLowerCase().includes(lowerTerm) 
        );
      }
}
