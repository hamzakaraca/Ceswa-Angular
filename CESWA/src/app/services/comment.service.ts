import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';
import { CommentAddModel } from '../models/commentAddModel';
import { CommentUpdateModel } from '../models/commentUpdateModel';
import { CompanyModel } from '../models/companyModel';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://localhost:7187/comment/';

  getAllComment(comments:Comment[]) {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Comment>>(newPath).subscribe(
      (response) => {
        response.data=comments
        response.success;
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
  addComment(comment: CommentAddModel) {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, comment).subscribe(
      (response) => {
        response.success;
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
  updateComment(comment: CommentUpdateModel) {
    let newPath = this.apiUrl + 'update';
    return this.httpClient.post<ResponseModel>(newPath, comment).subscribe(
      (response) => {
        response.success;
      },
      (errorResponse) => {
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
  getByCompanyId(companyId: number) {
    let newPath = this.apiUrl + 'getbycompanyid?companyid=' + companyId;
    return this.httpClient
      .get<ListResponseModel<CompanyModel>>(newPath)
      .subscribe(
        (response) => {
          response.success;
        },
        (errorResponse) => {
          console.log(errorResponse);
        }
      );
  }
}
