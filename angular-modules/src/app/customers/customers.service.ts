import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export class Customer {
   constructor(
      public id: number,
      public name: string
   ) { }
}

const customers: Customer[] = [
   new Customer(1, 'Skye'),
   new Customer(2, 'Kai')
];

@Injectable()
export class CustomersService {

   constructor() { }

   getCustomers(): Observable<Customer[]> {
      return of(customers);
   }

   getCustomer(id: any): Observable<Customer> {
      return of(customers.find(c => c.id === +id));
   }
}
