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
      <h6 class="fs-3 fw-light text-center m-5">Formulário de Contrato</h6>

      <form class="row g-3 needs-validation">
        <div class="col-md-6">
          <label for="inputState" class="form-label"
            >Quantos dias você irá? {{ dias_utilizados }}</label
          >
          <select class="form-select" v-model="dias_utilizados" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div class="col-md-6">
          <label for="inputState" class="form-label"
            >Seu tempo de contrato: {{ validade }} meses</label
          >
          <select class="form-select" v-model="validade" required>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
          </select>
        </div>

        <div class="col-md-6">
          <label for="inputState" class="form-label"
            >Quais dias você irá? {{ dias_viagem }}</label
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

        <div class="col-md-6">
          <label class="form-label" for="date"
            >Data de vencimento da sua mensalidade: ex(
            {{ data_vencimento }}/12/2021 )</label
          >
          <select class="form-select" v-model="data_vencimento" required>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
          </select>
        </div>

        <div class="col-md-12">
          <label for="inputState" class="form-label"
            >Faculdade: {{ faculdade }}</label
          >
          <select
            class="form-select"
            v-model="faculdade"
            required
            @change="calcularMensalidade()"
          >
            <option
              v-for="(faculdade, id) in faculdades"
              v-bind:key="id"
              :value="faculdade.id"
              >{{ faculdade.nome }}</option
            >
          </select>
        </div>

        <label for="inputState" class="form-label"
          >Por que deveríamos aceitar você ?</label
        >
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style="height: 150px"
            v-model="descricao"
          ></textarea>
          <label for="floatingTextarea">Descrição</label>
        </div>

        <!-- Dados do endereço -->

        <div class="btn-cadastro">
          <button type="submit" @click="postContrato()" class="btn btn-success">
            Concluir Cadastro
          </button>
        </div>
      </form>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
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
      faculdades: [],
      faculdade: "",
      data_vencimento: "",
      dias_viagem: "",
      dias_utilizados: "",
      validade: "",
      mensalidade: "",
      descricao: "",
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("auth", ["token"]),
  },
  methods: {
    routeHome() {
      this.$router.push("/");
    },
    routeLogin() {
      this.$router.push("/login");
    },
    calcularMensalidade() {
      this.mensalidade = 90 * this.dias_utilizados;
      console.log(this.mensalidade);
      // console.log("ID FACULDADE", this.faculdade);
    },
    async getFaculdades() {
      // console.log("GET FACULDADES ACIONADA");

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      };

      // console.log(options)
      return await fetch(
        `https://api-academic-control-v2.herokuapp.com/faculdades`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          this.faculdades = res;
          // console.log(this.faculdades);
        })
        .catch((erro) => console.log(erro));
    },

    async postContrato() {

      await this.calcularMensalidade()

      const forms = {
        validade: this.validade,
        aprovado: false,
        vigente: false,
        cancelado: false,
        descricao: this.descricao,
        dias_ultilizados: this.dias_utilizados,
        dias_viagem: this.dias_viagem,
        mensalidade: this.mensalidade,
        data_vencimento: this.data_vencimento,
        id_user: this.user.id,
        id_faculdade: this.faculdade,
        id_associacao: this.user.id_associacao,
      };

      // eslint-disable-next-line no-unused-vars
      const options = {
        method: "POST",
        body: JSON.stringify(forms),
        headers: {
          "Content-Type": "application/json",
        },
      };

      // console.log(forms)

      return await fetch(
        `https://api-academic-control-v2.herokuapp.com/contratoStore`,
        options
      )
        .then((res) => res.json())
        .then(() => {
          alert("Seu contrato foi enviado para aprovação em breve teremos notícias")
          this.$router.push("/user")
        })
        .catch((erro) => console.log(erro));
    },
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
.ajuste-body {
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
