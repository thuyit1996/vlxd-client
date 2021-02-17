import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTypeComponent } from './product-type.component';
import { ProductTypeListComponent } from './product-type-list/product-type-list.component';
import { ProductTypeModuleRouting } from './product-type-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { UsageTableModule } from '../../shared/usable-table/usage-table.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ModalModule } from '../../shared/modal/modal.module';
@NgModule({
  declarations: [ProductTypeComponent, ProductTypeListComponent, AddProductComponent],
  imports: [
    CommonModule,
    ProductTypeModuleRouting,
    SharedModule,
    ThemeModule,
    NbCardModule,
    UsageTableModule,
    ModalModule,
    NbInputModule,
    NbSelectModule,
  ]
})
export class ProductTypeModule { }
