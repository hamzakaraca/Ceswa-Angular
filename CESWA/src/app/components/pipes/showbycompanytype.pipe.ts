import { Pipe, PipeTransform } from '@angular/core';
import { CompanyModel } from 'src/app/models/companyModel';

@Pipe({
  name: 'showbycompanytype'
})
export class ShowbycompanytypePipe implements PipeTransform {

  transform(value: CompanyModel[], filtertext:string): CompanyModel[] {
    return filtertext?value?.filter(v=>v.companyType==filtertext):value;
  }

}
