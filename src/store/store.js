import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    token: "",
    userId: "",
    email: ""
  },

  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    token: (state) => state.token,
    userId: (state) => state.userId,
    userEmail: (state) => state.email,
  },

  mutations: { 
    setUserData(state, userData) {
      state.token = userData.token;
      state.userId = userData.userId;
      state.email = userData.email;
      state.isLoggedIn = true;  
    },
   
    clearUserData(state) {
      state.token = "";
      state.userId = "";
      state.email = "",
      state.isLoggedIn = false;
    }
  },
  plugins: [createPersistedState()],
 
});
