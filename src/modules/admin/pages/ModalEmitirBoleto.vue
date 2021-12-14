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
            <h5 class="modal-title" id="">Emitir Boleto</h5>
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
                  >Data de emissão</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="dataEmissao"
                  placeholder="12/12/1999"
                  
                  
                  
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Seu Número</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="seuNumero"
                  :placeholder="12345"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Valor</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="valorBoleto"
                  placeholder="RS150"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Data de vencimento</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="dataVencimento"
                  placeholder="12/12/1999"
                />
              </div>

               <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Tipo de multa</label>
                <select class="form-select" aria-label="Default select example"  v-model="tipoMulta">
                  >
                  <option value=0>Isento</option>
                  <option value=2>Percentual</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Data da Multa</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="dataMulta"
                  placeholder="12/12/1999"
                />
              </div>
              

               <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Valor da multa</label
                >
                <input
                  type="cep"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="valorMulta" 
                  placeholder="R$40,00" 
                />
              </div>

               <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Nº da Parcela</label
                >
                <input
                  type="endereco"
                  class="form-control"
                  v-model="numeroParcela"
                  placeholder="2X"
                />
              </div>

              <div class="fs-5 p-2" >Sacado</div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Nome Sacado:</label
                >
                <label for="exampleFormControlInput2" class="form-label"
                  >---{{ this.nomesacado }}</label
                >
              </div>

              <label for="exampleFormControlInput1" class="form-label"
                  >----------------</label
                >

               <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Cpf Sacado:</label
                >
                <label for="exampleFormControlInput2" class="form-label"
                  >---{{ this.cpfSacado }}</label
                >
              </div>

               <label for="exampleFormControlInput1" class="form-label"
                  >----------------</label
                >

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email Sacado:</label
                >
                <label for="exampleFormControlInput2" class="form-label"
                  >---{{ this.emailSacado }}</label
                >
              </div>

              <label for="exampleFormControlInput1" class="form-label"
                  >----------------</label
                > 

               <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >Mensagem de Instrução:  </label
                >
                <textarea class="form-control"
                  v-model="mensageInstrucao"
                  id="message-text">Pagamento do boleto está atrasado</textarea
                >
              </div>


            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger"  @click="limparForm() ,visible=false">
              cancelar
            </button>
            <button type="button" class="btn btn-success" @click="emitirBoleto()">
              Emitir Boleto
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
  name: "ModalEmitirBoleto",
  data() {
    return {
      visible: false,
      dataEmissao: "",
      seuNumero: "",
      valorBoleto: "",
      dataVencimento: "",
      tipoMulta: "",
      dataMulta: "",
      valorMulta: "",
      numeroParcela: "",
      mensageInstrucao: "",
      boleto: {}

    };
  },
  components: {
   
  },
  computed: {
    ...mapState("auth", ["token"]),
    ...mapState("auth", ["user"]),
  },
  props: {
    nomesacado: {
      type: String,
    },
    cpfSacado: {
      type: String,
    },
    emailSacado: {
      type: String,
    },
    user: {
      type: Object
    }
  },
  methods: {
    routeHome() {
      this.$router.push("/");
    },
    limparForm(){
      // console.log("Limpando forms")
      this.dataEmissao = ""
      this.seuNumero = ""
      this.valorBoleto = ""
      this.dataVencimento = ""
      this.tipoMulta = ""
      this.dataMulta = ""
      this.valorMulta = ""
      this.numeroParcela = ""
      this.mensageInstrucao = ""
    },

  

   
    async emitirBoleto(){

      console.log("User: ", this.user)

      const forms = [
      {
        seuNumero: this.seuNumero,
        valor: this.valorBoleto,
        dataVencimento: this.dataVencimento,
        tipoMulta: this.tipoMulta,
        dataMulta: this.dataMulta,
        valorMulta: this.valorMulta,
        numeroParcela: this.numeroParcela,
        pagador: {
          numeroCpfCnpj: this.user.c_p_f,
              nome: this.user.nome,
              endereco: this.user.endereco,
              bairro: this.user.bairro,
              cidade: this.user.cidade,
              cep: this.user.cep,
              uf: this.user.estado,
        },
         mensagensInstrucao: {
                mensagens: [
                  this.mensageInstrucao,
                ]
              },
      }
      ]

      console.log("formulário de boeltos: ", forms);

      const options = {
        method: "POST",
        body: JSON.stringify(forms),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      };

      console.log(options)

      return await fetch(
        `https://api-academic-control-v2.herokuapp.com/emitirBoleto`, options)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.boleto = res
          alert("Boleto Emitido com sucesso")
          this.visible = false
          this.limparForm()
          

        })
        .catch((erro) => alert(erro));
      

    }
  },
  created() {
    this.$root.$on("open-modal-emitirBoleto", () => {
      this.visible = true;
    });
    console.log("Impromirndo dados do usuário", this.user);
  },
};
</script>

<style></style>
