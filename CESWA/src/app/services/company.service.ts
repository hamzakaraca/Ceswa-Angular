import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CompanyModel } from '../models/companyModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = `${environment.apiUrl}Company`;

  getAll(){
    let newPath=this.apiUrl+"/getall"
    return this.httpClient.get<ListResponseModel<CompanyModel>>(newPath)
  }
}
