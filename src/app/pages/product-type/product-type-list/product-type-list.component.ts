import { Component, OnInit } from '@angular/core';
import { MAX_WIDTH_MOBILE } from '../../../utils/constant';
import { Price } from '../../../utils/price';
import { productTypeSetting, productData, TABLE_NAME } from './product-type-list.helper';

interface ITable {
  [key: string]: any;
}

@Component({
  selector: 'ngx-product-type-list',
  templateUrl: './product-type-list.component.html',
  styleUrls: ['./product-type-list.component.scss']
})

export class ProductTypeListComponent implements OnInit {
  tableName: string;
  productSetting: ITable;
  productData: any[] = [];
  priceInstance: Price;
  constructor(
  ) {
    this.tableName = TABLE_NAME;
    this.priceInstance = new Price();
  }
  ngOnInit() {
    this.productSetting = this.$productTypeListComponent_changeBaseSetting();
    this.$productTypeListComponent_formatList();
  }

  $productTypeListComponent_changeBaseSetting() {
    let pager = {};
    if (window.innerWidth > MAX_WIDTH_MOBILE) {
      pager = { perPage: 7 }
    } else {
      pager = { perPage: 5 }
    }
    return Object.assign(productTypeSetting, { pager });
  }

  $productTypeListComponent_formatList() {
    this.productData = productData;
    this.productData = this.productData.map(product => {
      return {
        ...product,
        importPrice: this.priceInstance.formatPrice(product.importPrice),
        exportPrice: this.priceInstance.formatPrice(product.exportPrice),
      }
    })
  }

}
