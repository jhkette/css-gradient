<template>
  <div>
    <v-row class="mb-6 rel">
       
      <!-- use absolute positioning -->
      <div class="right-col">
        <div class="border" v-if="getc1selected">
          <font-awesome-icon
            icon="times"
            class="cross"
            @click="addc1unselected"
          />

          <v-color-picker @input="all"  hide-inputs="true" width="140"></v-color-picker>
        </div>
      </div>
      <div class="left-col">
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
        v-model="angle"
      >
      <v-btn class="ma-2" outlined color="blue" @click="addAngle(angle)">
        Add angle
      </v-btn>
    </v-form>
      <div
        class="swatch"
        id="swatch1"
        v-bind:style="{ backgroundColor: getFirstColour }"
        @click="color1"
      ></div>
      <div
        class="swatch"
        id="swatch2"
        v-bind:style="{ backgroundColor: getSecondColour }"
        @click="color2"
      ></div>
    </v-col>
   
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// https://codepen.io/JamieCurnow/pen/KKPjraK
export default {
  components: {

  },
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
    
    all: function(event) {
      console.log(event);
      this.addFirstColour(event);
    },
    all1: function(event) {
      console.log(event);
      this.addSecondColour(event);
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
  border-radius: 0.25rem;
  border: 3px solid #24292E;
  cursor: pointer;
}
.cross {
  font-size: 1.8rem;
  cursor: pointer;
}
.border {
  background-color: #ebebeb;
  padding: 1rem;
  border: 2px solid #24292E;
  border-radius: 0.25rem;
}
.angle {
  width: 3rem;
  margin-left: 10%;
  margin-right: 3rem;
  font-size: 1.15rem;
}
.rel{
  position: relative;
}
.left-col{
  position: absolute;
  right: -5rem;
  top: -9.5rem;

}
.right-col{
  position: absolute;
  
    left: 21rem;
    top: -9.5rem;
    z-index: 900;
}
.button{
  margin-top: .4rem;
}
</style>
