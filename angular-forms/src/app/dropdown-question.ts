import { QuestionBase } from "./question-base";

export class DropdownQuestion extends QuestionBase {
    controlType: string = 'dropdown';
    options: {text: string, value: string}[];
    
    constructor(options: any) {
        super(options)
        this.options = options.options || [];
    }

}

// new DropdownQuestion({
//     key,
//     value,
//     label,
//     required,
//     order: 3
// });
