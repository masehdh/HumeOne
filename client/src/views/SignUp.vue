<template>
<Head>
    <meta
      name="description"
      content="HumeOne brings people together by organizing intimate social gatherings and events. Let us know what you're looking for to start receiving invites today! Signing up is free."
    />
  </Head>

  <section class="section form-section">
    <form class="max-w-full" action="#" @submit.prevent="">
      <keep-alive>
        <component
          :is="currentComponent"
          :emailProp="email"
          @next-step="setComponent"
          @send-email="email = $event"
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
      email: "",
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
