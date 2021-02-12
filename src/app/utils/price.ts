type TPriceFormat = (price: number | string) => string;
export abstract class IPriceHelper {
  abstract formatPrice(price: number | string): string;
}
export class Price extends IPriceHelper {
  formatPrice: TPriceFormat = (price) => {
    let newPrice = Number(price);
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newPrice)
  }
}