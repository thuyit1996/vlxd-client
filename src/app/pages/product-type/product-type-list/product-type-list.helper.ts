export const TABLE_NAME = 'Danh sách mặt hàng';
export const MESSAGE_CONFIRM = 'Xóa sản phầm này nhé ?';
export const productTypeSetting = {
  actions: {
    add: false,
  },
  pager: {
    perPage: 5
  },
  mode: 'external',
  add: {
    addButtonContent: '<i class="nb-plus"></i>',
    createButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
  },
  edit: {
    editButtonContent: '<i class="nb-edit"></i>',
    saveButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',

  },
  delete: {
    deleteButtonContent: '<i class="nb-trash"></i>',
    confirmDelete: true,
  },
  columns: {
    stt: {
      title: 'STT',
      type: 'number',
    },
    productName: {
      title: 'Tên mặt hàng',
      type: 'string',
    },
    unit: {
      title: 'Đơn vị',
      type: 'string',
    },
    importPrice: {
      title: 'Giá nhập',
      type: 'string',
    },
    exportPrice: {
      title: 'Giá bán',
      type: 'string',
    }
  },
}

export const productData = [
  {
    id: 1,
    productName: 'Xi măng Thăng Long',
    unit: 'Bao',
    importPrice: 63000,
    exportPrice: 70000,
  },
  {
    id: 2,
    productName: 'Xi măng Hoàng Thạch',
    unit: 'Bao',
    importPrice: 70000,
    exportPrice: 80000,
  },
  {
    id: 3,
    productName: 'Xi măng cẩm phả',
    unit: 'Bao',
    importPrice: 67000,
    exportPrice: 75000,
  },
  {
    id: 4,
    productName: 'Xi măng Lam Thạch',
    unit: 'Bao',
    importPrice: 54000,
    exportPrice: 64000,
  },
  {
    id: 5,
    productName: 'Đinh 5',
    unit: 'Kg',
    importPrice: 17000,
    exportPrice: 20000,
  },
  {
    id: 6,
    productName: 'Đinh 7',
    unit: 'Kg',
    importPrice: 17000,
    exportPrice: 20000,
  },
  {
    id: 7,
    productName: 'Săt 6',
    unit: 'Kg',
    importPrice: 12000,
    exportPrice: 14000,
  },
  {
    id: 8,
    productName: 'Săt 8',
    unit: 'Kg',
    importPrice: 12000,
    exportPrice: 14000,
  },
  {
    id: 9,
    productName: 'Săt 9',
    unit: 'Cây',
    importPrice: 85000,
    exportPrice: 88000,
  },
  {
    id: 10,
    productName: 'Săt 10',
    unit: 'Cây',
    importPrice: 94000,
    exportPrice: 100000,
  },
  {
    id: 11,
    productName: 'Săt 12',
    unit: 'Cây',
    importPrice: 110000,
    exportPrice: 115000,
  },
  {
    id: 12,
    productName: 'Săt 14',
    unit: 'Cây',
    importPrice: 145000,
    exportPrice: 155000,
  },
  {
    id: 13,
    productName: 'Săt 16',
    unit: 'Cây',
    importPrice: 210000,
    exportPrice: 220000,
  },
  {
    id: 14,
    productName: 'Săt 18',
    unit: 'Cây',
    importPrice: 310000,
    exportPrice: 325000,
  },
]