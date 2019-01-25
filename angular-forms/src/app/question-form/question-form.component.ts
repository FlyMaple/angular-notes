import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question-base';
import { LogService } from '../log.service';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../question-control.service';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.css'],
    providers: [
        QuestionControlService
    ]
})
export class QuestionFormComponent implements OnInit {
    @Input() questions: QuestionBase[];
    form: FormGroup;

    constructor(
        private logService: LogService,
        private qcs: QuestionControlService
    ) {
        this.logService.setPrefix('QuestionForm');
    }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit(): void {
        this.logService.warn('onSubmit');
    }
}
