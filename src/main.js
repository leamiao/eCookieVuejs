// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from './vuex/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css'
import ProductCatalog from './components/ProductCatalog'
import ManageProducts from './components/ManageProducts'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
// Vue.use(VueResource)

const routes = [
  { path: '/home', alias: '/', component: ProductCatalog },
  { path: '/manage-products', component: ManageProducts }
]

// Vue.http.options.root = 'http://localhost:7070/ecookie'
// nest server port
Vue.$http.options.root = 'http://localhost:3000'
Vue.serverBaseUrl = 'http://localhost:3000'
// Spring boot server port
// Vue.$http.options.root = 'http://localhost:7070/ecookie'
// Vue.serverBaseUrl = 'http://localhost:7070/ecookie'

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
