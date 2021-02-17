<template><ProductList /></template>

<script>
import { bufferCount, tap, toArray } from "rxjs/operators";
import { ApiService } from "../../../services/api.service";
import { from } from "rxjs";
import { URL } from "../../../services/url.service";
import ProductList from "./ProductList.vue";
const DISPLAY_PRODUCT_PER_ROW = 4;
export default {
  components: {
    ProductList,
  },
  name: "product",
  data() {
    return {
      productList: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const apiService = new ApiService();
      apiService.doGetApi(URL.PRODUCT.GET_ALL).subscribe((res) => {
        let data = res.data || [];
        from(data)
          .pipe(
            bufferCount(DISPLAY_PRODUCT_PER_ROW),
            toArray(),
            tap(() => (this.isLoading = false))
          )
          .subscribe((res) => (this.productList = res || []));
      });
    },
  },
};
</script>

<style>
</style>