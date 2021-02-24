<template>
  <div>
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
            <input-price
              :label="'Giá vốn'"
              :name="'inputImportPrice'"
              :value="inputImportPrice"
              @getValueInput="getValueInput"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Tên sản phẩm *"
              v-model="productName"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <input-price
              :label="'Giá bán'"
              :name="'inputExportPrice'"
              :value="inputExportPrice"
              @getValueInput="getValueInput"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              :items="unitOptions"
              label="Đơn vị *"
              v-model="unit"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6"></v-col>
          <v-col cols="12" sm="6">
            <v-select
              :items="productTypeOptions"
              label="Loại hàng *"
              v-model="productType"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6"></v-col>
          <v-col cols="12" sm="12">
            <v-textarea label="Mô tả" v-model="description"></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="closeModal">Hủy</v-btn>
      <v-btn color="success" :disabled="isDisabled" @click="addProduct"
        >Đồng ý</v-btn
      >
    </v-card-actions>
  </div>
</template>

<script>
import { ApiService } from "../../../services/api.service";
import { URL } from "../../../services/url.service";
import { padLeft, PRODUCT_EVENT } from "./Product.helper";
import InputPrice from "../../partials/input-price/InputPrice.vue";
import { AlertService } from "@/services/aleart.service";
import {mapGetters} from "vuex";
import {pluck} from 'rxjs/operators';
export default {
  name: "AddProduct",
  components: {
    InputPrice
  },
  props: {
    isEdit: Boolean,
  },
  data() {
    return {
      unitOptions: ["Kg", "Cây", "Tấn"],
      productTypeOptions: [
        "Sắt thép",
        "Xi măng",
        "Đinh",
        "Dây buộc",
        "Sắt đai"
      ],
      productKey: 0,
      inputImportPrice: "",
      inputExportPrice: "",
      productName: "",
      unit: "",
      productType: "",
      description: "",
      apiService: new ApiService(),
      alertService: new AlertService()
    };
  },
  mounted() {
    this.getLatestProduct();
    this.initialProduct();
  },
  computed: {
    ...mapGetters(['productId']),
    isDisabled: function() {
      return !this.productType || !this.productName || !this.unit;
    }
  },
  methods: {
    initialProduct() {
      if (this.isEdit) {
        let url = URL.PRODUCT.GET_PRODUCT_BY_ID + `?productId=${this.productId}`;
        this.apiService.doGetApi(url).pipe(pluck('data')).subscribe(res => {
          this.productKey = 'SP' + padLeft(res.productKey, 5, '0');
          this.description = res.description || '';
          this.productName = res.productName || '';
          this.productType = res.productType || '';
          this.unit = res.unit || '';
          this.inputImportPrice = res.importPrice || 0;
          this.inputExportPrice = res.exportPrice || 0;
        });
      }
    },
    getLatestProduct() {
      if (!this.isEdit) {
        this.apiService
          .doGetApi(URL.PRODUCT.GET_LATEST_PRODUCT)
          .subscribe(res => {
            if (res.data) {
              this.productKey = "SP" + padLeft(res.data.productKey + 1, 5, "0");
            }
          });
      }
    },
    closeModal() {
      this.$emit("closeModal", false);
    },
    getValueInput(res) {
      this[res.name] = res.value;
    },
    addProduct() {
      this.apiService
        .doPostApi(URL.PRODUCT.ADD_PRODUCT, {
          productName: this.productName,
          unit: this.unit,
          productType: this.productType,
          importPrice: this.inputImportPrice,
          exportPrice: this.inputExportPrice
        })
        .subscribe(
          res => {
            this.alertService.showSuccess(res.message || "");
            this.closeModal();
            this.triggerGetProductList();
          },
          err => this.alertService.showError(err.message)
        );
    },
    triggerGetProductList() {
      this.$root.$emit(PRODUCT_EVENT.GET_PRODUCT_AGAIN);
    }
  },
  watch : {
    productId : function(res){
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.col-12 {
  margin-bottom: -10px;
}

.v-card__actions {
  padding-right: 24px;
  padding-bottom: 15px;
}
</style>
