<template>
  <div class="container-pai">
 
    <header class="">

      <div class="header-image ajuste">
      
        <button type="submit" v-on:click="routeLogin()" class=" button-entrar position-absolute top-0 end-0 btn btn-primary btn-lg">Entrar</button>
        
        <div class="container-grafia">

          <p class="sub-titles">Associação dos Acadêmicos de </p>

          <h1 class="title">Chupinguaia</h1>

          <p class="paragrafo-02">Sonhe - Acredite - Realize</p>

        <div class="d-grid gap-2">
            <button type="submit" class="button-menu btn btn-outline-light">Torne-se um associado</button>
        </div>
          
        </div>

      </div>

    </header>

    <main class="container-main">
 
<!-- Presidente section -->
      <section >
        <!-- dona rosana -->
        <div class="">
          <img class="foto-elipse" src="https://controledeacademicos.s3.amazonaws.com/2108a074326fcfe8ffbe2c63b0668ae7-foto-da-rosana.jpg" alt="" srcset="">
          <div class="text-ajuste">
            <h1 class="title-foto">Rosana Chrisosthemos</h1>
            <h2 class="sub-title-foto">Presidente</h2>
            <p class="paragrafo-foto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using 'Content here, content here', making it look like readable English. 
              Many desktop publishing packages and web page editors now use </p>
          </div>
        </div>
      </section>

<!-- Motorista section -->
      <section>
        
        <!-- motorista -->
        <div class="">
          <img class="foto-elipse" src="https://controledeacademicos.s3.amazonaws.com/f023d6f5f8a964610db38cd8f982da9e-foto-do-dinei-resolvido-02.jpg" alt="" srcset="">
          <div class="paragrafo-ajuste-right">
            <h1 class="title-foto">Poderoso Rei dos Volantes</h1>
            <h2 class="sub-title-foto">Motorista</h2>
            <p class="paragrafo-foto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using 'Content here, content here', making it look like readable English. 
              Many desktop publishing packages and web page editors now use </p>
          </div>
        </div>
      </section>
    </main>

    <main class="main-foto">
      <div class="container-main-grafia">
        <div>
          <h1 class="main-title">Associação dos Academicos de Chupinguaia</h1>
        </div>
       <div>
          <h2 class="main-sub-title">Sonhar não é impossível</h2>
          <h2 class="main-sub-title">Realizar é sua rotina</h2>
          <h2 class="main-sub-title">Vivencie o Extraordinário</h2>
       </div>
      </div>
    </main>

    <main>
      <section>
        <h1 class="main-title-galeria">Galeria de Fotos</h1>
        <p class="main-sub-title-galeria">O comprometimento e a trasparência nos detalhes são um dos pontos mais importantes</p>
      </section>

<!-- carrosel -->
      <section class="container-grid-carosel">
        <div id="items-wrapper">
          <div id="items">
            <div class="item">
              <img src="https://controledeacademicos.s3.amazonaws.com/d8bae281fb2331bde30b6d22b86ae0c3-wefef.jpg" alt="" srcset="">
            </div>

            <div class="item">
              <img src="https://controledeacademicos.s3.amazonaws.com/886cbef60ceee1458dd9f6d52abcaa76-aeda.jpg" alt="" srcset="">
            </div>

            <div class="item">
              <img src="https://controledeacademicos.s3.amazonaws.com/7431d47fe43d876562026e0e0d4d9d57-ascadvad.jpg" alt="" srcset="">
            </div>

            <div class="item">
              <img src="https://controledeacademicos.s3.amazonaws.com/ba720d49c99b436077637ebffa8d612b-ff.jpg" alt="" srcset="">
            </div>

            <div class="item">
              <img src="https://controledeacademicos.s3.amazonaws.com/0704e828d9119822d64adda3dd5ff107-FKSFJBKDF.jpg" alt="" srcset="">
            </div>

            <div class="item">
              <img src="https://controledeacademicos.s3.amazonaws.com/acdc17c25d5b77e12850fcadfe240759-untitled.jpg" alt="" srcset="">
            </div>

            <div class="item">
              <img src="https://controledeacademicos.s3.amazonaws.com/7060f9d0c9565a5d10f71f30acd2dc28-adcdc.jpg" alt="" srcset="">
            </div>

            <div class="item">
              <img src="https://controledeacademicos.s3.amazonaws.com/a766102ac65dd47721c79e1c6c676128-ZDBZFBXD.jpg" alt="" srcset="">
            </div>

            <div class="item">
              <img src="https://controledeacademicos.s3.amazonaws.com/5213edc72e629c372487b13089d3e104-adsgsf.jpg" alt="" srcset="">
            </div>
          </div>
        </div>
      </section>

    </main>

    <main class="main-container-footer">
      <section>
        <h1 class="main-title-galeria">Está esperando oque?</h1>
        <p class="main-sub-title-galeria">Venha crescer junto com a gente</p>
      </section>
       <div class="d-grid gap-2">
            <button type="submit" class="button-footer btn btn-outline-dark">Torne-se um associado</button>
        </div>
    </main>

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
  name: 'Home',

  methods:{
    routeLogin(){
      this.$router.push('/login')
    }
  },

}
</script>

