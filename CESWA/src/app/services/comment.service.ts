import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';
import { CommentAddModel } from '../models/commentAddModel';
import { CommentUpdateModel } from '../models/commentUpdateModel';
import { CompanyModel } from '../models/companyModel';
import { environment } from 'src/environments/environment';
import { CommentModel } from '../models/commentModel';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient,private toastrService:ToastrService) {
  }

  apiUrl = `${environment.apiUrl}Comment/`;
  
  getAllComment(comments:CommentModel[]) {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<CommentModel>>(newPath)
  }
  addComment(comment: CommentAddModel) {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, comment).subscribe(
      (response) => {
        this.toastrService.success(response.message)
        response.success;
      },
      (errorResponse) => {
        this.toastrService.error(errorResponse.error.message)
        console.log(errorResponse);
      }
    );
  }
  updateComment(comment: CommentUpdateModel) {
    let newPath = this.apiUrl + 'update';
    return this.httpClient.post<ResponseModel>(newPath, comment).subscribe(
      (response) => {
        this.toastrService.success(response.message)
        response.success;
      },
      (errorResponse) => {
        this.toastrService.error(errorResponse.error.message)
        console.log(errorResponse);
      }
    );
  }
  deleteById(commentId: Number) {
    let newPath = this.apiUrl + 'deletebyid?id=' + commentId;
    return this.httpClient.post<ResponseModel>(newPath, commentId).subscribe(
      (response) => {
        response.success;
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

  async deleteCommentByYourself(id:number){
    let newPath= this.apiUrl + "DeleteCommentByYourself?id="+id
    let observable=this.httpClient.post<ResponseModel>(newPath,id)
    await firstValueFrom(observable).then(response=>this.toastrService.success(response.message)).catch(err=>console.log(err))
  }

  getByCompanyId(companyId: number) {
    let newPath = this.apiUrl + 'getbycompanyid?companyid=' + companyId;
    return this.httpClient
      .get<ListResponseModel<CommentModel>>(newPath)
      
  }
}
