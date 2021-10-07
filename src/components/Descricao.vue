<template>
  <main data-spy="scroll" data-target="#navbarinside" data-offset="0">
    <section id="meusprojetos">
      <h6 class="d-block d-lg-none text-center">meus projetos</h6>
      <a href="http://time2shareyt.vercel.app/">
        <div class="pullc" :style=imgGd></div
      ></a>
      <a href="https://gd-sheet-y2.vercel.app/">
        <div class="pullc dois"></div>
      </a>
      <a href="https://g4br13l-ju5t1n0.vercel.app/">
        <div class="pullc tres"></div>
      </a>
    </section>

    <section class="sobremim" id="sobremim">
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
  </main>
</template>
<script>
export default {
  name: "Descricao",
  data() {
    let imgYt, imgGd, imgSw;
    let baseBackgrnd = (img) => {
      let requestImg = require(`@/assets/${img}`);
      return { "background-image": `url(${requestImg})` };
    };
    imgGd=baseBackgrnd('gdrive.png')
    return {
        imgGd,
        imgYt,
        imgSw
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pullc{
    height: 28vh;
    background-position-x: center;
    background-position-y: center;
    transition: 3s height;
}
.pullc:hover{
    height: 32vh;
}
</style>