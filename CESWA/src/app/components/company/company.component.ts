import { Component, Input, OnInit, inject } from '@angular/core';
import { filter, first, map } from 'rxjs';
import { CommentModel } from 'src/app/models/commentModel';
import { CommentService } from 'src/app/services/comment.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit{
  commentModels:CommentModel[];
  commentNull:string;
  ngOnInit(): void {
    
  }
  constructor(private companyService:CompanyService,private commentService:CommentService){}
  companies$ = this.companyService.getAll().pipe( map(({ data }) => data));

  getCommentByCompanyId(companyId:number){
    this.commentService.getByCompanyId(companyId).subscribe(next=>{this.commentModels = next.data; },errorResponse=>{this.commentNull = errorResponse.error.message})
  }
}
