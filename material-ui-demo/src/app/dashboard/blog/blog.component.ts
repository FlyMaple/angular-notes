import { Component, OnInit, ViewChildren } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    @ViewChildren('dialogTemplate') dialogTemplate;

    posts$: Observable<any>;
    _progress: number = 60;
    strokeWidth: number = 1;
    diameter: number = 10;

    constructor(
        private http: HttpClient,
        private dialog: MatDialog
    ) {

    }

    ngOnInit() {
        this.posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(
                map((posts: any[]) => {
                    posts = posts.slice(0, 6);

                    posts.forEach(post => {
                        const imageUrl = this.getRandomImage(300, 300);

                        post.imageUrl = imageUrl;
                    })

                    return posts;
                })
            );

        this.dialog.afterAllClosed.subscribe((...args) => {
            console.log(`afterAllClosed:`, args);
        });

        this.dialog.afterOpen.subscribe((dialogRef: MatDialogRef<any, any>) => {
            console.log(`新 Dialog 已被開啟, dialog id => ${dialogRef.id}`);

            console.log(`openDialogs:`, this.dialog.openDialogs.length);
        });
    }

    getRandomImage(width: number, height: number): string {
        return `http://lorempixel.com/${width}/${height}/?timestamp=${Math.random()}`;
    }

    showAddPostDialog(): void {
        // this.dialog.open(this.dialogTemplate);
        const confirmDialogRef = this.dialog.open(AddPostDialogComponent, {
            data: {
                title: `This is dialog title`,
            },
            autoFocus: true,
            // id: 'add-post-dialog',
            width: "400",
            height: "200",
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 200,
            hasBackdrop: true,
            backdropClass: 'z-backdrop',
            // position: MatDialog.,
            disableClose: false,
        });

        console.log(confirmDialogRef);


    }
}
