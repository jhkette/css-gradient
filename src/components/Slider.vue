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
h3{
  margin-bottom: 2.5rem;
  display: inline-block;
  border-bottom: 3px solid black;;
}
.slider-container {
  width: 80%;
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