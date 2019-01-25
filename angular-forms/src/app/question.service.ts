import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { DropdownQuestion } from './dropdown-question';
import { TextQuestion } from './text-question';

@Injectable()
export class QuestionService {

    constructor() { }

    getQuestions(): QuestionBase[] {
        let questions = [
            new DropdownQuestion({
                key: 'size',
                label: 'Size',
                options: [{
                    text: 'L',
                    value: 'l'
                }, {
                    text: 'M',
                    value: 'm'
                }, {
                    text: 'S',
                    value: 's'
                }],
                required: true,
                order: 3
            }),
            new TextQuestion({
                key: 'name',
                label: 'Name',
                required: true,
                order: 1
            }),
            new TextQuestion({
                key: 'email',
                label: 'Email',
                required: true,
                type: 'email',
                order: 2
            })
        ];

        return questions.sort((a, b) => a.order - b.order);
    }
}
