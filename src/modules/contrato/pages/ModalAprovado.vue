<template>
  <div>
    <!-- Modal -->
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
            <h5 class="modal-title" id="">
              Deseja aprovar o contrato do usuário ?
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
                <div class="modal-body fs-3 fw-lighte">
                    {{ user_pendente }}
                </div>
                
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              @click="visible = false"
            >
              Não
            </button>
            <button
              type="button"
              class="btn btn-success"
              @click="aprovarUser()"
            >
              Aprovar contrato
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
  name: "ModalAprovado",
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    ...mapState("auth", ["token"]),
     ...mapState("auth", ["user"]),
  },
  props: {
    id_contrato: {
      type: Number,
    },
    user_pendente: {
        type: String,
    }
  },
  methods: {
    async aprovarUser() {

       const forms = {
          admin_aprovocao: this.user.nome
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
        `https://api-academic-control-v2.herokuapp.com/contrato/aprovar/${this.id_contrato}`,
        options
      )
        .then((res) => res.json())
        .then(() => {
          alert("Associado aprovado")
          this.$router.push({ name: "UsersPendentes" });
        })
        .catch((erro) => console.log(erro));
    },
  },
  created() {
    this.$root.$on("open-modal-aprovado", () => {
      this.visible = true;
    });
    // console.log(this.id_contrato);
  },
};
</script>

<style></style>
