<template>
  <v-card-text>
    <v-container class="add-product-modal">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
              label="Mã sản phẩm"
              readonly
              v-model="productKey"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <input-price :label="'Giá vốn'" :valueInput="inputImportPrice"/>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Tên sản phẩm" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <input-price :label="'Giá bán'" :valueInput="inputExportPrice"/>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select :items="unit" label="Đơn vị"></v-select>
        </v-col>
        <v-col cols="12" sm="6"></v-col>
        <v-col cols="12" sm="6">
          <v-select :items="productTypes" label="Loại hàng"></v-select>
        </v-col>
        <v-col cols="12" sm="6"></v-col>
        <v-col cols="12" sm="12">
          <v-textarea label="Mô tả"></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
</template>

<script>
import {ApiService} from "../../../services/api.service";
import {URL} from "../../../services/url.service";
import {padLeft} from "./Product.helper";
import InputPrice from '../../partials/input-price/InputPrice.vue';

export default {
  name: "AddProduct",
  components: {
    InputPrice,
  },
  data() {
    return {
      unit: ["Kg", "Cây", "Tấn"],
      productTypes: ["Sắt thép", "Xi măng", "Đinh", "Dây buộc", "Sắt đai"],
      productKey: 0,
      inputImportPrice: '',
      inputExportPrice: '',
    };
  },
  mounted() {
    this.getLatestProduct();
  },
  methods: {
    getLatestProduct() {
      const apiService = new ApiService();
      apiService.doGetApi(URL.PRODUCT.GET_LATEST_PRODUCT).subscribe((res) => {
        if (res.data) {
          this.productKey = "SP" + padLeft(res.data.productKey + 1, 5, "0");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.col-12 {
  margin-bottom: -10px;
}
</style>