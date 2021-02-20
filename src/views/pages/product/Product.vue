<template>
  <v-app class="product">
    <div class="row">
      <div class="col-md-3 add-padding">
        <SearchProductType v-on:filterItem="filterItem($event)" />
      </div>
      <div class="col-md-9 add-padding">
        <v-skeleton-loader
          v-if="isLoading"
          :loading="isLoading"
          type="table"
          :rows="10"
        ></v-skeleton-loader>
        <ProductList v-else v-bind:productListData="productList" />
      </div>
    </div>
  </v-app>
</template>

<script>
import { ApiService } from "../../../services/api.service";
import { URL } from "../../../services/url.service";
import ProductList from "./ProductList.vue";
import SearchProductType from "./SearchProductType.vue";

export default {
  components: {
    ProductList,
    SearchProductType,
  },
  name: "product",
  data() {
    return {
      productList: [],
      tempProductList: [],
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
        this.tempProductList = res?.data || [];
      });
    },
    filterItem(event) {
      const allData = "Tất cả";
      if (event === allData) {
        this.productList = this.tempProductList;
      } else {
        console.log('here');
        this.productList = this.tempProductList.filter(
          (item) => item.productType === event
        );
        console.log(this.productList);
      }
    },
  },
};
</script>

<style lang="scss">
.product {
  .add-padding {
    padding-top: 10px;
  }
}
</style>