<template><Widget17 /></template>

<script>
import Widget17 from "../../partials/widgets/Widget17";
import { ApiService } from "../../../services/api.service";
import { URL } from "../../../services/url.service";
export default {
  components: {
    Widget17,
  },
  name: "product",
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    const apiService = new ApiService();
    apiService.doGetApi(URL.PRODUCT.GET_ALL).subscribe(console.log);
  },
};
</script>

<style>
</style>