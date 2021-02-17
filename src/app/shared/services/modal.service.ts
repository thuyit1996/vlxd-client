import { Injectable } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
  providedIn: 'root'
})

export class ModalService {
  constructor(
    private modal: NgbModal
  ) {
  }
  openModal(component: any, config: any, data?: object) {
    let defaultOption = { backdrop: 'static', keyboard: false };
    let activeModal = this.modal.open(component, { ...defaultOption, ...config })
    if (data) {
      for (let [key, value] of Object.entries(data)) {
        activeModal.componentInstance[key] = value
      }
    }
    return activeModal.result;
  }
}