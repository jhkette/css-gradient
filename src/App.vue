<template>
 <v-app>
   <Gradient></Gradient>
  <Slider></Slider>
  <Opacity></Opacity>
</v-app>
</template>

<script>
import Gradient from './components/Gradient'
import Slider from './components/Slider'
import Opacity from './components/Opacity'

export default {
  
  name: 'App',

  components: {
    Slider,
    Opacity,
    Gradient
   
  },
  methods: {
    sChange(event){
      console.log(event)
    }
  },

  data: () => ({
    //
  }),
};
</script>
