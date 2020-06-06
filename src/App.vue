<template>
 <v-app>
   
   <Gradient></Gradient>
   <Colors></Colors>
  <Slider></Slider>
  <Opacity></Opacity>
  
</v-app>
</template>

<script>
import Gradient from './components/Gradient'
import Slider from './components/Slider'
import Opacity from './components/Opacity'
import Colors from './components/Colors'

export default {
  
  name: 'App',

  components: {
    Slider,
    Opacity,
    Gradient, 
    Colors
   
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
