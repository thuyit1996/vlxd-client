import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
interface IFormModal {
  productName: string;
  unit: string;
  importPrice: number;
  exportPrice: number;
}
@Component({
  selector: 'ngx-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent implements OnInit {
  modalHeader: string;
  modalActionType: string;
  formValue: IFormModal;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {

  }
  $addProduct_closeModal() {
    this.activeModal.close();
  }
}
