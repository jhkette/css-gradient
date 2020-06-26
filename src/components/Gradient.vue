<template>
  <div>
   <div class ="border">
    <div v-bind:style="{ background: backgroundString, opacity: renderOpacity}" class="gradient"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "getPercentage",
      "getOpacity",
      "getFirstColour",
      "getSecondColour",
      "getAngle"
    ]),
    backgroundString: function() {
      return `${this.direction}(${this.getAngle}deg, ${this.getFirstColour} ${this.getPercentage}%, ${this.getSecondColour} 100%)`;
    },
    renderOpacity: function() {
      if (this.getOpacity == 10) {
        return 1;
      }
      return `0.${this.getOpacity}`;
    }
  },

  data: function() {
    return {
      direction: "linear-gradient",
      degree: "90"
    };
  }
};
</script>
<style scoped>
.border{
   width: 80%;
  margin: 3rem auto 2rem auto;
  height: 6rem;
  border: 5px solid #0e0e0e;
  border-radius: 5px;

}
.gradient {
  width: 100%;
  height: 100%;
 
}
</style>
