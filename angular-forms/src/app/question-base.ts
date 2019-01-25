export class QuestionBase {
    key: string;
    value: string;
    label: string;
    required: boolean;
    order: number;

    constructor(options: {
        key: string,
        value?: string,
        label: string,
        required?: boolean,
        order: number
    }) {
        this.key = options.key;
        this.value = options.value;
        this.label = options.label;
        this.required = !!options.required;
        this.order = options.order;
    }
}
