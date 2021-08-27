import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'https://api-academic-control-v2.herokuapp.com/'

export { http }