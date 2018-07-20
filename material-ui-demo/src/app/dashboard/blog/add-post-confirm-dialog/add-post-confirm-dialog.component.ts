import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
    selector: 'app-add-post-confirm-dialog',
    templateUrl: './add-post-confirm-dialog.component.html',
    styleUrls: ['./add-post-confirm-dialog.component.css']
})
export class AddPostConfirmDialogComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    get title() {
        return this.data.title;
    }

    confirm(): void {
        this.dialog.closeAll();
    }
}
