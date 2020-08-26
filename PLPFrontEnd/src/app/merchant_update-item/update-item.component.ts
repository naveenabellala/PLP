import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { CapstoreService } from '../capstore.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  product=new Product();

  constructor(private service:CapstoreService) { }

  ngOnInit() {
    this.product=this.service.getProduct();
  }

  updateProduct(id,name,price,category,discount,time,quantity,promo){
    this.product.prodId=id;
    this.product.discount=discount;
    this.product.price=price;
    this.product.prodCategory=category;
    this.product.prodName=name;
    this.product.promoCode=promo;
    this.product.qty=quantity;
    this.product.validTime=time;
    this.product.viewsCount=0;
    this.product.merchant=this.service.getMerchant();
    this.service.updateMerchantProduct(this.product).subscribe(data=>{
      alert("Product Updated");
    })
  }

}
