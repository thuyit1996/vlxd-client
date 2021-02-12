import { Injectable } from "@angular/core";

type IUrlResponse = () => string;
enum URLS {
	GET_ALL_PRODUCT = '/api/product-type/get-all'
}

@Injectable()

export class UrlService {
	getProductUrl: IUrlResponse = () => {
		return URLS.GET_ALL_PRODUCT;
	}
}