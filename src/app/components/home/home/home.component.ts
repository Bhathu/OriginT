import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { HomeService } from '../home.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

   customer: Customer = new Customer;
   messageSuccess: boolean=false;

  constructor(private homeService: HomeService) { 
  }

  ngOnInit(): void {

  }

  enroll(): void {
   console.log(this.customer);
   var response = this.homeService.save(this.customer).pipe(
    map((response) => {
      console.log("response = "+ response);
      this.messageSuccess = true;
    })
   ).subscribe();
   
   setTimeout(()=>{                          
    this.messageSuccess = false;
    }, 5000);
   this.clear();
  }

 

  clear(): void {
    this.customer= new Customer();
  }
}
