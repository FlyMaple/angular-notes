import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher, MatDatepickerInputEvent, MatCheckboxChange } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as moment from 'moment';
// import { MatStepperIntl } from '@angular/material';

// export class TwStepperIntl extends MatStepperIntl {
//     optionalLabel = 'Test';
// }

export class EarlyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;

        return !!(control && control.invalid && control.dirty);
    }
}

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css'],
    // providers: [{
    //     provide: MatStepperIntl,
    //     useClass: TwStepperIntl,
    // }]
    // providers: [{
    //     provide: ErrorStateMatcher,
    //     useClass: EarlyErrorStateMatcher
    // }]
})
export class SurveyComponent implements OnInit {
    isLinear: boolean = false;
    majorTechList: any[];
    startDate: moment.Moment;
    minDate: moment.Moment;
    maxDate: moment.Moment;
    interestList: any[];
    indeterminateSelectedPayFor: boolean;

    // basicFormGroup: FormGroup;
    surveyForm: FormGroup;
    earlyErrorStateMatcher = new EarlyErrorStateMatcher();
    countries$: Observable<any>;

    constructor(private http: HttpClient) {
        // this.basicFormGroup = new FormGroup({
        //     name: new FormControl('', Validators.required),
        // });

        this.surveyForm = new FormGroup({
            basicQuestions: new FormGroup({
                name: new FormControl('', Validators.required),
                intro: new FormControl('', [Validators.required, Validators.minLength(10)]),
                country: new FormControl(''),
                majorTech: new FormControl('', Validators.required),
                birthday: new FormControl({ value: '', disabled: true }),
                interest: new FormControl(null),
            }),
            mainQuestions: new FormGroup({
                payForAll: new FormControl(false),
                payForBook: new FormControl(false),
                payForMusic: new FormControl(false),
                payForMovie: new FormControl(false),
                score: new FormControl(5),
                subscribeAngular: new FormControl(true),
            }),
            otherQuestions: new FormGroup({
                red: new FormControl(50),
                green: new FormControl(100),
                blue: new FormControl(150),
            }),
        });
    }

    ngOnInit() {
        this.countries$ = this.getCountries();

        this.surveyForm
            .get('basicQuestions')
            .get('country')
            .valueChanges
            .subscribe(inputCountry => {
                this.countries$ = this.getCountries(inputCountry).pipe(
                    debounceTime(300),
                    distinctUntilChanged(),
                    map(countries => {
                        return countries.filter(country => country.name.indexOf(inputCountry) !== -1);
                    })
                );
            });

        this.majorTechList = [{
            name: 'Front-End',
            items: ['AngularJS', 'Angular', 'React', 'Vue'],
        }, {
            name: 'Back-End',
            items: ['Java', 'C#', 'Python', 'Go'],
        }];

        this.startDate = moment(new Date(1987, 11, 18));
        this.minDate = moment(new Date(1987, 11, 1));
        this.maxDate = moment(new Date(1987, 11, 20));

        this.interestList = [{
            id: 1,
            name: '桌球'
        }, {
            id: 2,
            name: '足球'
        }, {
            id: 3,
            name: '網球'
        }];
    }

    getCountries(test: string = ''): Observable<any> {
        return this.http.get<any[]>(`/assets/countries.json?test=${test}`);
    }

    highlightFiltered(countryName: string): string {
        const inputCountry = this.surveyForm
            .get('basicQuestions')
            .get('country')
            .value;

        if (!inputCountry) {
            return countryName;
        }

        if (countryName.indexOf(inputCountry) !== -1) {
            return countryName.replace(inputCountry, `<span class="autocomplete-highlight">${inputCountry}</span>`);
        }
    }

    displayCountry(country: any): string {
        if (country) {
            return `${country.name} / ${country.code}`;
        } else {
            return '';
        }
    }

    familyDayFilter(date: moment.Moment): boolean {
        return date.day() === 5;
    }

    logDateInput(event: MatDatepickerInputEvent<moment.Moment>): void {
        console.log(event)
    }

    logDateChange(event: MatDatepickerInputEvent<moment.Moment>): void {
        console.log(event);
    }

    payForChange($event: MatCheckboxChange): void {
        console.log($event);

        const payForBook = this.surveyForm.get('mainQuestions').get('payForBook').value;
        const payForMusic = this.surveyForm.get('mainQuestions').get('payForMusic').value;
        const payForMovie = this.surveyForm.get('mainQuestions').get('payForMovie').value;

        console.log({
            payForBook,
            payForMusic,
            payForMovie,
        });

        const count = (payForBook ? 1 : 0) + (payForMusic ? 1 : 0) + (payForMovie ? 1 : 0);

        this.indeterminateSelectedPayFor = count > 0 && count < 3;

        this.surveyForm.get('mainQuestions').get('payForAll').setValue(count === 3);
    }

    checkAllChange($event: MatCheckboxChange): void {
        console.log($event);

        const payForBook = this.surveyForm.get('mainQuestions').get('payForBook');
        const payForMusic = this.surveyForm.get('mainQuestions').get('payForMusic');
        const payForMovie = this.surveyForm.get('mainQuestions').get('payForMovie');

        payForBook.setValue($event.checked);
        payForMusic.setValue($event.checked);
        payForMovie.setValue($event.checked);

        this.payForChange(null);
    }

    get selectedColorRed(): number {
        return this.surveyForm.get('otherQuestions').get('red').value;
    }

    get selectedColorGreen(): number {
        return this.surveyForm.get('otherQuestions').get('green').value;
    }

    get selectedColorBlue(): number {
        return this.surveyForm.get('otherQuestions').get('blue').value;
    }

    get selectedColorStyle() {
        return `rgb(${this.selectedColorRed}, ${this.selectedColorGreen}, ${this.selectedColorBlue})`
    }
}
