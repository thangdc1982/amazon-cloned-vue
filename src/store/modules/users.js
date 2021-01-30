import { SIGN_IN, SIGN_OUT, CREATE_USER } from '../mutation-types'

// state
const state = {
  user: null // to the current logged in user
}

// getters
const getters = {
  user: state => state.user
}

// actions
const actions = {
  signIn({ commit }, user) {
    // calling the reducers (mutation)   
    commit(SIGN_IN, user);
  },
  signOut({ commit }) {
    commit(SIGN_OUT);
  },
  createUser({commit}, user) {
    commit(CREATE_USER, user); 
  }
};

// mutations (similar to reducers in redux)
const mutations = {
  [SIGN_IN](state, user) {
    state.user = user;
  },
  [SIGN_OUT](state) {
    state.user = null;
  },
  [CREATE_USER](state, user) {
    state.user = user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

