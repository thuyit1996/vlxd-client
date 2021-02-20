// import { padLeft } from '../../../shared/helper';
export const headersConfig = [
  {
    text: "Mã mặt hàng",
    align: "start",
    value: "key",
    class: "blue lighten-5",
  },
  { text: "Tên hàng", value: "productName", class: "blue lighten-5" },
  { text: "Đơn vị", value: "unit", class: "blue lighten-5" },
  { text: "Nhóm hàng", value: "productType", class: "blue lighten-5" },
  { text: "Giá vốn", value: "newImportPrice", class: "blue lighten-5" },
  { text: "Giá bán", value: "newExportPrice", class: "blue lighten-5" },
];

function padLeft(str, length, paddingCharacter) {
  str = "" + str;

  while (str.length < length) {
    str = paddingCharacter + str;
  }

  return str;
}

export function formatPrice(price) {
  let newPrice = Number(price);
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newPrice)
}

export function formatProductList(productList) {
  if (productList?.length) {
    let newProductList = JSON.parse(JSON.stringify(productList));
    newProductList = newProductList.map(item => {
      return {
        ...item,
        key: 'SP' + padLeft(item.productKey, 5, "0"),
        newImportPrice: formatPrice(item.importPrice),
        newExportPrice: formatPrice(item.exportPrice),
      }
    });
    return newProductList;
  } else {
    return []
  }
}