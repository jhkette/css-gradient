<template>
  <div class="topbar">
    <header class="inner">
    <h1>CSS Gradient Generator</h1>
    <a href="https://github.com/jhkette/css-gradient"><img src="../assets/github.png" alt="github"/></a>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-family: "Source sans pro";
  font-weight: 600;

  font-size: 1.8rem;
  color: #fff;

  z-index: 11;
  margin-top: .95rem;
  text-shadow: 1px 1px 2px #929496;
}
img {
    height: 2rem;
     margin-top: 1.25rem;
}
a{
    text-decoration: none;
    border: 0;
}

.inner{
     display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;

}
.topbar {
  width: 100%;
  height: 4.5rem;
  background: linear-gradient(1deg, #2A2A2AFF 4%, #0F0F0FFF 100%); 
  z-index: 10;
 
}
</style>