import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  balance: number;
 
  constructor(private dashboardService: DashboardServiceService) { }

  ngOnInit() {
  }
deposit(amount: string){
this.dashboardService.deposit(amount).subscribe();
}
checkBalance(){
  this.dashboardService.checkBalance().subscribe(data =>
    {
      this.balance=data;
    });
}


}
