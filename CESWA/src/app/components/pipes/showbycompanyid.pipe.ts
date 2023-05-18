import { Pipe, PipeTransform } from '@angular/core';
import { catchError } from 'rxjs';
import { CommentModel } from 'src/app/models/commentModel';

@Pipe({
  name: 'showbycompanyid'
})
export class ShowbycompanyidPipe implements PipeTransform {

  transform(value: CommentModel[], companyId:number): CommentModel[] {
    let result=value?.filter(v=>v.companyId==companyId)
    return result;
  }

}
