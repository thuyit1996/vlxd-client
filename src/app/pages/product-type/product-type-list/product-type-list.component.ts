import { Component, OnInit } from '@angular/core';
import { productTypeSetting, productData } from './product-type-list.helper';

interface ITable {
  [key: string]: any;
}

@Component({
  selector: 'ngx-product-type-list',
  templateUrl: './product-type-list.component.html',
  styleUrls: ['./product-type-list.component.scss']
})

export class ProductTypeListComponent implements OnInit {
  tableName = 'Danh sách mặt hàng';
  productSetting: ITable;
  productData: any[] = [];
  ngOnInit() {
    this.productSetting = productTypeSetting;
    this.productData = productData

  }


}
