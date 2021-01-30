import { ADD_TO_CART, REMOVE_FROM_CART } from '../mutation-types'

const state = {
  cart: []
};

const getters = {
  allItems: state => state.cart,
  getNumberItems: state => state.cart?.length || 0,
  getTotalPrice: state => {
    let total = 0;
    if (state.cart) {
      state.cart.forEach(element => {
        total += element.price;
      });
    }
    return total;
  }
};

const actions = {
  addToCart({commit}, item) {
    commit(ADD_TO_CART, item);
  },
  removeFromCart({commit}, id) {
    commit(REMOVE_FROM_CART, id);
  }
};

const mutations = {
  [ADD_TO_CART] (state, item) {
    state.cart.unshift(item);
  },
  [REMOVE_FROM_CART] (state, id) {
    state.cart = state.cart.filter(ele => ele.id !== id);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
