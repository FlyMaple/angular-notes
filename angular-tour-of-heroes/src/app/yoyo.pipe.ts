import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yoyo'
})
export class YoyoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `App Module Pipe is OK!`;
  }

}
