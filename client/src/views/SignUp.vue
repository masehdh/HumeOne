<template>
  <div class="section form-section">
    <div v-if="emailProp">
      <Message
        v-for="msg of messages"
        :severity="msg.severity"
        :key="msg.content"
      >
        {{ msg.content }}
      </Message>
    </div>
    <form class="max-w-full" action="#" @submit.prevent="submitRegistration">
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
import axios from "axios";

export default {
  components: { SignUpForm, PreferencesForm },
  name: "Sign Up",
  props: {
    emailProp: String,
    eventIdProp: String,
    priceIdProp: String
  },
  data() {
    return {
      messages: [
        {
          severity: "warn",
          content: "Before registering for this event, please sign up"
        }
      ],
      serverResponses: [],
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
      this.availability = payload.availability;
      this.interests = payload.interests;
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
              .post("/api/event-registration/create-checkout-session", {
                email: this.email,
                eventId: this.eventIdProp,
                priceId: this.priceIdProp
              })
              .then(res => (window.location.href = res.data.url));
          } else {
            this.$router.push({
              name: "Sign Up Confirmation"
            });
          }
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
