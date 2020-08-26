import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Coupon } from './coupon';
import { Customer } from './customer';

import { Transaction } from './transaction';
import { Cartlist } from './cartlist';
import { Email } from './Mail';
import { OrderedItem } from './OrderedItem';


@Injectable({
  providedIn: 'root'
})
export class CapStoreService {
  from:string="admin@gmail.com";
  email:Email;
  orderid:string;
  orderedItem : OrderedItem; 
  product: Product
  paymentMode: string;
  customer: Customer;
  orderTransaction: Transaction;
  orderId:string;
  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product>
  {
    return this.http.get<Product>("http://localhost:8081/get");
  }

  getProductById(id:string):Observable<Product>
  {
    return this.http.get<Product>("http://localhost:8081/getProductById/"+id);
  }
  getCouponByCustomId(customCouponCode:string):Observable<Coupon>
  {
    return this.http.get<Coupon>("http://localhost:8081/getCoupon/"+customCouponCode);
  }

  storeOrderedItem(orderedItem: OrderedItem) {
    this.orderedItem = orderedItem

  }



  getOrderedItem() {
    return this.orderedItem
  }
  getPaymentMode()
  {
    return this.paymentMode;
  }

  setPaymentMode(mode:string)
  {
    this.paymentMode=mode;
  }

  fetchCustomer()
  {
   this.http.get<Customer>("http://localhost:8081/getCustomer/CUST_00003").subscribe((customer) =>{ 
         this.setCustomerObj(customer);
    });
  }

  getCustomerObj()
  {
     return this.customer;
  }

  getProductObj()
  {
    return this.product;
  }
  setCustomerObj(customer:Customer)
  {
       this.customer = customer;
  }
  setProductObj(obj:Product)
  {
    this.product=obj;
  }
 
  setOrderTransaction(transaction: Transaction) {
    this.orderTransaction = transaction
  }

  senddata(orderId:string,to:string,mail:string){
    this.orderid=orderId;
   
  }




  getOrderTransaction() {
    return this.orderTransaction;
  }
 
  sendMail(Data:Email){
   Data.mail="Dear Customer,Order Placed SucessFully, Your Shipping Address is :"+ Data.mail
              +" Your Order Id is : " +this.orderid;
   console.log(Data)
   return this.http.post<Email>("http://localhost:8081/sendMailtoUser",Data)
  }
 
  saveTransaction(): Observable<Transaction> {
    return this.http.post<Transaction>("http://localhost:8081/saveTransaction",this.orderTransaction);   
  }
  showorder(orderno:string):Observable<OrderedItem>{
    
    return this.http.get<OrderedItem>("http://localhost:8081/printInvoice/"+orderno);
  }
  
  setOrderId(orderId:string)
  {
   
    this.orderId=orderId;
  }

  getCartProducts(): Observable<Cartlist[]> {
    return this.http.get<Cartlist[]>("http://localhost:8081/ecommerce/185692/getCartList/CUST_00003");
  }
  deleteFromCart(cartId): Observable<Cartlist[]> {
    return this.http.delete<Cartlist[]>("http://localhost:8081/ecommerce/185715/deleteProduct/" + cartId);
  }
  addToCart(product) {
    return this.http.post<any>("http://localhost:8081/ecommerce/addtocartlist/CUST_00003", product);
  }
}
