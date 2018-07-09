import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { MatStepperIntl } from '@angular/material';

// export class TwStepperIntl extends MatStepperIntl {
//     optionalLabel = 'Test';
// }

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css'],
    // providers: [{
    //     provide: MatStepperIntl,
    //     useClass: TwStepperIntl,
    // }]
})
export class SurveyComponent implements OnInit {
    isLinear: boolean;

    // basicFormGroup: FormGroup;
    surveyForm: FormGroup;

    constructor() {
        // this.basicFormGroup = new FormGroup({
        //     name: new FormControl('', Validators.required),
        // });

        this.surveyForm = new FormGroup({
            basicQuestions: new FormGroup({
                name: new FormControl('', Validators.required),
            }),
        });
    }

    ngOnInit() {
    }

}
