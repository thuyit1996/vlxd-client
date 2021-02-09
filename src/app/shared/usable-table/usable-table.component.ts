import { Component, Input, OnInit } from '@angular/core';
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



  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
    console.log(this.tableSetting);

  }

  ngOnInit() {
  }

  onDeleteConfirm(event: any): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
