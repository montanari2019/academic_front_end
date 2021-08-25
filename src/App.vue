<template>
  <div class="ajuste">
 
    <header class="container header-image">
      
      <button type="submit" class=" button-entrar position-absolute top-0 end-0 btn btn-primary">Entrar</button>
      
      <div class="container-home">

        <p class="sub-titles">Associação dos Acadêmicos de </p>

        <h1 class="title">Chupinguaia</h1>

        <p class="paragrafo-02">Sonhe - Acredite - Realize</p>

        <div class="d-grid gap-2">
          <button type="submit" class="  button-menu btn btn-outline-light">Torne-se um associado</button>
       </div>
         
      </div>

    </header>

    <section class="section"></section>
  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css"

export default {
  name: 'App',

}
</script>

<style>

 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap');

.ajuste{
   height: 100%;
}
.container{
  display: flex;
  position: relative;
  align-items: center;
  justify-content:flex-start;
  color:rgb(255, 255, 255);
}

.sub-titles{
  font-family:'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: lighter;
  margin-left: 30px;
  /* text-align: center; */
}
.title{
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  margin-left: 30px;
  /* text-align: center; */
}
.paragrafo-02{
  font-family: 'Montserrat', sans-serif;
  margin-top: 40px;
  padding: 5px;
  font-size: 16px;
  margin-left: 30px;
  font-style:italic;
  /* text-align: center; */
}

.button-menu{
  /* margin-bottom: 100px; */
  margin: 30px;
  margin-top: 50px;

}
.button-entrar{

margin-top: 20px;
margin-right: 20px;



}
.header-image{
  background-image: url('https://controledeacademicos.s3.amazonaws.com/09baa51dc0fc5c1a743f5c0f6ff00d8a-onibus.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 
  height: 100vh;
  background-attachment: fixed;
}
.section{
  height: 1500px;
}

</style>
