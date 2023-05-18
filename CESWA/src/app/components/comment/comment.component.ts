import { Component, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/models/commentModel';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  id:number
  ngOnInit(): void {
    this.getComment();
  }
  constructor(public commentService: CommentService,private authService:AuthService) {}
  comments: CommentModel[];

  getComment() {
    this.commentService.getAllComment(this.comments).subscribe(
      (next) => (this.comments = next.data),
      (err) => null
    );
  }
  
  deleteByYourSelf(){
    this.commentService.deleteCommentByYourself(id)
    
  }
}
