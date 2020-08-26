import { Product } from './Product';
import { Customer } from './Customer';

export class Cart{
    cartId:string;
	Product:Product;
	Customer:Customer;
	qty:number;
}