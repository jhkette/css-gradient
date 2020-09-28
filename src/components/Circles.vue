<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return;
    [
      "#E94F37, #bb2d50",
      "#1C89BF, #e3f7ff",
      "#A1D363, #90ee90",
      "#85FFC7, #3cb371",
      "#297373, #2f4f4f",
      "#FF8552, #fdc888",
      "#A40E4C ,#ffc2c2",
      "#E94F37, #bb2d50",
      "#1C89BF, #e3f7ff",
      "#A1D363, #90ee90",
    ];
  },
  computed: {
    diameter() {
      return Math.random() * (120 - 40) + 40;
    },
    height() {
      return Math.round(Math.random() * height);
    },
    newwidth() {
      return Math.round(Math.random() * width);
    },
  },
};
</script>

<style scoped>
</style>