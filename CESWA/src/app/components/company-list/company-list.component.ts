import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CompanyModel } from 'src/app/models/companyModel';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent {
  constructor(private companyService: CompanyService) {}
  companies$ = this.companyService.getAll().pipe(map(({ data }) => data));

  delete(companyModel: CompanyModel) {
    this.companyService.delete({
      id: companyModel.id,
      companyName: companyModel.companyName,
      companyType: companyModel.companyType,
      location: companyModel.location,
    });
    window.location.reload();
  }
}
