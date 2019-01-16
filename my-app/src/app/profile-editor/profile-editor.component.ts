import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-profile-editor',
    templateUrl: './profile-editor.component.html',
    styleUrls: ['./profile-editor.component.sass']
})
export class ProfileEditorComponent implements OnInit {
    profileForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        // this.profileForm = new FormGroup({
        //     firstName: new FormControl(),
        //     lastName: new FormControl(),
        //     address: new FormGroup({
        //         street: new FormControl(),
        //         city: new FormControl(),
        //         state: new FormControl(),
        //         zip: new FormControl(),
        //     }),
        // });
        this.profileForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: [],
            address: this.formBuilder.group({
                street: [],
                city: [],
                state: [],
                zip: ['', Validators.required],
            }),
            aliases: this.formBuilder.array([
                this.formBuilder.control(''),
            ]),
        });
        window['profileForm'] = this.profileForm;
    }

    get address(): FormGroup {
        // return <FormGroup>this.profileForm.get("address");
        return this.profileForm.get("address") as FormGroup;
    }

    get aliases(): FormArray {
        return this.profileForm.get("aliases") as FormArray;
    }

    addAlias(): void {
        this.aliases.push(
            this.formBuilder.control('')
        );
    }

    updateData(): void {
        this.profileForm.patchValue({
            firstName: Math.random(),
            address: {
                zip: Math.random(),
            },
        });
    }

    onSubmit(event): void {
        console.log(`Event:`, event);
        console.log(`Form Data:`, this.profileForm.value);
    }

}
