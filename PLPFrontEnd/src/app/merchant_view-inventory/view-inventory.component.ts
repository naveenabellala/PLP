import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { Router } from '@angular/router';
import { CapstoreService } from '../capstore.service';
import { Merchant } from '../merchant';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {

  
  merchantProducts:any;
  constructor(private router: Router, private service:CapstoreService) { }

  product = new Product();

  ngOnInit() {
    this.service.getMerchantProducts().subscribe(data=>{
      this.merchantProducts=data;
    });
    
  }

  updateProduct(item){
    console.log(item);
    this.service.setProduct(item);
    this.router.navigate(['updateitem']);
  }

  

}
