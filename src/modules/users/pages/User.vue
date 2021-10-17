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
                <li class="nav-item button-menu">
                  <a class="nav-link" v-on:click="homepage()">Home</a>
                </li>
                <li class="nav-item button-menu">
                  <a class="nav-link" v-on:click="routeAdmin()"
                    >Area do Administrador</a
                  >
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

    <main>
      <!-- usuário -->
      <section class="container-section">
        <div>
          <img :src="user.foto_url" class="imagen-user" />
        </div>
        <div>
          <!-- <button type="button" class="btn btn-outline-warning btn-sm">Alterar foto</button> -->
          <div class="input-group mb-2">
            <input
              type="file"
              class="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
            />
            <button
              class="btn btn-outline-warning"
              type="button"
              id="inputGroupFileAddon04"
            >
              Upload
            </button>
          </div>
        </div>
        <div class="text-center mt-3">
          <p>Nome</p>
          <h6>{{ user.nome }}</h6>
        </div>
        <!-- <div class="text-center mt-3">
          <p>Email</p>
          <h6>{{ user.email }}</h6>
        </div>
        <div class="text-center mt-3">
          <p>Contrato Vigente</p>
          <h6>{{ contrato.vigente === true ? "Status Vigente" : "Pendente de aprovação" }}</h6>
        </div> -->
      </section>

      <!-- Boletos -->
      <section class="container mt-5 container-boletos">
        <div class="card mt-5 boletos-margin">
          <div class="card-header">
            Seu boleto
          </div>

          <div class="card-body">
            <h5 class="card-title">Vencimento: 10/12/2022</h5>
            <br />
            <p class="card-text">Mensalidade: {{ contrato.mensalidade }}</p>
            <p class="card-text">
              Linha digitável: 00190500954014481606906809350314337370000000100
            </p>
            <p class="card-text">
              Nosso numero: 123551-2
            </p>
            <p class="card-text">
              Situção do bolto: Liquidado
            </p>
            <button class="btn btn-primary">Imprimir</button>
          </div>
        </div>

        <div class="card mt-5 boletos-margin">
          <div class="card-header">
            Seu boleto
          </div>

          <div class="card-body">
            <h5 class="card-title">Vencimento: 10/12/2022</h5>
            <br />
            <p class="card-text">Mensalidade: {{ contrato.mensalidade }}</p>
            <p class="card-text">
              Linha digitável: 00190500954014481606906809350314337370000000100
            </p>
            <p class="card-text">
              Nosso numero: 123551-2
            </p>
            <p class="card-text">
              Situção do bolto: Liquidado
            </p>
            <button class="btn btn-primary">Imprimir</button>
          </div>
        </div>

        <div class="card mt-5 boletos-margin">
          <div class="card-header">
            Seu boleto
          </div>

          <div class="card-body">
            <h5 class="card-title">Vencimento: 10/12/2022</h5>
            <br />
            <p class="card-text">Mensalidade: {{ contrato.mensalidade }}</p>
            <p class="card-text">
              Linha digitável: 00190500954014481606906809350314337370000000100
            </p>
            <p class="card-text">
              Nosso numero: 123551-2
            </p>
            <p class="card-text">
              Situção do bolto: Liquidado
            </p>
            <button class="btn btn-primary">Imprimir</button>
          </div>
        </div>
      </section>
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
import { mapActions } from "vuex";
import { mapState } from "vuex";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css";

export default {
  name: "User",
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("auth", ["contrato"]),
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
    async routeAdmin() {
      if (this.user.admin == true) {
        this.$router.push({ name: "AdminHome" });
      } else {
        alert("Você não é um administrador");
      }
    },

    async homepage() {
      this.$router.push({ name: "Home" });
    },
    async getContrato() {
      await this.ActionContratoUser();
      // console.log(this.contrato);
      // Verificando a existencia do contrato
      if (this.contrato == undefined && this.user.admin == false) {
        const confirmation = confirm(
          "Seu contrato não existe por favor realizar contrato para prosseguir"
        );
        if (confirmation == true) {
          this.$router.push({ name: "Contrato" });
          return;
        } else {
          this.$router.push({ name: "Home" });
          this.routeLogout();
          return;
        }
      }
    },
  },
  created() {
    this.getContrato();
    // location.reload(true);
  },
};
</script>

<style>
.background-menu {
  background: #262e51;
  padding-top: 3%;
  padding-bottom: 3%;
}
.button-menu {
  cursor: pointer;
}
.container-ajust {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imagen-user {
  margin: 10px;
  margin-top: 10%;
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
}

.footer {
  margin-top: 60px;
  background-color: #262e51;
}
.title-footer {
  font-family: "Montserrat", sans-serif;
  padding-top: 10%;
  color: #fff;
  font-family: Montserrat;
  font-weight: bolder;
  text-align: center;
  font-size: 20px;
}
.sub-title-footer {
  font-family: "Montserrat", sans-serif;
  padding: 60px;
  color: #fff;
  font-family: Montserrat;
  font-weight: normal;
  text-align: center;
}

/* Responsivade*/
@media (min-width: 999px) {
  .button-footer {
    margin-left: 30%;
    margin-right: 30%;
    font-size: 20px;
  }
  .title-footer {
    padding-top: 5%;
    color: #fff;
    font-family: Montserrat;
    font-weight: bolder;
    text-align: center;
    font-size: 30px;
  }
  .container-boletos {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
  .boletos-margin {
    margin-left: 2%;
    margin-right: 2%;
  }
  .background-menu {
    padding-top: 1%;
    padding-bottom: 1%;
  }
}
</style>
