<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { auth } from "~/plugins/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default Vue.extend({
  mounted() {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
