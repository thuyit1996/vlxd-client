import { NgModule } from "@angular/core";
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../../@theme/theme.module";
import { UsableTableComponent } from "./usable-table.component";
const component = [
  UsableTableComponent
]
@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...component
  ],
  exports: [
    ...component
  ]
})

export class UsageTableModule {

}