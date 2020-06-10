<template>
  <div class="slider-container">
    <v-card-text>
      <v-row>
        <v-col class="pr-4">
          <v-slider
            class="align-center"
            :min="min"
            :max="max"
            
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Slider",
  data() {
    return {
      min: 0,
      max: 10
    };
  },
  methods: mapActions(["addOpacity"]),
  computed: mapGetters(["getOpacity"])
};
</script>
<style scoped>
.slider-container {
  width: 80%;
  margin: 5rem auto;
}
</style>