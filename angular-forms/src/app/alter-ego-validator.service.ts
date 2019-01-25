import { Injectable } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl } from '@angular/forms';
import { HeroService } from './hero-service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AlterEgoValidatorService implements Validator {

    constructor(
        private heroService: HeroService
    ) { }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.heroService.isAlterEgoTaken(control.value)
            .pipe(
                map(isTaken => isTaken ? { uniqureAlterEgo: true } : null),
                catchError(err => null)
            );
    }
}
