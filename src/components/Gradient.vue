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
      ...mapGetters(["getPercentage", "getOpacity"]),
       backgroundString: function () {
           return `${this.direction}(${this.degree}deg, ${this.color1} ${this.getPercentage}%, ${this.color2} 100%)`
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
        backgroundGradient1: 'linear-gradient( rgba(0, 23, 32, 0.9) 70%, rgba(255, 32, 32, 0.9) 100%)',
      backgroundGradient: '( rgba(0, 23, 32, 0.9) 70%, rgba(255, 32, 32, 0.9) 100%)',
      direction: 'linear-gradient',
      color1: 'rgba(0, 23, 32, 0.9)',
      color2: 'rgba(255, 32, 32, 0.9)',
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
