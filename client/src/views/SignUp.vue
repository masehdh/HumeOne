<template>
  <div class="section form-section">
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
  </div>
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
      currentComponent: "SignUpForm",
    };
  },
  methods: {
    setComponent(value) {
      this.currentComponent = value;
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped></style>
