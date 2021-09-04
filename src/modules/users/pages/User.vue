<template>
  <div>
    <header class="background-menu">
      <div class="container container-ajust">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">ACADEMICOS DE CHUPINGUAIA</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li class="nav-item">
                  <a class="nav-link" v-on:click="homepage()">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Area do Administrador</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" v-on:click="routeLogout()">Sair</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <section>
        <div class="imagen-user">
          
        </div>
      </section>
    </main>

  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default {
  name: "App",
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('auth', ['contrato'])

  },
  methods: {
    ...mapActions("auth", ["ActionLogout"]),
    ...mapActions("auth", ["ActionContratoUser"]),
    async routeLogout() {
      try {
        await this.ActionLogout();
        location.reload(true);
      } catch (err) {
        console.log(err);
      }
    },
    async getContrato(){
      await this.ActionContratoUser()
    }
  },
  created (){
    this.getContrato()
  }
};
</script>

<style>
.background-menu {
  background: #262e51;
}
.container-ajust {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.imagen-user{
  background-image: url('https://controledeacademicos.s3.amazonaws.com/3b6edffb72896b32a59ed2c120679f0d-IMG_20180716_112759_837.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 50vw;
  height: 50vh;
  
}
</style>
