import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyModel } from 'src/app/models/companyModel';
import { CompanyService } from 'src/app/services/company.service';
import { TimerService } from 'src/app/services/other/timer.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit{

  @Input() currentCompany:CompanyModel
  companyUpdateForm:FormGroup
  constructor(private formBuilder:FormBuilder,private companyService:CompanyService,private timerService:TimerService){}
  ngOnInit(): void {
    this.createCompanyUpdateForm();
  }


  createCompanyUpdateForm(){
    this.companyUpdateForm=this.formBuilder.group({
      companyName:[this.currentCompany.companyName,""],
      companyType:[this.currentCompany.companyType,""],
      location:[this.currentCompany.location,""]
    })
  }

  update(){
    if (this.companyUpdateForm.valid) {
      let companyUpdateModel=Object.assign({
        id:this.currentCompany.id
      },this.companyUpdateForm.value)
      this.companyService.update(companyUpdateModel);
    }
  }

  pageReload(){
    window.location.reload()
  }

  refresh() {
    this.timerService.wait(this.pageReload, 2000);
  }
}
