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
  createUser({commit}, userInfo) {
    commit(CREATE_USER, userInfo);
  }
};

// mutations (similar to reducers in redux)
const mutations = {
  [SIGN_IN](state, user) {
    state.user = {email: user};
  },
  [SIGN_OUT](state) {
    state.user = null;
  },
  [CREATE_USER] (state, userInfo) {
    state.user = userInfo.email;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

