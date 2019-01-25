import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-hero-form-reactive',
    templateUrl: './hero-form-reactive.component.html',
    styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {
    powers: string[] = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    submitted: boolean = false;
    heroForm: FormGroup;
    hero: Hero;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.hero = new Hero(1, '', '');

        this.heroForm = new FormGroup({
            name: new FormControl(this.hero.name, [customizeValidation(/skye/)]),
            alterEgo: new FormControl(''),
            power: new FormControl('', Validators.required),
        }, { validators: identityRevealedValidator });
        window["heroForm"] = this.heroForm;
    }

    onSubmit(): void {
        this.submitted = true;
    }

    newHero() {
    }

    get name(): FormControl {
        return this.heroForm.get("name") as FormControl;
    }

    get power(): FormControl {
        return this.heroForm.get("power") as FormControl;
    }

}

export function customizeValidation(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: { [key: string]: any } } | null => {

        return regexp.test(control.value) ? null : { customize: { value: control.value } };
    };
}

export function identityRevealedValidator(control: AbstractControl): ValidationErrors {
    const name = control.get('name');
    const alterEgo = control.get('alterEgo');

    return name.value === alterEgo.value ? { identityRevealed: true } : null;
}