<template>
  <div class="section form-section">
    <h3 class="card-title" v-if="emailProp">
      In order to register for an event, you must first sign up
    </h3>
    <form action="#" @submit.prevent="submitRegistration">
      <SignUpForm
        @send-sign-up-info="setSignUpInfo"
        :validationMessagesProp="validationMessages"
        :emailProp="emailProp"
      />
      <PreferencesForm
        @send-preferences="setPreferences"
        :validationMessagesProp="validationMessages"
      />
      <Button
        type="submit"
        label="Submit"
        class="p-button-md p-button-primary submit-button"
      />
    </form>
  </div>
</template>

<script>
const { signUpValidation } = require("../../../resources/validation.js");
import SignUpForm from "../components/SignUpForm.vue";
import PreferencesForm from "../components/PreferencesForm.vue";
import axios from "axios";

export default {
  components: { SignUpForm, PreferencesForm },
  name: "Sign Up",
  props: {
    emailProp: String,
    eventIdProp: String
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      city: "",
      ageGroup: "",
      phoneNumber: "",
      attendeeInfo: "",
      preferredAgeGroup: [],
      availability: [],
      interests: [],
      validationMessages: {}
    };
  },
  methods: {
    setSignUpInfo(payload) {
      this.firstName = payload.firstName;
      this.lastName = payload.lastName;
      this.email = payload.email;
      this.city = payload.city;
      this.gender = payload.gender;
      this.ageGroup = payload.ageGroup;
      this.attendeeInfo = payload.attendeeInfo;
      this.phoneNumber = payload.phoneNumber;
    },
    setPreferences(payload) {
      this.preferredAgeGroup = payload.preferredAgeGroup;
      this.availability = payload.vailability;
      this.interests = payload.selectedInterests;
    },
    submitRegistration() {
      this.validationMessages = {};
      const { error } = signUpValidation({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        gender: this.gender,
        ageGroup: this.ageGroup,
        city: this.city,
        phoneNumber: this.phoneNumber,
        attendeeInfo: this.attendeeInfo,
        preferredAgeGroup: this.preferredAgeGroup,
        interests: this.interests,
        availability: this.availability
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
      axios
        .post("/api/sign-up", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          gender: this.gender,
          ageGroup: this.ageGroup,
          city: this.city,
          phoneNumber: this.phoneNumber,
          attendeeInfo: this.attendeeInfo,
          preferredAgeGroup: this.preferredAgeGroup,
          interests: this.interests,
          availability: this.availability
        })
        .then(() => {
          if (this.eventIdProp) {
            axios
              .post("/api/payment/create-checkout-session", {
                eventId: this.eventIdProp,
                email: this.email
              })
              .then(res => (window.location.href = res.data.url));
          } else {
            this.$router.push({
              name: "Sign Up Confirmation"
            });
          }
        })
        .catch(error => console.log(error.response.data));
    }
  }
};
</script>

<style lang="scss" scoped>
.card-title {
  font-weight: 400;
  font-size: 24px;
  max-width: 100%;
}
</style>
