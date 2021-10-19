<template>
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
            'url(' + require(`@/assets/${event.image}`) + ')'
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

          <p class="text-base mt-3 line-height-3">{{ event.description }}</p>

          <a
            v-if="showLink"
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
                event.reservationFee > 0 ? "$" + event.reservationFee : "FREE"
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script>
export default {
  name: "Event Preview Dialog",
  props: { event: Object, showLink: Boolean },
  data() {
    return {
      displayEventModal: false
    };
  },
  methods: {
    showEventModal() {
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