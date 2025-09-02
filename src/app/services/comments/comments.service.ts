import { Injectable } from '@angular/core';
export interface CommentModel {
  name: string;
  job: string;
  city: string;
  package: string;
  comment: string;
}
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comments: CommentModel[] = [
  
    {
      name: '',
      job: '',
      city: '',
      package: '',
      comment: ``
    },
    // {
    //   name: '',
    //   job: '',
    //   city: '',
    //   package: '',
    //   comment: ``
    // },
    // {
    //   name: '',
    //   job: '',
    //   city: '',
    //   package: '',
    //   comment: ``
    // },
  ];
  constructor() { }

  getAllComments(): CommentModel[] {
    return this.shuffle(this.comments);
    //return this.comments;
  }
  //برای اینکه هر سری باز میشه نظرات متفاوت باشند جابجا باشند در نمایش
  private shuffle(array: CommentModel[]): CommentModel[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  searchComments(term: string): CommentModel[] {
    const lowerTerm = term.toLowerCase();
    return this.comments.filter(c =>
      c.name.toLowerCase().includes(lowerTerm) ||
      c.job.toLowerCase().includes(lowerTerm) ||
      c.city.toLowerCase().includes(lowerTerm) ||
      c.package.toLowerCase().includes(lowerTerm) ||
      c.comment.toLowerCase().includes(lowerTerm)
    );
  }

}
