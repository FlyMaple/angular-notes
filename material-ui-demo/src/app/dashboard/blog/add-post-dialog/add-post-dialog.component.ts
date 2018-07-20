import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { AddPostConfirmDialogComponent } from '../add-post-confirm-dialog/add-post-confirm-dialog.component';

@Component({
    selector: 'app-add-post-dialog',
    templateUrl: './add-post-dialog.component.html',
    styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<AddPostDialogComponent>,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        console.log(this.data);
    }

    get title() {
        return this.data.title || 'Title';
    }

    doPost(): void {
        console.log(`這裡是 app-post-dialog.component.ts`);

        this.dialog.open(AddPostConfirmDialogComponent, {
            data: {
                title: this.title,
            },
        });
    }

    move(): void {
        this.dialogRef.updatePosition({
            top: '0',
            left: '0',
        });
    }
}
