import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsInCart: <Object[]>([]),
    userData: {
      firstname: "",
      surname: "",
      phoneNumber: 0,
      country: "",
      email: "",
      street: "",
      zipCode: "",
      town: "",
      companyName: "",
      companyNip: 0
    }
  },
  getters: {
    getItemsInCart(state) {
      return state.itemsInCart
    },
    getItemQuantity(state, item) {
      return state.itemsInCart.filter(el => el === item).length
    },
    getStateUserData(state) {
      return state.userData
    }
  },
  mutations: {
    resetItemsInCart(state) {
      state.itemsInCart = []
    },
    addItemToCart(state, item) {
      state.itemsInCart.push(item)
    },
    removeItemFromCart(state, item) {
      const index = state.itemsInCart.indexOf(item)
      if (index > -1) {
        state.itemsInCart.splice(index, 1)
      }
    },
    setUserData(state, userData) {
      state.userData = userData
    },
    removeAllSameItems(state, item) {
      state.itemsInCart = state.itemsInCart.filter(el => el !== item)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