<style>

 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap');


.container-pai{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* CCS HEADER */
.ajuste{

  display: flex;
  position: relative;
  align-items: center;
  justify-content:flex-start;

}
.header-image{
  display: flex;
  background-image: url('https://controledeacademicos.s3.amazonaws.com/e47fd1731e644d276b5a2f70aca680e9-Sem%20T%C3%ADtulo-1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-attachment: fixed;
}
.sub-titles{
  font-family:'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: lighter;
  color: #fff;

}
.title{
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  color: #fff;

}
.paragrafo-02{
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
  padding: 5px;
  font-size: 16px;
  font-style:italic;
  color: #fff;

}
.container-grafia{
  margin-left: 30px;
  display:  flex;
  flex-direction: column;
}
.button-entrar{
  margin: 20px;
}

/* Responsividade do header */
@media(min-width: 650px){
    .title{
    font-size: 80px;
  }
  .container-grafia{
   margin-left: 10%;
  }
  .sub-titles{
    font-size:30px;
  }
  .paragrafo-02{
    font-size:30px;
    padding-bottom: 10%;
  }
  .button-entrar{
    font-size: 20px;
    margin-right: 8%;
  }
  .button-menu{
    margin-top: 20px;
    font-size: 25px;
  }
}


/* CCS FOTO PRESIDENTES */
.container-main{
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;  
  /* align-content: center; */
  margin-bottom: 20%;

}

.foto-elipse{
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  margin: 1%;
  /* top: 433px; */
}

.title-foto{

  margin: 20px;
  color: #262E51;
  font-family: Montserrat;
  font-weight: bolder;
  font-size: 25px;
  line-height: 17px;
}
.sub-title-foto {
  margin: 20px;
  color: #262E51;
  font-family: Montserrat;
  font-style:italic;
  font-size: 20px;
  line-height: 17px;
}
.paragrafo-foto{
  max-width: 400px;
  max-height: 400px;
  margin: 20px;
  color: #262E51;
  font-family: Montserrat;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.8;
}
.paragrafo-ajuste-right{
  text-align: right;
}

/* Responsividade das fotos */
@media(min-width: 650px){
  .container-main{
    justify-content: space-around;
    align-items: center;  
    margin: 5%;
  }
  .foto-elipse{
    max-width: 550px;
    max-height: 550px;
    margin: 1%;
  }
  .title-foto{
    font-size: 35px;
  }
  .sub-title-foto {
    font-size: 28px;
  }
  .paragrafo-foto{
    max-width: 550px;
    max-height: 550px;
    color: #262E51;
    font-size: 20px;
  }
  
}

/* FOTO MAIN DO ONIBUS */
.main-foto{
  display: flex;
  background-image: url('https://controledeacademicos.s3.amazonaws.com/e47fd1731e644d276b5a2f70aca680e9-Sem%20T%C3%ADtulo-1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-attachment: fixed;
}
.main-title{
  padding: 40px;
   font-family: 'Montserrat', sans-serif;
   font-weight: bolder;
   text-align: center;
   color: #fff;

}
.main-sub-title{
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    text-align: center;
    color: #fff;
    font-size: 20;
}


/* Galeria */
.main-title-galeria {
   font-family: 'Montserrat', sans-serif;
   margin-top: 60px;
   color: #262E51;
   font-family: Montserrat;
   font-weight: bolder;
   text-align: center;
}
.main-sub-title-galeria{
   margin: 20px;
   color: #262E51;
   font-family: Montserrat;
   font-weight: normal;
   text-align: center;
   margin-bottom: 60px;
}
.main-container-footer{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

/* Carrocel de imagens */
#items-wrapper{
  width: 100vw
}
#items{
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

}
.item{
  flex: none;
  width: 100%;
  height: 400px;
  scroll-snap-align: start;
}
img{
  /* padding:10px; */
  /* border-radius: 15px; */
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container-grid-carosel{
  display: grid;
  place-items: center;
  height: 100%;
}

/* Responsivade do carrosel de imagens */
@media(min-width: 650px){
  .item{
    width: 35%;
    height: 100%;
    scroll-snap-align: start;
  }
  
}


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
