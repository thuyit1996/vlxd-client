<template>
  <v-dialog v-model="isOpenModal" max-width="800px" persistent>
    <v-card>
      <v-card-title class="headline">{{ modalHeader }}</v-card-title>
      <slot></slot>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="closeModal">
          Hủy
        </v-btn>

        <v-btn color="green darken-1" text @click="closeModal">Đồng ý</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "BasicModal",
  props: {
    isOpenModal: Boolean,
    modalHeader: String,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>