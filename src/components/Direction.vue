<template>
  <div>
    <v-radio-group v-model="active" row @change="addDirection">
      <v-radio  name="active" label="Linear" :value="'linear'" key="0"></v-radio>
      <v-radio   name="active" label="Radial" :value="'radial'" key="1"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      active: 'linear',
    };
  },
  
   components: {

  },
  
  computed: {
    ...mapGetters([
      "getFirstColour",
      "getSecondColour",
      "getc1selected",
      "getc2selected",
      "getAngle",
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
      "addDirection"
    ]),
    log(event){
          console.log(event)
      }
  
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
