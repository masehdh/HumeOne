<template>
  <Head>
    <meta name="description" :content="eventDetails.description" />

    <!-- Open Graph for Social Share -->
    <meta property="og:title" :content="eventDetails.name" />
    <meta
      property="og:image"
      :content="
        'https://humeone.com' + require(`@/assets/${eventDetails.image}`)
      "
    />
    <meta property="og:description" :content="eventDetails.description" />
    <meta property="og:url" :content="eventLink" />
  </Head>

  <section class="section form-section">
    <TheHeader />

    <div class="container form-card pb-3 md:pb-4">
      <div
        id="event-image"
        v-if="eventDetails.image"
        :style="{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' +
            require(`@/assets/${eventDetails.image}`) +
            ')'
        }"
      ></div>

      <h1 class="form-header mx-3 md:mx-4 mt-4">Event Registration</h1>
      <h2 class="form-title mx-3 md:mx-4">{{ eventDetails.name }}</h2>

      <div
        class="event-info flex flex-column md:flex-row px-3 my-2 md:my-0 md:px-4"
      >
        <p class="max-spots mr-3 mt-2 font-medium">
          <i class="pi pi-users mr-2 text-sm"></i
          >{{ eventDetails.maxSpots }} max spots
          <span class="spots-left" v-if="showSpotsLeft"
            >&#183; {{ spotsLeft }} spots left</span
          >
        </p>

        <p class="max-spots mr-3 mt-2 font-medium" v-if="eventDetails.dateTime">
          <i class="pi pi-clock mr-2 text-sm"></i>{{ eventDetails.dateTime }} -
          {{ eventDetails.endTime }}
        </p>

        <p
          class="max-spots mt-2 font-medium"
          v-if="eventDetails.reservationFee > 0"
        >
          <i class="pi pi-wallet mr-2 text-sm"></i>${{
            eventDetails.reservationFee
          }}
          (plus tax)
        </p>

        <p class="max-spots mt-2 font-medium" v-else>
          <i class="pi pi-wallet mr-2 text-sm"></i>FREE
        </p>
      </div>

      <!-- Social icons and register button -->
      <div
        v-if="!hideRegistration"
        class="flex flex-column-reverse md:flex-row md:align-items-baseline justify-content-center md:justify-content-between"
      >
        <div
          class="ml-auto mr-auto cta-button border-round mt-3 md:mx-4"
          @click="scrollToBottom()"
        >
          Register
        </div>

        <SocialShareIcons
          :eventDetails="eventDetails"
          :linkProp="eventLink"
          class="justify-content-center mx-3 mt-2 md:mt-0 md:mx-4"
        />
      </div>
    </div>

    <div
      class="container form-card px-3 py-3 md:px-4 md:py-4"
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

    <div class="container form-card px-3 py-3 md:px-4">
      <div class="host-info">
        <div>
          <img
            :src="require(`@/assets/${eventDetails.hostImage}`)"
            alt="Portrait of the event host"
            class="host-image"
          />
        </div>

        <div class="host-contact-details font-medium ml-2">
          <p>
            Hosted by
            <span class="font-semibold">{{ eventDetails.hostName }}</span>
          </p>

          <span
            class="primary-font-color mx-3 hidden md:inline"
            v-if="eventDetails.hostEmail"
            >|</span
          >

          <a
            class="primary-font-color"
            :href="'mailto:' + eventDetails.hostEmail"
            ><i class="pi pi-envelope mr-2 text-sm"></i
            >{{ eventDetails.hostEmail }}</a
          >

          <span
            class="primary-font-color mx-3 hidden md:inline"
            v-if="eventDetails.hostNumber"
            >|</span
          >

          <a
            v-if="eventDetails.hostNumber"
            :href="'tel:' + eventDetails.hostNumber"
            class="primary-font-color"
            ><i class="pi pi-phone mr-2 text-sm"></i
            >{{ eventDetails.hostNumber }}</a
          >
        </div>
      </div>
    </div>

    <div
      class="container form-card px-3 py-3 md:px-4 md:py-4"
      v-if="eventDetails.description"
    >
      <h3 class="form-section-title">Event Description</h3>

      <p class="event-detail-item">
        {{ eventDetails.description }}
      </p>

      <div v-show="showDetails" class="mt-3">
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

      <small class="toggle-details mt-2" @click="showDetails = !showDetails">
        {{ showDetails ? "Hide" : "Show" }} details
      </small>
    </div>

    <div class="container form-card" v-if="eventDetails.map">
      <iframe
        width="100%"
        height="200"
        style="border:0; border-radius: 4px 4px 0 0;"
        loading="lazy"
        allowfullscreen
        :src="mapsURL"
      >
      </iframe>

      <h3 class="form-section-title mt-4 mx-3 md:mx-4">Event Location</h3>

      <p
        class="event-detail-item mx-3 mb-3 md:mx-4 md:mb-4"
        v-if="eventDetails.map"
      >
        {{ eventDetails.map }}
      </p>
    </div>

    <div
      class="container form-card px-3 py-3 md:px-4 md:py-4"
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
          class="cursor-pointer w-8rem text-center mr-3 mt-4 no-underline"
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

    <form
      class="max-w-full"
      action="#"
      @submit.prevent=""
      v-if="!hideRegistration"
    >
      <div class="container form-card px-3 py-4 md:px-4 md:py-5">
        <h3 class="form-section-title">Register for this event</h3>
        <keep-alive>
          <component
            id="register"
            :is="currentComponent"
            :validationMessagesProp="validationMessages"
            :vaccineRequiredProp="eventDetails.vaccineRequired"
            ref="registrationForm"
            @send-email="setEmail"
            @send-additional-info="setAdditionalInfo"
            @back="currentComponent = 'RegistrationEmailField'"
            @submitRegistration="submitRegistration"
            @submitSignUp="submitSignUp"
          ></component>
        </keep-alive>
      </div>
    </form>
  </section>
