import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher, MatDatepickerInputEvent } from '@angular/material';
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
    isLinear: boolean = true;
    majorTechList: any[];
    startDate: moment.Moment;
    minDate: moment.Moment;
    maxDate: moment.Moment;

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
}
