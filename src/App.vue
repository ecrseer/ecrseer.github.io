<template>
  <div id="app" class="bg-dark text-white"> 
  <Index></Index>

    <BottomNav/>
  </div>
</template>

<script> 
import BottomNav from './components/BottomNav.vue'
import Index from './pages/Index.vue'
export default {
  components: { Index, BottomNav },
  name: 'App', 
}
</script>

<style>
#app {
 
  font-family: Avenir, Helvetica, Arial, sans-serif; 
  -moz-osx-font-smoothing: grayscale;
   
    color: #507aa4; 
    background-color: #fffefc;
    overflow-x: none;
}

</style>
