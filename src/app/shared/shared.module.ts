import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsableTableComponent } from './usable-table/usable-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';



@NgModule({
  declarations: [UsableTableComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  exports: [
    UsableTableComponent
  ]
})
export class SharedModule { }
