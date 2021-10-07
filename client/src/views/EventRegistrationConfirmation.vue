<template>
  <section class="section form-section">
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
      <div class="cta-button border-round mt-3" @click="routeToHome()">
        Back to Home
      </div>
    </div>
  </section>
</template>

<script>
import eventList from "../../../resources/events.json";

export default {
  name: "Event Registration Confirmation",
  data() {
    return {
      eventDetails:
        eventList.find(event => event.id === this.$route.query.eventId) || {},
      eventId: this.$route.query.eventId
    };
  },
  methods: {
    routeToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">
</style>