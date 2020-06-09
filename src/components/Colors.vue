<template>
  <div>
    <v-col class="d-flex justify-space-around">
       <div v-if="getc1selected">
      <v-color-picker @input="all"></v-color-picker>
      </div>
      <div v-if="getc2selected">
      <v-color-picker @input="all1"></v-color-picker>
      </div>
    </v-col>
    <v-col class="d-flex justify-space-around">
    <div class="swatch" id="swatch1" v-bind:style="{backgroundColor: getFirstColour }" @click="color2" ></div>
    <div class="swatch" id="swatch2" v-bind:style="{backgroundColor: getSecondColour }" @click="color1" ></div>
     </v-col>
     {{getc1selected}}
     {{getc2selected}}
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// https://codepen.io/JamieCurnow/pen/KKPjraK
export default {

  computed: {
    ...mapGetters(["getFirstColour", "getSecondColour", 'getc1selected', 'getc2selected'])
  },
  methods:{ 
      ...mapActions(["addSecondColour", "addFirstColour", 'addc1selected', 'addc2selected']),
      all: function(event){
        console.log(event)
          this.addFirstColour(event);
         
          
      },
      all1: function(event){
         console.log(event)
          this.addSecondColour(event);
         
          console.log('hello')
      },
      color1: function(){
        this.addc1selected()
      },
      color2: function(){
        this.addc2selected()
      }
     
  },
  data() {
    return {
        selected: false
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

