import { Product } from './Product';

export class Merchant{
    "merId":string;
	"emailId":string;
	"panCard":string;
    "isValid":string;
	"firstName":string;
	"lastName":string;
	"address":string;
	"phoneNo":string;
	"merType":string;
    "products":Product[]; 
}