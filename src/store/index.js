import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  getters: {
  },
  mutations: {
    increment(state,number) {
      state.count += number;
    }
  },
  actions: {
  },
  modules: {
  }
})
