<template>
  <v-dialog v-model="isOpenModal" max-width="800px" persistent>
    <v-card>
      <v-card-title class="headline">{{ modalHeader }}</v-card-title>
      <slot></slot>

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
    // closeModal() {
    //   this.$emit("closeModal", false);
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>