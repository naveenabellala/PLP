import { Component, OnInit } from '@angular/core';
import { Merchant } from '../merchant';
import { CapServiceService } from '../cap-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-merchant',
  templateUrl: './sign-up-merchant.component.html',
  styleUrls: ['./sign-up-merchant.component.css']
})
export class SignUpMerchantComponent implements OnInit {
merchant:Merchant;
  constructor(private capService:CapServiceService, public router: Router) { }

  ngOnInit() {
  }
  addMerchant(fname,lname,email,pan,password,address,phone){
    
    
    this.merchant=new Merchant();
    this.merchant.address=address;
    this.merchant.emailId=email;
    this.merchant.panCard=pan;
    this.merchant.firstName=fname;
    this.merchant.lastName=lname;
    this.merchant.phoneNo=phone;
    if(this.capService.getFromAdminDD){
      this.merchant.isValid="ACCEPTED";
      this.merchant.merType="DD"
    }
    else if(this.capService.getFromAdminTP){
      this.merchant.isValid="ACCEPTED";
      this.merchant.merType="TP"
    }
    else{
      this.merchant.isValid="PENDING";
      this.merchant.merType="DD"
    }
    
    
    
    console.log(this.merchant);
    this.capService.addMerchant(this.merchant,password).subscribe();
    this.router.navigate(['/welcome']);
}
}