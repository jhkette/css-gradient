<template>
  <v-app>
    <Topbar></Topbar>
    <div class="cont">
      <CirclesBg></CirclesBg>
      <Gradient></Gradient>
      <div class="cont-small">
        <Colors></Colors>
        <div class="sliders">
          <Slider></Slider>
          <Opacity></Opacity>
        </div>
        <div class="mod">
          <Modal></Modal>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import "./assets/css/main.css";
import Gradient from "./components/Gradient";
import Topbar from "./components/TopBar";
import Slider from "./components/Slider";
import Opacity from "./components/Opacity";
import Colors from "./components/Colors";
import Modal from "./components/modal";
import CirclesBg from "./components/CirclesBg";
import(/* webpackPreload: true */ "typeface-source-sans-pro/index.css");

export default {
  name: "App",

  components: {
    Slider,
    Opacity,
    Gradient,
    Colors,
    Topbar,
    Modal,
    CirclesBg,
  },
};
</script>
<style scoped>
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  position: relative;
}
.cont-small {
  width: 80%;
  margin: auto;
  position: relative;
  top: -10rem;
  background-color: #e6e6e6;
  border-radius: 1rem;
  padding: 2rem;
}

.cross {
  color: red;
  font-size: 2rem;
}
.sliders {
  width: 80%;
  display: inline-block;
}
.mod {
  width: 20%;
  float: right;
  margin-top: 6rem;
}
</style>
