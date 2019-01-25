import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question-base';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
    @Input() question: QuestionBase;
    @Input() form: FormGroup;

    constructor() { }

    ngOnInit() {
    }

}
