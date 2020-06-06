<template>
  <div>
      {{renderOpacity}}
    <div
      v-bind:style="{ background: backgroundString, opacity: renderOpacity}"
      class="gradient"
    ></div>
    {{ getPercentage }}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed:{ 
      ...mapGetters(["getPercentage", "getOpacity", "getFirstColour", "getSecondColour"]),
       backgroundString: function () {
           return `${this.direction}(${this.degree}deg, ${this.getFirstColour} ${this.getPercentage}%, ${this.getSecondColour} 100%)`
       },
       renderOpacity: function () {
           if(this.getOpacity == 10){
               return 1
           }
           return `0.${this.getOpacity}`
       }
  },


   data: function () {
    return {
      
      direction: 'linear-gradient',
      degree: '90'


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
