<template>
  <div>
    <v-row class="mb-6 rel">
      <div class="right-col">
        <div class="border" v-if="getc1selected">
          <font-awesome-icon
            icon="times"
            class="cross"
            @click="addc1unselected"
          />

          <v-color-picker
           width="140"
            @input="addColour1($event)"
            hide-inputs
           
            v-model="colour1"
          ></v-color-picker>
        </div>
      </div>
      <div class="left-col">
        <div class="border" v-if="getc2selected">
          <font-awesome-icon
            icon="times"
            class="cross"
            @click="addc2unselected"
          />
          <v-color-picker
            width="140"
            @input="addColour2($event)"
            hide-inputs
            v-model="colour2"
          ></v-color-picker>
        </div>
      </div>
    </v-row>
    <div class="flex-s">
      <v-form ref="form" class="form">
        <input
          class="angle"
          label="angle"
          type="number"
          min="0"
          max="360"
          placeholder="90"
          v-model="angle"
        />
        <v-btn
          v-if="this.getDirection == 'linear'"
          class="ma-2"
          color="secondary"
          @click="addAngle(angle)"
        >
          Add angle
        </v-btn>
        <v-btn
          v-else
          class="ma-2"
          disabled
          color="secondary"
          @click="addAngle(angle)"
        >
          Add angle
        </v-btn>
      </v-form>
      <div class="fle">
        <div
          class="swatch"
          id="swatch1"
          v-bind:style="{ backgroundColor: getFirstColour }"
          @click="addc1selected()"
        ></div>
        <div
          class="swatch"
          id="swatch2"
          v-bind:style="{ backgroundColor: getSecondColour }"
          @click="addc2selected()"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// https://codepen.io/JamieCurnow/pen/KKPjraK
// sought out saved swatch using vmodel
export default {
  computed: {
    ...mapGetters([
      "getFirstColour",
      "getSecondColour",
      "getc1selected",
      "getc2selected",
      "getAngle",
      "getDirection",
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
    addColour1: function (event){
      
      this.addFirstColour(event)
      this.colour1 = event
    },
     addColour2: function (event){
     
      this.addSecondColour(event)
      this.colour2 = event
    }
  },
  data() {
    return {
      angle: 90,
      colour1: '#797676FF',
      colour2: '#C1E6FEff'
    };
  },
};
</script>
<style scoped>
.flex-s {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.35rem;
}
.fle {
  width: 9.5rem;
  margin-left: 4.5rem;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
}

.form {
  display: flex;
}
/* hello */
.swatch {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.25rem;
  border: 1px solid #24292e;
  cursor: pointer;
  margin-top: 0.4rem;
}
.cross {
  font-size: 1.8rem;
  cursor: pointer;
}
.border {
  background-color: #ffffff;
  padding: 1rem;
  border: 1px solid #24292e;
  border-radius: 0.15rem;
  z-index: 200;
  position: relative;
}
.angle {
  width: 3rem;
  margin-left: 10%;
  margin-right: 0.5rem;
  font-size: 1.15rem;
}
.rel {
  position: relative;
}
.left-col {
  position: absolute;
  left: 65%;
  top: -9.5rem;
}
.right-col {
  position: absolute;

  left: 10%;
  top: -9.5rem;
  z-index: 900;
}
.button {
  margin-top: 0.4rem;
}

@media only screen and (max-width: 920px) {
  /* .left-col{
    left: 0%;
  } */
}
</style>
