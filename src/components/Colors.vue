<template>
  <div>
    <v-col class="d-flex justify-space-around">
       
      <v-color-picker @input="addFirstColour"></v-color-picker>
      
      <v-color-picker @input="addSecondColour"></v-color-picker>
    </v-col>
    <v-col class="d-flex justify-space-around">
    <div class="swatch" v-bind:style="{backgroundColor: getFirstColour }" ></div>
    <div class="swatch" v-bind:style="{backgroundColor: getSecondColour }" ></div>
     </v-col>
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
     
  },
 
};
</script>
<style scoped>
.swatch {
  height: 2rem;
  width: 2rem;
  border-radius: 0.3rem;
}
</style>

