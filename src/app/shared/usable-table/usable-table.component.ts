import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';


interface ITable {
  [key: string]: any;
}

@Component({
  selector: 'ngx-usable-table',
  templateUrl: './usable-table.component.html',
  styleUrls: ['./usable-table.component.scss']
})
export class UsableTableComponent implements OnInit {
  @Input('tableName') tableName: string = '';
  @Input('tableSetting') tableSetting: ITable;
  @Input('productData') productData: any[] = [];
  @Output() deleteRow = new EventEmitter();
  @Output() editRow = new EventEmitter();



  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
  }

  $usageTable_onDelete(event: any): void {
    const rowId = event?.data?._id;
    this.deleteRow.emit(rowId);
  }

  $usageTable_onEdit(event) {
    const rowId = event?.data?._id;
    this.editRow.emit(rowId);
  }

}
