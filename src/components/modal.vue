<template>
  <div class="text-center">
    <v-dialog width="500" dark>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ma-2" color="secondary" v-bind="attrs" v-on="on">
          Get some css
        </v-btn>
      </template>
      <v-card>
        <v-card-title dark primary-title> CSS </v-card-title>
        <v-card-text>
          <p class="code" id="codecopy">
            {{ backgroundString }} opacity: {{ renderOpacity }}
          </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="ma-2"
            color="#01DAC5"
            @click="copy(backgroundString + ' opacity: ' + renderOpacity)"
            >Copy</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    backgroundString: function() {
      if (this.getDirection == "linear") {
        return `background: linear-gradient(${this.getAngle}deg, ${this.getFirstColour} ${this.getPercentage}%, ${this.getSecondColour} 100%);`;
      } else if (this.getDirection == "radial") {
        return `background: radial-gradient(circle, ${this.getFirstColour} ${this.getPercentage}%, ${this.getSecondColour} 100%);`;
      } else {
        return "error";
      }
    },
    renderOpacity: function() {
      if (this.getOpacity == 10) {
        return 1 + ";";
      }
      return `0.${this.getOpacity};`;
    },
  },

  methods: {
    ...mapActions(["addCopied"]),
    async copy(s) {
      
      this.addCopied();
      setTimeout(() => {
        this.addCopied();
      }, 2100);
      await navigator.clipboard.writeText(s);
    },
  },

  data: function() {
    return {
      direction: "linear-gradient",
    };
  },
};
</script>
<style scoped>
.code {
  font-family: "Source Code Pro", monospace;
  color: #03dac6;
}
</style>
