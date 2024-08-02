import { Component, OnInit } from '@angular/core';
import { ViewCustomerService } from './view-customer.service';
import { Customer } from 'src/app/model/customer.model';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss'],
  providers: [ViewCustomerService]
})
export class ViewCustomerComponent implements OnInit {

  customers: Customer[] = [];
  searchCustomer: Customer = new Customer;
  phoneNumber: String = '';

  constructor(private viewCustomerService: ViewCustomerService) { }

  ngOnInit(): void {
    this.retrieve();
  }

  retrieve() {
    this.viewCustomerService.retrieveCustomers().pipe(
      map((response) => {
        response.forEach(customer => {
          this.customers.push(customer);
          console.log(customer);
        })
      })
     ).subscribe();
   
  }


  search() {
    console.log(this.phoneNumber);
    this.viewCustomerService.searchByPhoneNumber(this.phoneNumber).pipe(
      map((response) => {
        this.customers = [];
        this.customers.push(response);
          //this.searchCustomer = response;
          console.log(this.customers);
      })
     ).subscribe();
  }
}
