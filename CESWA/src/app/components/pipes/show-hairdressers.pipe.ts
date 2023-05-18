import { Pipe, PipeTransform } from '@angular/core';
import { CompanyModel } from 'src/app/models/companyModel';

@Pipe({
  name: 'showHairdressers'
})
export class ShowHairdressersPipe implements PipeTransform {

  transform(value: CompanyModel[], filterText:string): CompanyModel[] {
    return filterText?value?.filter(v=>v.companyType==filterText):value;
  }

}
