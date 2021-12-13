<template>
  <div>
    <NavBarAdmin></NavBarAdmin>

    <main class="container">
      <section>
        <div class="mt-5 centralizer">
          <img :src="user.user.foto_url" class="imagen-user" />
        </div>

        <div class="container-main">
          <div class="mt-5 p-3 container-user-info card">
            <div class="p-2 mb-3 card card-ajust card-user">
              <h6>Nome</h6>
              <p>{{ user.user.nome }}</p>
            </div>

            <div class="p-2 mb-3 card card-ajust  card-user">
              <h6>Email</h6>
              <p>{{ user.user.email }}</p>
            </div>

            <div class="p-2 mb-3 card card-ajust  card-user">
              <h6>RG</h6>
              <p>{{ user.user.r_g }}</p>
            </div>

            <div class="p-2 mb-3 card card-ajust  card-user">
              <h6>CPF</h6>
              <p> {{ user.user.c_p_f }}</p>
            </div>

             <div class="p-2 mb-3 card card-ajust  card-user">
              <h6>Endereço</h6>
              <p>{{ user.user.endereco }} / nº {{ user.user.numero }} / CEP: {{ user.user.cep }}</p>
            </div>

            <div class="p-2 mb-3 card card-ajust card-user">
              <h6>Faculdade</h6>
              <p>{{ user.faculdade.nome }}</p>
            </div>

            <div class="p-2 mb-3 card card-ajust card-user">
              <h6>Contrato</h6>
              <p>{{ user.vigente == true ? "Contrato vigente" : "Pendente de aprovação" }}</p>
            </div>

            <div class="p-2 mb-3 card card-ajust card-user">
              <h6>Mensalidade</h6>
              <p>R$ {{ user.mensalidade }}</p>
            </div>

            <div class="p-2 mb-3 card card-ajust card-user">
              <h6>Quantidade de dias ultilizados</h6>
              <p>{{ user.dias_ultilizados }}</p>
            </div>

            <div class="p-2 mb-3 card card-ajust card-user">
              <h6>Dias de viagem</h6>
              <p>{{ user.dias_viagem }}</p>
            </div>

            <div class="p-2 mb-3 card card-ajust card-user">
              <h6>Administrador aprovação</h6>
              <p>
                {{  user.admin_aprovocao ? user.admin_aprovocao : "Pendente de aprovação" }}
              </p>
            </div>

            <div class="p-2 mb-3 card card-ajust card-user">
              <h6>Descrição do contrato</h6>
              <p>{{ user.descricao }}</p>
            </div>
          </div>

          <!-- Botões -->
        <div class="container-button-group">
          <div class=" m-2 " v-if="user.aprovado === false">
            <button type="button" class="btn btn-success btn-block btn_ajuste"  @click="$root.$emit('open-modal-aprovado')"  >
              Aprovar contrato
            </button>
          </div>

          <div class=" m-2" v-if="user.cancelado === true">
            <button type="button" class="btn btn-success btn-block btn_ajuste">
              Reativar contrato
            </button>
          </div>

          <div class=" m-2">
            <button
              type="button"
              class="btn btn-danger  btn-block btn_ajuste"
              @click="$root.$emit('open-modal-cancelamento')">
              Cancelar contrato
            </button>
          </div>

          <div class=" m-2">
            <button
              type="button"
              class="btn btn btn-info  btn-block btn_ajuste"
              @click="$root.$emit('open-modal-email')">
              Enviar email
            </button>
          </div>

          <!-- <div class=" m-2">
            <button
              type="button"
              class="btn btn-primary  btn-block btn_ajuste"
              @click="homeAdmin()">
              Voltar a home
            </button>
          </div> -->

          <ModalCancelamento :id_contrato="user.id"></ModalCancelamento>
          <ModalEmail :nomeAssociado="user.user.nome" :email="user.user.email"></ModalEmail>
          <ModalAprovado :user_pendente="user.user.nome" :id_contrato="user.id"></ModalAprovado>
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
import ModalCancelamento from "../pages/ModalCancelamento.vue";
import ModalAprovado from "../pages/ModalAprovado.vue";
import ModalEmail from "../pages/ModalEnviarEmail.vue";

export default {
  name: "AnaliseUser",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Footer,
    NavBarAdmin,
    // eslint-disable-next-line vue/no-unused-components
    ModalCancelamento,
    ModalAprovado,
    ModalEmail
  },

  data() {
    return {
      user: {},
      user_id: this.$route.params.id,

    };
  },

  computed: {
    ...mapState("auth", ["token"]),
   
  },
  methods: {
    

    homeAdmin() {
      this.$router.push("/admin/Home");
    },

    async getUser() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      };

      console.log("Buscando na api");
      return await fetch(
        `https://api-academic-control-v2.herokuapp.com/contratos/userList/${this.user_id}`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          this.user = res[0];
          console.log(this.user);
        })
        .catch((erro) => console.log(erro));
    },
  },

  created() {
    this.getUser();
  },
};
</script>

<style>
.card-user:hover {
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  transition: 0.4s;
}
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.text-ajust {
  text-align: center;
}
.card-ajust {
  width: 23rem;
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
.btn_ajuste {
  width: 25rem;
}

.imagen-user {
  margin: 10px;
  margin-top: 2%;
  /* position: relative; */
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 0.5px solid #00c6c2;
}
/* Responsivade*/
@media (min-width: 999px) {
  .container-button-group{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px
  }
  .background-menu {
    padding-top: 1%;
    padding-bottom: 1%;
  }
  .container-user-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .container-main {
    flex-direction: row;
    justify-content: space-between;
  }
  .card-ajust {
    width: 30rem;
  }
  .btn_ajuste {
    width: 30rem;
  }
}
</style>
