<template>
  <div class="left-col">
    <div class="border" v-if="getc1selected">
      <font-awesome-icon icon="times" class="cross" @click="addc1unselected" />

      <v-color-picker
        @input="all"
        hide-inputs="true"
        width="140"
      ></v-color-picker>
    </div>
  </div>
</template>

<style scoped>
.left-col {
  position: absolute;
  right: 5rem;
  top: -9.5rem;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    
  components: {
    
  },
  computed: {
      ...mapGetters(["getFirstColour", "getc1selected"]),
  },
  methods: {
    ...mapActions(["addFirstColour", "addc1selected"]),
    all: function (event) {
      console.log(event);
      this.addFirstColour(event);
    },
  },
};
</script>