import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Customer } from './Customer';

import { Product } from './product';
import { Cartlist } from './cartlist';
import { OrderedItem } from './OrderedItem';
import { WishItem } from './wishitem';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  id :string="CUST_00003"
  customer: Customer;
  cartlist:Cartlist[];
  orders:OrderedItem[];
 
  constructor(private httpclient:HttpClient ) { }

  private _url: string = 'http://localhost:8081/ecommerce/186133/';


   public getOrderedItemsByCustId(): Observable<OrderedItem[]> {
     let orderedItemUrl = this._url+'viewOrderedItems/'+this.customer.custId;
     console.log(orderedItemUrl);
     return this.httpclient.get<OrderedItem[]>(orderedItemUrl)

   }
   public deposit(amount:string){
    return this.httpclient.put<Customer>(this._url+'deposit/'+this.customer.custId+'/'+amount,'')

   }
public checkBalance():Observable<number>{
return this.httpclient.get<number>(this._url+'checkBalance/'+this.customer.custId)


}
public setProfileAttributes(customer: Customer):Observable<Customer>{
  return this.httpclient.put<Customer>(this._url+'updateProfile/'+ this.customer.custId,customer);
}

/*public getWishList():{
  this.httpclient.get("http://localhost:8081/ecommerce/186133/getcustomerwishlist/CUST_00003")
}*/
//cart
  getCartProducts(): Observable<Cartlist[]> {
    return this.httpclient.get<Cartlist[]>("http://localhost:8081/ecommerce/185692/getCartList/"+this.customer.custId);
  }
  deleteFromCart(cartId): Observable<Cartlist[]> {
    return this.httpclient.delete<Cartlist[]>("http://localhost:8081/ecommerce/185715/deleteProduct/" + cartId);
  }
  addtoCart(product) {
    return this.httpclient.post<any>("http://localhost:8081/ecommerce/addtocartlist/"+this.customer.custId, product);
  }


//wish
  deleteCustomerWish(wishId):Observable<WishItem[]>{
    return this.httpclient.delete<WishItem[]>("http://localhost:8081/customer/deletewish/"+wishId);
  } 

//Adds a wish to cart
  addWishTocart(product){
    return this.httpclient.post<any>("http://localhost:8081/customer/addwishtocart/"+this.customer.custId,product);
  }

 

getCustomerWish():Observable<WishItem[]>{
    return this.httpclient.get<WishItem[]>("http://localhost:8081/customer/getwishlist/"+this.customer.custId);
  }

  //ReturnGoods
  returnGoods(ordId:string):Observable<boolean>
  {
   console.log(ordId);
   return this.httpclient.get<boolean>("http://localhost:8081/ecommerce/186087/returngoods/"+ordId);
 }

 setCustomer(customer){
   this.customer=customer;
 }

 getCustomer(){
   return this.customer;
 }


}
