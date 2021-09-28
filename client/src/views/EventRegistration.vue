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
            ')'
        }"
      >
        &nbsp;
      </div>

      <h1 class="form-header mx-3 md:mx-4">Event Registration</h1>

      <h2 class="form-title mx-3 md:mx-4">{{ eventDetails.name }}</h2>

      <div class="event-info flex flex-column md:flex-row px-3 md:px-4">
        <p class="max-spots mr-3 mt-2 ">
          <i class="pi pi-users mr-2"></i>{{ eventDetails.maxSpots }} spots
          <span class="spots-left" v-if="showSpotsLeft"
            >&#183; {{ spotsLeft }} spots left</span
          >
        </p>

        <p class="max-spots mr-3 mt-2" v-if="eventDetails.dateTime">
          <i class="pi pi-clock mr-2"></i>{{ eventDetails.dateTime }}
        </p>

        <p class="max-spots mt-2 " v-if="eventDetails.reservationFee > 0">
          <i class="pi pi-wallet mr-2"></i>${{ eventDetails.reservationFee }}
          (plus tax)
        </p>

        <p class="max-spots mt-2" v-else>
          <i class="pi pi-wallet mr-2 "></i>FREE
        </p>
      </div>
    </div>

    <div class="container form-card px-3 py-3 md:px-4 py-4">
      <div class="host-info">
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

          <a :href="'tel:' + eventDetails.hostNumber"
            ><i class="pi pi-phone"></i>{{ eventDetails.hostNumber }}</a
          >

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

    <div class="container form-card" v-if="eventDetails.location">
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

      <p
        class="event-detail-item mx-3 mb-3 md:mx-4 mb-4"
        v-if="eventDetails.location"
      >
        {{ eventDetails.location }}
      </p>
    </div>
    <div class="container form-card px-3 py-3 md:px-4 py-4">
      <h3 class="form-section-title">Event Details</h3>

      <p class="event-detail-item" v-if="eventDetails.paymentDeadline">
        <span class="event-detail-title">Reservation deadline:</span>
        Before {{ eventDetails.paymentDeadline }}
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
        <h3 class="form-section-title">Register for this event</h3>

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

    <div
      class="container form-card px-3 py-3 md:px-4 py-4"
      v-if="attendees.length > 0"
    >
      <h3 class="form-section-title">Attendees ({{ attendees.length }})</h3>

      <div
        class="flex flex-row flex-wrap justify-content-around sm:justify-content-start mt-1"
      >
        <div v-for="(attendee, index) in attendees.slice(0, 6)" :key="index">
          <div class="avatar-item w-8rem text-center mr-3 mt-4">
            <Avatar
              icon="pi pi-user"
              class="mb-3"
              size="large"
              shape="circle"
            />

            <p class="line-height-3">{{ attendee.firstName }}</p>
            <p class="line-height-3">{{ attendee.lastName }}</p>
          </div>
        </div>

        <div
          class="show-all-button w-8rem text-center mr-3 mt-4"
          v-if="attendees.length > 6"
          @click="showAllAttendees"
        >
          <Avatar icon="pi pi-plus" class="mb-3" size="large" shape="circle" />

          <p class="line-height-3 font-medium">See All</p>
        </div>
      </div>
    </div>

    <Dialog
      header="Attendees"
      v-model:visible="displayAllAttendees"
      :style="{ width: '50vw' }"
      :breakpoints="{ '960px': '90vw' }"
      :modal="true"
      :dismissableMask="true"
    >
      <div v-for="(attendee, index) in attendees" :key="index">
        <div class="flex flex-row align-items-baseline mb-3 max-w-full">
          <Avatar icon="pi pi-user" class="mb-3" size="large" shape="circle" />

          <p class="line-height-3 ml-3">
            {{ attendee.firstName }} {{ attendee.lastName }}
          </p>
        </div>
      </div>
    </Dialog>
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
      attendees: [],
      spotsLeft: null,
      displayAllAttendees: false,
      validationMessages: {}
    };
  },
  mounted() {
    if (!this.eventDetails.id) this.$router.push({ name: "404" });
  },
  created() {
    axios
      .post("/api/event-registration/check-spots", { eventId: this.eventId })
      .then(res => {
        this.spotsLeft =
          this.eventDetails.maxSpots - res.data.output.spotsReserved;

        this.attendees = res.data.output.registeredAttendees;
      })
      .catch(error =>
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
      if (
        (this.spotsLeft < 1 && this.spotsLeft !== null) ||
        Date.now() > new Date(this.eventDetails.paymentDeadline)
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    showAllAttendees() {
      return (this.displayAllAttendees = true);
    },
    submitRegistration() {
      // Validate inputs
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

      // Make api request
      axios
        .post("/api/event-registration/create-checkout-session", {
          email: this.email,
          eventId: this.eventId
        })
        .then(res => {
          // If the user already registered for the event or registration has closed, display a validation message
          if (
            res.data.output.alreadyRegistered ||
            res.data.output.registrationClosed
          ) {
            return (this.validationMessages["email"] = [res.data.message]);
          }

          // If the event is free, redirect to payment confirmation
          if (res.data.output.freeEvent) {
            return this.$router.push({
              name: "Event Registration Confirmation",
              query: {
                eventId: this.eventId
              }
            });
          }

          // If the session was created successfully, redirect to payment page
          window.location.href = res.data.url;
        })
        .catch(error =>
          console.log(
            "error from /api/event-registration/check-email: ",
            error.response.data
          )
        );
    }
  }
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

.event-info p {
  font-size: 14px;
  @media (max-width: $mobile-breakpoint) {
    text-align: center;
  }
}

.spots-left {
  color: hsl(0, 75%, 55%);
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
  @media (max-width: $mobile-breakpoint) {
    flex-direction: column;
    align-self: center;
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

.show-all-button {
  cursor: pointer !important;
}

.avatar-item p {
  word-wrap: break-word;
}
</style>
