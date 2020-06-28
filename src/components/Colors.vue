<template>
  <div>
    <v-row class="mb-6 rel">
       
      <!-- use absolute positioning -->
      <div class="left-col">
        <div class="border" v-if="getc1selected">
          <font-awesome-icon
            icon="times"
            class="cross"
            @click="addc1unselected"
          />

          <v-color-picker @input="all"  hide-inputs="true" width="140"></v-color-picker>
        </div>
      </div>
      <div class="right-col">
        <div class="border" v-if="getc2selected">
          <font-awesome-icon
            icon="times"
            class="cross"
            @click="addc2unselected"
          />
          <v-color-picker hide-inputs="true" width="140" @input="all1"></v-color-picker>
        </div>
      </div>
    </v-row>
    <v-col class="d-flex justify-space-around">
      <v-form ref="form" class="form">
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
      <v-btn color="primary" class="mr-4 button" @click="addAngle(angle1)">
        Add angle
      </v-btn>
    </v-form>
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

.form{
  display: flex;
}
.swatch {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.3rem;
  border: 2px solid #202020;
  cursor: pointer;
}
.cross {
  font-size: 1.8rem;
  cursor: pointer;
}
.border {
  background-color: #f0f0f0c2;
  padding: 1rem;
  border: 1px solid #696969c2;
  border-radius: 0.25rem;
}
.angle {
  width: 3rem;
  margin-left: 10%;
  margin-right: 3rem;
}
.rel{
  position: relative;
}
.left-col{
  position: absolute;
  right: 5rem;
  top: -9.5rem;

}
.right-col{
  position: absolute;
  
    left: 5rem;
    top: -9.5rem;
}
.button{
  margin-top: .4rem;
}
</style>
