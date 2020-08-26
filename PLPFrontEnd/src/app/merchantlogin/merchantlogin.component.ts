import { Component, OnInit } from '@angular/core';
import { CapServiceService } from '../cap-service.service';
import { Router } from '@angular/router';
import { CapstoreService } from '../capstore.service';

@Component({
  selector: 'app-merchantlogin',
  templateUrl: './merchantlogin.component.html',
  styleUrls: ['./merchantlogin.component.css']
})
export class MerchantloginComponent implements OnInit {

  constructor(private capService: CapServiceService, private router:Router,private merchantService:CapstoreService) { }

  ngOnInit() {
  }

  loginMerchant(merchEmail: string,password: string) {
    this.capService.loginMerchant(merchEmail,password).subscribe((merchant) => {
      console.log(merchant)
      
      this.merchantService.login(merchEmail,password).subscribe(data=>{
        console.log(data)
        this.merchantService.setMerchant(data);
        this.router.navigate(['/dashboard']);
   });
  
});
}
}
