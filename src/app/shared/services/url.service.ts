import { Injectable } from "@angular/core";

type IUrlResponse = (queryPrams?: any) => string;
enum URLS {
  GET_ALL_PRODUCT = '/api/product-type/get-all',
  DELETE_PRODUCT = '/api/product-type/delete',
}

@Injectable()

export class UrlService {
  getProductUrl: IUrlResponse = () => {
    return URLS.GET_ALL_PRODUCT;
  }

  deleteProductUrl: IUrlResponse = (productId: string) => {
    return URLS.DELETE_PRODUCT + `?productId=${productId}`;
  }
}