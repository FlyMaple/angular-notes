import { Directive } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appIdentityRevealed]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: IdentityRevealedDirective,
        multi: true,
    }],
})
export class IdentityRevealedDirective implements Validator {

    constructor(
    ) { }

    validate(control: AbstractControl): ValidationErrors {
        const name = control.get("name");
        const alterEgo = control.get("alterEgo");
        if (name && alterEgo) {
            return name.value === alterEgo.value ? null : {
                identityRevealed: {
                    name: name.value,
                    alterEgo: alterEgo.value,
                }
            };
        } else {
            return null;
        }
    }
}
