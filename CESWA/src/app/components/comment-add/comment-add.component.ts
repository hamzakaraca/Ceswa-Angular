import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit{
  commentAddForm:FormGroup
  currentUserId:number
  constructor(private formBuilder:FormBuilder,private commentService:CommentService,private toastrService:ToastrService,private authService:AuthService){}
  ngOnInit(): void {
    this.createAddCommentForm();
  }

  @Input() companyId:number;

  createAddCommentForm(){
    this.commentAddForm=this.formBuilder.group({
      content:["",Validators.required],
    })
  }

  add(){
    if (this.commentAddForm.valid) {
      let commentAddModel=Object.assign({companyId:this.companyId,userId:this.authService.getCurrentUserId},this.commentAddForm.value)
      this.commentService.addComment(commentAddModel)
    }
    else{
      this.toastrService.error("form hatalı veya eksik")
    }
  }

  
}
