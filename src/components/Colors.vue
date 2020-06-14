<template>
  <div>
    <v-col class="d-flex justify-space-around">
      <div  class="left">
        <div class="border" v-if="getc1selected">
          <font-awesome-icon
            icon="times"
            class="cross"
            @click="addc1unselected"
          />

          <v-color-picker @input="all"></v-color-picker>
        </div>
      </div>
      <div  class="right">
        <div class="border" v-if="getc2selected">
          <font-awesome-icon
            icon="times"
            class="cross"
            @click="addc2unselected"
          />
          <v-color-picker @input="all1"></v-color-picker>
        </div>
      </div>
    </v-col>
    <v-col class="d-flex justify-space-around">
      <div
        class="swatch"
        id="swatch1"
        v-bind:style="{ backgroundColor: getFirstColour }"
        @click="color2"
      ></div>
      <div
        class="swatch"
        id="swatch2"
        v-bind:style="{ backgroundColor: getSecondColour }"
        @click="color1"
      ></div>
    </v-col>
    <v-form ref="form" >
      <!-- by putting the dollar sign we  are telling vue we want
        the event object triggered by the specific event 'change' or whatever
        we specified. In vanilla js we obviously don't need to do this -->
     <input 
        class="angle"
        label="angle"
        type="number"
        min="0"
        max="360"
        placeholder="90"
        v-model="angle1"
      >
      <v-btn color="success" class="mr-4" @click="addAngle(angle1)">
        Add angle
      </v-btn>
    </v-form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// https://codepen.io/JamieCurnow/pen/KKPjraK
export default {
  computed: {
    ...mapGetters([
      "getFirstColour",
      "getSecondColour",
      "getc1selected",
      "getc2selected",
      "getAngle",
    ]),
  },

  methods: {
    ...mapActions([
      "addSecondColour",
      "addFirstColour",
      "addc1selected",
      "addc2selected",
      "addc1unselected",
      "addc2unselected",
      "addAngle",
    ]),
    consoleAngle: function(event) {
      console.log(event);
    },
    all: function(event) {
      console.log(event);
      this.addFirstColour(event);
    },
    all1: function(event) {
      console.log(event);
      this.addSecondColour(event);

      console.log("hello");
    },
    color1: function() {
      this.addc1selected();
    },
    color2: function() {
      this.addc2selected();
    },
    recordAngle: function(event) {
      this.recAngle = event;
    
    },
  },
  data() {
    return {
      recAngle: 90,
    };
  },
};
</script>
<style scoped>
.swatch {
  height: 2rem;
  width: 2rem;
  border-radius: 0.3rem;
}
.cross {
  font-size: 2rem;
}
.border {
  background-color: #fdfbd5c2;
  padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  border: 1px solid #f0e62ec2;
  border-radius: 0.25rem;
}
.angle {
  width: 4rem;
  margin-left: 10%;
}
.left{
  width: 50%;
}
.right{
  width: 50%;
}
</style>
