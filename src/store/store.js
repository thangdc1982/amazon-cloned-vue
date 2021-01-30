import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/users'
import cart from './modules/cart'

Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    user,
    cart
  }
});