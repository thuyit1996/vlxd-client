<template>
  <v-app>
    <v-skeleton-loader
      v-if="isLoading"
      :loading="isLoading"
      type="table"
      :rows="10"
    ></v-skeleton-loader>
    <product-list v-else />
  </v-app>
</template>

<script>
import { ApiService } from "../../../services/api.service";
import { URL } from "../../../services/url.service";
import ProductList from "./ProductList.vue";
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
        this.isLoading = false;
        this.productList = res?.data || [];
      });
    },
  },
};
</script>

<style>
</style>