<template>
  <div class="section form-section">
    <form action="#" @submit.prevent="submitRegistration">
      <SignUpForm @send-sign-up-info="setSignUpInfo" />
      <PreferencesForm />
    </form>
    <div>
      <Button
        type="Submit"
        label="Submit"
        class="p-button-md p-button-primary submit-button"
      />
    </div>
  </div>
</template>

<script>
const { eventRegistrationValidation } = require("@/validation/validation.js");
import SignUpForm from '../components/SignUpForm.vue';
import PreferencesForm from '../components/PreferencesForm.vue';
export default {
  components: { SignUpForm, PreferencesForm },
  name: "Sign Up",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      phoneNumber: "",
      attendeeInfo: "",
    }
  },
  methods: {
    setSignUpInfo(payload) {
      this.firstName = payload.firstName
      this.lastName = payload.lastName
      this.email = payload.email
      this.gender = payload.gender
      this.phoneNumber = payload.phoneNumber
      this.attendeeInfo = payload.attendeeInfo
    },
    submitRegistration() {
      this.validationMessages = {};
      const { error } = eventRegistrationValidation({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        gender: this.gender,
        phoneNumber: this.phoneNumber,
        attendeeInfo: this.attendeeInfo
      });
      if (error) {
        error.details.forEach(({ path }) => {
          let messages = error.details
            .filter(val => val.path[0] === path[0])
            .map(({ message }) => message);
          messages = [...new Set(messages)];
          return (this.validationMessages[path[0]] = messages);
        });
        return;
      }
      return this.$router.push({ name: "Registration Confirmation" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
