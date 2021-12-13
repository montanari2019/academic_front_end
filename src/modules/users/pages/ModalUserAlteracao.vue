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
            <h5 class="modal-title" id="">Olá {{ user.nome }} altere seus dados</h5>
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
                <label for="exampleFormControlInput1" class="form-label"
                  >Nome {{nomeUser}}</label
                >
                <input
                  type="nome"
                  class="form-control"
                  id="exampleFormControlInput1"
                  :placeholder="user.nome"
                  v-model="nomeUser"
                  
                  
                  
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="emailUser"
                  :placeholder="user.email"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Telefone</label
                >
                <input
                  type="telefone"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="telefoneUser"
                  :placeholder="user.telefone"
                />
              </div>

               <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Cep</label
                >
                <input
                  type="cep"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="cepUser"
                  :placeholder="user.cep"
                />
              </div>

               <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Endereço</label
                >
                <input
                  type="endereco"
                  class="form-control"
                  v-model="enderecoUser"
                  :placeholder="user.endereco"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Bairro</label
                >
                <input
                  type="bairro"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="bairroUser"
                  :placeholder="user.bairro"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Numero</label
                >
                <input
                  type="numero"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="numeroUser"
                  :placeholder="user.numero"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Cidade</label
                >
                <input
                  type="cidade"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="cidadeUser"
                  :placeholder="user.cidade"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Estado</label
                >
                <input
                  type="numero"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="estadoUser"
                  :placeholder="user.estado"
                  
                />
              </div>


            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger"  @click="limparForm() ,visible=false">
              cancelar
            </button>
            <button type="button" class="btn btn-warning" @click="updateUser()">
              Alterar
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
  name: "ModalUserAltecao",
  data() {
    return {
      visible: false,
      nomeUser: "",
      emailUser: "",
      telefoneUser: "",
      cepUser: "",
      enderecoUser: "",
      bairroUser: "",
      numeroUser: "",
      cidadeUser: "",
      estadoUser: "",

    };
  },
  components: {
   
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
    routeHome() {
      this.$router.push("/");
    },
    limparForm(){
      // console.log("Limpando forms")
      this.nomeUser = ""
      this.emailUser = ""
      this.telefoneUser = ""
      this.cepUser = ""
      this.enderecoUser = ""
      this.bairroUser = ""
      this.numeroUser = ""
      this.cidadeUser = ""
      this.estadoUser = ""
      
    },

    verificarNull(){
      
     console.log("Verificando campos nulos ...")
      if(!this.nomeUser){
        this.nomeUser = this.user.nome
        // console.log("nome: ", this.nomeUser)
      }
      if(!this.emailUser){
        this.emailUser = this.user.email
        // console.log("email: ", this.emailUser)
      }
      if(!this.telefoneUser){
        this.telefoneUser = this.user.telefone
        // console.log("telefone: ", this.telefoneUser)
      }
      if(!this.cepUser){
        this.cepUser = this.user.cep
      }
      if(!this.enderecoUser){
        this.enderecoUser = this.user.endereco
      }
      if(!this.bairroUser){
        this.bairroUser = this.user.bairro
      }
      if(!this.numeroUser){
        this.numeroUser = this.user.numero
      }
      if(!this.cidadeUser){
        this.cidadeUser = this.user.cidade
      }
      if(!this.estadoUser){
        this.estadoUser = this.user.estado
      }
    },
    async updateUser(){

      this.verificarNull()

      const forms = {
        nome: this.nomeUser,
        email: this.emailUser,
        telefone: this.telefoneUser,
        cep: this.cepUser,
        endereco: this.enderecoUser,
        bairro: this.bairroUser,
        numero: this.numeroUser,
        cidade: this.cidadeUser,
        estado: this.estadouser
      }

      const options = {
        method: "PUT",
        body: JSON.stringify(forms),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      };

      console.log(options)

      return await fetch(
        `https://api-academic-control-v2.herokuapp.com/user/update`, options)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          location.reload(true);

        })
        .catch((erro) => alert(erro));
      

    }
  },
  created() {
    this.$root.$on("open-modal-user-alteracao", () => {
      this.visible = true;
    });
    // console.log(this.id_contrato);
  },
};
</script>

<style></style>
