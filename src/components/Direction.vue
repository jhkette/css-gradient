<template>
  <div>
    <v-radio-group v-model="active" row @change="addDirection">
      <v-radio  name="active" label="Linear" :value="'linear'" key="0"></v-radio>
      <v-radio   name="active" label="Radial" :value="'radial'" key="1"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      active: 'linear',
    };
  },
  methods: {
    ...mapActions([
      "addDirection"
    ]),
  }
};
</script>

<style scoped>
label.v-label.theme--light {
    font-size: 1.2rem !important;
    margin-bottom: .5rem;
    color: #1b1f1f;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}
</style>
