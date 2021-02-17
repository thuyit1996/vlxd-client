type TPriceFormat = (price: number | string) => string;
export abstract class IPriceHelper {
  abstract formatPrice(price: number | string): string;
}
export class Price extends IPriceHelper {
  formatPrice: TPriceFormat = (price) => {
    let newPrice = Number(price);
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newPrice)

  }
  onKeyDown(event) {

    let keyCode = event.keyCode;
    if (event.shiftKey) {
      event.preventDefault();
      return;
    }
    if ((keyCode !== 9 && keyCode !== 8 && keyCode !== 37 && keyCode !== 39 && keyCode !== 190 && keyCode !== 110) && (48 > keyCode || 57 < keyCode) && (105 < keyCode || 96 > keyCode)) {
      event.preventDefault();
      return;
    }

    if ((keyCode === 190 || keyCode === 110) && event.target.value.indexOf('.') >= 0) {
      event.preventDefault();
      return;
    }


    if (event.target.value.split('.')[1]?.length > 1 && ((48 <= keyCode && 57 >= keyCode) || (96 <= keyCode && 105 >= keyCode))) {
      event.preventDefault();
      return;
    }
  }
}