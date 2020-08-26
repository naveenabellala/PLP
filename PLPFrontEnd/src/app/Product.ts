import { Merchant } from './merchant';
import { Rating } from './Rating';

export class Product{
	"prodId":string;
    "prodName":string;
	"prodCategory":string;
	"price":number;
	"discount":number;
	"validTime":string;
	"promoCode":string;
	"viewsCount":number;
    "qty":number;
	"merchant":Merchant;
	"productRating":Rating;
	constructor(){}
}
