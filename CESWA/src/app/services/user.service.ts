import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { IndividualUserModel } from '../models/individualUserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl=`${environment.apiUrl}IndividualUser/`
  constructor(private httpClient:HttpClient, private authService:AuthService, private toastrService:ToastrService,private router:Router) { }
  
  getAllUser():Observable<ListResponseModel<IndividualUserModel>>{
    let newPath=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<IndividualUserModel>>(newPath)
  }

  delete(user:IndividualUserModel):Observable<ResponseModel>{
    let newPath=this.apiUrl+"delete"
    console.log(user)
    return this.httpClient.post<ResponseModel>(newPath,user)
  }

  getById(id:number):Observable<SingleResponseModel<IndividualUserModel>>{
    let newPath=this.apiUrl+"getbyid?id="+id
    return this.httpClient.get<SingleResponseModel<IndividualUserModel>>(newPath)
  }

  async getCurrentUser(){
    let currentUser:IndividualUserModel;
    await this.getById(this.authService.getCurrentUserId).toPromise().then(response=>{
      currentUser = response.data
    })
    return currentUser
  }

  update(user:IndividualUserModel):Observable<ResponseModel>{
    let newPath=this.apiUrl + "update"
    return this.httpClient.post<ResponseModel>(newPath,user)
  }

  changePassword(updatePasswordDto:any){
    let newPath=this.apiUrl+"changepassword"
    this.httpClient.post<ResponseModel>(newPath,updatePasswordDto).subscribe(response=>{
      this.toastrService.success(response.message)
      this.router.navigate(["user/info"])
    },errorResult=>{
      console.log(errorResult)
      this.toastrService.error(errorResult.error.message)
    })
  }
}
