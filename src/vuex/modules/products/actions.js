import Vue from 'vue'
import {
  FETCH_PRODUCTS,
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCT
} from './mutation-types'

/* export function saveProduct ({ commit, state }, product) {
  const index = state.all.findIndex((p) => p.id === product.id)

  // update product if it exists or create it if it doesn't
  if (index !== -1) {
    commit(UPDATE_PRODUCT, product)
  } else {
    product.id = uuid.v4()
    commit(CREATE_PRODUCT, product)
  }
}

export function deleteProduct ({ commit }, productId) {
  commit(DELETE_PRODUCT, productId)
} */
export function fetchProducts ({ commit }) {
  // return Vue.http.get('products/')
  // .then((response) => commit(FETCH_PRODUCTS, response.body.data))
  return Vue.axios.get(Vue.serverBaseUrl + `/products/`)
    .then((response) => commit(FETCH_PRODUCTS, response.data.data))
}

export function createProduct ({ commit }, product) {
  return Vue.axios.post(Vue.serverBaseUrl + `/products/update`, product)
    .then((response) => commit(CREATE_PRODUCT, response.data.data))
}

export function updateProduct ({ commit }, product) {
  return Vue.axios.patch(Vue.serverBaseUrl + `/products/${product.id}`, product)
    .then((response) => commit(UPDATE_PRODUCT, response.data.data))
}

export function deleteProduct ({ commit }, productId) {
  const result = confirm('Are you sure you want to delete this product')
  if (!result) {
    return
  }
  return Vue.axios.delete(Vue.serverBaseUrl + `/products/${productId}`)
    .then((response) => commit(DELETE_PRODUCT, productId))
}

export function getProduct ({ commit }, productId) {
  return Vue.axios.get(Vue.serverBaseUrl + `/products/${productId}`)
    .then((response) => commit(GET_PRODUCT, response.data.data))
}

export function saveProduct ({ commit, state }, product) {
  const index = state.all.findIndex((p) => p.id === product.id)

  // update product if it exists or create it if it doesn't
  if (index !== -1) {
    return updateProduct({ commit }, product)
  } else {
    return createProduct({ commit }, product)
  }
}
