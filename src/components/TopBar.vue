<template>
  <div class="topbar">
    <header class="inner">
    <h1>CSS Gradient Generator</h1>
    <a href=""><img src="../assets/github.png" alt="github"/></a>
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
  margin-top: .45rem;
  text-shadow: 1px 1px 2px #929496;
}
img {
    height: 2rem;
     margin-top: .75rem;
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
  height: 3.5rem;
  background-color: #24292e;
  z-index: 10;
 
}
</style>