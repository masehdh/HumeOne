<template>
  <Head>
    <meta
      name="description"
      content="HumeOne brings people together by organizing intimate social gatherings and events. Let us know what you're looking for to start receiving invites today!"
    />
  </Head>

  <ScrollTop />

  <section class="section off-white-bg">
    <TheHeader />

    <div
      class="container justify-content-start align-items-center text-center flex flex-column pb-6"
    >
      <img
        class="hero-image h-auto max-w-full fadein animation-duration-500"
        alt="Background image of people hanging out"
        src="@/assets/home-page-squad.png"
      />

      <div class="fadein animation-duration-500 mt-6">
        <h1 class="text-4xl">
          Find your people, grow your circle
        </h1>
      </div>

      <div class="fadein animation-duration-500 mt-4">
        <p class="line-height-3 primary-font-color" style="max-width: 726px">
          HumeOne brings people together by organizing intimate social
          gatherings and events. Let us know what you're looking for to start
          receiving invites today!
        </p>
      </div>

      <router-link :to="{ name: 'Sign Up' }" class="no-underline mt-4">
        <div class="cta-button border-pill">
          Sign Up For Free
        </div>
      </router-link>
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
        <h2
          class="text-4xl text-center w-full block md:w-auto md:mx-auto my-5"
        >
          How it works...
        </h2>
      </div>

      <!-- Step 1. Sign Up -->
      <div class="row flex max-w-full">
        <div class="flex">
          <div class="w-3rem md:w-6rem pl-3 ml-1 md:pl-0 text-right">
            <img
              src="@/assets/sign-up-illustration.png"
              class="max-w-full"
              alt="A man next to a large phone"
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

        <div class=" vertical-row-item primary-font-color ml-3">
          <router-link :to="{ name: 'Sign Up' }" class="no-underline mb-3">
            <h3 class="text-xl no-underline cursor-pointer">
              Sign Up For Free
            </h3>
          </router-link>

          <p class="text-base line-height-3">
            Let us know what you are interested in.
          </p>

          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>

      <!-- Step 2. We'll Plan Events -->
      <div class="row flex max-w-full">
        <div class="flex">
          <div class="w-3rem md:w-6rem ml-1 text-right">
            <img
              src="@/assets/event-planning-illustration.png"
              class="max-w-full"
              alt="A woman next to a large calendar"
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

        <div class="vertical-row-item ml-3">
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
      <div class="row flex max-w-full">
        <div class="flex">
          <div class="w-3rem md:w-6rem ml-1 text-right">
            <img
              src="@/assets/invite-illustration.png"
              class="max-w-full"
              alt="A man next to a large envelope"
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

        <div class="vertical-row-item primary-font-color ml-3">
          <h3 class="text-xl mb-3">Receive Invites</h3>
          <p class="text-base line-height-3">
            Directly to your inbox, according to your preferences.
          </p>
          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>

      <!-- Step 4. Reserve your spot -->
      <div class="row flex max-w-full">
        <div class="flex">
          <div class="w-3rem md:w-6rem ml-1 text-right">
            <img
              src="@/assets/reservation-illustration.png"
              class="max-w-full"
              alt="A phone in someones hand"
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

        <div class="vertical-row-item ml-3">
          <h3 class="text-xl mb-3">Reserve Your Spot</h3>
          <p class="line-height-3">
            And get ready to have a great time!
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
      <h2 class="primary-font-color text-4xl">
        Who We Are
      </h2>

      <div
        class="accent-divider w-6rem max-w-full mt-3 mb-5"
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

      <p class="text-base line-height-3">
        We believe humans are better together, hence our name (a portmanteau of
        human + one). We are creating a platform that builds authentic human
        connection through social gatherings. Anyone can take part by attending
        or hosting events as long as they meet basic qualifications. If you have
        questions or would like to become a Host, click the button below to
        contact us!
      </p>
      <div
        class="cta-button border-pill mt-4 uppercase"
        @click="showContactForm"
      >
        Contact Us
      </div>
    </div>
  </section>

  <section class="section off-white-bg">
    <img
      id="home-illustration-divider"
      src="@/assets/home-illustration-divider.svg"
      class="w-full divider"
      alt="A wavey page divider"
    />
  </section>

  <section class="section violet-bg pt-6 pb-6">
    <div
      id="past-events"
      name="past-events"
      class="container flex flex-column justify-content-center
      align-items-center text-center"
    >
      <h2 class="primary-font-color text-4xl mt-4">
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
                require(`@/assets/${pastEvent.image}`) +
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
        Don't want to miss out? Sign up today and let us know what events you
        want in your area.
      </p>

      <router-link :to="{ name: 'Sign Up' }" class="no-underline mt-4">
        <div class="cta-button border-pill">
          Sign Up For Free
        </div>
      </router-link>
    </div>
  </section>

  <div
    class="flex flex-row justify-content-center py-3"
    style="background-color: hsl(240, 45%, 92%)"
  >
    <a href="https://www.facebook.com/HumeOne" target="_blank" class="mr-4">
      <font-awesome-icon :icon="['fab', 'facebook-square']" />
    </a>
    <a href="https://www.instagram.com/hume_one/" target="_blank" class="mr-4">
      <font-awesome-icon :icon="['fab', 'instagram-square']" />
    </a>
    <a href="https://www.linkedin.com/company/humeone" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']" />
    </a>
  </div>

  <EventPreviewDialog
    :event="event"
    :showLink="false"
    ref="eventPreviewDialog"
  />

  <ContactFormDialog ref="contactFormDialog" />
</template>

<script>
import pastEvents from "../../../resources/pastEvents.json";
import ContactFormDialog from "../components/ContactFormDialog.vue";
import EventPreviewDialog from "../components/EventPreviewDialog.vue";

export default {
  name: "Home",
  components: { ContactFormDialog, EventPreviewDialog },
  data() {
    return {
      pastEvents: pastEvents,
      event: pastEvents[0]
    };
  },
  methods: {
    showEventModal(val) {
      this.event = this.pastEvents[val];
      this.$refs.eventPreviewDialog.showEventModal();
    },
    showContactForm() {
      return this.$refs.contactFormDialog.showContactForm();
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
        padding-bottom: 24px;
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

  img {
    object-fit: contain;
    width: 100%;
    height: auto;
  }

  .img-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: black;
    border-radius: 100%;
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

.svg-inline--fa {
  color: $primary-font-color;
  transition: all 0.2s;
  font-size: 36px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(0.95);
  }
}
</style>
