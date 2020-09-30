<template>
  <div class="circle" :style="{background: bgstyle, top: height, left: newwidth, width: diameter, height: diameter }">
    <!-- <p>{{colour}}</p> -->
  </div>
</template>

<script>
export default {
  props: ["colour"],
  computed: {
    bgstyle () {
      return "linear-gradient(to right bottom," + this.colour +")";
    },
 
    diameter() {
      return Math.random() * (120 - 40) + 40 +'px';
    },
    height() {
      return Math.round(Math.random() * 200)+ 'px';
    },
    newwidth() {
      return Math.round(Math.random() * this.winWidth)+'px';
    },
  },
  created() {
    this.winWidth = window.innerWidth;
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
  background-color: blue;
  /* height: 3rem;
  width: 3rem; */
}
.circles {
  background: "linear-gradient(to right bottom," + bgColor + ")";

  width: diameter;
  height: diameter;
  opacity: 0.2;

  position: "absolute";
  top: newheight + "px";
  left: newwidth + "px";
}
</style>