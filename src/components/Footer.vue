<template>
  <div class="container-pai">

  <footer class="footer">
    <div>
      <h1 class="title-footer">Associação dos Academicos de Chupinguaia</h1>
      <div class="sub-title-footer">
        <p>associaçãodoacademicoschp@gmail.com</p>
        <p>(69)3322-6574</p>
        <p>Chupinguia-RO</p>
      </div>
    </div>
  </footer>

  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css"



export default {
  name: 'Footer',


}
</script>

<style>

 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap');




/* Footer da pagina */
.footer{
  margin-top: 60px;
  background-color: #262E51;
}
.title-footer{
  font-family: 'Montserrat', sans-serif;
  padding-top: 10%;
   color: #fff;
   font-family: Montserrat;
   font-weight: bolder;
   text-align: center;
   font-size: 20px;
}
.sub-title-footer{
font-family: 'Montserrat', sans-serif;
   padding: 60px;
   color: #fff;
   font-family: Montserrat;
   font-weight: normal;
   text-align: center;
}
.button-footer{
  margin-left: 60px;
  margin-right: 60px;
  font-size: 16px;
}

/* Responsivade do footer */
@media(min-width: 650px){
  .button-footer{
    margin-left: 30%;
    margin-right: 30%;
    font-size: 20px;
  }
  .title-footer{
  padding-top: 5%;
   color: #fff;
   font-family: Montserrat;
   font-weight: bolder;
   text-align: center;
   font-size: 30px;
}
  
}

</style>
