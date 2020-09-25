<template>

  <v-app>
    <Topbar></Topbar>
    <div class="container" >
      <h1>CSS Gradient Generator</h1>
      <Gradient></Gradient>
      <Colors></Colors>
      <Slider></Slider>
      <Opacity></Opacity>
      <Modal></Modal>
      
    </div>
  </v-app>
</template>

<script>

import Gradient from "./components/Gradient";
import Topbar from "./components/TopBar";
import Slider from "./components/Slider";
import Opacity from "./components/Opacity";
import Colors from "./components/Colors";
import Modal from "./components/Modal";
import (/* webpackPreload: true */ 'typeface-source-sans-pro/index.css');

export default {
  name: "App",

  components: {
    Slider,
    Opacity,
    Gradient,
    Colors,
    Topbar, 
    Modal
  },
};
</script>
<style scoped>

h1{
  font-family: 'Source sans pro';
  font-weight: 700;
  padding-bottom: 5px;
  font-size: 3rem;

  display: inline-block;
}

.cross{
  color: red;
  font-size: 2rem;
}
</style>
