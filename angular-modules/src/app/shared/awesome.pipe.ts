import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'awesome'
})
export class AwesomePipe implements PipeTransform {

    transform(value: string, args?: any): any {
        return `${value} => ${value.toUpperCase()}`;
    }

}
