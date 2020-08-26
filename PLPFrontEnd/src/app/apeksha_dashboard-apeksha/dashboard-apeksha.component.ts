import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Transaction';
import { CapStoreService } from '../cap-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-apeksha',
  templateUrl: './dashboard-apeksha.component.html',
  styleUrls: ['./dashboard-apeksha.component.css']
})
export class DashboardApekshaComponent implements OnInit {

  public show:boolean = false;
  constructor(private router:Router,private service:CapStoreService) { }

  ngOnInit() {}
  toggle() {
    this.show = !this.show;
  }
  enable()
  {
    
     (<HTMLInputElement >document.getElementById('continue')).removeAttribute('disabled');
     (<HTMLInputElement >document.getElementById('place')).disabled=true;
  }
  enabled()
  {
    (<HTMLInputElement >document.getElementById('place')).removeAttribute('disabled');
    (<HTMLInputElement >document.getElementById('continue')).disabled=true;
  }
  paymentMode(event:any)
  {
   
   let orderTransaction = new Transaction();
   orderTransaction.paymentMode = event.target.value;
   orderTransaction.ordItem = this.service.getOrderedItem();
   this.service.setOrderTransaction(orderTransaction);
   console.log(orderTransaction);
   //Be careful to save transaction in orderItem in spring
  } 
 
  enterCardDetails(ifCodMode: boolean)
  {
  
    console.log(this.service.getOrderTransaction());

      this.service.saveTransaction().subscribe((transaction) => {
        console.log("haai");
        console.log(transaction);
        this.service.storeOrderedItem(transaction.ordItem);
        
        this.service.setOrderTransaction(transaction);
        if(ifCodMode) {
          this.service.senddata(transaction.ordItem.ordId,transaction.ordItem.customer.emailId,transaction.ordItem.shippingAddress)
          
          this.router.navigate(['/invoice']);
        } else {
          this.router.navigate(['/cardDetails']);
      
        }
        })
      
   
    
  }
}
