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
              Olá {{ name }}
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
                Você foi cadastrada com sucesso, em breve teremos mais noticias.
                Pode agora fazer o login pela primeira vez.
              </div>
            </form>
          </div>
          <div class="modal-footer">
        
            <button
              type="button"
              class="btn btn-success"
              @click="routeHome()"
            >
              Ok
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
  name: "ModalUserCadastro",
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
    name: {
      type: String,
    }, 
    
  },
  methods: {
    routeHome(){
      this.$router.push("/");
    }
  },
  created() {
    this.$root.$on("open-modal-user-cadastro", () => {
      this.visible = true;
    });
    // console.log(this.id_contrato);
  },
};
</script>

<style></style>
