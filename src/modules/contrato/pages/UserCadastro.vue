<template>
  <div>
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

    <section class="container">
      <h6 class="fs-3 fw-light text-center m-5">Formulário de Ingressão</h6>

      <form class="row g-3 needs-validation">

        
        <div class="col-md-12">
          <label for="inputAddress2" class="form-label">Nome</label>
          <input type="text" v-model="nome" class="form-control"  placeholder="Nome" required />
        </div>

        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            v-model="email"
            required
          />
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Senha</label>
          <input
            type="password"
            class="form-control"
            placeholder="Sua senha"
            v-model="password"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label"
            >Confirme sua senha</label
          >
          <input
            type="password"
            class="form-control"
            placeholder="Confirme sua senha"
            v-model="confirmPassword"
            @change="passwordVerification()"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="inputAddress" class="form-label">RG:</label>
          <input type="text" class="form-control" placeholder="RG" required v-model="r_g" />
        </div>

        <div class="col-md-4">
          <label for="inputAddress2" class="form-label">CPF: </label>
          <input type="text" class="form-control" placeholder="CPF" required v-model="c_p_f"/>
        </div>

        <div class="col-md-4">
          <label for="inputCity" class="form-label">Telefone</label>
          <input type="text" class="form-control" required placeholder="Telefone" v-model="telefone"/>
        </div>

        <!-- <div class="col-md-6">
          <label for="inputState" class="form-label">Faculdade</label>
          <select class="form-select" v-model="faculdade" required>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div> -->

        <!-- Dados do endereço -->

        <h6 class="fs-3 fw-light text-center p-5">Dados do endereço</h6>

        <div class="col-md-2">
          <label for="inputZip" class="form-label">Cep</label>
          <input type="text" class="form-control" placeholder="Cep" required  v-model="cep"/>
        </div>

        <div class="col-md-10">
          <label for="inputCity" class="form-label">Endereço</label>
          <input
            type="text"
            class="form-control"
            placeholder="Endereço"
            v-model="endereco"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="inputCity" class="form-label">Bairro</label>
          <input
            type="text"
            class="form-control"
            placeholder="Bairro"
            v-model="bairro"
            required
          />
        </div>

        <div class="col-md-2">
          <label for="inputZip" class="form-label">Nº</label>
          <input
            type="text"
            class="form-control"
            placeholder="Número"
            v-model="numero"
            required
          />
        </div>

        <div class="col-md-2">
          <label for="inputZip" class="form-label">Estado</label>
          <input
            type="text"
            class="form-control"
            placeholder="Estado"
            v-model="estado"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="inputCity" class="form-label">Cidade</label>
          <input
            type="text"
            class="form-control"
            placeholder="Cidade"
            v-model="cidade"
            required
          />
        </div>

        

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
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Footer from "../../../components/Footer.vue";

export default {
  name: "UserContrato",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Footer,
  },
  data() {
    return {
        nome: '',
        email:'',
        password:'',
        confirmPassword:'',
        r_g:'',
        c_p_f:'',
        telefone: '',
        cep:'',
        endereco:'',
        bairro:'',
        numero: '',
        estado: '',
        cidade: '',

    };
  },
  methods: {
    routeHome() {
      this.$router.push("/");
    },
    routeContrato() {
      this.$router.push("/contrato");
    },
    selectFile() {
      const sizelimit= 4 * 1024 * 1024
      const file = this.$refs.file.files[0]
      if(file.size > sizelimit) {
        alert("Sua imagen não pode passar de 2 Mb")
        // location.reload(true);
      }else{
        this.file = file
        console.log(this.file);
        console.log("Limite para imagen", sizelimit);
      }
      
    },
    passwordVerification() {
      if(this.password != this.confirmPassword){
        alert("Suas senhas não são iguais")
        this.password = ''
        this.confirmPassword = ''
      }
    },

     async postUser(){
      const forms = {
        nome: this.nome,
        email:this.email,
        password: this.confirmPassword,
        admin: false,
        r_g:this.r_g,
        c_p_f: this.c_p_f,
        telefone: this.telefone,
        cep:this.cep,
        endereco:this.endereco,
        bairro:this.bairro,
        numero: this.numero,
        cidade: this.cidade,
        estado: this.estado,
        id_associacao: 1
      }

      const options = {
        method: 'POST',
        body: JSON.stringify(forms),
        headers: {  
            'Content-Type': 'application/json'
        }
      }

      return await fetch(`https://api-academic-control-v2.herokuapp.com/userStore`, options)
          .then(res => res.json())
          .then(() =>{
            this.routeContrato()
          }) 
          .catch(erro => console.log(erro))


      // console.log("forms post", forms);
    }
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
