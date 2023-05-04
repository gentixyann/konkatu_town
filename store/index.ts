import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from "~/plugins/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

Vue.use(Vuex);

interface User {
  email: string;
  password: string;
}

const store = () => new Vuex.Store({
  state: {
    user: null as User | null,
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user;
    },
  },
  actions: {
    // アカウント登録
    async register({ commit }, user: User) {
      try {
        await createUserWithEmailAndPassword(auth, user.email, user.password);
        commit('setUser', user);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export default store;
