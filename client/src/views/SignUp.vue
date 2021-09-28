<template>
  <div class="section form-section">
    <form class="max-w-full" action="#" @submit.prevent="submitRegistration">
      <SignUpForm
        @send-sign-up-info="setSignUpInfo"
        :validationMessagesProp="validationMessages"
      />

      <PreferencesForm
        @send-preferences="setPreferences"
        :validationMessagesProp="validationMessages"
      />

      <EventTagsForm
        @send-tags="setSelectedEventTags"
        :validationMessagesProp="validationMessages"
        :interestsProp="interests"
      />

      <Button
        type="submit"
        label="Submit"
        class="p-button-md p-button-primary submit-button"
      />

      <div
        v-for="(message, index) of validationMessages['submit']"
        :key="index"
      >
        <div class="validation-message mt-1">{{ message }}</div>
      </div>

      <Message
        v-for="msg of serverResponses"
        :severity="msg.severity"
        :key="msg.content"
      >
        {{ msg.content }}
      </Message>
    </form>
  </div>
</template>

<script>
const { signUpValidation } = require("../../../resources/validation.js");
import SignUpForm from "../components/SignUpForm.vue";
import PreferencesForm from "../components/PreferencesForm.vue";
import EventTagsForm from "../components/EventTagsForm.vue";
import axios from "axios";

export default {
  components: { SignUpForm, PreferencesForm, EventTagsForm },
  name: "Sign Up",
  data() {
    return {
      serverResponses: [],
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      area: "",
      birthdate: "",
      maxTravelDistance: 50000,
      availability: [],
      interests: [],
      selectedEventTags: [],
      validationMessages: {}
    };
  },
  methods: {
    setSignUpInfo(payload) {
      this.firstName = payload.firstName;
      this.lastName = payload.lastName;
      this.email = payload.email;
      this.area = payload.area;
      this.gender = payload.gender;
      this.birthdate = new Date(payload.birthdate);
    },
    setPreferences(payload) {
      this.maxTravelDistance = payload.maxTravelDistance * 1000;
      this.availability = payload.availability;
      this.interests = payload.interests;
    },
    setSelectedEventTags(payload) {
      this.selectedEventTags = payload.selectedEventTags;
    },
    submitRegistration() {
      this.validationMessages = {};
      const { error } = signUpValidation({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        gender: this.gender,
        birthdate: this.birthdate,
        area: this.area,
        maxTravelDistance: this.maxTravelDistance,
        interests: this.interests,
        availability: this.availability,
        selectedEventTags: this.selectedEventTags
      });
      if (error) {
        error.details.forEach(({ path }) => {
          let messages = error.details
            .filter(val => val.path[0] === path[0])
            .map(({ message }) => message);
          messages = [...new Set(messages)];
          return (this.validationMessages[path[0]] = messages);
        });
        this.validationMessages["submit"] = [
          "Please review the errors above before submitting."
        ];
        return;
      }
      axios
        .post("/api/sign-up", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          gender: this.gender,
          birthdate: this.birthdate,
          area: this.area,
          maxTravelDistance: this.maxTravelDistance,
          interests: this.interests,
          availability: this.availability,
          selectedEventTags: this.selectedEventTags
        })
        .then(() => {
          this.$router.push({
            name: "Sign Up Confirmation"
          });
        })
        .catch(error =>
          this.serverResponses.push({
            severity: "error",
            content: error.response.data.message
          })
        );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
