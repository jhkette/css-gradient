<template>
  <div
    class="circle"
    :style="{
      background: bgstyle,
      top: height,
      left: newwidth,
      width: diameter,
      height: diameter,
    }"
  >
  </div>
</template>

<script>
export default {
  props: ["colour"],
  data: function () {
    return {
      winWidth: null,
      winHeight: null,
    };
  },
  computed: {
    bgstyle() {
      return "linear-gradient(to right bottom," + this.colour + ")";
    },
    diameter() {
      return Math.random() * (220 - 70) + 70 + "px";
    },
    height() {
      return Math.round(Math.random() * 280) + 60 + "px";
    },
    newwidth() {
      return Math.round(Math.random() * this.winWidth - 220) + "px";
    },
  },
  created() {
    this.winWidth = window.innerWidth;
    this.winHeight = window.innerHeight;
  },
};
</script>

<style scoped>
.circle {
  padding: 10;
  margin: 20;
  z-index: 0;
  border-radius: 50%;
  display: "inline-block";
  position: absolute;
  opacity: 1;
  border: 2px solid #24292e;
}

</style>