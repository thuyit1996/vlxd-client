import Swal from 'sweetalert2';

export class AlertService {
  showSuccess(message) {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
    })
  }

  showError(message) {
    Swal.fire({
      icon: 'error',
      title: 'Lỗi',
      text: message,
    })
  }

  confirm(message) {
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