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
      address: "",
      birthdate: "",
      phoneNumber: "",
      attendeeInfo: "",
      maxTravelDistance: 50,
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
      this.address = payload.address;
      this.gender = payload.gender;
      this.birthdate = new Date(payload.birthdate);
      this.attendeeInfo = payload.attendeeInfo;
      this.phoneNumber = payload.phoneNumber;
    },
    setPreferences(payload) {
      this.maxTravelDistance = payload.maxTravelDistance;
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
        birthdate: this.birthdate,
        address: this.address,
        phoneNumber: this.phoneNumber,
        attendeeInfo: this.attendeeInfo,
        maxTravelDistance: this.maxTravelDistance,
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
          address: this.address,
          phoneNumber: this.phoneNumber,
          attendeeInfo: this.attendeeInfo,
          maxTravelDistance: this.maxTravelDistance,
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
