<template>
  <div class="w-full">
    <div
      v-show="reg_showAlert"
      :class="{ 'bg-red-500': reg_hasError, 'bg-green-500': !reg_hasError }"
      class="text-white text-center py-4 font-semibold"
    >
      {{ reg_msg }}
    </div>
    <VForm :validation-schema="schema" @submit="register">
      <section class="name mt-5">
        <label for="name">Name:</label>
        <VField
          name="name"
          placeholder="John"
          class="block w-full rounded-md p-2 mt-2 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <ErrorMessage name="name" class="text-sm text-red-600" />
      </section>
      <section class="email mt-5">
        <label for="email">Email:</label>
        <VField
          name="email"
          placeholder="John@example.com"
          class="block w-full rounded-md p-2 mt-2 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <ErrorMessage name="email" class="text-sm text-red-600" />
      </section>
      <section class="password mt-5">
        <label for="password">Create a password:</label>
        <VField
          name="password"
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          class="block w-full rounded-md p-2 mt-2 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <ErrorMessage name="password" class="text-sm text-red-600" />
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
  name: "RegisterForm",
  data() {
    const schema = {
      name: "required|alpha_spaces",
      email: "required|email",
      password: "required",
    };
    return {
      schema,
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["register"]),
  },

  computed: {
    ...mapState(useCounterStore, ["reg_msg"]),
    ...mapState(useCounterStore, ["reg_showAlert"]),
    ...mapState(useCounterStore, ["reg_hasError"]),
  },
};
</script>
