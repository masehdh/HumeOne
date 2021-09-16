<template>
  <div class="section form-section">
    <div class="container form-card pb-3 md:pb-4">
      <div
        id="event-image"
        v-if="eventDetails.image"
        :style="{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' +
            require('../../../resources/' + eventDetails.image) +
            ')',
        }"
      >
        &nbsp;
      </div>

      <h1 class="form-header mx-3 md:mx-4">Event Registration</h1>

      <h2 class="form-title mx-3 md:mx-4">{{ eventDetails.name }}</h2>

      <p class="max-spots mx-3 md:mx-4">
        {{ eventDetails.maxSpots }} spots
        <span class="spots-left" v-if="showSpotsLeft"
          >&#183; {{ spotsLeft }} spots left</span
        >
      </p>

      <div class="host-info mx-3 md:mx-4">
        <div>
          <img
            :src="hostImageSrc"
            alt="portrait of the event host"
            class="host-image"
          />
        </div>

        <div class="host-contact-details">
          <p><i class="pi pi-user"></i>Hosted by {{ eventDetails.hostName }}</p>

          <div class="line-divider mx-2">&nbsp;</div>

          <a :href="'mailto:' + eventDetails.hostEmail"
            ><i class="pi pi-envelope"></i>{{ eventDetails.hostEmail }}</a
          >
        </div>
      </div>
    </div>

    <div
      class="container form-card px-3 py-3 md:px-4 py-4"
      v-if="eventDetails.description"
    >
      <h3 class="form-section-title">Event Description</h3>

      <p class="event-detail-item">
        {{ eventDetails.description }}
      </p>
    </div>

    <div
      class="container form-card"
      v-if="eventDetails.location"
    >
      <iframe
        width="100%"
        height="300"
        style="border:0"
        loading="lazy"
        allowfullscreen
        :src="mapsURL"
      >
      </iframe>
      <h3 class="form-section-title mt-4 mx-3 md:mx-4">Event Location</h3>

      <p class="event-detail-item mx-3 mb-3 md:mx-4 mb-4" v-if="eventDetails.location">
        {{ eventDetails.location }}
      </p>
    </div>
    <div class="container form-card px-3 py-3 md:px-4 py-4">
      <h3 class="form-section-title">Event Details</h3>

      <p class="event-detail-item" v-if="eventDetails.dateTime">
        <span class="event-detail-title">Date & time:</span>
        {{ eventDetails.dateTime }}
      </p>

      <p class="event-detail-item" v-if="eventDetails.reservationFee">
        <span class="event-detail-title">Reservation Fee:</span>
        {{ eventDetails.reservationFee }}
      </p>

      <p class="event-detail-item" v-if="eventDetails.reservationFee">
        <span class="event-detail-title">Reservation deadline:</span>
        {{ eventDetails.paymentDeadline }}
      </p>

      <p class="event-detail-item" v-if="eventDetails.whatToBring">
        <span class="event-detail-title">What to bring:</span>
        {{ eventDetails.whatToBring }}
      </p>

      <p class="event-detail-item" v-if="eventDetails.whenYouArrive">
        <span class="event-detail-title">When you arrive:</span>
        {{ eventDetails.whenYouArrive }}
      </p>

      <p class="event-detail-item" v-if="eventDetails.additionalDetails">
        <span class="event-detail-title">Additional details:</span>
        {{ eventDetails.additionalDetails }}
      </p>

      <p class="event-detail-item" v-if="eventDetails.cancellation">
        <span class="event-detail-title">Cancellation:</span>
        {{ eventDetails.cancellation }}
      </p>
    </div>

    <form
      class="max-w-full"
      action="#"
      @submit.prevent="submitRegistration"
      v-if="!hideRegistration"
    >
      <div class="container form-card px-3 py-4 md:px-4 md:py-5">
        <h3 class="form-section-title">Please enter your email</h3>

        <div class="form-control">
          <span class="p-float-label">
            <InputText
              type="text"
              id="email"
              v-model="email"
              :class="{
                'p-invalid': validationMessages.hasOwnProperty('email'),
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

        <div>
          <Button
            type="submit"
            label="Next"
            class="p-button-md p-button-primary submit-button"
          />
        </div>
      </div>
    </form>

    <div
      class="container form-card px-3 py-3 md:px-4 py-4"
      v-if="hideRegistration"
    >
      <h3 class="form-section-title">Event Registration Closed</h3>

      <p class="mt-3 line-height-3">
        Unfortunately, reservation for this event has closed. The reservation
        deadline has passed or all the spots have been reserved. We apologize
        for the inconvenience, and hope to see you at our next event! If you
        have any questions, feel free to contact us at
        <a href="mailto:team@humeone.com">team@humeone.com</a>.
      </p>
    </div>
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
        eventList.find((event) => event.id === this.$route.query.eventId) || {},
      eventId: this.$route.query.eventId,
      email: "",
      validationMessages: {},
      eventList: eventList,
      spotsLeft: null,
    };
  },
  mounted() {
    if (!this.eventDetails.id) this.$router.push({ name: "404" });
  },
  created() {
    axios
      .post("/api/event-registration/check-spots", { eventId: this.eventId })
      .then(
        (res) =>
          (this.spotsLeft =
            this.eventDetails.maxSpots - res.data.output.spotsReserved)
      )
      .catch((error) =>
        console.log(
          "error from /api/event-registration/check-spots: ",
          error.response.data
        )
      );
  },
  computed: {
    mapsURL() {
      return `https://www.google.com/maps/embed/v1/place?key=AIzaSyA5RqZZ9AOCln9QeeR2_Obd22-PGEXqpA0&q=${this.eventDetails.location}&maptype=satellite`;
    },
    hostImageSrc() {
      return require(`../../../resources/${this.eventDetails.hostImage}`);
    },
    showSpotsLeft() {
      if (
        this.spotsLeft !== null &&
        this.spotsLeft > -1 &&
        this.spotsLeft <= this.eventDetails.maxSpots * 0.5
      ) {
        return true;
      } else {
        return false;
      }
    },
    hideRegistration() {
      if (this.spotsLeft < 1 && this.spotsLeft !== null) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    submitRegistration() {
      this.validationMessages = {};
      const { error } = emailValidation({
        email: this.email,
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

      axios
        .post("/api/event-registration/check-email", {
          email: this.email,
          eventId: this.eventId,
        })
        .then((res) => {
          switch (res.data.output.alreadyRegistered) {
            case true:
              this.validationMessages["email"] = [res.data.message];
              break;
            case false:
              axios
                .post("/api/event-registration/create-checkout-session", {
                  email: this.email,
                  eventId: this.eventId,
                  priceId: this.eventDetails.priceId,
                })
                .then((res) => (window.location.href = res.data.url));
              break;
            case null:
              this.$router.push({
                name: "Sign Up",
                params: {
                  emailProp: this.email,
                  eventIdProp: this.eventId,
                  priceIdProp: this.eventDetails.priceId,
                },
              });
              break;
            default:
              console.log(
                "Unhandled response from /api/event-registration/create-checkout-session"
              );
          }
        })
        .catch((error) =>
          console.log(
            "error from /api/event-registration/check-email: ",
            error.response.data
          )
        );
    },
  },
};
</script>

<style scoped lang="scss">
.form-header {
  @media (max-width: $mobile-breakpoint) {
    align-self: center;
  }
}

.form-title {
  @media (max-width: $mobile-breakpoint) {
    text-align: center;
  }
}

.max-spots {
  font-size: 14px;
  .spots-left {
    color: hsl(0, 75%, 55%);
  }
  @media (max-width: $mobile-breakpoint) {
    text-align: center;
  }
}

.line-divider {
  background: linear-gradient(
    90deg,
    rgba(230, 92, 138, 0.9) 0%,
    rgba(255, 204, 102, 0.9) 100%
  );
  margin: 8px 0px;
  height: 1.8px;
  width: 8px;
  max-width: 100%;
  @media (max-width: $mobile-breakpoint) {
    display: none;
  }
}

i.pi {
  margin-right: 4px;
  font-size: 14px;
}

.host-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
  @media (max-width: $mobile-breakpoint) {
    flex-direction: column;
    align-self: center;
    margin-top: 16px;
  }

  .host-image {
    border-radius: 50%;
    width: 60px;
    height: auto;
    max-width: 100%;
    @media (max-width: $mobile-breakpoint) {
      width: 80px;
    }
  }

  .host-contact-details {
    display: flex;
    flex-direction: row;
    margin-left: 16px;
    font-size: 14px;
    @media (max-width: $mobile-breakpoint) {
      margin-top: 16px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: $primary-font-color;
      display: flex;
      align-items: center;
      &:hover {
        font-weight: 500;
      }
      @media (max-width: $mobile-breakpoint) {
        margin-top: 8px;
      }
    }
  }
}
</style>
