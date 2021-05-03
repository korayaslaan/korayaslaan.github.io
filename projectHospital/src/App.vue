<template>
  <div id="app">
    <div>
      <nav id="deneme">
        <router-link to="/">HomePage</router-link>
        <router-link to="/Hasta">Hasta-Kayıt</router-link>
     
      </nav>
 
       <router-view />
    </div>
  </div>
</template>

<script>
import HomePage from "./components/HomePage";
export default {
  name: "app",
  components: {
    HomePage,
  },
};
</script>

<style >
nav {
  border: solid=2px;
  color: rgb(241, 89, 0);
}
#deneme {
  text-align: center;
  border: ridge;
  margin: 20px;
  padding: 20px;
 letter-spacing: 5px;
 word-spacing: 50px;
 
}
</style>