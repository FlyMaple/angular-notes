import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'test',
    pure: false,
})
export class TestPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        console.log('Test pipe transformed.');
        return value.filter(function (v) {
            return v % 2 === 0;
        });
    }

}
