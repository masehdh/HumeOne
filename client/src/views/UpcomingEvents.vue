<template>
  <Head>
    <meta name="description" content="View upcoming events from HumeOne." />
  </Head>

  <div class="section off-white-bg min-h-screen">
    <TheHeader />

    <div class="container px-3 md:px-4">
      <h2 class="primary-font-color block text-center text-3xl mt-4 font-bold">
        Upcoming Events
      </h2>

      <div class="accent-divider w-6rem text-center ml-auto mr-auto mt-3"></div>

      <div class="grid mt-5">
        <template v-for="(event, index) in upcomingEvents" :key="index">
          <div class="col-12 md:col-4 px-2">
            <div
              class="upcoming-event-card flex flex-column justify-content-end align-items-center text-center h-20rem px-2 py-2 border-round mb-4 md:mb-0"
              :style="{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(' +
                  require(`@/assets/${event.image}`) +
                  ')'
              }"
              @click="showEventModal(index)"
            >
              <p class="text-base">{{ event.name }}</p>
              <p class="mt-1 text-sm">@{{ event.location }}</p>
              <p class="mt-1 text-xs">{{ event.area }}</p>
            </div>
          </div>
        </template>
      </div>

      <div
        class="flex justify-content-center align-items-center text-center flex-column"
      >
        <p class="text-lg mt-3 md:mt-5 text-base">
          Don't want to miss out? Sign up today and let us know what events you
          want in your area.
        </p>

        <router-link :to="{ name: 'Sign Up' }" class="no-underline mt-4">
          <div class="cta-button border-pill">
            SIGN UP FOR FREE
          </div>
        </router-link>
      </div>

      <EventPreviewDialog
        :event="event"
        :showLink="true"
        ref="eventPreviewDialog"
      />
    </div>
  </div>
</template>

<script>
import eventList from "../../../resources/events.json";
const upcomingEvents = eventList.filter(
  event => new Date(event.paymentDeadline) > new Date()
);

import EventPreviewDialog from "../components/EventPreviewDialog.vue";

export default {
  name: "Upcoming Events",
  components: { EventPreviewDialog },
  data() {
    return {
      upcomingEvents: upcomingEvents,
      event: upcomingEvents[0]
    };
  },
  methods: {
    showEventModal(val) {
      this.event = this.upcomingEvents[val];
      this.$refs.eventPreviewDialog.showEventModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.upcoming-event-card {
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
  object-fit: contain;
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