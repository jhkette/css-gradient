<template>
  <v-app>
    <Topbar></Topbar>
    <div class="cont">
      <section class="heading"> 
      <h1>CSS Gradient Generator</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
        voluptatibus libero praesentium minima neque illum. Officia quos ipsam
        facilis cupiditate numquam eligendi consequatur, animi, at, dolorem
        atque veniam ducimus ex?
      </p>
      </section>
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
  },
};
</script>
<style scoped>
h1 {
  font-family: "Source sans pro";
  font-weight: 600;
  margin-top: 1rem;
  font-size: 2.7rem;
  display: inline-block;
}
.cont-small{
  width: 80%;
  margin: auto;
  position: relative;
  top: -10rem;
  background-color: #eaeaea;
  border-radius: 1rem;
  padding: 2rem; 
  border: 2px solid #24292e;

}
.heading{
  width: 80%;
  margin: auto;
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
