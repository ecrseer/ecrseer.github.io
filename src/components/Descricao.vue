<template>
  <main data-spy="scroll" 
  data-target="#navbarinside" data-offset="0"  >
    <div class="row">
      <section
        class="ml-4 col-11 shadow-lg bg-body rounded"
        :class="divClicadaTamanho"
        v-on:click="recalculaTamanho"
        id="meusprojetos"
      >
        <h6 class="d-block text-center">Projetos</h6>

        <RadioContainer
          v-bind:selectPg="selectPg"
          v-bind:pagina="'libfy'"          
          v-bind:dados="DADOSPAGINAS.libfy"
        ></RadioContainer>

        <RadioContainer
          v-bind:selectPg="selectPg"
          v-bind:pagina="'gdrive'"
          v-bind:dados="DADOSPAGINAS.gdrive">
          </RadioContainer>

        <RadioContainer
          v-bind:selectPg="selectPg"
          v-bind:pagina="'starwr'"
          v-bind:dados="DADOSPAGINAS.starwr">
          </RadioContainer>

        <RadioContainer
          v-bind:selectPg="selectPg"
          v-bind:pagina="'ytime'"
          v-bind:dados="DADOSPAGINAS.ytime"
        ></RadioContainer>
 
      </section>

      <section
        class="sobremim col-12 col-sm-4 shadow-lg bg-body rounded"
        id="sobremim"
      >
        <p>Descrição academica</p>

        <div class="card bg-dark rounded shadow-lg">
          <main class="card-body ">
            <p>Gabriel Justino</p>
            <h4>Instituto INFNET</h4>
            <p>Engenharia de software</p>
          </main>
        </div>

        <div class="card bg-dark rounded shadow-lg">
          <main class="card-body">
            <h4>---</h4>
            <p>{{DESCR_LIN}}</p>
          </main>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
import RadioContainer from "./RadioContainer.vue";
import dados from "../const"; 
export default {
  components: { RadioContainer },
  name: "Descricao",
  data() {
    return {
      selectPg: '',
      DADOSPAGINAS:dados.dadosPaginas,
      DESCR_LIN:dados.descricaoLin,
      divClicadaTamanho:'col-sm-6'
    };
  },
  computed: {
    
  },
  watch:{
    selectPg(prev,next){
      console.log(`prev ${prev}`)
      console.log(`next ${next}`)
    }
  },
  methods:{
    recalculaTamanho(){

      if(this.selectPg==''){
        this.divClicadaTamanho=''
      }else{        
        this.divClicadaTamanho='col-sm-6'
      }


    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>