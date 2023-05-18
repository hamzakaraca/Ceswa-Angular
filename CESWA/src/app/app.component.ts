import { Component } from '@angular/core';
import { CompanyModel } from './models/companyModel';
import { CompanyService } from './services/company.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CESWA';
  private companyService:CompanyService
  constructor(private authService:AuthService){}
  companies:CompanyModel[];
  getCompany(){
    this.companyService.getAll().subscribe(response=>{console.log(response.data)})
  }
  isAdmin(){
    return this.authService.isAdmin();
  }
}
