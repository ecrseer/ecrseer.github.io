<template>
  <div >     
    <Descricao />
  </div>
</template>

<script>  
import Descricao from '../components/Descricao.vue'
export default {
  components: { Descricao  },
  name: 'Index',
   
}
</script>

<style> 
 
@media (max-width: 600px)
{
  .facet_sidebar
   {
    display: none;
   }
}
</style>
