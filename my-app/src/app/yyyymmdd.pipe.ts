import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'yyyymmdd'
})
export class YyyymmddPipe implements PipeTransform {

    transform(value: any, a: any, b: any): any {
        let date = new Date(value);

        return String(date.getFullYear()) + (String(date.getMonth() + 1)) + String(date.getDate());
    }

}
