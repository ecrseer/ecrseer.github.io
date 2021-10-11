<template>
  <main data-spy="scroll" data-target="#navbarinside" data-offset="0">
    <div class="row">
      <section
        class="ml-4 col-11 shadow-lg bg-body rounded"
        :class="selectPg ? 'col-sm-12' : 'col-sm-7'"
        id="meusprojetos"
      >
        <h6 class="d-block text-center">Projetos</h6>
   
        <RadioContainer v-bind:selectPg="selectPg"
         v-bind:pagina='"libfy"'></RadioContainer>

        <RadioContainer v-bind:selectPg="selectPg"
         v-bind:pagina='"gdrive"'></RadioContainer>

        <RadioContainer v-bind:selectPg="selectPg"
         v-bind:pagina='"starwr"'></RadioContainer>

        <RadioContainer v-bind:selectPg="selectPg"
         v-bind:pagina='"ytime"'></RadioContainer>

        <a href="http://time2shareyt.vercel.app/" class="">
          b
        </a>
        <a href="https://gd-sheet-y2.vercel.app/">
          b
        </a>
        <a href="https://g4br13l-ju5t1n0.vercel.app/">
          b
        </a>
      </section>

      <section
        class="sobremim col-12 col-sm-4 shadow-lg bg-body rounded"
        id="sobremim"
      >
        <p>Descrição academica</p>

        <div class="card rounded shadow-lg">
          <main class="card-body">
            <p>Gabriel Justino</p>
            <h4>Instituto INFNET</h4>
            <p>Engenharia de software</p>
          </main>
        </div>

        <div class="card rounded shadow-lg">
          <main class="card-body">
            <h4>---</h4>
            <p>---</p>
          </main>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
import RadioContainer from './RadioContainer.vue';
export default {
  components: { RadioContainer },
  name: "Descricao",
  data() { 
    return { 
      selectPg: "",
    };
  }, 

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>