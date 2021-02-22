
export default {
  state: {
    productId: ""
  },
  getters: {
    productId(state) {
      return state.productId;
    }
  },
  actions: {
    viewProductId({ commit }, payload) {
      console.log(payload);
      commit("m_viewProductId", payload);
    }
  },
  mutations: {
    m_viewProductId(state, payload) {
      state.productId = payload;
    }
  }
};
