
export const VIEW_PRODUCT_ID = "VIEW_PRODUCT_ID";

export default {
  state: {
    productId: ''
  },
  getters: {
    productId(state) {
      return state.productId
    },
  },
  actions: {
    [VIEW_PRODUCT_ID](state, payload) {
      console.log(12)
      state.commit('m_viewProductId', payload);
    },
  },
  mutations: {
    m_viewProductId(state, payload) {
      state.productId = payload;
    },
  }
};
