  
<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="productData"
    item-key="name"
    fixed-header
    show-select
    height="63vh"
    class="elevation-1 product-list"
  >
  </v-data-table>
</template>

<script>
import { headersConfig, formatProductList } from "./Product.helper";
export default {
  name: "ProductList",
  props: {
    productListData: Array,
  },
  data() {
    return {
      selected: [],
      headers: headersConfig,
      productData: [],
    };
  },
  mounted() {
    this.productData = formatProductList(this.productListData);
  },
  watch: {
    productListData: function (res) {
      this.productData = formatProductList(res);
    },
  },
};
</script>
<style lang="scss">
v-data-table-header {
  display: none;
}
</style>