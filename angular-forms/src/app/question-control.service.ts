import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {

    constructor() { }

    toFormGroup(question: QuestionBase[]): FormGroup {
        let group = {};

        question.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) : new FormControl(question.value || '');
        });

        return new FormGroup(group);
    }
}
