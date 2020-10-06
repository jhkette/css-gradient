<template>
  <v-app>
    <Circle1 v-for="colour in colours" :key="colour" :colour="colour" />
    <Topbar />
    <main class="cont">
      <section class="heading">
        <h3 class="first">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid animi
          earum aliquam explicabo ex, ratione et necessitatibus, est, velit cum
          nam nihil eveniet facere nobis? Ea est pariatur aperiam accusamus.
        </h3>
      </section>
      <Gradient />
      <div class="cont-small">
        <Colors />
        <div class="sliders">
          <Slider />
          <Opacity />
        </div>
        <div class="mod">
          <Direction />
          <div>
            <Modal />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </v-app>
</template>

<script>
import "./assets/css/main.css";
import Circle1 from "./components/Circle";
import Gradient from "./components/Gradient";
import Topbar from "./components/TopBar";
import Slider from "./components/Slider";
import Opacity from "./components/Opacity";
import Colors from "./components/Colors";
import Modal from "./components/modal";

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
        "#FF8552, #fdc888",
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
  margin-top: 1rem;
}
.first {
  margin: 2rem 0 0rem 0;
  font-weight: 400;
   font-size: 1.2rem;
     color: #1b1f1f;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}

.heading {
  width: 80%;
  margin: auto;
  position: relative;
}

@media only screen and (max-width: 920px) {
  .cont-small{
    width: 100%;
  }
}
</style>
