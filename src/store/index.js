import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 150
  },
  mutations: {
    incrementar(state, payload) {
      state.contador = state.contador + payload
    },
    disminuir(state, payload) {
      state.contador = state.contador - payload
    }
  },
  actions: {
    accionIncrementar({ commit }) {
      commit('incrementar', 10)
    },
    accionDisminuir({ commit }, numero) {
      commit('disminuir', numero)
    },
    accionBoton({ commit }, item) {
      if (item.estado) {
        commit('incrementar', item.numero)
      }
      else {
        commit('disminuir', item.numero)
      }
    }
  },
  modules: {
  }
})
