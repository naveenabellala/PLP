import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Merchant } from './merchant';
import { IProductDetails } from './iproduct-details';

@Injectable({
  providedIn: 'root'
})
export class CapServiceService {
  [x: string]: any;
  private url: string;
  private fromAdminDD: boolean = false;
  private fromAdminTP: boolean = false;
  _url = 'http://localhost:8081/';

  constructor(private http: HttpClient) { }



  public addCustomer(customer: Customer, password: String): Observable<Customer> {
    let registerCustomerUrl = this.baseUrl + 'register/customer/';
    console.log(registerCustomerUrl)
    return this.http.post<Customer>('http://localhost:8081/register/customer/' + password, customer)
  }

  public addMerchant(merchant: Merchant, password: String): Observable<Merchant> {
    console.log(merchant);
    return this.http.post<Merchant>('http://localhost:8081/register/merchant/' + password, merchant)
  }
  setFromAdminDD(fromAdminDD: boolean) {
    this.fromAdminDD = fromAdminDD;
  }

  getFromAdminDD() {
    return this.fromAdminDD;
  }
  setFromAdminTP(fromAdminTP: boolean) {
    this.fromAdminTP = fromAdminTP;
  }

  getFromAdminTP() {
    return this.fromAdminTP;
  }



  //Manasa Balla

  public loginCustomer(emailId: String, password: String): Observable<Customer> {

    return this.http.get<Customer>('http://localhost:8081/login/customer/' + emailId + '/' + password)
  }

  public loginMerchant(emailId: string, password: String): Observable<Merchant> {

    return this.http.get<Merchant>('http://localhost:8081/login/merchant/' + emailId + '/' + password)
  }




  //Chandan Tiwari


  getAllProducts(): Observable<IProductDetails[]> {
    return this.http.get<IProductDetails[]>(this._url + 'products');
  }

  //ABSRK

  getThirdPartyMerchantProducts(): Observable<IProductDetails[]> {
    return this.http.get<IProductDetails[]>(this._url + 'getthirdpartyproducts');
  }


  //Annusandhya

  getProductsByRange(price1, price2): Observable<any> {
    return this.http.get(this._url + "price/" + price1 + "/" + price2);
  }

  getProductsByRating(rate: number): Observable<any> {
    rate = 5;
    return this.http.get(this._url + "rating/" + rate);
  }

  low: number;
  high:number;
  setRange(low, high){
    this.low = low;
    this.high = high;
  }

  getLowRange(){
    return this.low;
  }

  getHighRange(){
    return this.high;
  }



  // Chat Bot by Mounica
  


}