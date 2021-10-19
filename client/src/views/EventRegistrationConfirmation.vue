<template>
  <Head>
    <meta name="robots" content="noindex" />
    <meta
      name="description"
      v-if="eventId"
      :content="eventDetails.description"
    />

    <!-- Open Graph for Social Share -->
    <meta property="og:title" v-if="eventId" :content="eventDetails.name" />
    <meta
      property="og:image"
      :content="
        'https://humeone.com' + require(`@/assets/${eventDetails.image}`)
      "
      v-if="eventId"
    />
    <meta
      property="og:description"
      v-if="eventId"
      :content="eventDetails.description"
    />
    <meta property="og:url" v-if="eventId" :content="eventLink" />
  </Head>

  <section class="section form-section">
    <div class="container">
      <TheHeader />
    </div>

    <div class="container form-card px-3 py-4 md:px-4 md:py-5">
      <h1 class="form-header">Registration Confirmation</h1>

      <h2 class="form-title" v-if="eventDetails.name">
        {{ eventDetails.name }}
      </h2>

      <p class="line-height-3 mt-3">
        Thank you for registering! You should receive a confirmation email
        shortly with additional details. If you have any questions or would like
        to cancel, please email
        <a href="mailto:team@humeone.com">team@humeone.com</a>.
      </p>

      <div
        class="flex flex-column-reverse md:flex-row md:align-items-baseline justify-content-center md:justify-content-between"
      >
        <a href="/" @click.prevent="routeToHome()" class="no-underline mt-3">
          <div class="cta-button border-round">
            Back to Home
          </div>
        </a>

        <SocialShareIcons :eventDetails="eventDetails" :eventLink="eventLink" />
      </div>
    </div>
  </section>
</template>

<script>
import eventList from "../../../resources/events.json";
import SocialShareIcons from "../components/SocialShareIcons.vue";

export default {
  name: "Event Registration Confirmation",
  components: { SocialShareIcons },
  data() {
    return {
      eventDetails:
        eventList.find(event => event.id === this.$route.query.eventId) || {},
      eventId: this.$route.query.eventId
    };
  },
  created() {
    if (!this.$route.query.eventId) this.$router.push({ name: "404" });
  },
  computed: {
    eventLink() {
      return `https://www.humeone.com/event-registration?eventId=${this.eventId}`;
    }
  },
  methods: {
    routeToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">
:deep(.svg-inline--fa) {
  color: $primary-font-color;
  transition: all 0.2s;
  font-size: 28px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(0.95);
  }
}

:deep(.copy-icon) {
  font-size: 24px;
}
</style>