  
<template>
  <div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-9 product-list-header-action">
        <v-text-field
          v-model="searchQuery"
          append-icon="search"
          label="Tìm theo tên sản phẩm"
          single-line
          hide-details
          class="search-field"
          @keyup="searchProduct"
        ></v-text-field>
        <b-button class="mr-3" :pressed="true" variant="success">
          <img
            svg-inline
            class="kt-svg-icon kt-svg-icon--success kt-svg-icon--md"
            src="@/assets/media/icons/svg/Shopping/Price2.svg"
            alt=""
          />
          Xuất báo giá
        </b-button>
        <b-button
          class="mr-3"
          :pressed="true"
          variant="success"
          @click.stop="isOpenModal = true"
        >
          <img
            svg-inline
            class="kt-svg-icon kt-svg-icon--success kt-svg-icon--md"
            src="@/assets/media/icons/svg/Files/File-plus.svg"
            alt=""
          />
          Thêm sản phẩm
        </b-button>
        <basic-modal
          v-bind:isOpenModal="isOpenModal"
          v-on:closeModal="closeModal($event)"
          v-bind:modalHeader="'Thêm sản phẩm'"
        >
          <add-product />
        </basic-modal>
      </div>
    </div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="productData"
      item-key="name"
      fixed-header
      show-select
      height="60vh"
      class="elevation-1 product-list"
    >
    </v-data-table>
  </div>
</template>

<script>
import { headersConfig, formatProductList } from "./Product.helper";
import { removeSpecialCharacter } from "../../../shared/helper";
import BasicModal from "../../partials/modal/BasicModal.vue";
import AddProduct from "./AddProduct.vue";
export default {
  name: "ProductList",
  components: {
    BasicModal,
    AddProduct,
  },
  props: {
    productListData: Array,
  },
  data() {
    return {
      selected: [],
      headers: headersConfig,
      productData: [],
      temProductData: [],
      searchQuery: "",
      isOpenModal: false,
    };
  },
  mounted() {
    this.productData = formatProductList(this.productListData);
    this.temProductData = formatProductList(this.productListData);
  },
  methods: {
    searchProduct(event) {
      let query = event.target.value;
      this.productData = this.temProductData.filter(
        (item) => removeSpecialCharacter(item.productName).indexOf(query) != -1
      );
    },
    closeModal(event) {
      this.isOpenModal = event;
    },
  },
  watch: {
    productListData: function (res) {
      this.productData = formatProductList(res);
      this.temProductData = formatProductList(res);
    },
  },
};
</script>
<style lang="scss" scoped>
.search-field {
  margin-bottom: 20px;
}
.product-list-header-action {
  display: flex;
  align-items: center;
  justify-content: center;
  .search-field {
    margin-right: 15px;
  }
  .kt-svg-icon.kt-svg-icon--md {
    width: 23px !important;
    height: 23px !important;
  }
}
</style>