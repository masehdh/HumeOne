<template>
  <ScrollTop />
  <section class="section off-white-bg">
    <div
      class="container justify-content-start align-items-center text-center flex flex-column px-3 pt-4 pb-6"
    >
      <img
        class="hero-image h-auto max-w-full fadein animation-duration-1000"
        src="@/assets/home-page-squad.png"
      />

      <div class="fadein animation-duration-1000 mt-6">
        <h1 class="text-4xl">
          Make new friends, grow your circle
        </h1>
      </div>

      <div class="details fadein animation-duration-1000 mt-4">
        <p class="line-height-3 primary-font-color" style="max-width: 726px">
          HumeOne brings people together by organizing intimate social
          gatherings and events. Let us know what you're looking for to start
          receiving invites today!
        </p>
      </div>

      <div class="cta-button mt-4 border-pill" @click="routeToSignUp()">
        SIGN UP FOR FREE
      </div>
    </div>
  </section>

  <section class="section off-white-bg">
    <svg
      class="divider w-full"
      viewBox="0 0 1441 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M729 19.4999C408.5 -22.5001 0 19.4999 0 19.4999V42.5001H1441V19.4999C1441 19.4999 1049.5 61.5 729 19.4999Z"
        fill="#ECECF9"
      />
    </svg>
  </section>

  <section class="section how-it-works-section violet-bg">
    <div
      class="container flex flex-column align-items-center py-4 mt-4 mb-6 md:mb-8"
    >
      <div class="row flex max-w-full">
        <div class="horizontal-spacer hidden md:inline"></div>

        <h2
          class="text-4xl text-center w-full block md:w-auto mx-3 md:mx-4 my-5"
        >
          How it works...
        </h2>
      </div>

      <!-- Step 1. Sign Up -->
      <div class="row flex max-w-full mx-3 md:mx-4">
        <div class="flex">
          <div class="w-3rem md:w-6rem pl-3 ml-1 md:pl-0 text-right">
            <img
              src="@/assets/sign-up-illustration.png"
              class="max-w-full"
              alt="sign up"
            />
          </div>

          <div class="timeline">
            <svg
              viewBox="0 0 1 100"
              class="line"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499996"
                y2="100"
                stroke="#FF6672"
              />
            </svg>

            <svg
              class="marker"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#FF6672" />
            </svg>
          </div>
          <p class="step-number pl-2">1</p>
        </div>

        <div class=" vertical-row-item primary-font-color mx-3 md:mx-4">
          <h3
            class="text-xl mb-3 no-underline cursor-pointer"
            @click="routeToSignUp()"
          >
            Sign Up For Free
          </h3>
          <p class="text-base line-height-3">
            Let us know what you are interested in.
          </p>
          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>

      <!-- Step 2. We'll Plan Events -->
      <div class="row flex max-w-full mx-3 md:mx-4">
        <div class="flex">
          <div class="w-3rem md:w-6rem ml-1 text-right">
            <img
              src="@/assets/event-planning-illustration.png"
              class="max-w-full"
              alt="planning events"
            />
          </div>

          <div class="timeline">
            <svg
              viewBox="0 0 1 100"
              class="line"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499996"
                y2="100"
                stroke="#FF6672"
              />
            </svg>

            <svg
              class="marker"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#FF6672" />
            </svg>
          </div>
          <p class="step-number">2</p>
        </div>

        <div class="vertical-row-item mx-3 md:mx-4">
          <a href="#past-events" class="no-underline">
            <h3 class="text-xl mb-3">We'll Plan Events</h3>
          </a>
          <p class="text-base line-height-3">
            For you and others nearby with shared interests.
          </p>
          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>

      <!-- Step 3. Receive Invites -->
      <div class="row flex max-w-full mx-3 md:mx-4">
        <div class="flex">
          <div class="w-3rem md:w-6rem ml-1 text-right">
            <img
              src="@/assets/invite-illustration.png"
              class="max-w-full"
              alt="planning events"
            />
          </div>

          <div class="timeline">
            <svg
              viewBox="0 0 1 100"
              class="line"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499996"
                y2="100"
                stroke="#FF6672"
              />
            </svg>

            <svg
              class="marker"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#FF6672" />
            </svg>
          </div>
          <p class="step-number">3</p>
        </div>

        <div class="vertical-row-item primary-font-color mx-3 md:mx-4">
          <h3 class="text-xl mb-3">Receive Invites</h3>
          <p class="text-base line-height-3">
            Directly to your inbox, according to your preferences.
          </p>
          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>

      <!-- Step 4. Reserve your spot -->
      <div class="row flex max-w-full mx-3 md:mx-4">
        <div class="flex">
          <div class="w-3rem md:w-6rem ml-1 text-right">
            <img
              src="@/assets/reservation-illustration.png"
              class="max-w-full"
              alt="planning events"
            />
          </div>

          <div class="timeline">
            <svg
              viewBox="0 0 1 100"
              class="line"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499996"
                y2="100"
                stroke="#FF6672"
              />
            </svg>

            <svg
              class="marker"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#FF6672" />
            </svg>
          </div>
          <p class="step-number mr-1 md:mr-3">4</p>
        </div>

        <div class="vertical-row-item mx-3 md:mx-4">
          <h3 class="text-xl mb-3">Reserve Your Spot</h3>
          <p class="line-height-3">
            You pay a small fee to support our Hosts, and they make sure you
            have a great time.
          </p>
          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="section off-white-bg py-6 flex flex-column align-items-center text-center"
  >
    <div class="container flex flex-column align-items-center text-center">
      <h2 class="primary-font-color text-4xl mx-3 md:mx-4">
        Who We Are
      </h2>

      <div
        class="accent-divider w-6rem max-w-full mx-3 md:mx-4 mt-3 mb-5"
      ></div>

      <div class="mb-4 max-w-full">
        <div class="who-we-are-images__div">
          <img src="@/assets/shareef-portrait.jpg" alt="Portrait of a host" />
          <div class="img-overlay">&nbsp;</div>
        </div>

        <div class="who-we-are-images__div">
          <img
            src="@/assets/maseh-host-portrait.jpg"
            alt="Portrait of a host"
          />
          <div class="img-overlay">&nbsp;</div>
        </div>

        <div class="who-we-are-images__div">
          <img
            src="@/assets/anika-host-portrait.jpg"
            alt="Portrait of a host"
          />
          <div class="img-overlay">&nbsp;</div>
        </div>
      </div>

      <p class="text-base line-height-3 mx-3 md:mx-4">
        We believe humans are better together, hence our name (a portmanteau of
        human + one). We are creating a platform that builds authentic human
        connection through social gatherings. Anyone can take part by attending
        or hosting events as long as they meet basic qualifications. If you have
        questions or would like to become a Host, click the button below to
        contact us!
      </p>

      <div
        class="cta-button border-pill mx-3 mt-4 md:mx-4"
        @click="showContactForm"
      >
        CONTACT US
      </div>
    </div>
  </section>

  <section class="section off-white-bg">
    <img
      id="home-illustration-divider"
      src="@/assets/home-illustration-divider.svg"
      class="w-full divider"
    />
  </section>

  <section class="section violet-bg pt-6">
    <div
      class="container flex flex-column justify-content-center
      align-items-center text-center px-3"
    >
      <h2 id="past-events" class="primary-font-color text-4xl mt-4">
        Check out some of our past events...
      </h2>

      <div
        class="flex flex-column justify-content-evenly  align-items-center md:flex-row w-full mt-6"
      >
        <template v-for="(pastEvent, index) in pastEvents" :key="index">
          <div
            class="past-event-card inline flex flex-column justify-content-end align-items-center text-center h-20rem w-10 md:w-15rem px-2 py-2 border-round mx-1 mb-4 md:mb-0"
            :style="{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(' +
                require(`@/assets/event-portfolio/${pastEvent.image}`) +
                ')'
            }"
            @click="showEventModal(index)"
          >
            <p class="text-base">{{ pastEvent.name }}</p>
            <p class="mt-1 text-sm">@{{ pastEvent.location }}</p>
            <p class="mt-1 text-xs">{{ pastEvent.area }}</p>
          </div>
        </template>
      </div>

      <p class="text-lg mt-3 md:mt-5 text-base">
        Don't want to miss out? Sign up today to let us know what events you
        want in your area.
      </p>

      <div class="cta-button mt-4 border-pill" @click="routeToSignUp()">
        SIGN UP FOR FREE
      </div>
    </div>
  </section>

  <Dialog
    v-model:visible="displayEventModal"
    id="event-modal"
    header=" "
    :style="{ maxWidth: '95vw' }"
    :modal="true"
    :dismissableMask="true"
    :draggable="false"
    :contentStyle="{
      padding: '0',
      backgroundColor: '#f7f7f7'
    }"
  >
    <div class="flex flex-column md:flex-row">
      <div
        class="event-modal-image w-full md:w-20rem max-w-full"
        :style="{
          backgroundImage:
            'url(' + require(`@/assets/event-portfolio/${event.image}`) + ')'
        }"
      ></div>

      <div
        class="w-30rem max-w-full text-left md:text-left fadein animation-duration-300"
      >
        <div
          class="flex flex-row border-bottom-1 border-300 py-2 px-3 align-items-center"
        >
          <img
            :src="require(`@/assets/${event.hostImage}`)"
            alt="portrait of the event host"
            class="host-image mr-2"
          />

          <p class="text-sm font-medium">
            Hosted by
            <span class="font-semibold">{{ event.hostName }} </span>
          </p>
        </div>

        <div class="px-3 py-3">
          <h3 class="text-2xl font-medium">{{ event.name }}</h3>

          <p class="text-base mt-3 line-height-3">{{ event.description }}</p>

          <div
            class="flex flex-row flex-wrap mt-3 pt-3 border-top-1 border-300"
          >
            <p class="mr-3 text-sm mb-2">
              <i class="pi pi-map-marker mr-2"></i>{{ event.location }}
            </p>

            <p class="mr-3 text-sm mb-2">
              <i class="pi pi-clock mr-2"></i>{{ event.dateTime }}
            </p>

            <p class="mr-3 text-sm mb-2">
              <i class="pi pi-users mr-2"></i>{{ event.maxSpots }} spots
            </p>

            <p class="mr-3 text-sm mb-2">
              <i class="pi pi-wallet mr-2"></i
              >{{
                event.reservationFee > 0 ? "$" + event.reservationFee : "FREE"
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Dialog>

  <Dialog
    header="Contact Us"
    v-model:visible="displayContactForm"
    :style="{ width: '50vw' }"
    :breakpoints="{ '960px': '90vw' }"
    :modal="true"
    :dismissableMask="true"
    :draggable="false"
  >
    <div class="field">
      <label for="name">Name</label>
      <InputText
        type="text"
        id="name"
        v-model="name"
        class="inputfield w-full "
        :class="{
          'p-invalid': validationMessages.hasOwnProperty('name')
        }"
      />

      <div v-for="(message, index) of validationMessages['name']" :key="index">
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="field">
      <label for="email">Email</label>
      <InputText
        type="text"
        id="email"
        v-model="email"
        class="inputfield w-full "
        :class="{
          'p-invalid': validationMessages.hasOwnProperty('email')
        }"
      />

      <div v-for="(message, index) of validationMessages['email']" :key="index">
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="field">
      <label for="subject">Subject</label>
      <InputText
        type="text"
        id="subject"
        v-model="subject"
        class="inputfield w-full "
        :class="{
          'p-invalid': validationMessages.hasOwnProperty('subject')
        }"
      />

      <div
        v-for="(message, index) of validationMessages['subject']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="field">
      <label for="message">Message</label>
      <Textarea
        type="text"
        :autoResize="true"
        id="message"
        v-model="message"
        class="inputfield w-full"
        :class="{
          'p-invalid': validationMessages.hasOwnProperty('message')
        }"
      />

      <div
        v-for="(message, index) of validationMessages['message']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <br />

    <Button
      type="submit"
      label="Submit"
      class="p-button-md p-button-primary submit-button no-underline"
      @click="submitContactForm"
    />
  </Dialog>
