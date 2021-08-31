<template>
  <div>
     <div>
         <h1>Area do usuário</h1>
         <button type="submit" v-on:click="routeLogout()" class=" btn btn-danger">Sair</button>
     </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import "bootstrap/dist/css/bootstrap.css"

export default {
  name: 'App',
  methods:{
    ... mapActions('auth', ['ActionLogout']),
    async routeLogout() {
        try {
            await this.ActionLogout()
            location.reload(true)
            // this.$router.push({ name: 'Login'})
            
            // console.log(store.state)

            
        }catch (err) {
            console.log(err)
            
        }
    }
  },
}
</script>

<style>


</style>
