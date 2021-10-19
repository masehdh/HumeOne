<template>
  <div class="section off-white-bg min-h-screen">
    <div class="container">
      <h2 class="primary-font-color block text-center text-3xl mt-6 font-bold">
        Upcoming Events
      </h2>

      <div class="accent-divider w-6rem text-center ml-auto mr-auto mt-3"></div>

      <div
        class="flex flex-column justify-content-evenly  align-items-center md:flex-row w-full mt-6"
      >
        <template v-for="(event, index) in upcomingEvents" :key="index">
          <div
            class="upcoming-event-card inline flex flex-column justify-content-end align-items-center text-center h-20rem w-10 md:w-15rem px-2 py-2 border-round mx-1 mb-4 md:mb-0"
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
        </template>
      </div>

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
              backgroundImage: 'url(' + require(`@/assets/${event.image}`) + ')'
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
                alt="Portrait of the event host"
                class="host-image mr-2"
              />

              <p class="text-sm font-medium">
                Hosted by
                <span class="font-semibold">{{ event.hostName }} </span>
              </p>
            </div>

            <div class="px-3 py-3">
              <h3 class="text-2xl font-medium">{{ event.name }}</h3>

              <p class="text-base mt-3 line-height-3">
                {{ event.description }}
              </p>

              <a
                :href="`/event-registration?eventId${event.id}`"
                @click.prevent="routeToEvent(event.id)"
                class="no-underline mt-4"
              >
                <div class="cta-button border-round text-sm mt-3">
                  View Event Details
                </div>
              </a>

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
                    event.reservationFee > 0
                      ? "$" + event.reservationFee
                      : "FREE"
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  </div>
</template>

<script>
import eventList from "../../../resources/events.json";
const upcomingEvents = eventList.filter(
  event => new Date(event.paymentDeadline) > new Date()
);

export default {
  name: "Upcoming Events",
  data() {
    return {
      upcomingEvents: upcomingEvents,
      event: upcomingEvents[0],
      displayEventModal: false
    };
  },
  methods: {
    showEventModal(val) {
      this.event = this.upcomingEvents[val];
      this.displayEventModal = true;
    },
    routeToEvent(id) {
      return this.$router.push({
        name: "Event Registration",
        query: { eventId: id }
      });
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