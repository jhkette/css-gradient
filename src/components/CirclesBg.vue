<template>
  <section class="heading">
    <span class="dot"></span>
<span class="dot two"></span>
 
    <h1>CSS Gradient Generator</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>
      
      
    
  </section>
</template>

<script>

export default {
  

  // https://stackoverflow.com/questions/47219272/how-can-i-use-window-size-in-vue-how-do-i-detect-the-soft-keyboard

 
};
</script>

<style scoped>
 .dot {
  height: 3.4rem;
  width: 3.4rem;
  background: linear-gradient(90deg, #0063FF 0%, #C5D2FD 100%); opacity: 0.6;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  top: .25rem;
  z-index: 10;
}
.dot.two{
  background: linear-gradient(90deg, #F1B1B1 0%, #FAFFEF 100%); opacity: 1
}
h1 {
 font-family: "Source sans pro";
font-weight: 500;
margin-top: 1.5rem;
font-size: 3rem;
display: inline-block;
position: relative;
z-index: 11;
left: -6.5rem;
top: -.45rem;
}
.heading {
  width: 80%;
  margin: auto;
  position: relative;
  
}
</style>
