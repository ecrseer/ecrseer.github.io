<template>
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
     
    <a href="https://www.linkedin.com/in/gabriel-justino-147246169/"><span class="fab fa-linkedin-in"></span></a>
</footer>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
.navbar{
    height: 7vh;
    width: 100%;
    background: rgb(223 236 236 / 94%);
    position: fixed;
    bottom: 0;
}
</style>