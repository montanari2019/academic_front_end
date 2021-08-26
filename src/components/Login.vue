<template>
<div class="container-pai">
    <main class="bgcolor" >
        <div class="container-login">

        <h6 class="sub-titles02">Associação dos Acadêmicos de</h6>
        <h6 class="title02">Chupinguaia</h6>  

        <div class="card-login">
            <!-- <p class="fs-6 fw-light text-start login login-title">Login</p> -->

            <div class="card-ajuste">
                <div class="">
                    <label class="login-title" for="floatingInput">Email</label>                    
                </div>
                <div>
                    <input type="email" class="" id="floatingInput" placeholder="">
                </div>


                <div class="">
                    <label class="login-title">Senha</label>                  
                </div>
                <div>
                     <input type="password" class="" id="floatingPassword" placeholder="">
                </div>

            </div>

           <div class="d-grid gap-2 m-3">
                <button class="btn btn-success btn-login" type="button">Login</button>
                 <router-link class="router-link" to="/">Esqueci minha senha</router-link>
            </div>
            
        </div>

        <div>
            <h6 class="sub-title-footer m-5">Chupinguia-RO</h6>
            <h6 class="sub-title-footer m-5">Created and developed by Ikaro Bruno da Mata Montanari</h6>

        </div>

    </div>

    </main>
    

</div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css"


export default {
name: 'Login',

 methods:{
    Login(){
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
.bgcolor{ 
background: linear-gradient(116.81deg, #262E51 42.44%, #26514E 100%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
}
.sub-titles02{
/* margin-top:40%; */
font-family:'Montserrat', sans-serif;
font-size: 16px;
font-weight: lighter;
color: #fff;

}
.title02{
font-family: 'Montserrat', sans-serif;
font-weight: bolder;
color: #fff;
font-size: 16px;

}
.container-login{
text-align: center;
margin-top: 10%;
/* margin-bottom: 10%; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

}
.card-login{
margin-top: 10%;
background: #FFFFFF;
border-radius: 5px; 
width: 80%;
/* height: 600px; */
}
.login-title{
padding: 10%;
font-family:'Montserrat', sans-serif;
font-size: 14px;
font-weight: normal;
text-align:left;
color: #262E51;
}
input{
    margin: 3%;
    width: 80%;
    border: none;
    border-bottom: 1px solid #C4C4C4;
}
.router-link{
    padding: 10%;
}
.card-ajuste{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* flex-wrap: wrap; */
}

@media(min-width: 650px){
   .sub-titles02{
/* margin-top:40%; */
    font-size: 36px;
    font-weight: lighter;
    color: #fff;

    }
    .title02{
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    color: #fff;
    font-size: 36px;
    }
    .login-title{
        font-size: 18px;
    }
    .btn-login{
        font-size: 18px;
    }
}

</style>

