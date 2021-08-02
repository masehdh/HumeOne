<template>
  <div class="section form-section">
    <form action="#" @submit.prevent="submitRegistration">
      <SignUpForm
        @send-sign-up-info="setSignUpInfo"
        :validationMessagesProp="validationMessages"
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
const {signUpValidation} = require("@/validation/validation.js");
import SignUpForm from "../components/SignUpForm.vue";
import PreferencesForm from "../components/PreferencesForm.vue";
import axios from "axios";

export default {
  components: { SignUpForm, PreferencesForm },
  name: "Sign Up",
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
      validationMessages: {},
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
        availability: this.availability,
      });
      if (error) {
        error.details.forEach(({ path }) => {
          let messages = error.details
            .filter((val) => val.path[0] === path[0])
            .map(({ message }) => message);
          messages = [...new Set(messages)];
          return (this.validationMessages[path[0]] = messages);
        });
        return;
      }
      axios.post("/api/sign-up", {
        eventId: "0",
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
        availability: this.availability,
      })
      .then(()=> this.$router.push({ name: "Registration Confirmation" }))
      .catch((error) => console.log(error.response.data));
    },
  },
};
</script>

<style lang="scss" scoped></style>
