import { Component, OnInit, ɵConsole, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { CapStoreService } from '../cap-store.service';
import { OrderedItem } from '../OrderedItem';
import { DashboardServiceService } from '../dashboard-service.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product
  orderedQty: number

  orderedItem = new OrderedItem();
  constructor(private route: ActivatedRoute, private service: CapStoreService, private path: Router,private customerService: DashboardServiceService) { }

  ngOnInit() {
    this.service.fetchCustomer();
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.getProduct(param);
    }
  }

  getProduct(id: string) {
    console.log(id)
    this.service.getProductById(id).subscribe((product) => {
      this.product = product
      console.log(this.product)
      }
    );

  }

  buyNow(orderedQty: number, couponCode: string, product: Product) {
   
    this.service.getCouponByCustomId(couponCode).subscribe(coupon => {
      

       this.orderedItem.customer = this.service.getCustomerObj()
        this.orderedItem.product = product
        this.orderedItem.ordQty = orderedQty
        this.orderedItem.merchant = product.merchant
        this.orderedItem.ordStatus = "PLD";
        this.orderedItem.orderTime = new Date().toLocaleDateString();


        let costPrice = product.price;
        let effectivePrice = costPrice * orderedQty;
        let priceAfterDiscount = effectivePrice-((product.discount/100)*effectivePrice);
        let sellingPrice = priceAfterDiscount-((coupon.discount/100)*priceAfterDiscount);


        console.log(sellingPrice);
        console.log(this.orderedItem)
        console.log(this.orderedItem.customer.walletBalance);
        this.orderedItem.customer.walletBalance=this.orderedItem.customer.walletBalance-sellingPrice;

        if(this.orderedItem.customer.walletBalance>0)
        {
            this.orderedItem.ordPrice = sellingPrice
            this.orderedItem.coupon = coupon
            this.service.storeOrderedItem(this.orderedItem);
            this.path.navigate(['/orderedItemDetails']);
        }   
        else{
          alert("Insufficient Wallet Balance");
        }
    });
  }

  addToCart(product:Product)
  {
    this.service.addToCart(product).subscribe();
  }

  
}
