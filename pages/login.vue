<template>
  <div>
    <form @submit.prevent="login">
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { doc, setDoc } from "firebase/firestore";
import { db } from "~/plugins/firebase.js";
export default Vue.extend({
  methods: {
    async login() {
      console.log("ログイン");
      try {
        const userDoc = {
          email: "a551",
          uid: "1111",
        };
        console.log("ログイン1");
        await setDoc(doc(db, "cities", "333"), userDoc);
        console.log("ログイン2");
      } catch (err: any) {
        console.log(err.message);
      }
    },
  },
});
</script>
