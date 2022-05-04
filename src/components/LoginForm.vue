<template>
  <div class="w-full">
    <div
      v-show="log_showAlert"
      :class="{ 'bg-red-500': reg_hasError, 'bg-green-500': !reg_hasError }"
      class="text-white text-center py-4 font-semibold"
    >
      {{ log_msg }}
    </div>
    <div @click="login_google" class="google-login w-full border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all text-center rounded-md p-4 cursor-pointer">
      <i class="fa-brands fa-google text-red-500"></i>
      <span class="ml-5 font-semibold">Sign In with Google</span>
    </div>
    <VForm :validation-schema="schema" @submit="login">
      <section class="email mt-5">
        <label for="email">Email:</label>
        <VField
          name="email"
          placeholder="john@example.com"
          class="block w-full rounded-md p-2 mt-2 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <ErrorMessage name="email" class="text-red-600 text-sm" />
      </section>
      <section class="password mt-5">
        <label for="password">Password:</label>
        <VField
          name="password"
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          class="block w-full rounded-md p-2 mt-2 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <ErrorMessage name="password" class="text-red-600 text-sm" />
      </section>
      <button
        type="submit"
        class="block w-full bg-blue-600 text-white p-2 mt-5 rounded transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
      >
        Submit
      </button>
    </VForm>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/useCounter.js";
import { mapActions, mapState } from "pinia";

export default {
  name: "LoginForm",
  data() {
    const schema = {
      email: "required|email",
      password: "required",
    };
    return {
      schema,
      msg: null,
      hasError: false,
      display_msg: false,
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["login"]),
    ...mapActions(useCounterStore, ["login_google"])
  },

  computed: {
    ...mapState(useCounterStore, ["log_msg"]),
    ...mapState(useCounterStore, ["log_hasError"]),
    ...mapState(useCounterStore, ["log_showAlert"]),
  },
};
</script>

<style lang="scss">
* {
  outline: none;
}
</style>
