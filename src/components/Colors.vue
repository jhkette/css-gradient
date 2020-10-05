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

          <v-color-picker @input="all" hide-inputs width="140"></v-color-picker>
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
            @input="all1"
            hide-inputs
          ></v-color-picker>
        </div>
      </div>
    </v-row>
    <div class="flex-s">
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
          @click="color1"
        ></div>
        <div
          class="swatch"
          id="swatch2"
          v-bind:style="{ backgroundColor: getSecondColour }"
          @click="color2"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// https://codepen.io/JamieCurnow/pen/KKPjraK
export default {
  components: {},

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

    all: function (event) {
      console.log(event);
      this.addFirstColour(event);
    },
    all1: function (event) {
      console.log(event);
      this.addSecondColour(event);
    },
    color1: function () {
      this.addc1selected();
    },
    color2: function () {
      this.addc2selected();
    },
    recordAngle: function (event) {
      this.recAngle = event;
    },
  },
  data() {
    return {
      angle: 90,
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
  background-color: #ebebeb;
  padding: 1rem;
  border: 1px solid #24292e;
  border-radius: 0.25rem;
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
  right: -5rem;
  top: -9.5rem;
}
.right-col {
  position: absolute;

  left: 21rem;
  top: -9.5rem;
  z-index: 900;
}
.button {
  margin-top: 0.4rem;
}
</style>
