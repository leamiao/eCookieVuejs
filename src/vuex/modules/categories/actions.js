import Vue from 'vue'
import {
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  GET_CATEGORY
} from './mutation-types'

/* export function saveCategory ({ commit, state }, category) {
  const index = state.all.findIndex((p) => p.id === category.id)

  // update category if it exists or create it if it doesn't
  if (index !== -1) {
    commit(UPDATE_CATEGORY, category)
  } else {
    category.id = uuid.v4()
    commit(CREATE_CATEGORY, category)
  }
}

export function deleteCategory ({ commit }, categoryId) {
  commit(DELETE_CATEGORY, categoryId)
} */
export function fetchCategories ({ commit }) {
  // return Vue.http.get('categories/')
  // .then((response) => commit(FETCH_CATEGORIES, response.body.data))
  return Vue.axios.get(Vue.serverBaseUrl + `/categories/`)
    .then((response) => commit(FETCH_CATEGORIES, response.data.data))
}

export function createCategory ({ commit }, category) {
  return Vue.axios.post(Vue.serverBaseUrl + `/categories/category`, category)
    .then((response) => commit(CREATE_CATEGORY, response.data.data))
}

export function updateCategory ({ commit }, category) {
  return Vue.axios.patch(Vue.serverBaseUrl + `/categories/${category.id}`, category)
    .then((response) => commit(UPDATE_CATEGORY, response.data.data))
}

export function deleteCategory ({ commit }, categoryId) {
  const result = confirm('Are you sure you want to delete this category')
  if (!result) {
    return
  }
  return Vue.axios.delete(Vue.serverBaseUrl + `/categories/${categoryId}`)
    .then((response) => commit(DELETE_CATEGORY, categoryId))
}

export function getCategory ({ commit }, categoryId) {
  return Vue.axios.get(Vue.serverBaseUrl + `/categories/${categoryId}`)
    .then((response) => commit(GET_CATEGORY, response.data.data))
}

export function saveCategory ({ commit, state }, category) {
  const index = state.all.findIndex((p) => p.id === category.id)

  // update category if it exists or create it if it doesn't
  if (index !== -1) {
    return updateCategory({ commit }, category)
  } else {
    return createCategory({ commit }, category)
  }
}
