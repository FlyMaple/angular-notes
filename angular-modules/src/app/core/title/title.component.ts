import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {
    user: string;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.user = this.userService.userName;
    }

}
