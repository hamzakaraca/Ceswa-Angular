import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyModel } from 'src/app/models/companyModel';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit{
  addForm:FormGroup
  constructor(private formBuilder:FormBuilder,private companyService:CompanyService){}

  ngOnInit(): void {
    this.createCompanyAddForm();
  }

  createCompanyAddForm(){ 
    this.addForm=this.formBuilder.group({
      companyName:["",Validators.required],
      location:["",Validators.required],
      companyType:["",Validators.required]
    })
  }

  async addCompany(){
    if (this.addForm.valid) {
      let companyModel=Object.assign({},this.addForm.value)
      await this.companyService.add(companyModel);
    }
  }
}
