<template>
  <div class="pullc border bs rounded" :style="estilizacaoPg">
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut qui alias,
        eum nesciunt, distinctio suscipit expedita perferendis nisi pariatur
        odit provident. Placeat, beatae? Suscipit fuga non id accusamus quis
        nisi?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioContainer",
  props: {
    selectPg: String,
    pagina: String,
  },
  methods: {

    /* eslint-disable */
    checkUncheck(val) {
        debugger
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