import { QuestionBase } from "./question-base";

export class TextQuestion extends QuestionBase {
    controlType: string = 'textbox';
    type: String;

    constructor(options: any) {
        super(options);
        this.type = options.type || 'text';
    }
}

// new TextQuestion({
//     key: 'name',
//     label: 'Name',
//     required: true,
//     order: 1
// });