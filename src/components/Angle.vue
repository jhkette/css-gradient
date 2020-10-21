<template>
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
      Gradient angle
    </v-btn>
    <v-btn
      v-else
      class="ma-2"
      disabled
      color="secondary"
      @click="addAngle(angle)"
    >
      Gradient angle
    </v-btn>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAngle", "getDirection"]),
  },

  methods: {
    ...mapActions(["addAngle"]),
  },
    data() {
    return {
      angle: 90
    };
  }
};
</script>

<style scoped>
.form {
  display: flex;
}
.angle {
  width: 3rem;
  margin-left: 10%;
  margin-right: 0.5rem;
  font-size: 1.15rem;
}
</style>