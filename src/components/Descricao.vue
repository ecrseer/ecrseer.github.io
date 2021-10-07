<template>
  <main data-spy="scroll" data-target="#navbarinside" data-offset="0" class="mx-auto">
     
    <div class="row">
     <section class="col-12 col-sm-8 shadow-lg  bg-body rounded" id="meusprojetos">
        <h6 class="d-block d-lg-none text-center">meus projetos</h6>
        
        <a href="http://time2shareyt.vercel.app/" class="">
        <div :style=imgYt class="pullc border bs rounded" ></div
      ></a>
      <a href="https://gd-sheet-y2.vercel.app/">
        <div class="pullc border bs rounded" :style="imgGd"></div>
      </a>
       <a href="https://g4br13l-ju5t1n0.vercel.app/">
        <div class="pullc border bs rounded" :style="imgSw"></div>
      </a>
      
      </section>
      <section class="sobremim col-12 col-sm-4 shadow-lg  bg-body rounded" id="sobremim">
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
export default {
  name: "Descricao",
  data() {
    let imgYt, imgGd, imgSw;
    let baseBackgrnd = (img) => {
      let requestImg = require(`@/assets/${img}`);
      return { "background-image": `url(${requestImg})` };
    };
    imgGd = baseBackgrnd("gdrive.png");
    imgYt = baseBackgrnd("ytime.png");
    imgSw = baseBackgrnd("starwr.png");
    return {
      imgGd,
      imgYt,
      imgSw,
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bs{
    box-shadow: inset 0 0 0 1000px rgb(224 237 237 / 67%);
    
  }
.pullc {
  width: 100%;
  height: 28vh; 
  background-position-x: center;
  background-position-y: center;
  transition: 1s height,2s box-shadow;
    
}
.pullc:hover {
  height: 32vh;
  
  box-shadow: inset 0 0 0 1000px rgb(224 237 237 / 42%);
}
</style>