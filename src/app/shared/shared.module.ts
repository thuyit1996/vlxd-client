import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { DestroyableDirective } from './directive/destroyable.directive';
import { UrlService } from './services/url.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './inteceptor/http.interceptor';
import { AlertService } from './services/alert.service';


const directive = [
  DestroyableDirective
]
@NgModule({
  declarations: [
    ...directive
  ],
  imports: [
    CommonModule,

  ],
  providers: [
    ApiService,
    UrlService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    AlertService
  ],
  exports: [
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
