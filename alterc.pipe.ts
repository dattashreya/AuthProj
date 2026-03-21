import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'alterC'
})
export class AltercPipe implements PipeTransform {
  transform(value: string): string {
    if(!value) {
      return '';
    }
    let res = '';
    for(let i=0; i< value.length; i++) {
      if(i%2 === 0) {
        res = res + value[i].toUpperCase();
      } else {
        res = res + value[i].toLowerCase();
      }
    }
    return res;
  }
}
