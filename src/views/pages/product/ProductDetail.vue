<template>
  <v-dialog
    v-model="isShowDetail"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    class="product-detail-modal"
  >
    <v-card>
      <v-toolbar dark color="success">
        <v-btn icon dark @click="closeModalDetail">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Chi tiết sản phẩm</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-list three-line subheader>
              <v-subheader class="product-name">{{
                rowClickData.productName || ""
              }}</v-subheader>
              <v-list-item>
                <img :src="getProductImage()" class="product-image" />
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="8" class="right-detail">
            <v-list three-line>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Mã sản phẩm</v-list-item-title>
                  <v-list-item-subtitle
                    >{{ rowClickData.key }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Nhóm hàng</v-list-item-title>
                  <v-list-item-subtitle
                    >{{ rowClickData.productType || "" }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Đơn vị</v-list-item-title>
                  <v-list-item-subtitle
                    >{{ rowClickData.unit || "" }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Giá vốn</v-list-item-title>
                  <v-list-item-subtitle
                    >{{ rowClickData.newImportPrice || "" }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Giá bán</v-list-item-title>
                  <v-list-item-subtitle
                    >{{ rowClickData.newExportPrice || "" }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div class="button-action">
              <b-button
                class="mr-3"
                :pressed="true"
                variant="danger"
                @click="deleteProduct"
                :disabled="isDisableRemove"
                ><img
                  svg-inline
                  class="kt-svg-icon kt-svg-icon--success kt-svg-icon--md"
                  src="@/assets/media/icons/svg/Files/Deleted-file.svg"
                  alt=""
                />Xóa
              </b-button>
              <b-button
                class="mr-3"
                :pressed="true"
                variant="success"
                @click="openEditProduct"
                ><img
                  svg-inline
                  class="kt-svg-icon kt-svg-icon--success kt-svg-icon--md"
                  src="@/assets/media/icons/svg/Design/Edit.svg"
                  alt=""
                />Cập nhật
              </b-button>
              <basic-modal
                v-bind:isOpenModal="isEditProduct"
                @closeModal="closeModalEdit"
                v-bind:modalHeader="'Sửa sản phẩm'"
              >
                <add-product
                  @closeModal="closeModalEdit"
                  :isEdit="true"
                  :productDetail="rowData"
                  :productId="productId"
                />
              </basic-modal>
              <b-button
                class="mr-3"
                :pressed="true"
                variant="primary"
                v-if="isRestoreProduct"
                @click="restoreProduct"
                ><img
                  svg-inline
                  class="kt-svg-icon kt-svg-icon--success kt-svg-icon--md"
                  src="@/assets/media/icons/svg/Code/Time-schedule.svg"
                  alt=""
                />Khôi phục
              </b-button>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
import { PRODUCT_EVENT, PRODUCT_TYPES } from "./Product.helper";
import { ApiService } from "@/services/api.service";
import { AlertService } from "@/services/aleart.service";
import { URL } from "@/services/url.service";
import BasicModal from "../../partials/modal/BasicModal.vue";
import AddProduct from "./AddProduct.vue";
import { mapActions } from "vuex";

export default {
  name: "ProductDetail",
  components: {
    BasicModal,
    AddProduct
  },
  props: { isShowDetail: Boolean, rowClickData: Object },
  data() {
    return {
      rowData: null,
      apiService: new ApiService(),
      alertService: new AlertService(),
      isRestoreProduct: false,
      isDisableRemove: false,
      isUpdateProduct: false,
      isEditProduct: false,
      productId: ""
    };
  },
  mounted() {},
  methods: {
    ...mapActions("product", ["viewProductId"]),
    closeModalDetail() {
      this.$emit("closeModalDetail", false);
      if (this.isUpdateProduct) {
        setTimeout(() => {
          this.triggerGetProductList();
        }, 200);
      }
    },

    closeModalEdit(event) {
      this.isEditProduct = event;
    },

    getProductImage() {
      if (this.rowData) {
        if (this.rowData.productType === PRODUCT_TYPES.SAT_THEP) {
          return "https://i.ibb.co/TT4TTHb/sat-thep.png";
        } else if (this.rowData.productType === PRODUCT_TYPES.XI_MANG) {
          return "https://i.ibb.co/VNsFY60/xi-mang.jpg";
        } else if (this.rowData.productType === PRODUCT_TYPES.DAY_BUOC) {
          return "https://i.ibb.co/4v53Fbg/day-buoc.jpg";
        } else if (this.rowData.productType === PRODUCT_TYPES.DINH) {
          return "https://i.ibb.co/Wnc9Ryd/dinh.jpg";
        } else if (this.rowData.productType === PRODUCT_TYPES.SAT_DAI) {
          return "https://i.ibb.co/GMrhBZq/sat-dai.jpg";
        } else {
          return "https://i.ibb.co/Thx7rBH/default.png";
        }
      }
      return "https://i.ibb.co/Thx7rBH/default.png";
    },

    async deleteProduct() {
      let callBackModal = await this.alertService.confirm(
        "Bạn có muốn xóa sản phẩm này không? "
      );
      if (callBackModal.value) {
        let url =
          URL.PRODUCT.DELETE_PRODUCT + `?productId=${this.rowClickData._id}`;
        this.apiService.doDeleteApi(url).subscribe(
          res => {
            this.alertService.showSuccess(res.message || "");
            this.isRestoreProduct = true;
            this.isDisableRemove = true;
            this.isUpdateProduct = true;
          },
          error => this.alertService.showError(error.message || "")
        );
      } else {
        return;
      }
    },

    triggerGetProductList() {
      this.$root.$emit(PRODUCT_EVENT.GET_PRODUCT_AGAIN);
    },

    async restoreProduct() {
      let callBackModal = await this.alertService.confirm(
        "Bạn có muốn khôi phục sản phẩm này không? "
      );
      if (callBackModal.value) {
        let url =
          URL.PRODUCT.RESTORE_PRODUCT + `?productId=${this.rowClickData._id}`;
        this.apiService.doDeleteApi(url).subscribe(
          res => {
            this.alertService.showSuccess(res.message || "");
            this.isRestoreProduct = false;
            this.isDisableRemove = false;
            this.isUpdateProduct = true;
          },
          error => this.alertService.showError(error.message || "")
        );
      } else {
        return;
      }
    },
    openEditProduct() {
      this.isEditProduct = true;
      this.viewProductId(this.rowData._id);
    }
  },
  watch: {
    rowClickData: function(row) {
      this.rowData = row;
      console.log(this.rowData);
    }
  }
};
</script>

<style lang="scss" scoped>
.product-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.product-image {
  width: 100%;
}

.right-detail {
  padding-top: 40px;
  padding-left: 40px;
}

.v-list-item__title {
  font-weight: bold;
  font-size: 1.3rem;
}

.v-list-item__subtitle {
  font-weight: 700;
  font-size: 1.1rem;
}

.v-divider {
  margin-top: 0;
  margin-bottom: 0;
}

.button-action {
  display: flex;
  flex-direction: row-reverse;

  svg {
    width: 23px;
    height: 23px;
  }

  button:last-child {
    margin-right: 10px;
  }
}
</style>
