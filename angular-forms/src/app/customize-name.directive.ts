import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[appCustomizeName]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomizeNameDirective,
        multi: true
    }],
})
export class CustomizeNameDirective implements Validator {
    @Input('appCustomizeName') regexp: RegExp;

    constructor() { }

    validate(control: AbstractControl): { [key: string]: { [key: string]: string } } | null {
        return new RegExp(this.regexp).test(control.value) ? null : { customize: control.value };
    }
}
