<template>
  <Head>
    <meta
      name="description"
      content="Sign up for free to attend or host events in your area. Let us know what you are interested in to start receiving invites today!"
    />
  </Head>

  <section class="section form-section">
    <TheHeader />

    <form class="max-w-full" action="#" @submit.prevent="">
      <keep-alive>
        <component
          :is="currentComponent"
          :userProp="user"
          @next-step="setComponent"
          @send-user="user = $event"
        ></component>
      </keep-alive>
    </form>
  </section>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";
import PreferencesForm from "../components/PreferencesForm.vue";

export default {
  components: { SignUpForm, PreferencesForm },
  name: "Sign Up",
  data() {
    return {
      user: {},
      currentComponent: "SignUpForm"
    };
  },
  methods: {
    setComponent(value) {
      this.currentComponent = value;
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