</template>

<script>
const {
  emailValidation,
  registrationValidation
} = require("../../../resources/validation.js");
import eventList from "../../../resources/events.json";
import RegistrationEmailField from "../components/RegistrationEmailField.vue";
import RegistrationAdditionalFields from "../components/RegistrationAdditionalFields.vue";
import SocialShareIcons from "../components/SocialShareIcons.vue";

import axios from "axios";

export default {
  components: {
    RegistrationEmailField,
    RegistrationAdditionalFields,
    SocialShareIcons
  },
  name: "Event Registration",
  data() {
    return {
      eventDetails:
        eventList.find(event => event.id === this.$route.query.eventId) || {},
      eventId: this.$route.query.eventId,
      email: "",
      firstName: "",
      lastName: "",
      over18: false,
      vaccineCertification: false,
      attendees: [],
      spotsLeft: null,
      displayAllAttendees: false,
      validationMessages: {},
      currentComponent: "RegistrationEmailField",
      showDetails: false
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
    eventLink() {
      return window.location.href;
    },
    mapsURL() {
      return `https://www.google.com/maps/embed/v1/place?key=AIzaSyA5RqZZ9AOCln9QeeR2_Obd22-PGEXqpA0&q=${this.eventDetails.map}&maptype=satellite`;
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
    scrollToBottom() {
      this.$refs.registrationForm.focusEmail();
      window.scrollTo(0, document.body.scrollHeight);
    },
    setEmail(payload) {
      this.email = payload.email;
      this.vaccineCertification = payload.vaccineCertification;
    },
    setAdditionalInfo(payload) {
      this.firstName = payload.firstName;
      this.lastName = payload.lastName;
      this.over18 = payload.over18;
    },
    submitRegistration() {
      // Validate inputs
      this.validationMessages = {};

      const { error } = emailValidation({
        email: this.email,
        vaccineCertification: this.vaccineCertification,
        vaccineRequired: this.eventDetails.vaccineRequired
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
          "Please review the errors above before submitting"
        ];
        return;
      }

      // Make api request
      axios
        .post("/api/event-registration/create-checkout-session", {
          email: this.email,
          vaccineCertification: this.vaccineCertification,
          eventId: this.eventId
        })
        .then(res => {
          // If the user has never signed up, show additional component
          if (res.data.output.notSignedUp) {
            return (this.currentComponent = "RegistrationAdditionalFields");
          }

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
                eventId: this.eventId,
                firstName: this.firstName,
                lastName: this.lastName
              }
            });
          }

          // If the session was created successfully, redirect to payment page
          window.location.href = res.data.url;
        })
        .catch(error =>
          console.log(
            "error from /api/event-registration/create-checkout-session: ",
            error.response.data
          )
        );
    },
    submitSignUp() {
      // Validate inputs
      this.validationMessages = {};

      const { error } = registrationValidation({
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        over18: this.over18
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
          "Please review the errors above before submitting"
        ];
        return;
      }

      // Make API request
      axios
        .post("/api/event-registration/register-user", {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          over18: this.over18
        })
        .then(() => this.submitRegistration())
        .catch(error =>
          console.log(
            "error from /api/event-registration/register-user: ",
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
    text-align: center;
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
    padding: 2px;
    max-width: 100%;
    background: linear-gradient(
      90deg,
      rgba(230, 92, 138, 0.9) 0%,
      rgba(255, 204, 102, 0.9) 100%
    );

    @media (max-width: $mobile-breakpoint) {
      width: 80px;
    }
  }

  .host-contact-details {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    @media (max-width: $mobile-breakpoint) {
      margin-top: 16px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      &:hover {
        color: black;
      }
      @media (max-width: $mobile-breakpoint) {
        margin-top: 8px;
      }
    }
  }
}

.avatar-item p {
  word-wrap: break-word;
}

.toggle-details {
  color: rgba(63, 81, 181, 0.92);
  &:hover {
    cursor: pointer;
  }
}

:deep(.svg-inline--fa:not(.fa-bars)) {
  color: $primary-font-color;
  transition: all 0.2s;
  font-size: 28px;
  opacity: 0.5;

  @media (max-width: $mobile-breakpoint) {
    font-size: 24px;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(0.95);
  }
}

:deep(.copy-icon) {
  font-size: 24px !important;
  @media (max-width: $mobile-breakpoint) {
    font-size: 20px !important;
  }
}
</style>
