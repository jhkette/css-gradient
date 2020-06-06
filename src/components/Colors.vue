<template>
  <div>
    <v-col class="d-flex justify-space-around">
        
      <v-color-picker @input="all"></v-color-picker>
      <v-color-picker @input="all1"></v-color-picker>
    </v-col>
    <div class="swatch" v-bind:style="{backgroundColor: getFirstColour }"></div>
    <div class="swatch" v-bind:style="{backgroundColor: getSecondColour }"></div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// https://codepen.io/JamieCurnow/pen/KKPjraK
export default {
  computed: {
    ...mapGetters(["getFirstColour", "getSecondColour"])
  },
  methods:{ 
      ...mapActions(["addSecondColour", "addFirstColour"]),
      all: function(event){
          this.addFirstColour(event);
          console.log('hello')
      },
      all1: function(event){
          this.addSecondColour(event);
          console.log('hello')
      }
  }
};
</script>
<style scoped>
.swatch {
  height: 2rem;
  width: 2rem;
  border-radius: 0.3rem;
}
</style>

