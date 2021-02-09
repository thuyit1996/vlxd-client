import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTypeListComponent } from './product-type-list/product-type-list.component';
import { ProductTypeComponent } from './product-type.component';

const routes: Routes = [
  {
    path: '',
    component: ProductTypeComponent,
    children: [
      {
        path: 'list',
        component: ProductTypeListComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProductTypeModuleRouting {
}

