<template>
  <div class="circle" v-bind:style="{}">
    <!-- <p>{{colour}}</p> -->
  </div>
</template>

<script>
export default {
  props: ["colour"],
  // computed: {
  //   style () {
  //     return 'background-color: ' + this.hovering ? this.color: 'red';
  //   }
  // },
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
  height: 3rem;
  width: 3rem;
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