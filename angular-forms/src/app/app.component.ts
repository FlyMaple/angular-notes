import { Component } from '@angular/core';
import { LogService } from './log.service';
import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        LogService,
        QuestionService
    ]
})
export class AppComponent {
    questions: QuestionBase[];

    constructor(
        private logService: LogService,
        private questionService: QuestionService
    ) {
        this.logService.setPrefix('APP');
    }

    ngOnInit(): void {
        this.logService.warn('ngOnInit');
        this.questions = this.questionService.getQuestions();
    }
}
