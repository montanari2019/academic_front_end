<template>
  <div class="">
    <div class="header ">
      <div class="container container-ajuste">
        <div class="m-3">ACADEMICOS DE CHUPINGUAIA</div>
        <button
          type="button"
          v-on:click="routeHome()"
          class="btn btn-light m-3"
        >
          Sair
        </button>
      </div>
    </div>

    <section class="container ajuste-body">
      <h6 class="fs-3 fw-light text-center m-5">Formulário de Contrato </h6>

      <form class="row g-3 needs-validation">
        <div class="col-md-4">
          <label for="inputState" class="form-label"
            >Quantos dias você irá?</label
          >
          <select class="form-select" v-model="dias_utilizados" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div class="col-md-4">
          <label for="inputState" class="form-label"
            >Quais dias você irá?</label
          >
          <select class="form-select" v-model="dias_viagem" required>
            <option>SEGUNDA</option>
            <option>TERÇA</option>
            <option>QUARTA</option>
            <option>QUINTA</option>
            <option>SEXTA</option>
            <option>SEGUNDA A SEXTA</option>
            <option>SEGUNDA A TERÇA</option>
            <option>SEGUNDA A QUARTA</option>
            <option>SEGUNDA A QUINTA</option>
            <option>TERÇA A QUARTA</option>
            <option>TERÇA A QUINTA</option>
            <option>TERÇA A SEXTA</option>
            <option>QUARTA A QUINTA</option>
            <option>QUARTA A SEXTA</option>
            <option>QUINTA A SEXTA</option>
          </select>
        </div>

        <div class="col-md-4">
          <label class="form-label" for="date">Data de vencimento da sua mensalidade</label>
          <input
            class="form-control"
            id="date"
            name="date"
            placeholder="MM/DD/YYY"
            type="date"
          />
        </div>

       <div class="col-md-12">
          <label for="inputState" class="form-label">Faculdade</label>
          <select class="form-select" v-model="faculdade" required>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>

        <!-- Dados do endereço -->

        <div class="btn-cadastro">
          <button type="submit" @click="postUser()" class="btn btn-success">
            Concluir Cadastro
          </button>
        </div>
      </form>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapState } from "vuex";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Footer from "../../../components/Footer.vue";

export default {
  name: "UserCadastro",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Footer,
  },
  data() {
    return {
      faculdades:[
        
      ],

    };
  },
   computed: {
    ...mapState("auth", ["faculdades"]),
  },
  methods: {
    ... mapActions('auth', ['ActionGetFaculdades']),
    routeHome() {
      this.$router.push("/");
    },
    routeLogin() {
      this.$router.push("/login");
    },
    async getFaculdades(){
      await this.ActionGetFaculdades()
    }
    
  },

   created() {
    this.getFaculdades();
    // location.reload(true);
  },
};
</script>

<style>
.header {
  width: 100vw;
  height: 70px;
  background: #262e51;
  color: aliceblue;
}
.container-ajuste {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ajuste-body{
  margin-bottom: 20%;
}

.btn-cadastro {
  display: flex;
  justify-content: center;
}

@media (min-width: 650px) {
  .btn-cadastro {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
