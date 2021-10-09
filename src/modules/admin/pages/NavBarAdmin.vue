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
            <a class="navbar-brand">ACADEMICOS DE CHUPINGUAIA</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item button-menu">
                  <a class="nav-link" v-on:click="homepage()">Home</a>
                </li>
                <li class="nav-item button-menu">
                  <a class="nav-link" v-on:click="routeUser()"
                    >Area do Associado</a
                  >
                </li>
                <li class="nav-item button-menu">
                  <a class="nav-link" v-on:click="homeAdmin()">Home Administrador</a>
                </li>
                
                <li class="nav-item button-menu">
                  <a class="nav-link" v-on:click="routeLogout()">Sair</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { mapActions } from "vuex";



export default {
  name: 'NavBarAdmin',
methods:{
    ...mapActions("auth", ["ActionLogout"]),
    async routeLogout() {
      try {
        await this.ActionLogout();
        location.reload(true);
      } catch (err) {
        console.log(err);
      }
    },
    async routeUser() {
      
        this.$router.push({ name: "User" });
     
    },

    async homepage() {
      this.$router.push({ name: "Home" });
    },

    async homeAdmin() {
      this.$router.push({ name: "AdminHome" });
    },
},
}
</script>

<style>


</style>