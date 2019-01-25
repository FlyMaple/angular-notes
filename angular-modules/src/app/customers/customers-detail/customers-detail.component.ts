import { Component, OnInit } from '@angular/core';
import { CustomersService, Customer } from '../customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-customers-detail',
    templateUrl: './customers-detail.component.html',
    styleUrls: ['./customers-detail.component.sass']
})
export class CustomersDetailComponent implements OnInit {
    customer: Customer;

    constructor(
        private route: ActivatedRoute,
        private customerService: CustomersService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params.id;
            this.customerService.getCustomer(id).subscribe(c => this.customer = c);
        });
    }

}
