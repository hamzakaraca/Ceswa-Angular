import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-delete',
  templateUrl: './comment-delete.component.html',
  styleUrls: ['./comment-delete.component.css'],
})
export class CommentDeleteComponent implements OnInit{
  constructor(private commentService: CommentService,private authService:AuthService) {}
  ngOnInit(): void {
    this.getCurrentUserId();
  }
  @Input() userIdToComment:number;
  @Input() id: number;
  currentUserId:number;

  async deleteByYourSelf() {
    await this.commentService.deleteCommentByYourself(this.id);
  }
  
  getCurrentUserId(){
    this.currentUserId=this.authService.getCurrentUserId
  }

  checkUser():boolean{
    if (this.userIdToComment==this.currentUserId) {
      return true;
    }
    return false;
  }
}
