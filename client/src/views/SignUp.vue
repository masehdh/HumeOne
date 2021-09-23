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
  props: {
    emailProp: String,
    eventIdProp: String
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
      area: "",
      birthdate: "",
      maxTravelDistance: 50,
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
          if (this.eventIdProp) {
            axios
              .post("/api/event-registration/create-checkout-session", {
                email: this.email,
                eventId: this.eventIdProp
              })
              .then(res => {
                // If the event is free, redirect to registration confirmation
                if (res.data.output.freeEvent) {
                  return this.$router.push({
                    name: "Event Registration Confirmation",
                    query: {
                      eventId: this.eventIdProp
                    }
                  });
                }

                // Redirect to stripe page
                window.location.href = res.data.url;
              })
              .catch(error =>
                console.log(
                  "error from /api/event-registration/create-checkout-session: ",
                  error.response.data
                )
              );
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
