import { Cart } from './cart';

export class Customer{
    custId:string;
	emailId:string;
	firstName:string;
	lastName:string;
    isValid:string;
    address:string;
	phoneNo:string;
	walletBalance:number;
	carItems:Cart[];
	wishItems:[];
	//private List<WishItem> wishItems;
}