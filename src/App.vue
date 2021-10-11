<template>
  <div id="app"> 
  <index></index>

    <BottomNav/>
  </div>
</template>

<script> 
import BottomNav from './components/BottomNav.vue'
import index from './pages/index.vue'
export default {
  components: { index, BottomNav },
  name: 'App', 
}
</script>

<style>
#app {
 
  font-family: Avenir, Helvetica, Arial, sans-serif; 
  -moz-osx-font-smoothing: grayscale;
   
    color: #507aa4; 
    background-color: #fdfbf7;
}
</style>
