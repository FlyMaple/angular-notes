import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-item',
    templateUrl: './hero-item.component.html',
    styleUrls: ['./hero-item.component.sass']
})
export class HeroItemComponent implements OnInit {
    _hero: Hero;
    _name: string;
    @Input('rs-skye') rs_skye: string;

    @Input()
    set hero(hero1111: Hero) {
        this._hero = hero1111;
    }

    get hero(): Hero {
        const { name, id } = this._hero;

        return Object.assign({
            id,
            name: `${name} <getter>`,
        });
    }

    @Input()
    set name(name: string) {
        this._name = `${name} <setter>`;
    }

    get name(): string {
        return `${this._name} <getter>`;
    }

    constructor() { }

    ngOnInit() {
    }

}
