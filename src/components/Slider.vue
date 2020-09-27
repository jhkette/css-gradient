<template>
  <div class="slider-container">
    <v-card-text class="row_np">
      <v-row>
        <v-col class="pr-4">
          <h3>Percentage of gradient</h3>
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

  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import (/* webpackPreload: true */ 'typeface-open-sans/index.css')
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
.align-center{
  width: 90%;
}
h3{

  display: inline-block;
 margin-bottom: 2rem;
  font-family: "Source sans pro";
  font-weight: 600;
  font-size: 1.5rem;
  
}
.slider-container {
  width: 100%;
  margin: 2.5rem auto;
}
.large {
  font-size: 80px;
}
.row_np{
  padding: 0;
  margin: 0;
}
</style>