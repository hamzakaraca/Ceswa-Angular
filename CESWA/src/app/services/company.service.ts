import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CompanyModel } from '../models/companyModel';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';
import { firstValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient,private toastrService:ToastrService) { }
  apiUrl = `${environment.apiUrl}Company`;

  getAll(){
    let newPath=this.apiUrl+"/getall"
    return this.httpClient.get<ListResponseModel<CompanyModel>>(newPath)
  }

  async add(companyModel:CompanyModel){
    let newPath=this.apiUrl+"/add"
    let observable=this.httpClient.post<ResponseModel>(newPath,companyModel)
    await firstValueFrom(observable).then(response=>this.toastrService.success(response.message)).catch(error=>this.toastrService.error(error.message))
  }
  async update(companyModel:CompanyModel){
    let newPath=this.apiUrl+"/update"
    let observable=this.httpClient.post<ResponseModel>(newPath,companyModel)
    await firstValueFrom(observable).then(response=>this.toastrService.success(response.message)).catch(error=>this.toastrService.error(error.message))
  }

  async delete(companyModel:CompanyModel){
    let newPath=this.apiUrl+"/delete"
    let observable=this.httpClient.post<ResponseModel>(newPath,companyModel)
    await firstValueFrom(observable).then(response=>this.toastrService.success(response.message)).catch(error=>this.toastrService.error(error.message))
  }
}
