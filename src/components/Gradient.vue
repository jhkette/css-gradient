<template>
  <div>
    <div
      v-bind:style="{ background: backgroundGradient  }"
      class="gradient"
    ></div>
    {{ getPercentage }}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed:{ 
      ...mapGetters(["getPercentage"]),
  },


   data: function () {
    return {
      backgroundGradient: 'linear-gradient( rgba(0, 23, 32, 0.9) 70%, rgba(255, 32, 32, 0.9) 100%)'
   }
  },
};
</script>
<style scoped>
.gradient {
  width: 80%;
  margin: 5rem auto;
  height: 8rem;
}
</style>
