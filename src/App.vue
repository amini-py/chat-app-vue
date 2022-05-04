<template>
  <HeaderComponent v-if="userLoggedIn" />
  <div class="main-container flex">
    <section class="auth-form flex justify-center items-center p-16" v-if="!userLoggedIn">
      <div class="w-full rounded-md shadow-lg p-8">
        <!-- Tabs -->
        <ul class="flex flex-wrap mb-4">
          <li class="flex-auto text-center">
            <a
              class="block rounded p-4 transition"
              href="#"
              @click.prevent="componentId = 'LoginForm'"
              :class="{
                'hover:text-white text-white bg-yellow-500': componentId === 'LoginForm',
                'hover:text-blue-600': componentId === 'RegisterForm',
              }"
            >
              Login
            </a>
          </li>
          <li class="flex-auto text-center">
            <a
              class="block rounded p-4 transition"
              href="#"
              @click.prevent="componentId = 'RegisterForm'"
              :class="{
                'hover:text-white text-white bg-yellow-500':
                  componentId === 'RegisterForm',
                'hover:text-blue-600': componentId === 'LoginForm',
              }"
              >Register</a
            >
          </li>
        </ul>
        <component :is="componentId" />
      </div>
    </section>
    <ChatMain v-else />
    <section class="bg-img hidden md:inline-flex"></section>
  </div>
</template>

<script>
// Components
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HeaderComponent from "@/components/HeaderComponent";
import ChatMain from "@/components/ChatMain";

import { auth } from "@/includes/firebase";

export default {
  name: "App",
  components: {
    LoginForm,
    RegisterForm,
    HeaderComponent,
    ChatMain,
  },
  data() {
    return {
      componentId: "RegisterForm",
      user: auth.currentUser,
      userLoggedIn: false,
    };
  },
  created() {
    console.log(this.user);

    if (this.user) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  },
};
</script>

<style lang="scss">
@media only screen and (min-width: 600px) {
  .bg-img {
  }
}

.main-container {
  width: 100vw;
  height: 100vh;

  .auth-form {
    width: 35%;
    height: 100%;
  }

  .bg-img {
    background: url("@/assets/Message_03.jpg") center/cover no-repeat;
    width: 65%;
    height: 100%;
  }
}
</style>
