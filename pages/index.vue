<template>
  <div class="wrapper">
    <p>ホーム</p>
    <NuxtLink to="/register">登録</NuxtLink>
    <NuxtLink to="/login">ログイン</NuxtLink>
    <p>現在のユーザー: {{ user }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
import { User } from "~/models/type";
import { RootState } from "~/store";
export default Vue.extend({
  computed: {
    ...mapGetters(["getUser"]),
    user() {
      return this.$store.getters["user"];
    },
  },
});
</script>
