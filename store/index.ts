import Vue from 'vue';
import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex';
import { auth, db } from "~/plugins/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { RegisterUser, User } from "~/models/type";

Vue.use(Vuex);

interface State {
  user: User | null;
}

export const state = () => ({
  user: null,
})

export type RootState = ReturnType<typeof state>


export const getters: GetterTree<RootState, RootState> = {
  options: state => state.user,
}

export const mutations: MutationTree<RootState> = {
  setUser(state: State, user: User) {
    state.user = user;
  },
}

export const actions: ActionTree<RootState, RootState> = {
    async register({ commit }, user: RegisterUser): Promise<void> {
      try {
        const { user: authUser } = await createUserWithEmailAndPassword(auth, user.email, user.password);
        const userDocRef = doc(db, "users", authUser.uid);
        const userDoc = {
          email: user.email,
          uid: authUser.uid,
        };
        await setDoc(userDocRef, userDoc);
        const userWithUid = { ...user, uid: authUser.uid };
        commit('setUser', userWithUid);
      } catch (error) {
        console.error(error);
      }
    },
}


