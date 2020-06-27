<template>
  <v-app>
    <div class="container" >
      <h1>CSS Gradient Generator</h1>
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
import (/* webpackPreload: true */ 'typeface-open-sans/index.css');

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
h1{
  font-family: 'Open sans';
  font-weight: 300;
  padding-bottom: 5px;
  border-bottom: 2px solid rgb(36, 36, 36);
  display: inline-block;
}
.container {
  width: 100%;
  height: 100%;
  
}
.cross{
  color: red;
  font-size: 2rem;
}
</style>
