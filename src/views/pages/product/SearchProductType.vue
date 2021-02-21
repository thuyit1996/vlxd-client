<template>
  <KTCodePreview :title="searchTitle" class="search-product">
    <template v-slot:preview>
      <b-list-group>
        <b-list-group-item
            v-for="type in searchType"
            :key="type.id"
            v-bind:class="['add-point', { active: type.isActive }]"
            @click="activeItem(type.id)"
        >
          <span>{{ type.title }}</span>
          <span v-if="type.id === 0" class="all-product-count">{{
              totalProduct
            }}</span>
        </b-list-group-item>
      </b-list-group>
    </template>
  </KTCodePreview>
</template>

<script>
import KTCodePreview from "@/views/partials/content/CodePreview.vue";
import {PRODUCT_EVENT} from "@/views/pages/product/Product.helper";

const searchType = [
  {id: 0, isActive: true, title: "Tất cả"},
  {id: 1, isActive: false, title: "Xi măng"},
  {id: 2, isActive: false, title: "Sắt thép"},
  {id: 3, isActive: false, title: "Đinh"},
  {id: 4, isActive: false, title: "Dây buộc"},
  {id: 5, isActive: false, title: "Sắt đai"},
];
export default {
  name: "SearchProductType",
  components: {
    KTCodePreview,
  },
  props: {
    totalProduct: Number,
  },
  data() {
    return {
      searchType,
      searchTitle: "Lọc sản phẩm",
    };
  },
  mounted() {
    this.resetSearchProduct();
  },
  methods: {
    activeItem(id) {
      this.searchType = this.searchType.map((item) => {
        let newItem = {...item};
        newItem.isActive = newItem.id === id;
        if (newItem.id === id) {
          this.$emit("filterItem", newItem.title);
        }
        return newItem;
      });
    },
    resetSearchProduct() {
      this.$root.$on(PRODUCT_EVENT.GET_PRODUCT_AGAIN, () => this.searchType = searchType);
    }
  },
};
</script>

<style lang="scss">
.search-product {
  .kt-portlet__head-toolbar {
    display: none !important;
  }

  .add-point {
    cursor: pointer;
  }

  .all-product-count {
    float: right;
  }
}
</style>