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
            <h5 class="modal-title" id="exampleModalLabel">Descrição do cancelamento</h5>
            <button
              type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="visible = false"></button>
          </div>
          <div class="modal-body">
            <form>
             
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Descrição:</label>
                <textarea class="form-control" id="message-text">Cancelado a pedido da entidade</textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" @click="visible = false">Fechar</button>
            <button type="button" class="btn btn-danger">Cancelar Cadastro</button>
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

export default {
  name: "ModalListUser",
  data() {
    return {
        visible: false,
    };
  },
  methods: {},
  created() {
      this.$root.$on('open-modal', () => { this.visible = true; });
  }
};
</script>

<style></style>
