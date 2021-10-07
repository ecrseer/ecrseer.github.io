<template>
  <div id="app"> 
    <Descricao/>
    <BottomNav/>
  </div>
</template>

<script> 
import BottomNav from '../components/BottomNav.vue'
import Descricao from '../components/Descricao.vue'
export default {
  components: { Descricao, BottomNav },
  name: 'Index',
   
}
</script>

<style> 
</style>
