<template>
  <div>
    <v-col class="d-flex justify-space-around">
      <div v-if="getc1selected">
        <div class="border">
          <font-awesome-icon icon="times" class="cross" @click="addc1unselected" />

          <v-color-picker @input="all"></v-color-picker>
        </div>
      </div>
      <div v-if="getc2selected">
        <div class="border">
          <font-awesome-icon icon="times" class="cross" @click="addc2unselected" />
          <v-color-picker @input="all1"></v-color-picker>
        </div>
      </div>
    </v-col>
    <v-col class="d-flex justify-space-around">
      <div
        class="swatch"
        id="swatch1"
        v-bind:style="{backgroundColor: getFirstColour }"
        @click="color2"
      ></div>
      <div
        class="swatch"
        id="swatch2"
        v-bind:style="{backgroundColor: getSecondColour }"
        @click="color1"
      ></div>
    </v-col>
    <v-text-field  class="angle" label="angle" type="number" min="0" max="360" placeholder="90" 
    @change="addAngle($event)"></v-text-field>
    {{getc1selected}}
    {{getc2selected}}
    {{getAngle}}
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
      "getAngle"
    ])
  },

  methods: {
    ...mapActions([
      "addSecondColour",
      "addFirstColour",
      "addc1selected",
      "addc2selected",
      "addc1unselected",
      "addc2unselected",
      "addAngle"
    ]),
    consoleAngle: function(event){
      console.log(event)
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
.cross {
  font-size: 2rem;
}
.border {
  background-color: #fdfbd5c2;
  padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  border: 1px solid #f0e62ec2;
  border-radius: 0.25rem;
}
.angle{
  width: 4rem;
  margin-left: 10%;
}
</style>

