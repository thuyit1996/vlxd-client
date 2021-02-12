import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';
abstract class IAlertService {
  abstract showSuccess(message: string): void;
  abstract showError(message: string): void;
  abstract confirm(message: string): Promise<any>;
}
@Injectable()

export class AlertService extends IAlertService {
  showSuccess(message: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  showError(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Lỗi',
      text: message,
    })
  }

  confirm(message: string) {
    return Swal.fire({
      title: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy'
    })
  }
}