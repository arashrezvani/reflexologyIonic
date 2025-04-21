import { Component, OnInit } from '@angular/core';
import { CommentsService, CommentModel } from '../services/comments/comments.service';
import { Share } from '@capacitor/share';//for share npm install @capacitor/share npx cap sync

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  comments: CommentModel[] = [];
  searchTerm: string = '';
  
  
  constructor(private commentService: CommentsService) {
    this.comments = this.commentService.getAllComments();
  }

  onSearch() {
    this.comments = this.commentService.searchComments(this.searchTerm);
  }

  ngOnInit() {
  }

  async shareComment(comment: CommentModel) {
    const shareText = `${comment.name} (${comment.job} از ${comment.city}):\n\n"${comment.comment}"`;
    //const shareText = `👤 ${comment.name} از ${comment.city}\n📝 ${comment.comment}`;
    await Share.share({
      title: 'نظر کاربر',
      text: shareText,
      dialogTitle: 'اشتراک‌گذاری نظر',
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

}
