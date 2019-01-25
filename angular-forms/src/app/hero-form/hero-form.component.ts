import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
    powers: string[] = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    _submitted: boolean = false;
    model: Hero;

    constructor() { }

    ngOnInit() {
        this.model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    }

    onSubmit(): void {
        this._submitted = true;
    }

    newHero() {
        this.model = new Hero(42, '', '');
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    inject(form): void {
        window['heroForm'] = form;
    }

}

export function identityRevealedValidator(control: AbstractControl): ValidationErrors {
    const name = control.get('name');
    const alterEgo = control.get('alterEgo');

    return name.value === alterEgo.value ? { identityRevealed: true } : null;
}
