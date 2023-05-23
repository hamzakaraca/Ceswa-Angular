import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, firstValueFrom } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { IndividualUserModel } from '../models/individualUserModel';
import { UserModel } from '../models/userModel';
import { DeleteUserImageDtoModel } from '../models/deleteUserImageDtoModel';
import { AddUserImageDto } from '../models/addUserImageDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl=`${environment.apiUrl}User/`
  constructor(private httpClient:HttpClient, private authService:AuthService, private toastrService:ToastrService,private router:Router) { }
  
  getAllUser():Observable<ListResponseModel<UserModel>>{
    let newPath=this.apiUrl+"GetAll"
    return this.httpClient.get<ListResponseModel<UserModel>>(newPath)
  }

  delete(user:UserModel):Observable<ResponseModel>{
    let newPath=this.apiUrl+"delete"
    console.log(user)
    return this.httpClient.post<ResponseModel>(newPath,user)
  }

  getById(id:number):Observable<SingleResponseModel<UserModel>>{
    let newPath=this.apiUrl+"getbyid?id="+id
    return this.httpClient.get<SingleResponseModel<UserModel>>(newPath)
  }

  async getCurrentUser(){
    let currentUser:UserModel;
    await this.getById(this.authService.getCurrentUserId).toPromise().then(response=>{
      currentUser = response.data
    })
    return currentUser
  }

  update(user:UserModel):Observable<ResponseModel>{
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

  async deleteById(id:number){
    let newPath=this.apiUrl+"DeleteById?id="+id
    let observable=this.httpClient.post<ResponseModel>(newPath,id)
    await firstValueFrom(observable).then(response=>this.toastrService.success(response.message)).catch(error=>this.toastrService.error(error.message))
  }

  async deleteImage(id:number){
    let newPath=this.apiUrl+"DeleteImage?id="+id
    let observable = this.httpClient.post<ResponseModel>(newPath,id)
    await firstValueFrom(observable).then(response=>this.toastrService.success(response.message)).catch(error=>this.toastrService.error(error.message));
    
  }

  async uploadImage(addUserImageDto:AddUserImageDto){
    debugger;
    let newPath=this.apiUrl+"UpdateImage"
    
    const formData = new FormData();
    Object.keys(addUserImageDto).forEach(field => formData.append(field, addUserImageDto[field]));

    let observable=this.httpClient.post<ResponseModel>(newPath,formData)
    await firstValueFrom(observable).then(response=>this.toastrService.success(response.message)).catch(error=>this.toastrService.error(error.message))
  }
}
