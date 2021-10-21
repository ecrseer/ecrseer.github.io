<template>
  <div class="pullc border bs rounded" 
  :class="selectPg ? '' : 'pullcHover'"
  :style="estilizacaoPg">
    <input
      type="radio"
      id=""
      value="libfy"
      class="pgRadio invisibleRadio"
      v-on:click="checkUncheck($event.target.value)"
      v-model="selectPg"
      v-if="selectPg !== 'libfy'"
    />
    <div v-if="selectPg === 'libfy'">
      <input
        type="radio"
        id=""
        value="libfy"
        v-on:click="checkUncheck($event.target.value)"
        v-model="selectPg"
        class="invisibleRadio far fa-times-circle text-white"
      />
       <p>
        {{descricaoPg}}
      </p> 
      <div>

      <a :href="dados.verMaisUrl"><h5>Ver o website</h5></a>
      <a :href="linkRepositorio"><h5><span class="fab fa-github"></span>repositorio</h5></a>
      </div>
     
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "RadioContainer",
  data(){
      return {
          descricaoPg:'Um projetinho que',
          linkRepositorio:'#'
      }
  },
  props: {
    selectPg: String,
    pagina: String,
    dados:Object
  },
  
  methods: {
    /* eslint-disable */
    checkUncheck(val) { 
      if (this.selectPg === val) {
        this.selectPg = "";
      }
    },
    baseBackgrnd(img) {
      let requestImg = require(`@/assets/${img}`);
      return { "background-image": `url(${requestImg})` };
    },
    async carregaDadosPaginas() { 
        if(this && this.dados){
          let usuario="ecrseer";
          if(this.dados.nomeRepositorio=='Libfy'){
            this.linkRepositorio = "https://github.com/21E221E3GRPEDS01C2N2P1/Libfy"
            usuario="21E221E3GRPEDS01C2N2P1"
            return
          }
            let meuRepoURL = `https://api.github.com/repos/${usuario}/${this.dados.nomeRepositorio}`;
            let resp =  await axios.get(meuRepoURL);     
            if(resp.data){
              this.linkRepositorio = resp.data.html_url  
              this.descricaoPg = resp.data.description
            }
            
            
        }   
        
      }
  },
  computed: {
    estilizacaoPg() {
      let alturaPgExpandida = { height: "100vh" };
      let fundo = this.baseBackgrnd(`${this.pagina}.png`);
      let estilizacaoPgLibfy = {
        ...fundo,
        ...(this.selectPg === "libfy" ? alturaPgExpandida : {}),
      };

      return estilizacaoPgLibfy;
    },
  },
  mounted() {     
      
    this.carregaDadosPaginas();
    }


  }





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.bs {
  box-shadow: inset 0 0 0 1000px rgb(55 55 55 / 87%);
}
.pullc {
  width: 100%;
  height: 13vh;
  background-position-x: center;
  background-position-y: center;
  transition: 3s all, 1s height, 2s box-shadow;
}
.pgRadio {
  width: 100%;
  height: 100%;
}
.invisibleRadio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
}
.pullcHover:hover {
  height: 28vh;
  box-shadow: inset 0 0 0 1000px rgb(55 55 55 / 72%);
}
.pullc:checked {
  box-shadow: inset 0 0 0 1000px rgb(1 1 1 / 95%);
}
</style>