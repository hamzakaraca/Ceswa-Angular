import { Component } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  private commentService:CommentService
  comments:Comment[];
  getComment(){
    this.commentService.getAllComment(this.comments);
  }
}
