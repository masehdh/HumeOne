<template>
  <div class="section form-section">
    <div class="container form-card">
      <div
        id="event-image"
        v-if="eventDetails.image"
        :style="{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' +
            require('../../../resources/' + eventDetails.image) +
            ')'
        }"
      >
        &nbsp;
      </div>
      <h1 class="form-header">Event Registration</h1>
      <h2 class="form-title">{{ eventDetails.name }}</h2>
      <div class="line-divider">&nbsp;</div>
      <p class="event-detail-item" v-if="eventDetails.dateTime">
        <span class="event-detail-title">Date & time:</span>
        {{ eventDetails.dateTime }}
      </p>
      <p class="event-detail-item" v-if="eventDetails.location">
        <span class="event-detail-title">Location:</span>
        {{ eventDetails.location }}
      </p>
      <p class="event-detail-item" v-if="eventDetails.whatToBring">
        <span class="event-detail-title">What to bring:</span>
        {{ eventDetails.whatToBring }}
      </p>
      <p class="event-detail-item" v-if="eventDetails.whenYouArrive">
        <span class="event-detail-title">When you arrive:</span>
        {{ eventDetails.whenYouArrive }}
      </p>
      <p class="event-detail-item" v-if="eventDetails.whatToExpect">
        <span class="event-detail-title">What to expect:</span>
        {{ eventDetails.whatToExpect }}
      </p>
      <p class="event-detail-item" v-if="eventDetails.cancellation">
        <span class="event-detail-title">Cancellation:</span>
        {{ eventDetails.cancellation }}
      </p>
    </div>

    <form class="max-w-100" action="#" @submit.prevent="submitRegistration">
      <div class="container form-card">
        <h3 class="form-section-title">Please enter your email</h3>

        <div class="form-control">
          <span class="p-float-label">
            <InputText
              type="text"
              id="email"
              v-model="email"
              :class="{
                'p-invalid': validationMessages.hasOwnProperty('email')
              }"
            />
            <label for="email">Email</label>
          </span>
          <div
            v-for="(message, index) of validationMessages['email']"
            :key="index"
          >
            <div class="validation-message">{{ message }}</div>
          </div>
        </div>

        <Button
          type="submit"
          label="Next"
          class="p-button-md p-button-primary submit-button"
        />
      </div>
    </form>
  </div>
</template>

<script>
const { emailValidation } = require("../../../resources/validation.js");
import eventList from "../../../resources/events.json";
import axios from "axios";

export default {
  name: "Event Registration",
  data() {
    return {
      eventDetails:
        eventList.find(event => event.id === this.$route.query.eventId) || {},
      eventId: this.$route.query.eventId,
      email: "",
      validationMessages: {},
      eventList: eventList
    };
  },
  mounted() {
    if (!this.eventDetails.id) this.$router.push({ name: "404" });
  },
  methods: {
    submitRegistration() {
      this.validationMessages = {};
      const { error } = emailValidation({
        email: this.email
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
        .post("/api/event-registration/check-email", {
          email: this.email,
          eventId: this.eventId
        })
        .then(res => {
          if (res.data.output) {
            axios
              .post("/api/payment/create-checkout-session", {
                eventId: this.eventId,
                email: this.email
              })
              .then(res => (window.location.href = res.data.url));
          } else {
            // Redirect to sign up
            this.$router.push({
              name: "Sign Up",
              params: { emailProp: this.email, eventIdProp: this.eventId }
            });
          }
        })
        .catch(error => console.log("from error ", error.response.data));
    }
  }
};
</script>

<style scoped lang="scss">
</style>