<template>
 
   <div class ="border">
     <div class="bg">
    <div v-bind:style="{ background: backgroundString, opacity: renderOpacity}" class="gradient"></div>
    <div/>
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
      "getAngle",
      "getDirection"
    ]),
    backgroundString: function() {
      if(this.getDirection == "linear"){
      return `linear-gradient(${this.getAngle}deg, ${this.getFirstColour} ${this.getPercentage}%, ${this.getSecondColour} 100%)`;
      }
      else if(this.getDirection == "radial"){
        return `radial-gradient(circle, ${this.getFirstColour} ${this.getPercentage}%, ${this.getSecondColour} 100%)`;

      }
      else{
        return 'error'
      }
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
.bg{
  width: 100%;
  height: 27rem;
  background-color: white;
  position: relative;
  z-index: 10;
   border-top: 1px solid #24292E;
  border-bottom: 1px solid #24292E;

}
.border{
   width: 100%;
  margin: 2rem auto 0rem auto;
  height: 27rem;
 
  z-index: 10;
  position: relative;
 

}
.gradient {
  width: 100%;
  height: 100%;
  
 
}
</style>
