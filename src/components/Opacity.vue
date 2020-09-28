<template>
  <div class="slider-container">
    <v-card-text class="row_np">
      <v-row>
        <v-col class="pr-4">
          <h3>Change opacity</h3>
          <v-slider
            class="align-center"
            :min="min"
            :max="max"
             v-model="num"
            hide-details
            thumb-label="always"
            @change="addOpacity"
          ></v-slider>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>
<script>
import (/* webpackPreload: true */ 'typeface-open-sans/index.css')
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Slider",
  data() {
    return {
      min: 0,
      max: 10,
      num: 10
    };
  },
  methods: mapActions(["addOpacity"]),
  computed: mapGetters(["getOpacity"])
};
</script>
<style scoped>
.align-center{
  width: 90%;
}

h3{
  margin-bottom: 2rem;
  display: inline-block;
 
  font-family: "Source sans pro";
  font-weight: 600;
  font-size: 1.5rem;
  
}
.slider-container {
  width: 100%;
  margin: 2.5rem auto;
}
.row_np{
  padding: 0;
  margin: 0;
}
</style>