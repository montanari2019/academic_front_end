<template>
  <div>
    <NavBarAdmin></NavBarAdmin>

    <main class="container ">
      <section>
        <div class="centralizer">
          <h3 class="mt-3 fw-light text-ajust ">Bem vindo {{ user.nome }}</h3>
          <div>
            <img :src="user.foto_url" class="imagen-user" />
          </div>
          <div class="m-3">
            <button type="button" class="btn btn-warning  position-relative">
              Associados pendentes de aprovação
            </button>
          </div>

          <div class="m-3">
            <button type="button" class="btn btn-info position-relative">
              Contratos vigentes
            </button>
          </div>
        </div>

        <div>
          <h2 class="m-3 fw-light text-ajust ">Todos os associados</h2>
        </div>

        <div class="container-main card p-3">
          <div
            class="card m-3"
            style="width: 30rem;"
            v-for="(user, id) in users"
            v-bind:key="id"
          >
            <div class="card-body">
              <h5 class="card-title">
                {{ user.nome}}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ user.email }}</h6>
              <p class="card-text">
                {{ user.c_p_f }}
              </p>
              <button type="button" class="btn btn-outline-primary">
                Ver detalhes
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { mapState } from "vuex";
import Footer from "../../../components/Footer.vue";
import NavBarAdmin from "../pages/NavBarAdmin.vue";

export default {
  name: "AdminHome",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Footer,
    NavBarAdmin,
  },

  data() {
    return {
      contratos: [],
      users: [],
      quantContratosVigentes: [],
      quantContratosPendentes: "",
    };
  },

  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("auth", ["contrato"]),
    ...mapState("auth", ["token"]),
  },
  methods: {
    async getUsers() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      };

      // console.log(options)
      return await fetch(
        `https://api-academic-control-v2.herokuapp.com/users`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          this.users = res;
          // console.log(this.users);
        })
        .catch((erro) => console.log(erro));
    },
    async getContratos() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      };

      // console.log(options)
      return await fetch(
        `https://api-academic-control-v2.herokuapp.com/contratos`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          this.contratos = res;
          console.log(this.contratos);
        })
        .catch((erro) => console.log(erro));
    },
    contratosVigentes() {
      this.users.filter((valoratual) => {
        console.log("Chamei ", valoratual);
      });
      console.log(" Contratos ", this.contratos);
    },
  },

  created() {
    this.getUsers();
    this.getContratos();
    this.contratosVigentes();
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
.container-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.text-ajust {
  text-align: center;
}

.centralizer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-card {
  max-width: 400px;
  max-height: 200px;
}

.container-list-User {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.imagen-user {
  margin: 10px;
  margin-top: 2%;
  /* position: relative; */
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
}
/* Responsivade*/
@media (min-width: 999px) {
  .background-menu {
    padding-top: 1%;
    padding-bottom: 1%;
  }
}
</style>
