import { Injectable } from '@angular/core';
export interface DescriptionModel {
  title: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class DescriptionsService {


  private descriptions: DescriptionModel[] = [

    { title: 'نظرات', description: ` 
            ` 
    }
    
  ];

  constructor() { }


  getAllDescription(): DescriptionModel[] {
    //return this.shuffle(this.descriptions);// خروجی تصادفی باشد
    return this.descriptions;
  }
  //برای اینکه هر سری باز میشه نظرات متفاوت باشند جابجا باشند در نمایش
  private shuffle(array: DescriptionModel[]): DescriptionModel[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  searchDescriptions(term: string): DescriptionModel[] {
    const lowerTerm = term.toLowerCase();
    return this.descriptions.filter(c =>
      c.title.toLowerCase().includes(lowerTerm) ||
      c.description.toLowerCase().includes(lowerTerm) 
    );
  }
}
