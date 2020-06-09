<template>
  <div class="slider-container">
    <v-card-text>
      <v-row>
        <v-col class="pr-4">
          <v-slider
            class="align-center"
            :max="max"
            :min="min"
            hide-details
            thumb-label="always"
            @change="addPercentage"
          ></v-slider>
        </v-col>
      </v-row>
    </v-card-text>
    <p class="large">{{getPercentage}}</p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Slider",
  data() {
    return {
      min: 0,
      max: 100
    };
  },

  methods: mapActions(["addPercentage"]),
  computed: mapGetters(["getPercentage"])
};
</script>

<style scoped>
.slider-container {
  width: 80%;
  margin: 5rem auto;
}
.large {
  font-size: 80px;
}
</style>