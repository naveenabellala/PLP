import { Customer } from './Customer';
import { Product } from './Product';
import { Merchant } from './Merchant';
import { Transaction } from './Transaction';
import { Coupon } from './coupon';

export class OrderedItem {
 
    ordId:string;
    customer:Customer;
    product:Product;
    merchant:Merchant;
    orderTime:string;
    ordQty: number;
    shippingAddress:string;
    ordPrice: number;
    ordStatus:string;
    coupon: Coupon;
    
    constructor(){}
    
}