<template>
  <v-text-field :label="label" :value="valueInput" @keydown="inputNumberOnly" @keyup="onKeyUp"></v-text-field>
</template>

<script>

function reverseString(str) {
  return str.split("").reverse().join("");
}

export default {
  name: "InputPrice",
  props: {
    label: String,
    valueInput: String,
  },
  methods: {

    inputNumberOnly(event) {
      let keyCode = event.keyCode;
      if (event.shiftKey) {
        event.preventDefault();
        return;
      }
      if ((keyCode !== 9 && keyCode !== 8 && keyCode !== 37 && keyCode !== 39 && keyCode !== 190 && keyCode !== 110) && (48 > keyCode || 57 < keyCode) && (105 < keyCode || 96 > keyCode)) {
        event.preventDefault();
        return;
      }
      if ((keyCode === 190 || keyCode === 110) && event.target.value.indexOf('.') >= 0) {
        event.preventDefault();
        return;
      }
      if (event.target.value.split('.')[1]?.length > 1 && ((48 <= keyCode && 57 >= keyCode) || (96 <= keyCode && 105 >= keyCode))) {
        event.preventDefault();
        return;
      }
    },

    onKeyUp(event) {
      if (event.target.value[0] === '0') {
        if (event.target.value.length >= 2 && event.target.value[1] != '.') {
          this.valueInput = event.target.value.slice(1);
        }
      }
      this.transformValueInput(event);
    },

    transformValueInput(event) {
      let decimal = event.target.value.split('.')[0];
      let floatNum = event.target.value.split('.')[1];
      let newDecimal = '';
      if (decimal && decimal.length > 3) {
        decimal = decimal.split(',').join('');
        for (let index = decimal.length; index--; index > -1) {
          newDecimal += decimal[index];
          if ((decimal.length - index) % 3 === 0 && 0 !== index) {
            newDecimal += ",";
          }
        }
        let returnString = '';
        returnString = reverseString(newDecimal);
        if (floatNum !== undefined) {
          returnString += '.' + floatNum.toString();
        }
        this.valueInput = returnString;
      }
    },
  }
};
</script>

<style>
</style>