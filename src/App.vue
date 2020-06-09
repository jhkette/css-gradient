<template>
  <v-app>
    <div class="container" >
      <Gradient></Gradient>
      <Colors></Colors>
      <Slider></Slider>
      <Opacity></Opacity>
      <font-awesome-icon icon="times" class="cross"  @click="close"/>
      <font-awesome-icon icon="times" class="cross"  @click="close"/>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Gradient from "./components/Gradient";
import Slider from "./components/Slider";
import Opacity from "./components/Opacity";
import Colors from "./components/Colors";

export default {
  name: "App",

  components: {
    Slider,
    Opacity,
    Gradient,
    Colors
  },
  methods: {
    ...mapActions(["addc1unselected", "addc2unselected"]),
    close: function() {
      // const x = event.path[0]
     
          this.addc1unselected();
          this.addc2unselected();
    
    }
  },
  computed: {
    ...mapGetters([
      "getFirstColour",
      "getSecondColour",
      "getc1selected",
      "getc2selected"
    ])
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  
}
.cross{
  color: red;
  font-size: 2rem;
}
</style>
