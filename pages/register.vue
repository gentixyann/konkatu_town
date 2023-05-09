<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div v-if="errorMessage != ''" style="color: red">
        {{ errorMessage }}
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    async onSubmit() {
      try {
        await this.register({
          email: this.email,
          password: this.password,
        });
        this.$router.push("/");
      } catch (error: any) {
        console.error(error);
        console.log("エラーです");
        this.errorMessage = error.message;
      }
    },
  },
});
</script>
