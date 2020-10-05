<template>
  <v-app>
    <Circle1 v-for="colour in colours" :key="colour" :colour="colour">
    </Circle1>
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
          <Direction></Direction>
          <div>
            <Modal></Modal>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Circle1 from "./components/Circle";
import "./assets/css/main.css";
import Gradient from "./components/Gradient";
import Topbar from "./components/TopBar";
import Slider from "./components/Slider";
import Opacity from "./components/Opacity";
import Colors from "./components/Colors";
import Modal from "./components/modal";
import CirclesBg from "./components/CirclesBg";
import Footer from "./components/Footer";
import Direction from "./components/Direction";
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
    Circle1,
    Footer,
    Direction,
  },
  data: function () {
    return {
      colours: [
        "#E94F37, #bb2d50",
        "#1C89BF, #e3f7ff",
        "#A1D363, #90ee90",
        "#85FFC7, #3cb371",
        "#297373, #2f4f4f",
        "#FF8552, #fdc888",
        "#A40E4C ,#ffc2c2",
      ],
    };
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
  width: 65%;
  margin: auto;
  position: relative;
  top: -23.5rem;
  background-color: #eaeaea;
  border-radius: 0.25rem;
  padding: 0.5rem 4rem;
  z-index: 100;
  border: 1px solid #24292e;
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
  margin-top: 2rem;
}
</style>
