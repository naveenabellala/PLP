import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Merchant } from './merchant';

import { WishItem } from './wishitem';
import { OrderedItem } from './OrderedItem';
import { Email } from './Mail';
import { Customer } from './Customer';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class CapstoreService {

  product:any;
  merchant:Merchant;

  constructor(private http:HttpClient) { }

  login(merchemail,pass):Observable<Merchant>{
    return this.http.get<Merchant>("http://localhost:8081/login/merchant/"+merchemail+"/"+pass);
  }

  getMerchantProducts():Observable<Product>{
    return this.http.get<Product>("http://localhost:8081/merchant/productlist/"+this.merchant.merId);
  }

  addMerchantProduct(product):Observable<Product>{
    return this.http.post<Product>("http://localhost:8081/merchant/addproduct",product);
  }

  updateMerchantProduct(product):Observable<Product>{
    return this.http.put<Product>("http://localhost:8081/merchant/updateproduct",product);
  }

  //RETURNS ALL THE CUSTOMERS OF A MERHANT
  getMerchantCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:8081/merchantcustomers/"+this.merchant.merId);
  }

  getMerchantOrders(mid):Observable<OrderedItem[]>{
    return this.http.get<OrderedItem[]>("http://localhost:8081/merchant/myorders/"+this.merchant.merId);
  }

  public sendMail(mail:Email):Observable<Email>{
    return this.http.post<Email>("http://localhost:8081/sendemail",mail);
  }

  public getMail(emailId){
    
    return this.http.get<Email[]>(`http://localhost:8081/sentbox/customer@gmail.com`);
  }
  
  public getInbox(){
    return this.http.get<Email>("http://localhost:8081/inbox/admin@gmail.com");
  }

  setMerchant(merchant){
    this.merchant=merchant;
  }

  getMerchant(){
    return this.merchant;
  }

  setProduct(product){
    this.product=product;
  }

  getProduct(){
    return this.product;
  }

}
