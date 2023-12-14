import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubstrPipe implements PipeTransform {

  transform(value : string | undefined, args : number) : any {
    return value?.substring(0, args) + '…';
 }

}
