<template>
  <div class="wrapper">ホームです</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mounted() {
    console.log(process.env.API_KEY);
  },
});
</script>
