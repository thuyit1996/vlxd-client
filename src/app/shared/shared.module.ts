import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsableTableComponent } from './usable-table/usable-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { ApiService } from './services/api.service';
import { DestroyableDirective } from './directive/destroyable.directive';
import { UrlService } from './services/url.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './inteceptor/http.interceptor';
import { AlertService } from './services/alert.service';


const component = [
  UsableTableComponent
]
const directive = [
  DestroyableDirective
]
@NgModule({
  declarations: [
    ...component,
    ...directive
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  providers: [
    ApiService,
    UrlService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    AlertService
  ],
  exports: [
    ...component,
    ...directive
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
