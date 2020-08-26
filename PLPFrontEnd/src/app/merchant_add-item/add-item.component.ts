import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { CapstoreService } from '../capstore.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private service:CapstoreService) { }

  product = new Product();
  ngOnInit() {
  }

  addProduct(name,price,category,discount,time,quantity,promo){
    this.product.discount=discount;
    this.product.price=price;
    this.product.prodCategory=category;
    this.product.prodName=name;
    this.product.promoCode=promo;
    this.product.qty=quantity;
    this.product.validTime=time;
    this.product.viewsCount=0;
    this.product.merchant=this.service.getMerchant();
    this.service.addMerchantProduct(this.product).subscribe(data=>{
      console.log(data);
      alert("Product Added");
    })
    console.log(this.product);
  }

}
