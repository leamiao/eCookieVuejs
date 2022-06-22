import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import categories from './modules/categories'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    products,
    categories
  },
  strict: debug
})
