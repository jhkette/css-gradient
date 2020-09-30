<template>
  <section class="heading">
 
    <h1>CSS Gradient Generator</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
      voluptatibus libero praesentium minima neque illum. Officia quos ipsam
      facilis cupiditate numquam eligendi consequatur, animi, at, dolorem atque
      veniam ducimus ex?
    </p>
      
      <Circle1 v-for="colour in colours" :key="colour" :colour="colour"> </Circle1>
    
  </section>
</template>

<script>
import Circle1 from './Circle'
export default {
  
  components:{
    Circle1
  },
  // https://stackoverflow.com/questions/47219272/how-can-i-use-window-size-in-vue-how-do-i-detect-the-soft-keyboard
  data: function() {
    return {
      colours: [
        "#E94F37, #bb2d50",
        "#1C89BF, #e3f7ff",
        "#A1D363, #90ee90",
        "#85FFC7, #3cb371",
        "#297373, #2f4f4f",
        "#FF8552, #fdc888",
        "#A40E4C ,#ffc2c2",
        "#E94F37, #bb2d50",
        "#1C89BF, #e3f7ff",
        "#ddd, #90ee90",
      ],
      winWidth: null,
      winHeight: 10,
    };
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
.heading {
  width: 80%;
  margin: auto;
  position: relative;
}
</style>
