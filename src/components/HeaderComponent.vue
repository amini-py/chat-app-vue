<template>
  <div class="header-component w-full py-5 flex items-center px-5">
    <div
      class="user-logo w-10 h-10 mr-auto rounded-full flex items-center justify-center uppercase bg-white"
    >
      a
    </div>
    <div @click="signOut">
      <i
        class="signOut-logo fa-solid fa-arrow-right-from-bracket"
        title="Sign out"
      ></i>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/useCounter.js";
import { mapActions } from "pinia";

export default {
  name: "HeaderComponent",
  methods: {
    ...mapActions(useCounterStore, ["signOut"]),
  },
};
</script>

<style lang="scss">
.header-component {
  background-color: #dbdbdb;

  .user-logo {
    color: #cdcdcd;
  }

  .signOut-logo {
    cursor: pointer;
  }
}
</style>
