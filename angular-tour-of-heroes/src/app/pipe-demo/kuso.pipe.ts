import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'kuso'
})
export class KusoPipe implements PipeTransform {

    transform(value: any, sp?: any): any {
        console.log(`value:`, value);
        console.log(`sp:`, sp);
        console.log(`args:`, arguments);

        sp = sp || '　';

        return value.split('').join(sp);
    }

}
