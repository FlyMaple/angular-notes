import { Component, OnInit } from '@angular/core';
import { CustomersService, Customer } from '../customers.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user.service';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.sass']
})
export class CustomersListComponent implements OnInit {
    userName: string;
    customers$: Observable<Customer[]>;

    constructor(
        private userService: UserService,
        private customerService: CustomersService
    ) { }

    ngOnInit() {
        this.customers$ = this.customerService.getCustomers();
        this.userName = this.userService.userName;
    }

}
