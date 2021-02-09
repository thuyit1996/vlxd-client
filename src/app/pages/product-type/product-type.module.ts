import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTypeComponent } from './product-type.component';
import { ProductTypeListComponent } from './product-type-list/product-type-list.component';
import { ProductTypeModuleRouting } from './product-type-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ProductTypeComponent, ProductTypeListComponent],
  imports: [
    CommonModule,
    ProductTypeModuleRouting,
    SharedModule
  ]
})
export class ProductTypeModule { }
