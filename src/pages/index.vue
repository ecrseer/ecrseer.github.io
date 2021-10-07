<template>
<div> 
  
  
<main data-spy="scroll" data-target="#navbarinside"
      data-offset="0">
    <section id="meusprojetos">
        <h6 class="d-block d-lg-none text-center">
            meus projetos 
        </h6>
        <a href="http://time2shareyt.vercel.app/">
            <div class="pullc" :style="{'background-image':'url('+require('@/assets/gdrive.png')+')'}"></div>
            </a>
        <a href="https://gd-sheet-y2.vercel.app/">
            <div class="pullc" :style="{'background-image':'url('+require('@/assets/ytime.png')+')'}"></div>
        </a>
        <a href="https://g4br13l-ju5t1n0.vercel.app/">
            <div class="pullc" :style="{'background-image':'url('+require('@/assets/starwr.png')+')'}"></div>
        </a>
    </section>

    <section class="sobremim" id="sobremim">
        <p>Descrição academica</p>
        

        <div class="card rounded shadow-lg ">
            <main class="card-body">
                <p>Gabriel Justino</p>
                <h4>Instituto INFNET</h4>
                <p>Engenharia de software</p>
            </main>
        </div>
        

        <div class="card rounded shadow-lg ">
            <main class="card-body">
                <h4>---</h4>
                <p>---</p>
            </main>
        </div>

    </section>
</main>
<footer class="navbar">
    <a href="https://www.github.com/ecrseer"><span class="fab fa-github"></span></a>
     
        <nav id="navbarinside">
            
            <nav id="navbarinside">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="#meusprojetos">Meus projetos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#sobremim">Sobre mim</a>
                    </li>
                </ul>
    
            </nav>

        </nav>
     
    <a href="https://www.linkedin.com/in/gabriel-justino-147246169/"><span class="fab fa-linkedin"></span></a>
</footer>



</div>
</template>

<script> 

export default {
  name: 'Index',
  data:()=>{
    let num=23
    let styleaimg=
         {
          'background-image':'url('+require('@/assets/gdrive.png')+')'
        }
    return {
            num,
            styleaimg
    }
  },
  computed:{
    getWebPimg(){
      let styleaimg= (imgNome='ytime.png')=>
         {
           return {'background-image':'url('+require(`@/assets/${imgNome}`)+')'}
        }
    return imgNome => styleaimg(imgNome)
    }
  }
}
</script>

<style scoped scope="scss">
 @import 'index.scss';
</style>
