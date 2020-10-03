<template>
  <div>
    <v-radio-group v-model="active" row @change="log">
      <v-radio name="active" label="Linear" :value="0" key="0"></v-radio>
      <v-radio name="active" label="Radial" :value="1" key="1"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
      log(event){
          console.log(event)
      }
  }
};
</script>

<style scoped></style>
