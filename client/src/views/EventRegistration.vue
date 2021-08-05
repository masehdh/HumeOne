<template>
  <div class="section form-section">
    <div class="container form-card">
      <div
        id="hero-image"
        :style="{background:'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/'+ eventDetails.image + ')'}"
      >
        &nbsp;
      </div>
      <h1 id="form-title">Event Registration</h1>
      <h2 id="event-title">{{ eventDetails.name }}</h2>
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
    <form action="#" @submit.prevent="submitRegistration">
      <div class="container form-card">
        <h3 class="card-title">Please enter your email</h3>

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
const { emailValidation } = require("@/validation/validation.js");
import eventList from "@/assets/events.json";
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
  computed: {
    cssVars() {
      return {
        "--image-url": this.eventDetails.image
      };
    }
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
              .post("/api/payment/create-checkout-session", {eventId: this.eventId, email: this.email})
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
#form-title {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  color: #e67e73;
}

#event-title {
  padding-top: 8px;
  font-size: 32px;
  font-weight: 600;
}

.line-divider {
  background: linear-gradient(
    90deg,
    rgba(230, 92, 138, 0.9) 0%,
    rgba(255, 204, 102, 0.9) 100%
  );
  margin: 8px 0px;
  height: 1.8px;
  width: 80px;
  max-width: 100%;
}

.card-title {
  font-weight: 400;
  font-size: 24px;
  max-width: 100%;
}

.event-detail-item {
  margin-top: 16px;
  font-size: 16px;
  .event-detail-title {
    font-weight: 500;
  }
}

.form-control {
  margin-top: 16px;
  max-width: 100%;
  .p-inputtext {
    max-width: 100%;
  }
  .p-inputtextarea {
    width: 100%;
    max-width: 100%;
  }
  .validation-message {
    padding-top: 4px;
    font-size: 14px;
    color: rgb(255, 62, 62);
  }
}

.regular-label {
  display: block;
  margin: 8px 0;
}

.submit-button {
  margin-top: 16px;
  max-width: 100%;
}

form {
  max-width: 100%;
}

#hero-image {
  padding: 200px 0;
  border-radius: 8px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("../assets/bonfire-image.jpg");
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  @media (max-width: $mobile-breakpoint) {
    padding: 125px 0;
  }
}
</style>