</template>

<script>
const { contactUsValidation } = require("../../../resources/validation.js");
import pastEvents from "../../../resources/pastEvents.json";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      pastEvents: pastEvents,
      event: pastEvents[0],
      displayContactForm: false,
      displayEventModal: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      validationMessages: {}
    };
  },
  methods: {
    routeToSignUp() {
      return this.$router.push({ name: "Sign Up" });
    },
    showEventModal(val) {
      this.event = this.pastEvents[val];
      this.displayEventModal = true;
    },
    showContactForm() {
      return (this.displayContactForm = true);
    },
    submitContactForm() {
      this.validationMessages = {};
      const { error } = contactUsValidation({
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
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
        .post("/api/contact-us", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        })
        .then(() => {
          this.displayContactForm = false;
          this.name = "";
          this.email = "";
          this.subject = "";
          this.message = "";
        })
        .catch(error =>
          console.log("error from /api/contact-us: ", error.response.data)
        );
    }
  }
};
</script>

<style lang="scss" scoped>
.divider {
  margin-bottom: -1px;
}

.hero-image {
  width: 680px;
}

.how-it-works-section {
  .container {
    background-image: url("../assets/blob.svg");
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 70% center;
    @media (max-width: $mobile-breakpoint) {
      background-image: none;
    }
  }

  .row {
    width: 600px;

    .horizontal-spacer {
      padding-right: 120px;
    }

    .timeline {
      position: relative;
      margin-left: 40px;
      margin-right: 20px;

      @media (max-width: $mobile-breakpoint) {
        margin-left: 8px;
        margin-right: 12px;
      }

      .marker {
        z-index: 2;
        position: relative;
        margin-top: 20px;
      }

      .line {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        margin-right: auto;
        margin-left: auto;
        width: 1px;
        height: 100%;
        z-index: 1;
      }
    }

    .step-number {
      margin-top: 14px;
      font-size: 24px;
      font-weight: 600;
      margin-right: 20px;
      color: $accent-red;
      @media (max-width: $mobile-breakpoint) {
        margin-right: 8px;
      }
    }

    .vertical-row-item {
      display: flex;
      flex-direction: column;
      margin-top: 18px;

      .vertical-spacer {
        padding-bottom: 32px;
      }
    }
  }
}

.who-we-are-images__div {
  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  aspect-ratio: 1 / 1;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);

  &:not(:first-child) {
    margin-left: -20px;
  }

  @media (max-width: $mobile-breakpoint) {
    width: 27vw;
    height: 27vw;
    &:not(:first-child) {
      margin-left: -3vw;
    }
  }

  .img-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: black;
    opacity: 0.12;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0;
    }
  }
}

.past-event-card {
  box-shadow: 0px 0px 16px rgba(94, 58, 49, 0.4);
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transition: all 0.1s ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px rgba(94, 58, 49, 0.6);
    cursor: pointer;
  }

  p:nth-child(1) {
    color: rgba(255, 255, 255, 1);
  }

  p:nth-child(2) {
    color: rgba(255, 255, 255, 0.7);
  }

  p:nth-child(3) {
    color: rgba(255, 255, 255, 0.6);
  }
}

.event-modal-image {
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 400px;
}

.host-image {
  border-radius: 50%;
  width: 45px;
  height: auto;
  max-width: 100%;
  padding: 2px;
  background: linear-gradient(
    90deg,
    rgba(230, 92, 138, 0.9) 0%,
    rgba(255, 204, 102, 0.9) 100%
  );
}
</style>
