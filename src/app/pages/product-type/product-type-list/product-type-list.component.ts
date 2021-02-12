import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DestroyableDirective } from '../../../shared/directive/destroyable.directive';
import { AlertService } from '../../../shared/services/alert.service';
import { ApiService } from '../../../shared/services/api.service';
import { UrlService } from '../../../shared/services/url.service';
import { DISPLAY_TABLE_PER_PAGE, MAX_WIDTH_MOBILE } from '../../../utils/constant';
import { Price } from '../../../utils/price';
import { productTypeSetting, TABLE_NAME, MESSAGE_CONFIRM } from './product-type-list.helper';

interface ITable {
  [key: string]: any;
}
@Component({
  selector: 'ngx-product-type-list',
  templateUrl: './product-type-list.component.html',
  styleUrls: ['./product-type-list.component.scss']
})

export class ProductTypeListComponent extends DestroyableDirective implements OnInit {
  tableName: string;
  productSetting: ITable;
  productData: any[] = [];
  priceInstance: Price;
  constructor(
    private readonly apiService: ApiService,
    private readonly urlService: UrlService,
    private readonly alertService: AlertService
  ) {
    super();
    this.tableName = TABLE_NAME;
    this.priceInstance = new Price();
  }
  ngOnInit() {
    this.productSetting = this.$productTypeList_changeBaseSetting();
    this.$productTypeList_getProductList();
  }

  $productTypeList_changeBaseSetting() {
    let pager = {};
    if (window.innerWidth > MAX_WIDTH_MOBILE) {
      pager = { perPage: DISPLAY_TABLE_PER_PAGE.DESKTOP };
    } else {
      pager = { perPage: DISPLAY_TABLE_PER_PAGE.MOBILE };
    }
    return Object.assign(productTypeSetting, { pager });
  }

  $productTypeList_getProductList() {
    this.apiService.callApiGet(this.urlService.getProductUrl()).pipe(takeUntil(this.destroy$)).subscribe(res => {
      let data = res.data || [];
      this.productData = data.map(product => {
        return {
          ...product,
          importPrice: this.priceInstance.formatPrice(product.importPrice),
          exportPrice: this.priceInstance.formatPrice(product.exportPrice),
        }
      })
    })

  }


  async $productTypeList_deleteRow(rowId: string) {
    const callBackConfirm = await this.alertService.confirm(MESSAGE_CONFIRM);
    if (callBackConfirm.isConfirmed) {

    } else {
      return;
    }
  }
}
