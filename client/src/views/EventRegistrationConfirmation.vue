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
    <TheHeader />

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
        <div
          class="cta-button border-round no-underline mt-3"
          @click="showInviteModal()"
          v-if="firstName && lastName"
        >
          Invite Friends
        </div>

        <router-link :to="{ name: 'Home' }" class="no-underline" v-else>
          <div class="cta-button border-round mt-3 mr-3">
            Back to Home
          </div>
        </router-link>

        <InviteDialog
          v-if="firstName && lastName"
          :messageProp="
            `${firstName.charAt(0).toUpperCase()}${firstName.slice(
              1
            )} ${lastName.charAt(0).toUpperCase()}${lastName.slice(
              1
            )} has signed up for ${
              eventDetails.name
            } and would like to invite you to attend. If you are interested, you can click the button below to view the event details and register before ${
              eventDetails.paymentDeadline
            }.`
          "
          :subjectProp="
            `${firstName.charAt(0).toUpperCase()}${firstName.slice(
              1
            )} ${lastName.charAt(0).toUpperCase()}${lastName.slice(
              1
            )} is inviting you to ${eventDetails.name}`
          "
          ref="inviteModal"
        />

        <div class="flex flex-row align-items-center mt-3 md:mt-0">
          <p class="font-medium mr-2 opacity-70 select-none">Share:</p>
          <SocialShareIcons
            :eventDetails="eventDetails"
            :linkProp="eventLink"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import eventList from "../../../resources/events.json";
import SocialShareIcons from "../components/SocialShareIcons.vue";
import InviteDialog from "../components/InviteDialog.vue";

export default {
  name: "Event Registration Confirmation",
  components: { SocialShareIcons, InviteDialog },
  data() {
    return {
      eventDetails:
        eventList.find(event => event.id === this.$route.query.eventId) || {},
      eventId: this.$route.query.eventId,
      firstName: this.$route.query.firstName,
      lastName: this.$route.query.lastName
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
    showInviteModal() {
      return this.$refs.inviteModal.showInviteModal();
    }
  }
};
</script>

<style scoped lang="scss">
:deep(.svg-inline--fa:not(.fa-bars)) {
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
  font-size: 24px !important;
}
</style>