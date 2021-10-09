<template>
  <div>
    <div
      class="modal show fade"
      id="exampleModal"
      tabindex="-1"
      style="display:block"
      v-if="visible"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Descrição do cancelamento (Contrato nº {{ id_contrato }})
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="visible = false"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >Descrição:  </label
                >
                <textarea class="form-control"
                  v-model="descricao"
                  id="message-text">Cancelado a pedido da entidade</textarea
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              @click="visible = false"
            >
              Fechar
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="cancelarContrato()"
            >
              Cancelar Cadastro
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" v-if="visible"></div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { mapState } from "vuex";

export default {
  name: "ModalListUser",
  data() {
    return {
      visible: false,
      descricao: "",
    };
  },
  computed: {
    ...mapState("auth", ["token"]),
  },
  props: {
    id_contrato: {
      type: Number,
    },
  },
  methods: {
    async cancelarContrato() {
        const forms = {
            descricao: this.descricao
        }
      const options = {
        method: "PUT",
        body: JSON.stringify(forms),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      };

      console.log("Requisitando na api");
      return await fetch(
        `https://api-academic-control-v2.herokuapp.com/contrato/cancelar/${this.id_contrato}`,
        options
      )
        .then((res) => res.json())
        .then(() => {
          location.reload(true);
        })
        .catch((erro) => console.log(erro));
    },
  },
  created() {
    this.$root.$on("open-modal", () => {
      this.visible = true;
    });
    console.log(this.id_contrato);
  },
};
</script>

<style></style>
