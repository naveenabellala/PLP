import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CapServiceService } from '../cap-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-customer',
  templateUrl: './sign-up-customer.component.html',
  styleUrls: ['./sign-up-customer.component.css']
})
export class SignUpCustomerComponent implements OnInit {
  customer:Customer;
  constructor(private capService:CapServiceService, public router: Router) { }

  ngOnInit() {
  }
  addCustomer(fname,lname,email,password,confirmPassword,address,phone,bal){
    
   
    if(password === confirmPassword) {
      this.customer=new Customer();
   
    this.customer.address=address;
    this.customer.emailId=email;
    this.customer.firstName=fname;
    this.customer.lastName=lname;
    this.customer.phoneNo=phone;
    this.customer.isValid="false";
    this.customer.walletBalance=bal;
   
    console.log(this.customer);
    this.capService.addCustomer(this.customer,password).subscribe();
    alert("")
    this.router.navigate(['/welcome']);
    } else {
      alert("Password doesn't match");
    }
    
  }
}
