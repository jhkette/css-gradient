<template>
  <div class="text-center">
    <v-dialog width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ma-2" color="secondary" v-bind="attrs" v-on="on">
          Get some css
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          CSS
        </v-card-title>

        <v-card-text>
          <p>{{ backgroundString }} opacity: {{ renderOpacity }}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-2" color="secondary" @click="copyText">Copy</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "Modal",
  computed: {
    ...mapGetters([
      "getPercentage",
      "getOpacity",
      "getFirstColour",
      "getSecondColour",
      "getAngle",
      "getDirection",
    ]),
    backgroundString: function () {
      if (this.getDirection == "linear") {
        return `background: linear-gradient(${this.getAngle}deg, ${this.getFirstColour} ${this.getPercentage}%, ${this.getSecondColour} 100%);`;
      } else if (this.getDirection == "radial") {
        return `background: radial-gradient(circle, ${this.getFirstColour} ${this.getPercentage}%, ${this.getSecondColour} 100%);`;
      } else {
        return "error";
      }
    },
    renderOpacity: function () {
      if (this.getOpacity == 10) {
        return 1 + ";";
      }
      return `0.${this.getOpacity};`;
    },
  },
  methods: {
    copyText() {
      let textToCopy = this.$refs.textToCopy.$el.querySelector("input");
      textToCopy.select();
      document.execCommand("copy");
    },
  },
  data: function () {
    return {
      direction: "linear-gradient",
    };
  },
};
</script>