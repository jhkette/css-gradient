<template>
  <v-app>
    <div class="container" >
      <Gradient></Gradient>
      <Colors></Colors>
      <Slider></Slider>
      <Opacity></Opacity>
      
    </div>
  </v-app>
</template>

<script>

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
