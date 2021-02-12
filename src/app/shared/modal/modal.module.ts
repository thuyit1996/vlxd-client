import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { NbCardModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';


const modules = [
  NbWindowModule.forChild(),
  NbCardModule,
  FormsModule,
  ThemeModule,
  NbInputModule,
]

const component = [
  ModalComponent
]

@NgModule({
  declarations: [...component],
  imports: [
    ...modules
  ],
  exports: [
    ...component,
  ]
})
export class ModalModule { }
