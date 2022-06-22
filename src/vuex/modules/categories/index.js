import * as actions from './actions'
import * as getters from './getters'

import {
  FETCH_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORY
} from './mutation-types'

// initial state
const initialState = {
  all: []
}

// mutations
const mutations = {
  [CREATE_CATEGORY] (state, category) {
    state.all.push(category)
  },
  [UPDATE_CATEGORY] (state, category) {
    const index = state.all.findIndex((p) => p.id === category.id)

    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.all.splice(index, 1, category)
    }
  },
  [DELETE_CATEGORY] (state, categoryId) {
    state.all = state.all.filter(p => p.id !== categoryId)
  },
  [GET_CATEGORY] (state, categoryId) {
    state.all = state.all.filter((p) => p.id === categoryId)
  },
  [FETCH_CATEGORIES] (state, categories) {
    // assign the categories that we got from our FETCH_CATEGORIES event to state.all
    state.all = categories
  }
}

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
