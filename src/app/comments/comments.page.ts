import { Component, OnInit } from '@angular/core';
import { CommentsService, CommentModel } from '../services/comments/comments.service';
//import { Share } from '@capacitor/share';//for share npm install @capacitor/share npx cap sync

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
  // async shareComment(comment: CommentModel) {
  //   const shareText = `${comment.name} (${comment.job} از ${comment.city}):\n\n"${comment.comment}"`;
  //   await Share.share({
  //     title: 'نظر کاربر',
  //     text: shareText,
  //     dialogTitle: 'اشتراک‌گذاری نظر',
  //   });
  // }


  shareComment(comment: CommentModel) {
    const shareText = `👤 ${comment.name} از ${comment.city}\n📝 ${comment.comment}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'نظر کاربر',
        text: shareText,
      })
      .then(() => console.log('Shared successfully'))
      .catch(err => console.error('Share failed:', err));
    } else {
      alert('مرورگر از اشتراک‌گذاری پشتیبانی نمی‌کند');
    }
  }
}
