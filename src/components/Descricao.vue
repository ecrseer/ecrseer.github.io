<template>
  <main data-spy="scroll" data-target="#navbarinside" data-offset="0">
    <div class="row">
      <section
        class="ml-4 col-11 shadow-lg bg-body rounded"
        :class="selectPg ? 'col-sm-12' : 'col-sm-7'"
        id="meusprojetos"
      >
        <h6 class="d-block text-center">Projetos</h6>
        <div class="pullc border bs rounded" :style="estilizacaoPgLibfy">
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
              class="invisibleRadio fas fa-window-close"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut qui
              alias, eum nesciunt, distinctio suscipit expedita perferendis nisi
              pariatur odit provident. Placeat, beatae? Suscipit fuga non id
              accusamus quis nisi?
            </p>
          </div>
        </div>
        <RadioContainer v-bind:selectPg="selectPg"
         v-bind:pagina='"libfy"'></RadioContainer>





         
        <div class="pullc border bs rounded" :style="imgLibfy">
          <input
            type="radio"
            id=""
            value="xab"
            class="invisibleRadio"
            v-on:click="checkUncheck($event.target.value)"
            v-model="selectPg"
            data-toggle="collapse"
            data-target="#collapseExample"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut qui
              alias, eum nesciunt, distinctio suscipit expedita perferendis nisi
              pariatur odit provident. Placeat, beatae? Suscipit fuga non id
              accusamus quis nisi?
            </p>
          </div>
        </div>
        <!--  <input
          type="radio"
          id=""
          value="tre"
          class="pullc border bs rounded"
          :style="imgLibfy"
          v-on:click="checkUncheck($event.target.value)"
          v-model="selectPg"
        /> -->

        <a href="http://time2shareyt.vercel.app/" class="">
          <div :style="imgYt" class="pullc border bs rounded"></div
        ></a>
        <a href="https://gd-sheet-y2.vercel.app/">
          <div class="pullc border bs rounded" :style="imgGd"></div>
        </a>
        <a href="https://g4br13l-ju5t1n0.vercel.app/">
          <div class="pullc border bs rounded" :style="imgSw"></div>
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
    /* eslint-disable */
    let imgYt, imgGd, imgSw, imgLibfy;

    let baseBackgrnd = (img) => {
      let requestImg = require(`@/assets/${img}`);
      return { "background-image": `url(${requestImg})` };
    };
    imgGd = baseBackgrnd("gdrive.png");
    imgYt = baseBackgrnd("ytime.png");
    imgSw = baseBackgrnd("starwr.png");
    imgLibfy = baseBackgrnd("libfy.png");

    return {
      imgGd,
      imgYt,
      imgSw,
      imgLibfy,
      selectPg: "",
    };
  },
  props: {
    msg: String,
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
  },
  computed: {
    estilizacaoPgLibfy() {
      let alturaPgExpandida = { height: "100vh" };
      let fundo = this.baseBackgrnd("libfy.png");
      let estilizacaoPgLibfy = {
        ...fundo,
        ...(this.selectPg === "libfy" ? alturaPgExpandida : {}),
      };

      return estilizacaoPgLibfy;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bs {
  box-shadow: inset 0 0 0 1000px rgb(224 237 237 / 87%);
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
.pullc:hover {
  height: 28vh;
  box-shadow: inset 0 0 0 1000px rgb(224 237 237 / 42%);
}
.pullc:checked {
  box-shadow: inset 0 0 0 1000px rgb(1 1 1 / 92%);
}
</style>