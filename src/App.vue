<template>
 <v-app>
  <Slider></Slider>
  <Opacity></Opacity>
</v-app>
</template>

<script>
import Slider from './components/Slider'
import Opacity from './components/Opacity'

export default {
  
  name: 'App',

  components: {
    Slider,
    Opacity
   
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
