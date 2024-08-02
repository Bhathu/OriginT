import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from 'src/app/model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ViewCustomerService {

  customers: Customer[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  
  constructor(private http: HttpClient) { 
  }

  retrieveCustomers(): Observable<Customer[]>{
    console.log("Retrieving customers from backend");
     return this.http.get<Customer[]>("http://localhost:8080/originT/customer/fetch", this.httpOptions);
     /*.pipe(
      map((response) => {
        response.forEach(customer => {
          this.customers.push(customer);
          console.log(customer);
        })
      })
     ).subscribe();*/

    /*console.log('data : ' + this.http.get<Customer[]>("http://localhost:8080/originT/customer/fetch", this.httpOptions)
    .subscribe(response => console.log(response)));*/
     console.log('data: '+ this.customers);

  // return this.customers;
  }

  searchByPhoneNumber(phoneNumber: String): Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8080/originT/customer/search/"+phoneNumber, this.httpOptions)
  }
}
